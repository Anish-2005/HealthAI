import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function About({ theme }) {
  return (
    <>
      <Navbar />
      <div
        className={`min-h-screen flex flex-col transition-colors duration-300 ${
          theme === "dark" ? "bg-gray-900" : "bg-[#E4F2CE] text-[#2E312A]"
        }`}
        style={theme === "light" ? { backgroundColor: "#FFFFFF", color: "#000000" } : {}}
      >
        <section className="py-16 px-4 max-w-3xl mx-auto text-center min-h-[70vh]">
          <h1 className="text-4xl font-bold mb-6">About HealthAI</h1>
          <p className="text-lg mb-4">
            HealthAI is an innovative platform designed to provide instant health
            advice, emergency support, and a seamless healthcare experience using
            the power of AI. Our mission is to make healthcare accessible,
            engaging, and reliable for everyone.
          </p>
          <img
            src="/healthai_logo_in_green_theme_as_008000-removebg-preview.png"
            alt="HealthAI Logo"
            className="mx-auto w-32 h-32 mt-6"
          />
        </section>
        <Footer />
      </div>
    </>
  );
}
