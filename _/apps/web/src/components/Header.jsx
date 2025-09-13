import { ArrowRight, Menu, X, Activity } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "home", label: "Home", href: "/", active: true },
    { id: "diagnosis", label: "AI Diagnosis", href: "/diagnosis", active: false },
    { id: "about", label: "About", href: "/about", active: false },
    { id: "contact", label: "Contact", href: "/contact", active: false },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white dark:bg-[#121212] px-6 py-3 border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Brand block */}
        <div className="flex items-center">
          <a
            href="/"
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-full p-1"
            aria-label="MediAI homepage"
          >
            <Activity size={24} className="text-blue-600 dark:text-blue-400" />
            <span className="text-[#171717] dark:text-white font-inter font-semibold text-[18px] leading-tight">
              MediAI
            </span>
          </a>
        </div>

        {/* Desktop Navigation - Centered */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`px-3 py-2 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-200 dark:focus:ring-blue-700 ${
                  item.active
                    ? "text-blue-600 dark:text-blue-400 font-medium"
                    : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
                aria-current={item.active ? "page" : undefined}
                aria-label={item.label}
              >
                <span className="font-inter text-[14px] leading-tight">
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-blue-600 dark:text-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700 rounded-full"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle mobile menu"
        >
          <Menu size={24} />
        </button>

        {/* Desktop CTA Button */}
        <a
          href="/diagnosis"
          className="hidden md:flex items-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-6 py-3 rounded-full font-inter font-semibold text-[14px] leading-tight transition-colors duration-200 hover:bg-blue-700 dark:hover:bg-blue-600 active:bg-blue-800 dark:active:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-200 dark:focus:ring-blue-700"
        >
          Try AI Diagnosis
          <ArrowRight size={16} />
        </a>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 z-50 bg-white dark:bg-[#121212]">
          <div className="flex flex-col h-full">
            {/* Header with close button */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <Activity size={24} className="text-blue-600 dark:text-blue-400" />
                <span className="text-[#171717] dark:text-white font-inter font-semibold text-[18px]">
                  MediAI
                </span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 rounded-full"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Items */}
            <div className="flex-1 flex flex-col justify-center px-6 space-y-8">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`text-center py-4 text-[18px] font-inter transition-colors duration-200 ${
                    item.active
                      ? "text-blue-600 dark:text-blue-400 font-semibold"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div className="p-6">
              <a
                href="/diagnosis"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 dark:bg-blue-500 text-white px-6 py-4 rounded-full font-inter font-semibold text-[16px] hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Try AI Diagnosis
                <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}