import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/home" },
  { name: "AI Health Advice", path: "/advice" },
  { name: "Emergency Support", path: "/emergency" },
  { name: "Help", path: "/help" },
  { name: "About", path: "/about" },
  { name: "Partner", path: "/partner" },
  { name: "Log In", path: "/login" },
];

export default function Navbar() {
  const [theme, setTheme] = useState(() => document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  const location = useLocation();

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    return () => observer.disconnect();
  }, []);

  return (
    <header className={`flex flex-col md:flex-row md:justify-between md:items-center px-8 py-4 shadow-md transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-[#E4F2CE] text-[#2E312A]'}`}
      style={theme === 'light' ? { backgroundColor: '#E4F2CE', color: '#2E312A' } : {}}>
      <div className="flex items-center gap-2 mb-4 md:mb-0">
        <img src="/logo.png.png" alt="HealthAI Logo" className="h-10 w-10" />
        <h1 className="font-bold text-2xl">HealthAI</h1>
      </div>
      <nav>
        <ul className="flex flex-wrap gap-4 md:gap-6 justify-center md:justify-end">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className={`font-semibold px-2 py-1 rounded hover:bg-green-100 dark:hover:bg-green-900 hover:text-green-700 transition-colors duration-200 ${location.pathname === link.path ? "text-green-700 underline underline-offset-4" : theme === 'dark' ? 'text-white' : 'text-[#2E312A]'}`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={() => setTheme((t) => {
          const newTheme = t === 'dark' ? 'light' : 'dark';
          document.documentElement.classList.toggle('dark', newTheme === 'dark');
          localStorage.setItem('theme', newTheme);
          return newTheme;
        })}
        className={`ml-0 md:ml-6 mt-4 md:mt-0 p-2 rounded-full transition-colors ${theme === 'dark' ? 'bg-gray-700 hover:bg-green-700' : 'bg-gray-200 hover:bg-green-200'}`}
        title="Toggle dark mode"
      >
        {theme === 'dark' ? (
          <span className="material-symbols-outlined text-yellow-400">dark_mode</span>
        ) : (
          <span className="material-symbols-outlined text-gray-800">light_mode</span>
        )}
      </button>
    </header>
  );
}
