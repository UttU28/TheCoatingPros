import { createContext, useContext, useEffect, useState, ReactNode } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Create a default context value instead of undefined
const defaultContextValue: ThemeContextType = {
  theme: "light",
  toggleTheme: () => {}
};

const ThemeContext = createContext<ThemeContextType>(defaultContextValue);

export function ThemeProvider({ children }: { children: ReactNode }) {
  // Initialize with a default value that will be immediately updated in useEffect
  const [theme, setTheme] = useState<Theme>("light");

  // Set up theme from localStorage or system preference
  useEffect(() => {
    try {
      // Check if we have a theme stored in localStorage
      const storedTheme = localStorage.getItem("theme") as Theme | null;
      
      // If not, check for system preference
      if (!storedTheme) {
        const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const initialTheme = prefersDarkMode ? "dark" : "light";
        localStorage.setItem("theme", initialTheme);
        setTheme(initialTheme);
        
        if (initialTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        // We have a stored theme, use it
        setTheme(storedTheme);
        
        if (storedTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    } catch (error) {
      console.error("Error initializing theme:", error);
      // Fallback to light theme if there's an error
      setTheme("light");
      document.documentElement.classList.remove("dark");
    }
  }, []); // Empty dependency array means this runs once on mount

  // Handle theme toggle
  const toggleTheme = () => {
    setTheme((prevTheme) => {
      try {
        // Switch the theme
        const newTheme = prevTheme === "light" ? "dark" : "light";
        
        // Update localStorage
        localStorage.setItem("theme", newTheme);
        
        // Update the document class for Tailwind
        if (newTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        
        console.log(`Theme switched to: ${newTheme}`); // Debug log
        
        return newTheme;
      } catch (error) {
        console.error("Error toggling theme:", error);
        return prevTheme; // Return previous theme if there's an error
      }
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
