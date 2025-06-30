import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Emergency({ theme }) {
  return (
    <>
      <Navbar />
      <div
        className={`min-h-screen flex flex-col transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900" : "bg-[#E4F2CE] text-[#2E312A]"
        }`}
        style={theme === "light" ? { backgroundColor: "#FFFFFF", color: "#000000" } : {}}
      >
        <section className="py-16 px-4 max-w-2xl mx-auto text-center min-h-[70vh]">
          <h1 className="text-4xl font-bold mb-6">Emergency Support</h1>
          <p className="text-lg mb-8">
            If you are facing a medical emergency, please call your local emergency
            number immediately. HealthAI provides quick access to emergency resources
            and advice.
          </p>
          <a
            href="tel:112"
            className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-2xl shadow hover:bg-red-700 transition"
          >
            Call Emergency (112)
          </a>
        </section>
        <Footer />
      </div>
    </>
  );
}
