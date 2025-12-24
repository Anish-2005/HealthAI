import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/LandingFooter";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, CheckCircle } from "lucide-react";
import { db } from "../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function Contact({ theme }) {
  const isDark = theme === "dark";
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      await addDoc(collection(db, 'contacts'), {
        ...formData,
        timestamp: new Date()
      });
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Failed to send message. Please try again.");
    }
    
    setIsSubmitting(false);
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 overflow-x-hidden ${
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

        {/* Contact Section */}
        <section className="relative z-10 py-24 sm:py-32 px-4 sm:px-6 md:px-8 flex-1 flex flex-col justify-center items-center text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 mb-8">
              <Mail
                size={36}
                className="text-green-600 dark:text-green-300 animate-pulse"
              />
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">
                Contact Us
              </h1>
            </div>

            <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
              Have questions or need assistance? We're here to help. Reach out to our team for support, partnerships, or any inquiries about HealthAI.
            </p>

            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <motion.div
                className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                  isDark ? "bg-gray-800" : "bg-white"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="w-12 h-12 text-green-600 dark:text-green-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Email</h3>
                <p className="text-sm opacity-80">support@healthai.com</p>
              </motion.div>

              <motion.div
                className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                  isDark ? "bg-gray-800" : "bg-white"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="w-12 h-12 text-green-600 dark:text-green-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Phone</h3>
                <p className="text-sm opacity-80">+1 (555) 123-4567</p>
              </motion.div>

              <motion.div
                className={`p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl ${
                  isDark ? "bg-gray-800" : "bg-white"
                }`}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="w-12 h-12 text-green-600 dark:text-green-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">Address</h3>
                <p className="text-sm opacity-80">123 Health Street<br />Medical City, MC 12345</p>
              </motion.div>
            </div>

            {/* Contact Form */}
            <motion.div
              className={`p-8 rounded-xl shadow-lg max-w-2xl mx-auto ${
                isDark ? "bg-gray-800" : "bg-white"
              }`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
              {isSubmitted && (
                <motion.div
                  className="mb-6 p-4 bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 rounded-lg flex items-center gap-2"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                >
                  <CheckCircle size={20} />
                  <span>Message sent successfully! We'll get back to you soon.</span>
                </motion.div>
              )}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                      isDark
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-gray-50 border-gray-300 text-gray-900"
                    }`}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Your Email"
                    required
                    className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                      isDark
                        ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                        : "bg-gray-50 border-gray-300 text-gray-900"
                    }`}
                  />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Subject"
                  required
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-gray-50 border-gray-300 text-gray-900"
                  }`}
                />
                <textarea
                  rows="5"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Your Message"
                  required
                  className={`w-full p-3 rounded-lg border focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors resize-none ${
                    isDark
                      ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                      : "bg-gray-50 border-gray-300 text-gray-900"
                  }`}
                ></textarea>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:from-green-700 hover:to-emerald-600 hover:scale-105"
                  }`}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
              </form>
            </motion.div>
          </motion.div>
        </section>
      </div>

      <Footer theme={theme} />
    </div>
  );
}