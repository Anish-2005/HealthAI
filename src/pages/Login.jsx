import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { auth } from "../firebase";
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { LogIn } from "lucide-react";

export default function Login({ theme }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const isDark = theme === "dark";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("user", JSON.stringify(userCredential.user));
      navigate("/");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  const handleGoogleSignIn = async () => {
    setError("");
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      localStorage.setItem("user", JSON.stringify(result.user));
      navigate("/");
    } catch (err) {
      setError("Google sign-in failed. Please try again.");
    }
  };

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        isDark
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-[#E4F2CE] to-white text-[#2E312A]"
      }`}
    >

      <motion.div
        className="absolute -top-24 -left-24 w-80 h-80 rounded-full bg-green-100 opacity-20 blur-2xl dark:bg-green-900 dark:opacity-10 z-0"
        animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
      />
      <motion.div
        className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full bg-green-200 opacity-15 blur-2xl dark:bg-emerald-800 dark:opacity-10 z-0"
        animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.3, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, repeatType: "reverse" }}
      />

      <section className="relative z-10 flex-1 flex items-center justify-center py-24 px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className={`w-full max-w-md p-8 rounded-2xl shadow-xl border ${
            isDark
              ? "bg-gray-800 border-green-900"
              : "bg-white border-green-200"
          }`}
        >
          <div className="flex items-center justify-center mb-6 gap-2">
            <LogIn
              size={28}
              className="text-green-600 dark:text-green-300"
            />
            <h1 className="text-3xl font-bold">Log In</h1>
          </div>

          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="Email"
              className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 text-sm ${
                isDark
                  ? "bg-gray-900 border-green-400 text-white placeholder:text-green-300 focus:ring-green-500"
                  : "bg-white border-green-400 text-green-900 placeholder:text-green-700 focus:ring-green-500"
              }`}
              required
            />
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="Password"
              className={`w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2 text-sm ${
                isDark
                  ? "bg-gray-900 border-green-400 text-white placeholder:text-green-300 focus:ring-green-500"
                  : "bg-white border-green-400 text-green-900 placeholder:text-green-700 focus:ring-green-500"
              }`}
              required
            />
            <button
              type="submit"
              className={`w-full px-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-md ${
                isDark
                  ? "bg-gradient-to-r from-green-700 to-emerald-600 text-white hover:from-green-800 hover:to-emerald-700"
                  : "bg-gradient-to-r from-green-600 to-emerald-500 text-white hover:from-green-700 hover:to-emerald-600"
              }`}
            >
              <LogIn size={20} />
              Log In
            </button>
          </form>
          <div className="my-4 flex items-center gap-2">
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
            <span className="text-xs text-gray-500 dark:text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-300 dark:bg-gray-700" />
          </div>
          <button
            type="button"
            onClick={handleGoogleSignIn}
            className={`w-full px-4 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all shadow-md border ${
              isDark
                ? "bg-white/10 border-green-700 text-green-100 hover:bg-green-900"
                : "bg-white border-green-400 text-green-700 hover:bg-green-50"
            }`}
            style={{ fontFamily: 'inherit' }}
          >
            <svg width="20" height="20" viewBox="0 0 48 48" className="mr-2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0_17_40)">
                <path d="M47.5 24.5C47.5 22.6 47.3 20.8 47 19H24V29.1H37.1C36.5 32.1 34.6 34.6 31.8 36.3V42H39.5C44 38 47.5 31.9 47.5 24.5Z" fill="#4285F4"/>
                <path d="M24 48C30.6 48 36.2 45.9 39.5 42L31.8 36.3C30 37.5 27.7 38.3 24 38.3C17.7 38.3 12.3 34.2 10.4 28.7H2.4V34.1C5.7 41.1 14.1 48 24 48Z" fill="#34A853"/>
                <path d="M10.4 28.7C9.9 27.5 9.6 26.2 9.6 24.8C9.6 23.4 9.9 22.1 10.4 20.9V15.5H2.4C0.8 18.7 0 22.2 0 24.8C0 27.4 0.8 30.9 2.4 34.1L10.4 28.7Z" fill="#FBBC05"/>
                <path d="M24 9.7C27.7 9.7 30.6 11 32.6 12.8L39.7 6.1C36.2 2.8 30.6 0.7 24 0.7C14.1 0.7 5.7 7.6 2.4 15.5L10.4 20.9C12.3 15.4 17.7 9.7 24 9.7Z" fill="#EA4335"/>
              </g>
              <defs>
                <clipPath id="clip0_17_40">
                  <rect width="48" height="48" fill="white"/>
                </clipPath>
              </defs>
            </svg>
            Continue with Google
          </button>
          {error && (
            <div className="mt-4 text-sm text-red-500 font-medium">{error}</div>
          )}

          <p className="mt-6 text-sm text-center">
            Don&apos;t have an account?{" "}
            <a
              href="/signup"
              className="text-green-600 dark:text-green-300 hover:underline font-semibold"
            >
              Sign up
            </a>
          </p>
        </motion.div>
      </section>
    </div>
  );
}
