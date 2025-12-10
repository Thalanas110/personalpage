import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const Navigation = ({ activeSection, onSectionChange }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for pill background opacity
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Interests" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={`fixed top-4 z-50 rounded-full border transition-all duration-300 
          left-4 right-4 md:left-1/2 md:right-auto md:-translate-x-1/2 md:w-full md:max-w-5xl
          ${scrolled
            ? "bg-background/80 backdrop-blur-xl border-white/10 shadow-lg"
            : "bg-background/50 backdrop-blur-md border-white/5"
          }`}
      >
        <div className="px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <div
            className="flex items-center cursor-pointer group"
            onClick={() => onSectionChange("home")}
          >
            <span className="text-2xl mr-2 group-hover:-rotate-12 transition-transform duration-300">✈️</span>
            <span className="text-xl font-bold bg-gradient-sunset bg-clip-text text-transparent font-heading tracking-tight">
              Adriaan
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`
                  relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeSection === section.id
                    ? "text-white"
                    : "text-muted-foreground hover:text-white hover:bg-white/5"
                  }
                `}
              >
                {activeSection === section.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-gradient-sunset rounded-full -z-10 shadow-glow"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {section.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:bg-white/10 rounded-full"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </Button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 md:hidden bg-background/95 backdrop-blur-3xl pt-24 px-6 flex flex-col items-center justify-start gap-8"
          >
            <div className="flex flex-col items-center w-full gap-4">
              {sections.map((section, idx) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + idx * 0.1 }}
                  onClick={() => {
                    onSectionChange(section.id);
                    setIsMenuOpen(false);
                  }}
                  className={`
                    w-full py-4 text-2xl font-bold transition-all duration-300 flex items-center justify-center gap-3
                    ${activeSection === section.id
                      ? "text-primary scale-110"
                      : "text-muted-foreground hover:text-foreground"
                    }
                  `}
                >
                  {section.label}
                  {activeSection === section.id && (
                    <motion.span
                      layoutId="mobileActive"
                      className="text-2xl"
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      ✈️
                    </motion.span>
                  )}
                </motion.button>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-auto mb-10 text-center"
            >
              <p className="text-sm text-muted-foreground font-light tracking-widest uppercase">
                Adriaan's Flight Deck
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;