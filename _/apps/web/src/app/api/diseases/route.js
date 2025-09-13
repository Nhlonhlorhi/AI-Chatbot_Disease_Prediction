import sql from "@/app/api/utils/sql";

export async function GET(request) {
  try {
    const diseases = await sql`
      SELECT id, name, description, severity_level 
      FROM diseases 
      ORDER BY name ASC
    `;
    
    return Response.json({ diseases });
  } catch (error) {
    console.error('Error fetching diseases:', error);
    return Response.json({ error: 'Failed to fetch diseases' }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, description, severity_level } = body;
    
    if (!name) {
      return Response.json({ error: 'Disease name is required' }, { status: 400 });
    }
    
    const result = await sql`
      INSERT INTO diseases (name, description, severity_level)
      VALUES (${name}, ${description || ''}, ${severity_level || 'Moderate'})
      RETURNING id, name, description, severity_level, created_at
    `;
    
    return Response.json({ disease: result[0] });
  } catch (error) {
    console.error('Error creating disease:', error);
    return Response.json({ error: 'Failed to create disease' }, { status: 500 });
  }
}