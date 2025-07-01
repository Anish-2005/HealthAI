// src/components/LandingNavbar.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu, X, Moon, Sun,
  Home, Star, User,
  LogIn, UserPlus, LogOut, Bot
} from "lucide-react";

const getSystemTheme = () => {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
  return 'light';
};

const LandingNavbar = ({ theme: propTheme, toggleTheme: propToggleTheme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || getSystemTheme());
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("user"));

  useEffect(() => {
    const onStorage = () => setIsLoggedIn(!!localStorage.getItem("user"));
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
    window.location.href = "/login";
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('theme', theme);
  }, [theme]);

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
      className={`fixed w-full overflow-x-hidden z-50 transition-all duration-300 ${scrolled
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
        <div className="flex items-center justify-between h-16 max-w-full overflow-hidden">
          <motion.div className="flex-shrink-0 flex items-center" whileHover={{ scale: 1.05 }}>
            <div className="flex items-center">
              <Bot className={`${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} size={32} />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600">
                HealthAI
              </span>
            </div>
          </motion.div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 ${theme === 'dark'
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

          <div className="hidden md:flex items-center">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full ${theme === 'dark'
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
              {!isLoggedIn ? (
                <>
                  <motion.a
                    href="/login"
                    className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-1 ${theme === 'dark'
                        ? 'text-gray-300 hover:text-white'
                        : 'text-gray-700 hover:text-green-600'
                      }`}
                    whileHover={{ y: -2 }}
                  >
                    <LogIn size={18} /> Login
                  </motion.a>
                  <motion.a
                    href="/login"
                    className={`px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <UserPlus size={18} className="inline mr-1" /> Sign Up
                  </motion.a>
                </>
              ) : (
                <motion.button
                  onClick={handleLogout}
                  className="px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <LogOut size={18} /> Logout
                </motion.button>
              )}
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <motion.button
              onClick={toggleTheme}
              className={`p-2 rounded-full mr-2 ${theme === 'dark'
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
              onClick={() => setIsOpen(true)}
              className={`p-2 rounded-md ${theme === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-green-100'
                }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Menu size={24} />
            </motion.button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden overflow-hidden ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'} border-t border-gray-200 dark:border-gray-700 z-[999]`}
          >
            {/* Cross button to close */}
            <div className="flex justify-end px-4 pt-4">
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <X size={28} className={theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} />
              </button>
            </div>

            {/* Menu Links */}
            <div className="px-4 pb-4 space-y-2 flex flex-col">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  className={`block px-3 py-2 rounded-lg text-base font-medium flex items-center gap-2 ${theme === 'dark'
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

              {/* Auth buttons */}
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700">
                {!isLoggedIn ? (
                  <>
                    <motion.a
                      href="/login"
                      className={`block px-3 py-2 rounded-lg text-base font-medium flex items-center gap-2 ${theme === 'dark'
                          ? 'text-gray-300 hover:text-white hover:bg-gray-700'
                          : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                        }`}
                      whileHover={{ x: 5 }}
                    >
                      <LogIn size={18} /> Login
                    </motion.a>
                    <motion.a
                      href="/login"
                      className={`block px-3 py-2 rounded-lg text-base font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 flex items-center gap-2 mt-2`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <UserPlus size={18} /> Sign Up
                    </motion.a>
                  </>
                ) : (
                  <motion.button
                    onClick={() => { setIsOpen(false); handleLogout(); }}
                    className="w-full block px-3 py-2 rounded-lg text-base font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 flex items-center gap-2 justify-center mt-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <LogOut size={18} /> Logout
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>


    </motion.nav>
  );
};

export default LandingNavbar;
