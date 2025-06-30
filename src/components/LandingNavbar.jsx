// src/components/LandingNavbar.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, X, Moon, Sun, 
  Home, Star, User, ClipboardList,
  Phone, LogIn, UserPlus, Bot
} from "lucide-react";


const getSystemTheme = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
};

const LandingNavbar = ({ theme: propTheme, toggleTheme: propToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || getSystemTheme());

  // Sync theme with <html> and localStorage
  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      if (!localStorage.getItem('theme')) {
        setTheme(getSystemTheme());
      }
    };
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  // Listen for <html> class changes (external theme toggles)
  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    return () => observer.disconnect();
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "#", icon: <Home size={18} /> },
    { name: "Features", href: "#features", icon: <Star size={18} /> },
    { name: "Testimonials", href: "#testimonials", icon: <User size={18} /> }
  ];

  return (
    <motion.nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? theme === 'dark' 
            ? 'bg-gray-900/90 backdrop-blur-md py-2 shadow-lg' 
            : 'bg-white/90 backdrop-blur-md py-2 shadow-lg'
          : 'py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 flex items-center"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex items-center">
              <Bot className={`${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} size={32} />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600">
                HealthAI
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {link.icon}
                  {link.name}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Right section - desktop */}
          <div className="hidden md:flex items-center">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${
                theme === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-green-100'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <div className="ml-4 flex items-center space-x-4">
              <motion.a
                href="/login"
                className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 ${
                  theme === 'dark'
                    ? 'text-gray-300 hover:text-white'
                    : 'text-gray-700 hover:text-green-600'
                }`}
                whileHover={{ y: -2 }}
              >
                <LogIn size={18} /> Login
              </motion.a>
              
              <motion.a
                href="/signup"
                className={`px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <UserPlus size={18} className="inline mr-1" /> Sign Up
              </motion.a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full mr-2 ${
                theme === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-green-100'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle dark mode"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                theme === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-green-100'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden ${
              theme === 'dark' ? 'bg-gray-800' : 'bg-white'
            }`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                  whileHover={{ x: 5 }}
                  onClick={() => setIsOpen(false)}
                >
                  {link.icon}
                  {link.name}
                </motion.a>
              ))}
              
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <motion.a
                  href="/login"
                  className={`block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 ${
                    theme === 'dark'
                      ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                      : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  <LogIn size={18} /> Login
                </motion.a>
                
                <motion.a
                  href="/signup"
                  className={`block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 flex items-center gap-2 mt-2`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <UserPlus size={18} /> Sign Up
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default LandingNavbar;