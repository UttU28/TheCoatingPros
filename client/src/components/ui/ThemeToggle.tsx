import { useState, useEffect } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  
  useEffect(() => {
    // Check for saved theme preference or use prefer-color-scheme
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" || 
      (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    
    setTheme(savedTheme);
  }, []);
  
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    
    localStorage.setItem("theme", newTheme);
    
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  
  return (
    <div 
      className={`theme-toggle bg-primary dark:bg-accent cursor-pointer h-6 w-12 rounded-full relative transition-all duration-300`}
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div 
        className={`absolute h-5 w-5 rounded-full top-0.5 left-0.5 bg-white transition-all duration-300 ${
          theme === 'dark' ? 'translate-x-6' : ''
        }`}
      />
    </div>
  );
}
