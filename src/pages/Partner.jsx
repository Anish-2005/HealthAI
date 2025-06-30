import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Partner({ theme }) {
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
          <h1 className="text-4xl font-bold mb-6">Partner with HealthAI</h1>
          <p className="text-lg mb-8">
            Interested in partnering with us? Contact us to explore collaboration
            opportunities and help us make healthcare better for everyone.
          </p>
          <a
            href="mailto:contact@healthai.com"
            className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow hover:bg-green-700 transition"
          >
            Contact Us
          </a>
        </section>
        <Footer />
      </div>
    </>
  );
}
