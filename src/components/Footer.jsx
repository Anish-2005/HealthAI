import React, { useEffect, useState } from "react";

export default function Footer() {
  const [theme, setTheme] = useState(() => document.documentElement.classList.contains('dark') ? 'dark' : 'light');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    return () => observer.disconnect();
  }, []);

  return (
    <footer className={`transition-colors duration-300 text-center py-6 mt-8 ${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-[#E4F2CE] text-[#2E312A]'}`}
      style={theme === 'light' ? { backgroundColor: '#E4F2CE', color: '#2E312A' } : {}}>
      <h3 className="flex items-center justify-center gap-2 text-lg font-semibold">
        ©2024 <img src="/logo.png.png" alt="" className="inline h-6 w-6" /> HealthAI | All rights reserved
      </h3>
      <hr className={`my-4 ${theme === 'dark' ? 'border-gray-600' : 'border-[#2E312A]'}`} />
      <div className="flex flex-wrap justify-center gap-4 md:gap-6 mb-4">
        <a href="#" className="hover:text-green-700 font-semibold">Privacy Policy</a>
        <a href="#" className="hover:text-green-700 font-semibold">Terms of Service</a>
        <a href="#" className="hover:text-green-700 font-semibold">Contact us</a>
      </div>
      <div className="flex justify-center gap-6 mb-4 text-xl">
        <a href="https://facebook.com" className="hover:text-green-700"><i className="fa fa-facebook-f"></i></a>
        <a href="https://instagram.com" className="hover:text-green-700"><i className="fa fa-instagram"></i></a>
        <a href="https://x.com" className="hover:text-green-700"><i className="fa fa-twitter"></i></a>
        <a href="https://linkedin.com" className="hover:text-green-700"><i className="fa fa-linkedin"></i></a>
      </div>
      <p>
        Made By <a href="/team" className="text-green-700 hover:underline font-semibold">AI-Warriors</a>
      </p>
    </footer>
  );
}
