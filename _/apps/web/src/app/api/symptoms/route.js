import sql from "@/app/api/utils/sql";

export async function GET(request) {
  try {
    const symptoms = await sql`
      SELECT id, name, description 
      FROM symptoms 
      ORDER BY name ASC
    `;
    
    return Response.json({ symptoms });
  } catch (error) {
    console.error('Error fetching symptoms:', error);
    return Response.json({ error: 'Failed to fetch symptoms' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, description } = body;
    
    if (!name) {
      return Response.json({ error: 'Symptom name is required' }, { status: 400 });
    }
    
    const result = await sql`
      INSERT INTO symptoms (name, description)
      VALUES (${name}, ${description || ''})
      RETURNING id, name, description, created_at
    `;
    
    return Response.json({ symptom: result[0] });
  } catch (error) {
    console.error('Error creating symptom:', error);
    return Response.json({ error: 'Failed to create symptom' }, { status: 500 });
  }
}