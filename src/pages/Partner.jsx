import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/LandingFooter";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";

export default function Partner({ theme }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        isDark
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-[#E4F2CE] to-white text-[#2E312A]"
      }`}
    >
      <Navbar theme={theme} />

      {/* Soft animated background */}
      <motion.div
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-green-100 opacity-20 blur-2xl dark:bg-green-900 dark:opacity-10 z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-green-200 opacity-15 blur-2xl dark:bg-emerald-800 dark:opacity-10 z-0"
        animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />

      <section className="relative z-10 flex-1 py-64 px-6 md:px-8 flex flex-col items-center text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <Handshake
              size={36}
              className="text-green-600 dark:text-green-300 animate-pulse"
            />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
              Partner with HealthAI
            </h1>
          </div>

          <p
            className={`text-lg md:text-xl leading-relaxed mb-8 ${
              isDark ? "text-green-100" : "text-gray-800"
            }`}
          >
            Interested in collaborating with us? Let's join forces to build a more
            accessible, intelligent healthcare ecosystem.
          </p>

          <a
            href="mailto:contact@healthai.com"
            className={`inline-block px-6 py-4 rounded-lg font-semibold text-white text-lg shadow-lg transition-all ${
              isDark
                ? "bg-green-700 hover:bg-green-800"
                : "bg-gradient-to-r from-green-600 to-emerald-500 hover:from-green-700 hover:to-emerald-600"
            }`}
          >
            Contact Us
          </a>
        </motion.div>
      </section>

      <Footer theme={theme} />
    </div>
  );
}
