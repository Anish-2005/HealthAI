import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/LandingFooter";
import { motion } from "framer-motion";
import { HelpCircle, Sparkles } from "lucide-react";

export default function Help({ theme }) {
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

      {/* Background animation */}
      <motion.div
        className="absolute -top-24 -left-20 w-80 h-80 rounded-full bg-green-100 opacity-20 blur-2xl dark:bg-green-900 dark:opacity-10 z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-green-200 opacity-15 blur-2xl dark:bg-green-800 dark:opacity-10 z-0"
        animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />

      <section className=" relative z-10 py-48 px-6 md:px-8 flex-1 flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <HelpCircle
              size={36}
              className="text-green-600 dark:text-green-300 animate-pulse"
            />
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
              Help & Support
            </h1>
          </div>

          <p
            className={`text-lg md:text-xl mb-8 leading-relaxed ${
              isDark ? "text-green-100" : "text-gray-800"
            }`}
          >
            Need help? Browse our FAQs or reach out to our support team for quick
            assistance.
          </p>

          <ul
            className={`text-left mx-auto max-w-xl text-base md:text-lg space-y-4 p-6 rounded-xl border shadow-lg ${
              isDark
                ? "bg-gray-800 border-green-900 text-green-200"
                : "bg-white border-green-200 text-green-900"
            }`}
          >
            <li className="flex items-start gap-2">
              <Sparkles size={20} className="mt-1 text-green-500" />
              How to use HealthAI?
            </li>
            <li className="flex items-start gap-2">
              <Sparkles size={20} className="mt-1 text-green-500" />
              How to get AI health advice?
            </li>
            <li className="flex items-start gap-2">
              <Sparkles size={20} className="mt-1 text-green-500" />
              How to contact emergency support?
            </li>
            <li className="flex items-start gap-2">
              <Sparkles size={20} className="mt-1 text-green-500" />
              How to partner with us?
            </li>
          </ul>
        </motion.div>
      </section>

      <Footer theme={theme} />
    </div>
  );
}
