import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, Stethoscope, ShieldAlert, HelpCircle, 
  Info, Handshake, LogIn, Menu, X,
  Moon, Sun, ArrowRight, Bot
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/home", icon: <Home size={18} /> },
  { name: "AI Health Advice", path: "/advice", icon: <Stethoscope size={18} /> },
  { name: "Emergency Support", path: "/emergency", icon: <ShieldAlert size={18} /> },
  { name: "Help", path: "/help", icon: <HelpCircle size={18} /> },
  { name: "About", path: "/about", icon: <Info size={18} /> },
  { name: "Partner", path: "/partner", icon: <Handshake size={18} /> },
  { name: "Log In", path: "/login", icon: <LogIn size={18} /> },
];

export default function Navbar() {
  const [theme, setTheme] = useState(() => document.documentElement.classList.contains('dark') ? 'dark' : 'light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  return (
    <motion.header 
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
            <Link to="/home" className="flex items-center">
              <Bot className={`${theme === 'dark' ? 'text-green-400' : 'text-green-600'}`} size={32} />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600">
                HealthAI
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navLinks.slice(0, 6).map((link) => (
                <motion.div
                  key={link.name}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to={link.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-1 ${
                      theme === 'dark'
                        ? location.pathname === link.path
                          ? 'text-white bg-gray-700'
                          : 'text-gray-300 hover:text-white hover:bg-gray-700'
                        : location.pathname === link.path
                          ? 'text-green-700 bg-green-100'
                          : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    }`}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </motion.div>
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
              title="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-4"
            >
              <Link
                to="/login"
                className={`px-4 py-2 rounded-lg font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md flex items-center gap-1`}
              >
                <LogIn size={18} /> Log In
              </Link>
            </motion.div>
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
              title="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>
            
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md ${
                theme === 'dark'
                  ? 'text-gray-300 hover:bg-gray-700'
                  : 'text-gray-700 hover:bg-green-100'
              }`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
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
                <motion.div
                  key={link.name}
                  whileHover={{ x: 5 }}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link
                    to={link.path}
                    className={`block px-3 py-2 rounded-md text-base font-medium flex items-center gap-2 ${
                      theme === 'dark'
                        ? location.pathname === link.path
                          ? 'text-white bg-gray-700'
                          : 'text-gray-300 hover:text-white hover:bg-gray-700'
                        : location.pathname === link.path
                          ? 'text-green-700 bg-green-100'
                          : 'text-gray-700 hover:text-green-600 hover:bg-green-50'
                    }`}
                  >
                    {link.icon}
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="mt-4"
              >
                <Link
                  to="/signup"
                  className={`block px-3 py-3 rounded-md text-base font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 flex items-center justify-center gap-2`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started <ArrowRight size={18} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}