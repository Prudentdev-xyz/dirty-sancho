import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "The Legend", href: "#the-legend" },
  { label: "Why Sancho", href: "#why-sancho" },
  { label: "Tokenomics", href: "#tokenomics" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Community", href: "#community" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`
        fixed top-0 left-0
        w-full
        z-50
        transition-all duration-300
        ${scrolled
          ? "bg-primary/95 backdrop-blur-md border-b border-white/10"
          : "bg-transparent"}
      `}
    >
      <nav
        className="
          flex items-center justify-between
          w-full max-w-7xl
          mx-auto
          px-6 py-4
          md:px-10
        "
      >
        {/* Logo */}
        
         <a href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="
            flex items-center gap-3
            no-underline
          "
        >
          <img
            src={logo}
            alt="Dirty Sancho Logo"
            className="
              block
              w-10 h-10
              object-contain
            "
          />
          <span
            className="
              text-lg font-black tracking-widest
              text-accent
              uppercase
            "
          >
            DIRTY SANCHO
          </span>
        </a>

        {/* Desktop Nav Links */}
        <ul
          className="
            hidden md:flex
            items-center gap-8
            list-none
          "
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              
               <a href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="
                  text-sm font-medium tracking-wide
                  text-white/80
                  transition-colors duration-200
                  hover:text-accent
                  no-underline
                "
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        
         <a href="https://t.me/+A4-H5qu-pVRiZjFi"
          target="_blank"
          rel="noopener noreferrer"
          className="
            hidden md:flex items-center
            px-5 py-2
            text-sm font-bold tracking-wide
            text-primary
            bg-accent
            transition-opacity duration-200
            hover:opacity-90
          "
        >
          Join Community
        </a>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="
            flex items-center justify-center md:hidden
            w-10 h-10
            text-white
          "
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="
              flex flex-col
              w-full
              px-6 pb-6
              bg-primary
              border-t border-white/10
              md:hidden
            "
          >
            <ul className="flex flex-col gap-4 mt-4 list-none">
              {navLinks.map((link) => (
                <li key={link.label}>
                  
                   <a href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="
                      block
                      text-base font-medium
                      text-white/80
                      transition-colors duration-200
                      hover:text-accent
                      no-underline
                    "
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            
            <a href="https://t.me/+A4-H5qu-pVRiZjFi"
              target="_blank"
              rel="noopener noreferrer"
              className="
                flex items-center justify-center
                w-full mt-6 px-5 py-3
                text-sm font-bold tracking-wide
                text-primary
                bg-accent
              "
            >
              Join Community
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}