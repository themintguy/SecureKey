// ThemeDropdown.tsx
import React, { useState } from "react";
import { useDarkMode } from "../hooks/useDarkMode";
import { FiSun, FiMoon, FiMonitor, FiChevronDown } from "react-icons/fi";

type ThemeOption = {
  label: string;
  value: "light" | "dark" | "system";
  icon: React.ReactNode;
};

const themeOptions: ThemeOption[] = [
  {
    label: "Light",
    value: "light",
    icon: <FiSun className="text-yellow-500" />,
  },
  {
    label: "Dark",
    value: "dark",
    icon: <FiMoon className="text-purple-500" />,
  },
  {
    label: "System",
    value: "system",
    icon: <FiMonitor className="text-blue-500" />,
  },
];

const ThemeDropdown: React.FC = () => {
  const { theme, setTheme } = useDarkMode();
  const [open, setOpen] = useState(false);

  const currentTheme = themeOptions.find((opt) => opt.value === theme);

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 px-3 py-2 border rounded-md shadow-sm hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        aria-haspopup="true"
        aria-expanded={open}
      >
        {currentTheme?.icon}
        <span className="capitalize">{currentTheme?.label}</span>
        <FiChevronDown className="ml-1" />
      </button>

      {open && (
        <ul
          className="absolute right-0 mt-2 w-40 origin-top-right bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg z-50"
          role="menu"
          aria-label="Theme options"
        >
          {themeOptions.map((option) => (
            <li
              key={option.value}
              onClick={() => {
                setTheme(option.value);
                setOpen(false);
              }}
              className={`flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 ${
                theme === option.value ? "font-medium" : ""
              }`}
              role="menuitem"
            >
              {option.icon}
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ThemeDropdown;
