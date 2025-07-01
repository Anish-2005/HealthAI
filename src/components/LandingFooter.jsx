import React from "react";
import { motion } from "framer-motion";
import {
  Heart, Twitter, Facebook, Instagram, Linkedin, Github,
  Mail, Phone, MapPin, ArrowUp
} from "lucide-react";

const LandingFooter = ({ theme }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const contactInfo = [
    { icon: <Mail size={16} />, text: "support@healthai.com" },
    { icon: <Phone size={16} />, text: "+1 (800) 123-4567" },
    { icon: <MapPin size={16} />, text: "San Francisco, CA" },
  ];

  const socialLinks = [
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Github size={18} />, href: "#", label: "GitHub" },
  ];

  return (
    <footer
      className={`${
        theme === "dark" ? "bg-gray-900 text-gray-300" : "bg-green-50 text-gray-700"
      } py-10 px-4 sm:px-8`}
    >
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-3">
        {/* Logo & Contact */}
        <div>
          <div className="flex items-center gap-2">
            <Heart size={28} className={theme === "dark" ? "text-green-400" : "text-green-600"} />
            <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600">
              HealthAI
            </span>
          </div>
          <p className="mt-2 text-sm">
            Revolutionizing healthcare with AI-powered solutions.
          </p>
          <div className="mt-4 space-y-2 text-sm">
            {contactInfo.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                {item.icon}
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Socials */}
        <div className="flex flex-col items-start sm:items-center">
          <p className="font-semibold mb-2">Connect with us</p>
          <div className="flex gap-3">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                aria-label={social.label}
                className={`p-2 rounded-full ${
                  theme === "dark"
                    ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                    : "bg-white hover:bg-green-100 text-green-600"
                } shadow-sm`}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Bottom info */}
        <div className="flex flex-col items-start sm:items-end justify-between gap-4 text-sm">
          <motion.button
            onClick={scrollToTop}
            className={`p-2 rounded-full ${
              theme === "dark"
                ? "bg-gray-800 hover:bg-gray-700 text-gray-300"
                : "bg-white hover:bg-green-100 text-green-600"
            } shadow-md`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={18} />
          </motion.button>

          <p>© {currentYear} HealthAI, Inc.</p>

          <p>
            Made by{" "}
            <a
              href="/team"
              className={`underline font-medium ${
                theme === "dark" ? "text-white" : "text-green-700"
              }`}
            >
              AI Warriors
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
