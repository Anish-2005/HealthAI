import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/LandingFooter";
import { motion } from "framer-motion";
import { HelpCircle, Sparkles } from "lucide-react";

export default function Help({ theme }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`h-screen flex flex-col transition-colors duration-500 overflow-hidden ${
        isDark
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-[#E4F2CE] to-white text-[#2E312A]"
      }`}
    >
      <Navbar theme={theme} />

      {/* Scoped animation wrapper */}
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

        {/* Help Section */}
        <section className="relative z-10 py-24 sm:py-32 px-4 sm:px-6 md:px-8 flex-1 flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-4">
              <HelpCircle
                size={36}
                className="text-green-600 dark:text-green-300 animate-pulse"
              />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
                Help & Support
              </h1>
            </div>

            {/* Subtext */}
            <p
              className={`text-base sm:text-lg md:text-xl mb-8 leading-relaxed ${
                isDark ? "text-green-100" : "text-gray-800"
              }`}
            >
              Need help? Browse our FAQs or reach out to our support team for quick
              assistance.
            </p>

            {/* FAQ List */}
            <ul
              className={`text-left mx-auto w-full max-w-xl text-sm sm:text-base md:text-lg space-y-4 p-6 rounded-xl border shadow-lg ${
                isDark
                  ? "bg-gray-800 border-green-900 text-green-200"
                  : "bg-white border-green-200 text-green-900"
              }`}
            >
              {[
                "How to use HealthAI?",
                "How to get AI health advice?",
                "How to contact emergency support?",
                "How to partner with us?",
              ].map((question, i) => (
                <li key={i} className="flex items-start gap-2">
                  <Sparkles size={20} className="mt-1 text-green-500" />
                  {question}
                </li>
              ))}
            </ul>
          </motion.div>
        </section>
      </div>

      <Footer theme={theme} />
    </div>
  );
}
