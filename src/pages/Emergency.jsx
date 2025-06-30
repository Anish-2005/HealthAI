import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/LandingFooter";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function Emergency({ theme }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        isDark ? "bg-gray-900 text-white" : "bg-gradient-to-br from-[#E4F2CE] to-white text-[#2E312A]"
      }`}
    >
      <Navbar theme={theme} />

      {/* Animated background blobs */}
      <motion.div
        className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-red-100 opacity-20 blur-2xl dark:bg-red-900 dark:opacity-10 z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute -bottom-24 -right-20 w-96 h-96 rounded-full bg-red-200 opacity-15 blur-2xl dark:bg-red-800 dark:opacity-10 z-0"
        animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />

      <section className="my-8 py-48 px-6 md:px-8 relative z-10 flex-1 flex flex-col justify-center items-center text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="flex justify-center items-center gap-3 mb-4">
            <AlertTriangle size={36} className="text-red-500 dark:text-red-400 animate-pulse" />
            <h1 className="py-2 text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-red-400">
              Emergency Support
            </h1>
          </div>

          <p className={`text-lg md:text-xl mb-10 leading-relaxed ${isDark ? "text-red-100" : "text-gray-800"}`}>
            If you're experiencing a medical emergency, please call your local emergency number immediately. This page offers fast access to critical help and resources.
          </p>

          <motion.a
            href="tel:112"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-10 py-5 rounded-xl text-2xl font-semibold text-white bg-gradient-to-r from-red-600 to-red-500 shadow-lg hover:from-red-700 hover:to-red-600 transition-all duration-300"
          >
            Call Emergency (112)
          </motion.a>
        </motion.div>
      </section>

      <Footer theme={theme} />
    </div>
  );
}
