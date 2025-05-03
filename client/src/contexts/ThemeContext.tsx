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
  const [theme, setTheme] = useState<Theme>("light");

  useEffect(() => {
    // Check for saved theme preference or use prefer-color-scheme
    try {
      const savedTheme = localStorage.getItem("theme") as Theme || 
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
      
      setTheme(savedTheme);
      
      if (savedTheme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    } catch (error) {
      console.error("Error initializing theme:", error);
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => {
      try {
        const newTheme = prevTheme === "light" ? "dark" : "light";
        
        localStorage.setItem("theme", newTheme);
        
        if (newTheme === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
        
        return newTheme;
      } catch (error) {
        console.error("Error toggling theme:", error);
        return prevTheme;
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
