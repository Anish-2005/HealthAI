import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Login({ theme }) {
  return (
    <>
      <Navbar />
      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900' : 'bg-[#E4F2CE] text-[#2E312A]'}`} style={theme === 'light' ? { backgroundColor: '#FFFFFF', color: '#000000' } : {}}>
        <section className="py-16 px-4 max-w-md mx-auto text-center min-h-[70vh]">
          <h1 className="text-3xl font-bold mb-6">Log In</h1>
          <form className="flex flex-col gap-4">
            <input type="email" placeholder="Email" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400" />
            <input type="password" placeholder="Password" className="px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-400" />
            <button className="bg-green-600 text-white px-6 py-2 rounded font-semibold hover:bg-green-700 transition">Log In</button>
          </form>
          <p className="mt-4">Don't have an account? <a href="/signup" className="text-green-700 hover:underline">Sign up</a></p>
        </section>
        <Footer />
      </div>
    </>
  );
}
