import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home({ theme }) {
  return (
    <>
      <Navbar />
      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#E4F2CE] text-[#2E312A]'}`} style={theme === 'light' ? { backgroundColor: '#FFFFFF', color: '#000000' } : {}}>
        <section className="flex flex-col items-center justify-center py-16 px-4 text-center min-h-[70vh]">
          <img src="/healthai_logo_in_green_theme_as_008000-removebg-preview.png" alt="HealthAI Logo" className="w-32 h-32 mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Welcome to HealthAI</h1>
          <p className="text-lg md:text-xl max-w-2xl mb-8">
            Your AI-powered health companion. Get instant health advice, emergency support, and connect with our AI-Warriors team. Experience a modern, engaging, and accessible healthcare platform.
          </p>
          <a href="/advice" className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition">Get AI Health Advice</a>
        </section>
        <Footer />
      </div>
    </>
  );
}
