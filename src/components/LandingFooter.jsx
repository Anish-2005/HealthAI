// src/components/LandingFooter.jsx
import React from "react";
import { motion } from "framer-motion";
import { 
  Heart, Twitter, Facebook, Instagram, 
  Linkedin, Github, Mail, Phone, 
  MapPin, ArrowUp
} from "lucide-react";

const LandingFooter = ({ theme }) => {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const links = [
    {
      title: "Product",
      items: [
        { name: "Features", href: "#features" },
        { name: "Solutions", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Demo", href: "#" },
      ]
    },
    {
      title: "Company",
      items: [
        { name: "About Us", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Contact", href: "#contact" },
      ]
    },
    {
      title: "Resources",
      items: [
        { name: "Blog", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Partners", href: "#" },
        { name: "Developers", href: "#" },
      ]
    },
    {
      title: "Legal",
      items: [
        { name: "Privacy Policy", href: "#" },
        { name: "Terms of Service", href: "#" },
        { name: "Cookie Policy", href: "#" },
        { name: "Security", href: "#" },
      ]
    }
  ];

  const contactInfo = [
    { icon: <Mail size={16} />, text: "support@healthai.com" },
    { icon: <Phone size={16} />, text: "+1 (800) 123-4567" },
    { icon: <MapPin size={16} />, text: "San Francisco, CA" }
  ];

  const socialLinks = [
    { icon: <Twitter size={18} />, href: "#", label: "Twitter" },
    { icon: <Facebook size={18} />, href: "#", label: "Facebook" },
    { icon: <Instagram size={18} />, href: "#", label: "Instagram" },
    { icon: <Linkedin size={18} />, href: "#", label: "LinkedIn" },
    { icon: <Github size={18} />, href: "#", label: "GitHub" }
  ];

  return (
    <footer className={`${theme === 'dark' ? 'bg-gray-900 text-gray-300' : 'bg-green-50 text-gray-700'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand info */}
          <div className="lg:col-span-2">
            <div className="flex items-center">
              <motion.div 
                className="flex items-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center">
                  <Heart className={`${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} size={32} />
                  <span className="ml-2 text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600">
                    HealthAI
                  </span>
                </div>
              </motion.div>
            </div>
            
            <p className="mt-4 max-w-md text-lg">
              Revolutionizing healthcare with AI-powered solutions for better health outcomes.
            </p>
            
            <div className="mt-6 space-y-2">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  {item.icon}
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
            
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`p-2 rounded-full ${
                    theme === 'dark' 
                      ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
                      : 'bg-white hover:bg-green-100 text-green-600'
                  } shadow-sm`}
                  aria-label={social.label}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
          
          {/* Links */}
          {links.map((section, index) => (
            <div key={index} className="mt-8 lg:mt-0">
              <h3 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {section.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex}>
                    <motion.a
                      href={item.href}
                      className={`hover:underline ${
                        theme === 'dark' ? 'hover:text-white' : 'hover:text-green-600'
                      }`}
                      whileHover={{ x: 5 }}
                    >
                      {item.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        {/* Bottom bar */}
        <div className={`mt-16 pt-8 border-t ${
          theme === 'dark' ? 'border-gray-800' : 'border-green-100'
        } flex flex-col md:flex-row justify-between items-center`}>
          <p className="text-sm">
            © {currentYear} HealthAI, Inc. All rights reserved.
          </p>
          
          <div className="mt-4 md:mt-0 flex space-x-6 text-sm">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms of Service</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
          </div>
          
          <motion.button
            onClick={scrollToTop}
            className={`mt-4 md:mt-0 p-3 rounded-full ${
              theme === 'dark' 
                ? 'bg-gray-800 hover:bg-gray-700 text-gray-300' 
                : 'bg-white hover:bg-green-100 text-green-600'
            } shadow-md`}
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;