import React from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";

const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useDarkMode();

  const iconSize = 24;

  return (
    <div className="flex items-center gap-4">
      <button
        onClick={() => setTheme("light")}
        aria-label="Set light theme"
        className={
          theme === "light"
            ? "text-yellow-500"
            : "text-gray-500 hover:text-yellow-500"
        }
      >
        <FiSun size={iconSize} />
      </button>

      <button
        onClick={() => setTheme("dark")}
        aria-label="Set dark theme"
        className={
          theme === "dark"
            ? "text-purple-500"
            : "text-gray-500 hover:text-purple-500"
        }
      >
        <FiMoon size={iconSize} />
      </button>

      <button
        onClick={() => setTheme("system")}
        aria-label="Use system theme"
        className={
          theme === "system"
            ? "text-blue-500"
            : "text-gray-500 hover:text-blue-500"
        }
      >
        <FiMonitor size={iconSize} />
      </button>
    </div>
  );
};

export default ThemeToggle;
