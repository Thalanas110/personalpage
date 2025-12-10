import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import airplaneBg from "@/assets/airplane-sunset-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-reveal-image"
        style={{
          backgroundImage: `url(${airplaneBg})`,
        }}
      />

      {/* Overlay with Spotlight */}
      <div className="absolute inset-0 bg-background/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-sunset-orange/20 via-background/0 to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-5xl mx-auto mt-16"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="overflow-visible space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="inline-block px-4 py-1.5 mb-4 border border-accent/30 rounded-full bg-accent/10 backdrop-blur-sm"
          >
            <span className="text-sm font-medium text-accent tracking-wide uppercase">Cleared for Takeoff ✈️</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" }}
            className="text-6xl md:text-8xl font-black mb-6 bg-gradient-sunset bg-clip-text text-transparent leading-tight tracking-tight text-glow filter drop-shadow-2xl"
          >
            Welcome Aboard.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-2xl md:text-3xl font-light text-foreground/90 max-w-3xl mx-auto"
          >
            Aspiring Airline Pilot & <span className="text-accent font-semibold">Software Engineer</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg text-muted-foreground text-center max-w-2xl mx-auto leading-relaxed"
          >
            Navigating the skies and the codebase with autism as my unique copilot.
            Let's create something extraordinary together.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
        >
          <Button
            size="lg"
            onClick={() => scrollToSection("about")}
            className="px-8 py-6 text-lg rounded-full bg-gradient-sunset hover:bg-gradient-to-r hover:from-orange-500 hover:to-purple-600 transition-all duration-300 shadow-glow hover:shadow-glow hover:-translate-y-1"
          >
            Discover My Journey
          </Button>
          <Button
            variant="outline"
            size="lg"
            onClick={() => scrollToSection("contact")}
            className="px-8 py-6 text-lg rounded-full border-white/20 hover:bg-white/10 hover:border-accent hover:text-accent transition-all duration-300 backdrop-blur-sm"
          >
            Contact Tower
          </Button>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute -bottom-32 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center gap-2 animate-bounce opacity-50">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">Scroll</span>
            <div className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center p-1">
              <div className="w-1 h-3 bg-accent rounded-full animate-scroll-down"></div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;