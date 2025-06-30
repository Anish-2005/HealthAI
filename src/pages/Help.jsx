import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Help({ theme }) {
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
          <h1 className="text-4xl font-bold mb-6">Help & Support</h1>
          <p className="text-lg mb-8">
            Need help? Browse our FAQs or contact our support team for assistance.
          </p>
          <ul className="text-left mx-auto max-w-md list-disc list-inside">
            <li>How to use HealthAI?</li>
            <li>How to get AI health advice?</li>
            <li>How to contact emergency support?</li>
            <li>How to partner with us?</li>
          </ul>
        </section>
        <Footer />
      </div>
    </>
  );
}
