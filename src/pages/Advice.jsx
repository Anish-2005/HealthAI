import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/LandingFooter";
import { motion } from "framer-motion";
import { Bot, Sparkles, History } from "lucide-react";
import { db, auth } from "../firebase";
import { addDoc, collection, query, where, orderBy, onSnapshot } from "firebase/firestore";
import { useAuthState } from 'react-firebase-hooks/auth';

export default function Advice({ theme }) {
  const [user] = useAuthState(auth);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [advice, setAdvice] = useState("");
  const [pastAdvices, setPastAdvices] = useState([]);

  useEffect(() => {
    if (user) {
      const q = query(
        collection(db, 'advice_requests'),
        where('userId', '==', user.uid),
        orderBy('timestamp', 'desc')
      );
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const advices = [];
        querySnapshot.forEach((doc) => {
          advices.push({ id: doc.id, ...doc.data() });
        });
        setPastAdvices(advices);
      });
      return unsubscribe;
    }
  }, [user]);

  // AI advice fetch using Puter API
  const handleAdvice = async () => {
    if (!input.trim()) return;
    setLoading(true);
    try {
      const response = await puter.ai.chat(`Provide brief health advice for the following symptoms or concern: ${input}. Give practical, safe advice in 2-3 sentences and recommend consulting a doctor if needed. Keep it under 150 words.`, {
        model: 'gemini-3-pro-preview'
      });
      const adviceText = response.toString();
      setAdvice(adviceText);
      
      // Save to database
      await addDoc(collection(db, 'advice_requests'), {
        query: input,
        response: adviceText,
        userId: user.uid,
        timestamp: new Date()
      });
    } catch (error) {
      setAdvice("Sorry, unable to get advice right now. Please try again later.");
      console.error("Error getting advice: ", error);
    }
    setLoading(false);
  };

