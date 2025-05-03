import { useState, useEffect } from "react";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import ThemeToggle from "../ui/ThemeToggle";
import { motion } from "framer-motion";

const navLinks = [
  { name: "Home", to: "home" },
  { name: "About", to: "about" },
  { name: "Services", to: "services" },
  { name: "Gallery", to: "gallery" },
  { name: "Certifications", to: "certifications" },
  { name: "Contact", to: "contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect on header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const headerVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } },
  };

  return (
    <motion.header
      initial="hidden"
      animate="visible"
      variants={headerVariants}
      className={`fixed top-0 left-0 w-full bg-white dark:bg-slate-800 shadow-md z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="container-custom py-3 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={scrollToTop}
          className="flex items-center space-x-2 cursor-pointer"
        >
          <img
            src="https://silver-imaginative-beetle-350.mypinata.cloud/ipfs/bafkreibikyk73phdlhho755ltj35an5uvs2oj3lgn4gcy2n5sddodrasjy"
            alt="The Coating Pros Logo"
            className={`transition-all duration-300 dark:invert ${scrolled ? "h-8" : "h-10 md:h-12"} w-auto`}
          />
          <div>
            <h1
              className={`font-heading font-bold text-primary dark:text-white transition-all duration-300 ${scrolled ? "text-lg" : "text-xl md:text-2xl"}`}
            >
              The Coating Pros
            </h1>
            <p
              className={`text-secondary-light dark:text-slate-400 -mt-1 transition-all duration-300 ${scrolled ? "text-xs" : "text-sm"}`}
            >
              Houston's Roof Coating Specialists
            </p>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="nav-link-active"
              className={`nav-link nav-link-inactive cursor-pointer transition-all duration-300 hover:text-primary ${scrolled ? "text-base" : "text-lg"}`}
            >
              {link.name}
            </ScrollLink>
          ))}
        </nav>

        {/* Theme Toggle and Mobile Menu Button */}
        <div className="flex items-center space-x-4">
          <ThemeToggle />

          <button
            onClick={toggleMenu}
            className="md:hidden text-slate-800 dark:text-white focus:outline-none"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden bg-white dark:bg-slate-800 shadow-lg overflow-hidden transition-all duration-300 ${
          isMenuOpen ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container-custom py-3 flex flex-col space-y-4">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.to}
              to={link.to}
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              activeClass="text-primary dark:text-white"
              className="py-2 font-medium text-slate-600 dark:text-slate-300 border-b border-slate-100 dark:border-slate-700 cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </ScrollLink>
          ))}
        </div>
      </div>
    </motion.header>
  );
}
