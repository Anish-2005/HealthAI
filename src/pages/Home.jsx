import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Activity, ShieldCheck, Bot, Stethoscope,
  Brain, Smartphone, Heart, ChevronRight,
  Check, Users, Zap, BarChart2,
  MessageCircle, Calendar, Award, Star, ChevronLeft, ChevronRight as ChevronRightIcon
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/LandingFooter";

const Home = ({ theme }) => {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const featureInterval = setInterval(() => {
      setCurrentFeature(prev => (prev + 1) % features.length);
    }, 5000);
    return () => clearInterval(featureInterval);
  }, []);

  const features = [
    {
      icon: <Brain size={36} className={theme === 'dark' ? "text-green-400" : "text-green-600"} />,
      title: "AI Health Advisor",
      description: "Get personalized health insights powered by advanced AI algorithms"
    },
    {
      icon: <ShieldCheck size={36} className={theme === 'dark' ? "text-green-400" : "text-green-600"} />,
      title: "Emergency Support",
      description: "Immediate assistance during medical emergencies with one-tap access"
    },
    {
      icon: <Stethoscope size={36} className={theme === 'dark' ? "text-green-400" : "text-green-600"} />,
      title: "Virtual Consultations",
      description: "Connect with certified doctors through secure video calls"
    },
    {
      icon: <Smartphone size={36} className={theme === 'dark' ? "text-green-400" : "text-green-600"} />,
      title: "Symptom Tracker",
      description: "Monitor symptoms over time and receive actionable insights"
    }
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Patient",
      content: "The AI advice is so accurate and the emergency support is a lifesaver! HealthAI is my go-to for health queries.",
      rating: 5
    },
    {
      name: "Dr. Anil Mehra",
      role: "General Physician",
      content: "HealthAI's virtual consultations and symptom tracking have made my practice more efficient and patient-friendly.",
      rating: 5
    },
    {
      name: "Rohit Verma",
      role: "Fitness Coach",
      content: "I recommend HealthAI to all my clients for its personalized health plans and easy-to-use interface.",
      rating: 4
    }
  ];

  const stats = [
    { value: "1M+", label: "Users Helped", icon: <Heart size={24} className={theme === 'dark' ? "text-green-400" : "text-green-600"} /> },
    { value: "24/7", label: "AI Support", icon: <Zap size={24} className={theme === 'dark' ? "text-green-400" : "text-green-600"} /> },
    { value: "500K+", label: "Consultations", icon: <BarChart2 size={24} className={theme === 'dark' ? "text-green-400" : "text-green-600"} /> },
    { value: "99.2%", label: "Accuracy", icon: <Award size={24} className={theme === 'dark' ? "text-green-400" : "text-green-600"} /> }
  ];

  const benefits = [
    "Instant AI health advice",
    "Emergency medical support",
    "Book virtual doctor appointments",
    "Track symptoms & progress",
    "Personalized health dashboard",
    "Data privacy & security"
  ];

  // Smooth scroll handler for bookmarks
  useEffect(() => {
    const handleNavClick = (e) => {
      if (e.target.matches('a[data-scroll]')) {
        const id = e.target.getAttribute('href').replace('#', '');
        const el = document.getElementById(id);
        if (el) {
          e.preventDefault();
          el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };
    document.addEventListener('click', handleNavClick);
    return () => document.removeEventListener('click', handleNavClick);
  }, []);

  return (
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-[#E4F2CE] to-white text-[#23412a]'}`}>
      <Navbar theme={theme} />
      
      {/* Enhanced Hero Section */}
      <section id="hero" className="relative overflow-hidden pt-16 pb-24 px-4 flex flex-col items-center justify-center min-h-[90vh]">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-green-100 opacity-30 blur-3xl dark:bg-green-900 dark:opacity-20"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.4, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-green-200 opacity-20 blur-3xl dark:bg-emerald-900 dark:opacity-10"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
        />
        
        <div className="relative z-10 flex flex-col md:flex-row items-center max-w-7xl gap-12">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 tracking-tight" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
                Your <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500">AI Health Assistant</span>
              </motion.h1>
              <motion.p className="text-xl md:text-2xl max-w-2xl mb-8 font-medium text-gray-700 dark:text-gray-700" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
                Get instant, personalized health advice based on your symptoms and medical history.
              </motion.p>
              
              {/* Health Prompt Input */}
              <motion.div className="relative max-w-xl" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
                <div className="flex flex-col gap-4">
                  <input 
                    type="text" 
                    placeholder="Describe your symptoms or health concern..." 
                    className={`w-full px-6 py-4 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg shadow-lg placeholder:text-green-700 dark:placeholder:text-green-300 ${theme === 'dark' ? 'bg-gray-800 border-green-400 text-white shadow-green-900/10' : 'bg-white border-green-400 text-green-800 shadow-green-100'}`}
                  />
                  <button className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all text-lg hover:from-green-700 hover:to-emerald-600 border border-green-400">
                    Get AI Health Advice
                  </button>
                </div>
                <div className="absolute -bottom-8 right-0 text-sm text-gray-500 dark:text-gray-400">
                  Powered by advanced medical AI
                </div>
              </motion.div>
            </motion.div>
            
            {/* Quick Actions */}
            <motion.div className="mt-12 flex flex-wrap justify-center md:justify-start gap-4" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }}>
              <motion.a 
                href="/advice" 
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-6 py-3 rounded-xl font-medium shadow hover:shadow-md transition-all hover:-translate-y-0.5"
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <Bot size={18} /> Health Advice
              </motion.a>
              <motion.a 
                href="#emergency-support" 
                className="flex items-center justify-center gap-2 bg-white text-green-700 border border-green-300 px-6 py-3 rounded-xl font-medium shadow hover:shadow-md transition-all hover:-translate-y-0.5 dark:bg-gray-800 dark:text-green-200"
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
              >
                <ShieldCheck size={18} className={theme === 'dark' ? 'text-green-200' : 'text-green-600'} /> Emergency Support
              </motion.a>
             
            </motion.div>
          </div>
          
          {/* Hero Image */}
          <div className="md:w-1/2 flex justify-center">
            <motion.div 
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-green-500 to-emerald-400 rounded-3xl w-full max-w-md aspect-square shadow-2xl overflow-hidden flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="relative z-10 p-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Your Health Companion</h3>
                    <p className="text-green-100 mb-6">Always available, always helpful</p>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 inline-block">
                      <Bot className="text-white mx-auto" size={64} />
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <motion.div 
                  className={`absolute -top-6 -right-6 p-4 rounded-xl shadow-xl w-1/3 ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'}`}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center dark:bg-green-900/30">
                      <MessageCircle className="text-green-600" size={16} />
                    </div>
                    <div className="text-sm font-medium">AI Assistant</div>
                  </div>
                  <p className={`text-xs p-2 rounded ${theme === 'dark' ? 'bg-gray-700 text-gray-100' : 'bg-green-100 text-green-900'}`}>
                    Hi! How can I help you today?
                  </p>
                </motion.div>
                
                <motion.div 
                  className={`absolute -bottom-6 -left-6 p-4 rounded-xl shadow-xl w-1/3 ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'}`}
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center dark:bg-blue-900/30">
                      <Calendar className="text-blue-600" size={16} />
                    </div>
                    <div className="text-sm font-medium">Appointment</div>
                  </div>
                  <p className="text-xs">
                    Your consultation is confirmed for tomorrow.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <motion.div className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-green-400 dark:bg-green-700" animate={{ y: [0, -20, 0], x: [0, 10, 0] }} transition={{ duration: 4, repeat: Infinity }} />
        <motion.div className="absolute bottom-1/3 right-12 w-6 h-6 rounded-full bg-emerald-300 dark:bg-emerald-700" animate={{ y: [0, -15, 0], x: [0, -8, 0] }} transition={{ duration: 5, repeat: Infinity, delay: 0.5 }} />
      </section>

      {/* Emergency Support Section */}
      <section id="emergency-support" className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-8" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Emergency Support
          </motion.h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <motion.a href="/doctors" className="flex-1 bg-gradient-to-r from-green-500 to-emerald-400 text-white px-8 py-6 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-3" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Stethoscope size={28} /> Contact a Doctor Immediately
            </motion.a>
            <motion.a href="/bookemergency" className="flex-1 bg-white text-white border border-green-300 px-8 py-6 rounded-2xl font-bold text-xl shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 flex items-center justify-center gap-3 dark:bg-gradient-to-r dark:from-green-600 dark:to-emerald-500" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Calendar size={28} className="text-white" />
              <span>Book an Emergency Consultation</span>
            </motion.a>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how" className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'}`}>
        <div className="max-w-5xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            How It Works?
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="space-y-8">
              <motion.div className={`p-6 rounded-2xl shadow-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-green-50 border border-green-200'}`} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
                <h3 className="text-2xl font-bold mb-2">Step 1: Enter Symptoms</h3>
                <h4 className="text-lg text-gray-700 dark:text-gray-900">Describe the health issue</h4>
              </motion.div>
              <motion.div className={`p-6 rounded-2xl shadow-lg ${theme === 'dark' ? 'bg-gray-900' : 'bg-green-50 border border-green-200'}`} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-900">Step 2: AI Classifies the Problem</h3>
                <div className="space-y-4">
                  <div className={`p-4 rounded-xl shadow ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-green-50 border border-green-200'}`}>
                    <h4 className="font-semibold text-green-700 dark:text-green-400">Case 1:</h4>
                    <p className="text-gray-800 dark:text-gray-900">If the health problem is mild, you get a quick AI diagnosis with immediate medical and dietary advice.</p>
                  </div>
                  <div className={`p-4 rounded-xl shadow ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-green-50 border border-green-200'}`}>
                    <h4 className="font-semibold text-green-700 dark:text-green-400">Case 2:</h4>
                    <p className="text-gray-800 dark:text-gray-900">If the problem is moderate, you'll get recommended doctors, ratings, contacts, and can book an appointment.</p>
                  </div>
                  <div className={`p-4 rounded-xl shadow ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-green-50 border border-green-200'}`}>
                    <h4 className="font-semibold text-green-700 dark:text-green-400">Case 3:</h4>
                    <p className="text-gray-800 dark:text-gray-900">If the problem is severe, you'll get nearest hospitals and can book an ambulance for immediate action.</p>
                  </div>
                </div>
              </motion.div>
            </div>
            <div className="flex items-center justify-center">
              <div className="relative bg-gradient-to-br from-green-500 to-emerald-400 rounded-2xl shadow-xl w-full max-w-md aspect-square overflow-hidden dark:from-green-700 dark:to-emerald-600">
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center z-10">
                  <h3 className="text-2xl font-bold text-white mb-4">HealthAI Workflow</h3>
                  <p className="text-green-100 mb-6">Simple, efficient, life-saving</p>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 flex flex-col items-center">
                      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2">
                        <span className="text-green-600 font-bold">1</span>
                      </div>
                      <span className="text-white text-sm">Describe</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 flex flex-col items-center">
                      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2">
                        <span className="text-green-600 font-bold">2</span>
                      </div>
                      <span className="text-white text-sm">Analyze</span>
                    </div>
                    <div className="bg-white/20 backdrop-blur-sm rounded-xl p-3 flex flex-col items-center">
                      <div className="bg-white rounded-full w-12 h-12 flex items-center justify-center mb-2">
                        <span className="text-green-600 font-bold">3</span>
                      </div>
                      <span className="text-white text-sm">Resolve</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Subscription Plans Section */}
      <section id="subscription" className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-6xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-10 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Subscription Plans
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {/* Basic Plan */}
            <motion.div className={`rounded-2xl shadow-xl p-8 flex flex-col items-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50 border border-green-200'}`} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <h2 className="text-3xl font-extrabold text-green-700 dark:text-green-400 mb-2">₹200/year</h2>
              <p className="mb-4 text-gray-700 dark:text-gray-900">For the day to day need and precaution.</p>
              <button className="sub px-6 py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-bold mb-4 border border-green-400 shadow-lg hover:shadow-xl transition-all">Subscribe</button>
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-900"><Check className="text-green-500" size={20} /> Limited AI Health Advices</li>
                <li className="flex items-center gap-2 text-gray-700 dark:text-gray-900"><Check className="text-green-500" size={20} /> Limited Discounts on Doctors, Booking Ambulances and Hospital Charges.</li>
              </ul>
            </motion.div>
            {/* Premium Plan */}
            <motion.div className="rounded-2xl shadow-xl p-8 bg-gradient-to-br from-green-600 to-emerald-400 text-white flex flex-col items-center" initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <h2 className="text-3xl font-extrabold mb-2">₹1000/year</h2>
              <p className="mb-4">For severe health patients requiring 24/7 support.</p>
              <button className="sub px-6 py-3 rounded-xl bg-gradient-to-r from-green-700 to-emerald-600 text-white font-bold mb-4 border border-green-500 shadow-lg hover:shadow-xl transition-all">Subscribe</button>
              <ul className="space-y-2 text-left">
                <li className="flex items-center gap-2"><Check className="text-green-800" size={20} /> Unlimited AI Health Advices</li>
                <li className="flex items-center gap-2"><Check className="text-green-800" size={20} /> Minimum 20% on Doctors, Booking Ambulances and Hospital Charges.</li>
                <li className="flex items-center gap-2"><Check className="text-green-800" size={20} /> A free annual health checkup.</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partner With Us Section */}
      <section id="partner" className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'}`}>
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Partner with us
          </motion.h2>
          <motion.p className="mb-8 text-lg text-gray-700 dark:text-gray-700" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
            Join us in revolutionizing the healthcare industry through the power of artificial intelligence. By partnering with us, hospitals, clinics, doctors, and pharmaceutical companies can leverage cutting-edge AI technology to enhance patient care, streamline operations, and improve diagnostic accuracy.
          </motion.p>
          <motion.a href="/contact" className="px-8 py-4 rounded-xl font-bold shadow-lg transition-all bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:from-green-700 hover:to-emerald-600" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Contact Us
          </motion.a>
        </div>
      </section>

      {/* Contact Us Section */}
      <section id="contact" className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="max-w-3xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold mb-8 text-center" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            Contact us
          </motion.h2>
          <form className={`rounded-2xl shadow-xl p-8 flex flex-col gap-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50 border border-green-200'}`}>
            <input type="text" placeholder="Name" className={`px-6 py-4 rounded-xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg shadow placeholder:text-green-400 dark:placeholder:text-gray-400 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-green-700'}`} />
            <input type="email" placeholder="Email" className={`px-6 py-4 rounded-xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg shadow placeholder:text-green-400 dark:placeholder:text-gray-400 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-green-700'}`} />
            <textarea placeholder="Message" className={`px-6 py-4 rounded-xl border border-green-300 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg shadow resize-none min-h-[120px] placeholder:text-green-400 dark:placeholder:text-gray-400 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-green-700'}`} />
            <button className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all text-lg self-center border border-green-400">Send Message</button>
          </form>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white text-[#23412a]'}`}> 
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              Explore HealthAI Features
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              Discover the tools and services that make HealthAI your trusted health companion.
            </motion.p>
          </div>
          
          {/* Featured Card */}
          <motion.div className={`rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto mb-16 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-white to-green-50 text-[#23412a]'}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  {features[currentFeature].icon}
                  <h3 className="text-2xl font-bold">{features[currentFeature].title}</h3>
                </div>
                <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>{features[currentFeature].description}</p>
                <div className="flex gap-2">
                  {features.map((_, index) => (
                    <button key={index} className={`w-3 h-3 rounded-full ${index === currentFeature ? 'bg-green-500' : 'bg-gray-300'}`} onClick={() => setCurrentFeature(index)} />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <motion.div className="relative w-full h-64 bg-gray-100 rounded-xl overflow-hidden dark:bg-gray-700" key={currentFeature} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.5 }}>
                  <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-tr from-green-900/20 to-emerald-900/20' : 'bg-gradient-to-tr from-green-200/40 to-emerald-100/40'}`} />
                  <div className={`absolute top-4 left-4 w-32 h-48 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} />
                  <div className={`absolute bottom-4 right-4 w-48 h-32 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} />
                  <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-green-500 flex items-center justify-center" animate={{ scale: [1, 1.1, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                    <Bot className="text-white" size={36} />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Stats Section */}
          <motion.div className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16 ${theme === 'dark' ? '' : 'bg-white'}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, staggerChildren: 0.1 }}>
            {stats.map((stat, index) => (
              <motion.div key={index} className={`p-6 rounded-2xl shadow-lg flex flex-col items-center text-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }} transition={{ duration: 0.3 }} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}>
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4 dark:bg-green-900/30">{stat.icon}</div>
                <div className="text-3xl font-bold text-green-600 dark:text-green-400 mb-2">{stat.value}</div>
                <div className="text-lg font-medium text-gray-700 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'}`}> 
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Use HealthAI?</h2>
              <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                HealthAI empowers you to take control of your health with smart, secure, and accessible tools.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div key={index} className={`flex items-start gap-3 p-4 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-700/50 text-gray-300' : 'bg-white text-gray-700'}`} whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative">
              <div className={`relative rounded-2xl overflow-hidden aspect-video ${theme === 'dark' ? 'bg-gradient-to-br from-green-900 to-emerald-900' : 'bg-gradient-to-br from-green-500 to-emerald-400'}`}>
                <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-t from-black/70 to-transparent' : 'bg-gradient-to-t from-black/60 to-transparent'}`} />
                <div className={`absolute bottom-6 left-6 ${theme === 'dark' ? 'text-green-100' : 'text-white'}`}>
                  <h3 className="text-2xl font-bold">Your Health Dashboard</h3>
                  <p>All your health info, one place</p>
                </div>
              </div>
              <motion.div className={`absolute -top-6 -right-6 p-5 rounded-xl shadow-xl w-2/3 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} animate={{ y: [0, -10, 0] }} transition={{ duration: 3, repeat: Infinity }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}>
                    <MessageCircle className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">AI Assistant</div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Online now</div>
                  </div>
                </div>
                <p className={`text-sm p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-100' : 'bg-green-50 text-gray-700'}`}>Hi! How can I help you today?</p>
              </motion.div>
              <motion.div className={`absolute -bottom-6 -left-6 p-5 rounded-xl shadow-xl w-2/3 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} animate={{ y: [0, 5, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}>
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}>
                    <Calendar className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Next Appointment</div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Friday, 4:00 PM</div>
                  </div>
                </div>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-100' : 'text-gray-700'}`}>Your checkup is scheduled for Friday at 4:00 PM.</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}> 
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-4" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              What Our Users Say
            </motion.h2>
            <motion.p className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              Real stories from people who trust HealthAI for their health journey.
            </motion.p>
          </div>
          <div className="max-w-4xl mx-auto">
            <motion.div className={`rounded-2xl shadow-xl p-8 relative ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} key={currentTestimonial} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.5 }}>
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center ${theme === 'dark' ? 'bg-gray-800 border-2 border-green-700' : 'bg-gray-200 border-2 border-green-400'}`}>
                  <Users className={`${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`} size={32} />
                </div>
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`${i < testimonials[currentTestimonial].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-900'} mx-1`} size={20} />
                  ))}
                </div>
                <blockquote className="text-xl italic mb-6 max-w-2xl text-gray-800 dark:text-gray-900">"{testimonials[currentTestimonial].content}"</blockquote>
                <div>
                  <div className="font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-green-600 dark:text-green-400">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
              <div className="absolute bottom-6 right-6 flex gap-2">
                <button className={`p-2 rounded-full shadow transition-colors border ${theme === 'dark' ? 'bg-gray-800 border-green-700 text-green-300 hover:bg-green-900' : 'bg-green-100 border-green-400 text-green-700 hover:bg-green-200'}`} onClick={() => setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial">
                  <ChevronLeft size={20} />
                </button>
                <button className={`p-2 rounded-full shadow transition-colors border focus:outline-none focus:ring-2 focus:ring-green-400 ${theme === 'dark' ? 'bg-gray-800 border-green-700 text-green-300 hover:bg-green-900' : 'bg-green-50 border-green-400 text-green-700 hover:bg-green-100'}`} onClick={() => setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)} aria-label="Next testimonial">
                  <ChevronRightIcon size={20} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section id="cta" className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}> 
        <div className="max-w-5xl mx-auto text-center">
          <motion.div className={`rounded-3xl p-12 shadow-2xl border ${theme === 'dark' ? 'bg-gray-950 border-green-900' : 'bg-gradient-to-r from-green-600 to-emerald-500 border-green-200'}`} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <motion.h2 className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-green-200' : 'text-white'}`} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}>
              Start Your Health Journey Today!
            </motion.h2>
            <motion.p className={`text-xl mb-10 max-w-2xl mx-auto ${theme === 'dark' ? 'text-green-100' : 'text-green-50'}`} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}>
              Join the HealthAI community and take charge of your well-being with smart, AI-powered tools.
            </motion.p>
            <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}>
              <motion.a href="/advice" className={`px-8 py-4 rounded-xl font-bold shadow-lg transition-all focus:outline-none focus:ring-2 focus:ring-green-400 ${theme === 'dark' ? 'bg-green-800 text-green-100 hover:bg-green-700' : 'bg-white text-green-700 hover:bg-green-50'}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Get AI Health Advice
              </motion.a>
              <motion.a href="/emergency" className={`px-8 py-4 rounded-xl font-bold shadow-lg transition-all border-2 focus:outline-none focus:ring-2 focus:ring-green-400 ${theme === 'dark' ? 'border-green-700 text-green-100 bg-transparent hover:bg-green-900' : 'border-green-700 text-green-700 bg-white hover:bg-green-50'}`} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Emergency Support
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer theme={theme} />
    </div>
  );
};

export default Home;