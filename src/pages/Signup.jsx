import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Signup({ theme }) {
  return (
    <>
      <Navbar />
      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#E4F2CE] text-[#2E312A]'}`} style={theme === 'light' ? { backgroundColor: '#FFFFFF', color: '#000000' } : {}}>
        <section className="py-16 px-4 max-w-md mx-auto text-center min-h-[70vh]">
          <h1 className="text-3xl font-bold mb-6">Sign Up</h1>
          <form className="flex flex-col gap-4">
            <input type="text" placeholder="Name" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400" />
            <input type="email" placeholder="Email" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400" />
            <input type="password" placeholder="Password" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400" />
            <button className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 transition">Sign Up</button>
          </form>
          <p className="mt-4">Already have an account? <a href="/login" className="text-green-700 hover:underline">Log in</a></p>
        </section>
        <Footer />
      </div>
    </>
  );
}