return (
  <div
    className={`min-h-screen flex flex-col transition-colors duration-500 ${
      theme === 'dark'
        ? 'bg-gray-900 text-white'
        : 'bg-gradient-to-br from-[#E4F2CE] to-white text-[#23412a]'
    }`}
  >
    <Navbar theme={theme} />
    <section className="flex-1 flex flex-col items-center justify-center py-20 px-4 relative overflow-hidden">
      {/* Animated background (blur blobs) */}
      <motion.div
        className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-green-100 opacity-20 blur-2xl dark:bg-green-800 dark:opacity-10"
        animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-green-200 opacity-15 blur-2xl dark:bg-emerald-900 dark:opacity-5"
        animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />

      <div className="mt-12 relative z-10 w-full max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`rounded-3xl shadow-xl dark:shadow-none p-0 md:p-0 border overflow-hidden ${
            theme === 'dark'
              ? 'bg-gray-800 border-green-900'
              : 'bg-green-50 border-green-200'
          }`}
        >
          {/* HEADER SECTION */}
        <div
  className={`flex flex-col items-center justify-center py-10 px-6 md:px-14 border-b relative z-10 ${
    theme === 'dark'
      ? 'bg-[rgb(4,50,30)] bg-gradient-to-br from-green-800/80 to-emerald-900/80 border-green-800'
      : 'bg-gradient-to-br from-green-200/80 to-emerald-100/60 border-green-200'
  }`}
>


            <div className="flex items-center gap-3 mb-2">
              <Bot
                size={48}
                className="text-green-400 dark:text-green-300 animate-bounce"
              />
              <span
                className={`text-4xl md:text-5xl font-extrabold tracking-tight ${
                  theme === 'dark' ? 'text-green-100' : 'text-green-700'
                }`}
              >
                AI Health Advice
              </span>
            </div>
            <div
              className={`flex items-center gap-2 text-base font-medium mb-2 ${
                theme === 'dark' ? 'text-green-200' : 'text-green-700'
              }`}
            >
              <Sparkles
                size={18}
                className={theme === 'dark' ? 'text-green-300' : 'text-green-700'}
              />
              Powered by advanced medical AI
            </div>
            <p
              className={`text-lg max-w-2xl mb-2 text-center ${
                theme === 'dark' ? 'text-green-100' : 'text-gray-700'
              }`}
            >
              Get instant, AI-powered health advice tailored to your needs. Enter
              your symptoms or health concern below and our AI will provide
              guidance, tips, and next steps.
            </p>
          </div>

          {/* Divider */}
          <motion.div
            className="w-full h-2 bg-gradient-to-r from-green-400 via-emerald-400 to-green-400 opacity-60"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1 }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Input Area */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-center py-10 px-6 md:px-14">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Describe your symptoms, e.g. fever, cough, headache..."
              className={`w-full md:w-96 px-6 py-4 rounded-xl border-2 focus:outline-none focus:ring-2 focus:ring-green-400 text-lg shadow placeholder:text-green-700 dark:placeholder:text-green-300 ${
                theme === 'dark'
                  ? 'bg-gray-900 border-green-400 text-white shadow-green-900/10'
                  : 'bg-white border-green-400 text-green-800 shadow-green-100'
              }`}
              disabled={loading}
              aria-label="Describe your symptoms"
            />
            <button
              className={`px-8 py-4 rounded-xl font-bold shadow-lg transition-all border border-green-400 text-lg flex items-center gap-2 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-green-700 to-emerald-600 text-white hover:from-green-800 hover:to-emerald-700'
                  : 'bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:from-green-700 hover:to-emerald-600'
              }`}
              onClick={handleAdvice}
              disabled={loading || !input.trim()}
              aria-label="Get AI Health Advice"
            >
              {loading ? (
                <span className="animate-pulse flex items-center gap-2">
                  <Bot size={20} className="animate-spin" /> Thinking...
                </span>
              ) : (
                <>
                  <Bot size={20} /> Get Advice
                </>
              )}
            </button>
          </div>

          {/* Examples Section */}
          <div className="px-6 md:px-14 pb-8">
            <div
              className={`rounded-xl p-4 mb-4 flex flex-col md:flex-row items-center gap-4 ${
                theme === 'dark'
                  ? 'bg-gray-900 border border-green-800 text-green-200'
                  : 'bg-green-100 border border-green-300 text-green-900'
              }`}
            >
              <span className="font-semibold flex items-center gap-2">
                <Sparkles size={18} /> Example prompts:
              </span>
              <div className="flex flex-wrap gap-2 text-sm">
                {[
                  "I have a sore throat and mild fever",
                  "Feeling tired and headache for 2 days",
                  "Cough and body ache, what should I do?",
                ].map((example, index) => (
                  <span
                    key={index}
                    className={`px-3 py-1 rounded-full border ${
                      theme === 'dark'
                        ? 'bg-gray-800 border-green-700 text-green-300'
                        : 'bg-white border-green-300 text-green-700'
                    }`}
                  >
                    {example}
                  </span>
                ))}
              </div>
            </div>

            {/* Disclaimer */}
            <div
              className={`rounded-xl p-4 flex items-center gap-3 ${
                theme === 'dark'
                  ? 'bg-gray-900 border border-green-800 text-green-200'
                  : 'bg-green-100 border border-green-300 text-green-900'
              }`}
            >
              <Bot size={20} className="text-green-600 dark:text-green-400" />
              <span>
                All advice is AI-generated and not a substitute for professional
                medical consultation. For emergencies, contact a doctor or hospital
                immediately.
              </span>
            </div>
          </div>

          {/* Output Section */}
          {advice && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={`mx-6 md:mx-14 mb-10 p-8 rounded-2xl shadow-xl border text-lg leading-relaxed ${
                theme === 'dark'
                  ? 'bg-gray-950 border-green-800 text-green-200'
                  : 'bg-white border-green-300 text-green-900'
              }`}
            >
              <div className="flex items-center gap-2 mb-3 text-green-700 dark:text-green-300 font-semibold text-base">
                <Bot size={22} /> AI Advice
              </div>
              <div>{advice}</div>
            </motion.div>
          )}

          {/* Past Advices Section */}
          {pastAdvices.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mx-6 md:mx-14 mb-10"
            >
              <div className="flex items-center gap-2 mb-6 text-green-700 dark:text-green-300 font-semibold text-xl">
                <History size={24} /> Past Advices
              </div>
              <div className="space-y-4">
                {pastAdvices.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={`p-6 rounded-2xl shadow-lg border ${
                      theme === 'dark'
                        ? 'bg-gray-900 border-green-800 text-green-200'
                        : 'bg-green-50 border-green-300 text-green-900'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-semibold text-green-700 dark:text-green-300">
                        Query: {item.query}
                      </div>
                      <div className="text-sm opacity-70">
                        {item.timestamp?.toDate?.()?.toLocaleDateString() || 'Recent'}
                      </div>
                    </div>
                    <div className="text-sm leading-relaxed">{item.response}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
    <Footer theme={theme} />
  </div>
);

}
