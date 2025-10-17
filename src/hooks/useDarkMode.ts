import { useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

export const useDarkMode = () => {
  const getPreferredTheme = (): "light" | "dark" => {
    if ("theme" in localStorage) {
      return localStorage.theme === "dark" ? "dark" : "light";
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  };

  const [theme, setThemeState] = useState<Theme>(() => {
    if ("theme" in localStorage) {
      return localStorage.theme === "dark" ? "dark" : "light";
    }
    return "system";
  });

  const applyTheme = (currentTheme: Theme) => {
    const effectiveTheme =
      currentTheme === "system" ? getPreferredTheme() : currentTheme;

    document.documentElement.classList.toggle(
      "dark",
      effectiveTheme === "dark"
    );
  };

  useEffect(() => {
    applyTheme(theme);

    if (theme === "light" || theme === "dark") {
      localStorage.theme = theme;
    } else {
      localStorage.removeItem("theme");
    }
  }, [theme]);


  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (theme === "system") {
        applyTheme("system");
      }
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [theme]);

  return {
    theme,
    setTheme: setThemeState,
    toggleTheme: () =>
      setThemeState((prev) => (prev === "dark" ? "light" : "dark")),
  };
};
