
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

const ThemeToggle = () => {
  // Always use dark theme (previous behavior)
  const [theme] = useState("dark");

  useEffect(() => {
    // Always ensure dark theme is applied
    document.documentElement.classList.add("dark");
    window.localStorage.setItem("theme", "dark");
  }, []);

  return (
    <button
      aria-label="Toggle color theme"
      className="w-11 h-11 rounded-full bg-gradient-to-r from-magenta to-violet text-white shadow-lg hover:shadow-xl flex items-center justify-center transition-all border-2 border-white/10"
      // No onClick handler as we're removing the toggle functionality
    >
      <Sun className="w-6 h-6 text-yellow-400 transition-transform duration-300" />
    </button>
  );
};

export default ThemeToggle;
