import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/LandingFooter";
import { motion } from "framer-motion";
import { Info } from "lucide-react";

export default function About({ theme }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 overflow-x-hidden ${
        isDark
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-[#E4F2CE] to-white text-[#2E312A]"
      }`}
    >
      <Navbar theme={theme} />

      {/* Wrapper for animations to avoid overflow */}
      <div className="relative w-full overflow-x-hidden">
        {/* Animated Background Blobs */}
        <motion.div
          className="absolute top-0 left-0 w-64 h-64 sm:w-80 sm:h-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-green-100 opacity-20 blur-2xl dark:bg-green-900 dark:opacity-10 z-0"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 translate-x-1/4 translate-y-1/4 rounded-full bg-green-200 opacity-15 blur-2xl dark:bg-green-800 dark:opacity-10 z-0"
          animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* About Section */}
        <section className="relative z-10 flex-1 py-24 sm:py-32 px-4 sm:px-6 md:px-8 flex flex-col items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-4">
              <Info
                size={36}
                className="text-green-600 dark:text-green-300 animate-pulse"
              />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
                About HealthAI
              </h1>
            </div>

            <p
              className={`text-base sm:text-lg md:text-xl leading-relaxed mb-6 ${
                isDark ? "text-green-100" : "text-gray-800"
              }`}
            >
              HealthAI is an innovative platform designed to provide instant
              health advice, emergency support, and a seamless healthcare
              experience using the power of AI. Our mission is to make healthcare
              accessible, engaging, and reliable for everyone.
            </p>

            <img
              src="/logo.png.png"
              alt="HealthAI Logo"
              className="mx-auto w-40 sm:w-56 md:w-64 h-auto mt-6"
            />
          </motion.div>
        </section>
      </div>

      <Footer theme={theme} />
    </div>
  );
}
