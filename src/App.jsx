import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Landing from "./pages/Landing";
import Team from "./pages/Team";
import About from "./pages/About";
import Emergency from "./pages/Emergency";
import Advice from "./pages/Advice";
import Partner from "./pages/Partner";
import Help from "./pages/Help";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  // Track theme for live updates
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      setTheme(isDark ? 'dark' : 'light');
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    // Initial sync
    setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Routes>
                <Route path="/" element={<Landing theme={theme} />} />
                <Route path="/home" element={<ProtectedRoute><Home theme={theme} /></ProtectedRoute>} />
                <Route path="/team" element={<ProtectedRoute><Team theme={theme} /></ProtectedRoute>} />
                <Route path="/about" element={<ProtectedRoute><About theme={theme} /></ProtectedRoute>} />
                <Route path="/emergency" element={<ProtectedRoute><Emergency theme={theme} /></ProtectedRoute>} />
                <Route path="/advice" element={<ProtectedRoute><Advice theme={theme} /></ProtectedRoute>} />
                <Route path="/partner" element={<ProtectedRoute><Partner theme={theme} /></ProtectedRoute>} />
                <Route path="/help" element={<ProtectedRoute><Help theme={theme} /></ProtectedRoute>} />
                <Route path="/login" element={<Login theme={theme} />} />
                <Route path="/signup" element={<Signup theme={theme} />} />
              </Routes>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
