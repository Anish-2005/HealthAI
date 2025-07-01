import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Facebook } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/LandingFooter";

const team = [
  {
    name: "Rajarshi Chatterjee",
    role: "Computer Science and Engineering",
    img: "/rajarshi.jpg",
    socials: [
      { icon: Facebook, url: "https://www.facebook.com/rajarshi.chatterjee.5815" },
      { icon: Instagram, url: "https://www.instagram.com/rajarshi_chatterjee_715/" },
      { icon: Linkedin, url: "https://linkedin.com" },
    ],
  },
  {
    name: "Anish Seth",
    role: "Computer Science and Business Systems",
    img: "/anish.jpg",
    socials: [
      { icon: Facebook, url: "https://www.facebook.com/anish.seth.313" },
      { icon: Instagram, url: "https://www.instagram.com/anish_seth.ai/" },
      { icon: Linkedin, url: "https://www.linkedin.com/in/anish-seth-202200290/" },
    ],
  },
  {
    name: "Anushka Adak",
    role: "Computer Science and Business Systems",
    img: "/anushka.jpg",
    socials: [
      { icon: Facebook, url: "https://www.facebook.com/profile.php?id=100089632175205" },
      { icon: Instagram, url: "https://www.instagram.com/anushka.adak/" },
      { icon: Linkedin, url: "https://www.linkedin.com/in/anushka-adak-4b0a76287/" },
    ],
  },
  {
    name: "Anubhab Das",
    role: "Computer Science and Business Systems",
    img: "/anubhab.jpg",
     socials: [
      { icon: Facebook, url: "#" },
      { icon: Instagram, url: "#" },
      { icon: Linkedin, url: "#" },
    ],
  },
];

export default function Team({ theme }) {
  const isDark = theme === "dark";

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        isDark
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-[#E4F2CE] to-white text-[#1f2d1f]"
      }`}
    >
      <Navbar theme={theme} />
      <section className="mt-12 py-20 px-4 flex-1 relative overflow-hidden">
        {/* Decorative blur background like Advice page */}
        <motion.div
          className="absolute -top-28 -left-32 w-80 h-80 rounded-full bg-green-100 opacity-20 blur-2xl dark:bg-green-800 dark:opacity-10"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-green-200 opacity-15 blur-2xl dark:bg-emerald-900 dark:opacity-5"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        />

        {/* Header */}
        <motion.div
          className="max-w-5xl mx-auto text-center mb-16 relative z-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight text-gray-900 dark:text-black">
            Meet the{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-700 to-emerald-700">
              HealthAI Team
            </span>
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-200 dark:text-gray-800">
            A passionate group of innovators, engineers, and creators building the future of healthcare with AI.
          </p>
        </motion.div>

        {/* Team Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto relative z-10">
          {team.map((member, idx) => (
            <motion.div
              key={member.name}
              className={`rounded-2xl shadow-xl p-6 flex flex-col items-center border hover:scale-105 transform transition-all duration-300 ${
                isDark
                  ? "bg-gray-800 border-green-900"
                  : "bg-white border-green-900"
              }`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.1 }}
            >
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-green-400 shadow-lg mb-4">
                <img src={member.img} alt={member.name} className="object-cover w-full h-full" />
              </div>
             <h3 className="text-xl font-bold mb-1 text-white dark:text-gray-900">

                {member.name}
              </h3>
              <p className="mb-3 text-green-300 dark:text-green-900 text-sm text-center">
                {member.role}
              </p>
              <div className="flex gap-3 mt-2">
                {member.socials.map((s, i) => (
                  <a
                    key={i}
                    href={s.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-green-100 dark:bg-green-900/30 hover:bg-green-200 dark:hover:bg-green-800 transition-colors"
                  >
                    <s.icon className="text-green-600 dark:text-green-300" size={20} />
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      <Footer theme={theme} />
    </div>
  );
}
