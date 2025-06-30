import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  Activity, ShieldCheck, Bot, Stethoscope, 
  Brain, Smartphone, Heart, ChevronRight, 
  Check, Users, Zap, BarChart2, 
  MessageCircle, Calendar, Clipboard, 
  Award, Star, ChevronLeft, ChevronRight as ChevronRightIcon 
} from "lucide-react";
import Navbar from "../components/LandingNavbar";
import Footer from "../components/LandingFooter";

const Landing = ({ theme }) => {
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
      icon: <Brain size={36} />, 
      title: "AI Health Advisor", 
      description: "Get personalized health insights powered by advanced AI algorithms" 
    },
    { 
      icon: <ShieldCheck size={36} />, 
      title: "Emergency Support", 
      description: "Immediate assistance during medical emergencies with one-tap access" 
    },
    { 
      icon: <Stethoscope size={36} />, 
      title: "Virtual Consultations", 
      description: "Connect with certified doctors through secure video calls" 
    },
    { 
      icon: <Smartphone size={36} />, 
      title: "Symptom Tracker", 
      description: "Monitor symptoms over time and receive actionable insights" 
    }
  ];
  
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      role: "Cardiologist",
      content: "HealthAI has transformed how I interact with patients. The AI-powered insights help me provide more accurate diagnoses and personalized treatment plans.",
      rating: 5
    },
    {
      name: "Michael Thompson",
      role: "Patient",
      content: "The emergency support feature saved me during a late-night asthma attack. Immediate guidance until help arrived made all the difference.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Health Coach",
      content: "My clients love the symptom tracking and personalized recommendations. It's like having a health assistant available 24/7.",
      rating: 4
    }
  ];
  
  const stats = [
    { value: "95%", label: "User Satisfaction", icon: <Heart size={24} /> },
    { value: "24/7", label: "Support Available", icon: <Zap size={24} /> },
    { value: "10M+", label: "Health Insights", icon: <BarChart2 size={24} /> },
    { value: "98.7%", label: "Accuracy Rate", icon: <Award size={24} /> }
  ];
  
  const benefits = [
    "AI-powered symptom analysis",
    "Personalized health plans",
    "Medication reminders",
    "Health progress tracking",
    "Secure data encryption",
    "Multi-language support"
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
    <div className={`min-h-screen flex flex-col transition-colors duration-500 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-[#E4F2CE] to-white text-[#2E312A]'}`}>
      <Navbar theme={theme} />
      
      {/* Hero Section */}
      <section id="hero" className="relative overflow-hidden py-24 px-4 flex flex-col items-center justify-center min-h-[85vh]">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-green-100 opacity-30 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.4, 0.3]
          }}
          transition={{ 
            duration: 8, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        
        <motion.div 
          className="absolute -bottom-20 -left-20 w-96 h-96 rounded-full bg-green-200 opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 12, 
            repeat: Infinity, 
            repeatType: "reverse" 
          }}
        />
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="relative"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <img 
                src="/logo.png.png" 
                alt="HealthAI Logo" 
                className="w-48 h-48 mb-8 mx-auto"
              />
              <motion.div 
                className="absolute top-0 right-0 w-6 h-6 bg-green-500 rounded-full"
                animate={{ 
                  scale: [1, 1.5, 1],
                  opacity: [0.7, 1, 0.7]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity 
                }}
              />
            </motion.div>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-emerald-500"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Transforming Healthcare with AI
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl max-w-2xl mb-10 font-medium"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Experience next-generation health management with AI-powered diagnostics, emergency support, and personalized care plans.
          </motion.p>
          
          <motion.div 
            className="flex flex-col md:flex-row gap-4 justify-center w-full max-w-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <motion.a 
              href="/signup"
              className="flex items-center justify-center gap-2 bg-gradient-to-r from-green-600 to-emerald-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started <ChevronRight size={20} />
            </motion.a>
            
            <motion.a 
              href="/home"
              className="flex items-center justify-center gap-2 bg-white text-green-700 border border-green-300 px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Activity size={20} /> Explore Demo
            </motion.a>
          </motion.div>
        </div>
        
        {/* Floating Elements */}
        <motion.div 
          className="absolute top-1/4 left-10 w-8 h-8 rounded-full bg-green-400"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity 
          }}
        />
        <motion.div 
          className="absolute bottom-1/3 right-12 w-6 h-6 rounded-full bg-emerald-300"
          animate={{
            y: [0, -15, 0],
            x: [0, -8, 0]
          }}
          transition={{ 
            duration: 5, 
            repeat: Infinity,
            delay: 0.5
          }}
        />
      </section>
      
      {/* Features Section */}
      <section id="features" className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}> 
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Your AI-Powered Health Companion
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Advanced healthcare solutions designed to empower you with personalized insights and support.
            </motion.p>
          </div>
          
          {/* Featured Card */}
          <motion.div 
            className={`rounded-2xl shadow-xl overflow-hidden max-w-4xl mx-auto mb-16 ${theme === 'dark' ? 'bg-gradient-to-br from-gray-800 to-gray-900' : 'bg-gradient-to-br from-white to-green-50'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  {features[currentFeature].icon}
                  <h3 className="text-2xl font-bold">{features[currentFeature].title}</h3>
                </div>
                <p className={`text-lg mb-6 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}> 
                  {features[currentFeature].description}
                </p>
                <div className="flex gap-2">
                  {features.map((_, index) => (
                    <button 
                      key={index}
                      className={`w-3 h-3 rounded-full ${index === currentFeature ? 'bg-green-500' : 'bg-gray-300'}`}
                      onClick={() => setCurrentFeature(index)}
                    />
                  ))}
                </div>
              </div>
              <div className="flex items-center justify-center">
                <motion.div 
                  className="relative w-full h-64 bg-gray-200 rounded-xl overflow-hidden dark:bg-gray-700"
                  key={currentFeature}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-tr from-green-900/20 to-emerald-900/20' : 'bg-gradient-to-tr from-green-400/20 to-emerald-300/20'}`} />
                  <div className={`absolute top-4 left-4 w-32 h-48 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} />
                  <div className={`absolute bottom-4 right-4 w-48 h-32 rounded-lg shadow-md ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`} />
                  <motion.div 
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full bg-green-500 flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Bot className="text-white" size={36} />
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </motion.div>
          
          {/* Stats Section */}
          <motion.div 
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mt-16 ${theme === 'dark' ? '' : 'bg-white'}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, staggerChildren: 0.1 }}
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                className={`p-6 rounded-2xl shadow-lg flex flex-col items-center text-center ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" }}
                transition={{ duration: 0.3 }}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
              >
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mb-4 dark:bg-green-900/30">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-green-600 mb-2">{stat.value}</div>
                <div className="text-lg font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section id="benefits" className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-800' : 'bg-green-50'}`}> 
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose HealthAI?</h2>
              <p className={`text-xl mb-8 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}> 
                Our platform combines cutting-edge AI technology with human expertise to deliver comprehensive healthcare solutions.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className={`flex items-start gap-3 p-4 rounded-xl shadow-sm ${theme === 'dark' ? 'bg-gray-700/50' : 'bg-white'}`}
                    whileHover={{ y: -5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Check className="text-green-500 mt-1 flex-shrink-0" size={20} />
                    <span>{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative"
            >
              <div className={`relative rounded-2xl overflow-hidden aspect-video ${theme === 'dark' ? 'bg-gradient-to-br from-green-900 to-emerald-900' : 'bg-gradient-to-br from-green-500 to-emerald-400'}`}>
                <div className={`absolute inset-0 ${theme === 'dark' ? 'bg-gradient-to-t from-black/70 to-transparent' : 'bg-gradient-to-t from-black/60 to-transparent'}`} />
                <div className={`absolute bottom-6 left-6 ${theme === 'dark' ? 'text-green-100' : 'text-white'}`}>
                  <h3 className="text-2xl font-bold">Virtual Health Assistant</h3>
                  <p>Always available, always helpful</p>
                </div>
              </div>
              
              <motion.div 
                className={`absolute -top-6 -right-6 p-5 rounded-xl shadow-xl w-2/3 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-green-900/30' : 'bg-green-100'}`}> 
                    <MessageCircle className="text-green-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Health Assistant</div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Online now</div>
                  </div>
                </div>
                <p className={`text-sm p-3 rounded-lg ${theme === 'dark' ? 'bg-gray-700 text-gray-100' : 'bg-green-50 text-gray-700'}`}>
                  Hi there! I can help analyze your symptoms and recommend next steps.
                </p>
              </motion.div>
              
              <motion.div 
                className={`absolute -bottom-6 -left-6 p-5 rounded-xl shadow-xl w-2/3 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-blue-900/30' : 'bg-blue-100'}`}> 
                    <Calendar className="text-blue-600" size={20} />
                  </div>
                  <div>
                    <div className="font-semibold">Appointment</div>
                    <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Tomorrow at 2:00 PM</div>
                  </div>
                </div>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-100' : ''}`}>
                  Your consultation with Dr. Smith is confirmed for tomorrow.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section id="testimonials" className={`py-20 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}> 
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Trusted by Professionals & Patients
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto dark:text-gray-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              See how HealthAI is revolutionizing healthcare experiences.
            </motion.p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <motion.div 
              className={`rounded-2xl shadow-xl p-8 relative ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}
              key={currentTestimonial}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 rounded-full mb-6 flex items-center justify-center ${theme === 'dark' ? 'bg-gray-800 border-2 border-green-700' : 'bg-gray-200 border-2 border-green-400'}`}>
                  <Users className={`${theme === 'dark' ? 'text-green-400' : 'text-green-700'}`} size={32} />
                </div>
                
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`${i < testimonials[currentTestimonial].rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} mx-1`} 
                      size={20} 
                    />
                  ))}
                </div>
                
                <blockquote className="text-xl italic mb-6 max-w-2xl">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                
                <div>
                  <div className="font-bold text-lg">{testimonials[currentTestimonial].name}</div>
                  <div className="text-green-600">{testimonials[currentTestimonial].role}</div>
                </div>
              </div>
              
              <div className="absolute bottom-6 right-6 flex gap-2">
                <button 
                  className={`p-2 rounded-full shadow transition-colors border ${theme === 'dark' ? 'bg-gray-800 border-green-700 text-green-300 hover:bg-green-900' : 'bg-green-100 border-green-400 text-green-700 hover:bg-green-200'}`}
                  onClick={() => setCurrentTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length)}
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft size={20} />
                </button>
                <button 
                  className={`p-2 rounded-full shadow transition-colors border ${theme === 'dark' ? 'bg-gray-800 border-green-700 text-green-300 hover:bg-green-900' : 'bg-green-100 border-green-400 text-green-700 hover:bg-green-200'}`}
                  onClick={() => setCurrentTestimonial((currentTestimonial + 1) % testimonials.length)}
                  aria-label="Next testimonial"
                >
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
          <motion.div 
            className={`rounded-3xl p-12 shadow-2xl border ${theme === 'dark' ? 'bg-gray-950 border-green-900' : 'bg-gradient-to-r from-green-600 to-emerald-500 border-green-200'}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.h2 
              className={`text-3xl md:text-4xl font-bold mb-6 ${theme === 'dark' ? 'text-green-200' : 'text-white'}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Ready to Transform Your Healthcare Experience?
            </motion.h2>
            
            <motion.p 
              className={`text-xl mb-10 max-w-2xl mx-auto ${theme === 'dark' ? 'text-green-100' : 'text-green-50'}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Join thousands of users who trust HealthAI for their health management.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <motion.a 
                href="/signup"
                className={`px-8 py-4 rounded-xl font-bold shadow-lg transition-all ${theme === 'dark' ? 'bg-green-800 text-green-100 hover:bg-green-700' : 'bg-white text-green-700 hover:bg-green-50'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Create Free Account
              </motion.a>
              
              <motion.a 
                href="/home"
                className={`px-8 py-4 rounded-xl font-bold shadow-lg transition-all border-2 ${theme === 'dark' ? 'border-green-700 text-green-100 bg-transparent hover:bg-green-900' : 'border-green-700 text-green-700 bg-white hover:bg-green-50'}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore Demo
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer theme={theme} />
    </div>
  );
};

export default Landing;