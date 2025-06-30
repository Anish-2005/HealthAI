import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Advice({ theme }) {
  return (
    <>
      <Navbar />
      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#E4F2CE] text-[#2E312A]'}`} style={theme === 'light' ? { backgroundColor: '#FFFFFF', color: '#000000' } : {}}>
        <section className="py-16 px-4 max-w-2xl mx-auto text-center min-h-[70vh]">
          <h1 className="text-4xl font-bold mb-6">AI Health Advice</h1>
          <p className="text-lg mb-8">
            Get instant, AI-powered health advice tailored to your needs. (This is a placeholder. Integrate your AI backend here.)
          </p>
          <input type="text" placeholder="Describe your symptoms..." className="w-full max-w-md px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400 mb-4" />
          <button className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 transition">Get Advice</button>
        </section>
        <Footer />
      </div>
    </>
  );
}
