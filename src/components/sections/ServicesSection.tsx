import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 40, damping: 15 } as const }
};

const InterestsSection = () => {
  const interests = [
    {
      icon: "💻",
      title: "Programming & QA",
      description: "Crafting robust software solutions and ensuring quality through rigorous testing.",
      features: ["Quality Assurance", "Software Development", "System Architecture"],
      link: "https://adriaansportfolio.netlify.app/"
    },
    {
      icon: "✝️",
      title: "Faith & Service",
      description: "Using my technical gifts to serve the Church and spread the Gospel through digital means.",
      features: ["Media Ministry", "Church Web Dev", "Community Outreach"],
      link: "https://adriaansdevotions.netlify.app/"
    },
    {
      icon: "✈️",
      title: "Aviation",
      description: "Pursuing the dream of flight. The cockpit is the ultimate office with the best views.",
      features: ["Student Pilot", "Aviation Theory", "Flight Sim"],
      link: null
    },
    {
      icon: "🎵",
      title: "Music & Rest",
      description: "Recharging through the power of gospel music and necessary downtime.",
      features: ["Gospel Music", "Acoustic Sessions", "Rest & Recovery"],
      link: "https://open.spotify.com/user/31kuops4bkgxnoltca7ksgtfyxgu?si=bb4f4f0cf156416a"
    },
    {
      icon: "📚",
      title: "Continuous Learning",
      description: "expanding horizons through books, documentation, and lifelong education.",
      features: ["Reading", "Online Courses", "Skill Acquisition"],
      link: null
    }
  ];

  return (
    <section id="services" className="min-h-screen py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-sunset bg-clip-text text-transparent inline-block">
            Fields of Interest
          </h2>
          <div className="h-1 w-24 bg-gradient-sunset mx-auto rounded-full mb-6" />
          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto leading-relaxed font-light">
            Exploring the intersection of technology, faith, and aviation.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {interests.map((interest, index) => (
            <motion.div key={index} variants={item} className="h-full">
              <Card
                className="group h-full p-8 bg-white/5 backdrop-blur-md border border-white/10 hover:border-accent/50 card-hover-effect rounded-2xl flex flex-col justify-between"
              >
                <div>
                  <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:bg-gradient-sunset group-hover:text-white transition-all duration-300 shadow-lg">
                    {interest.icon}
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-accent transition-colors">
                    {interest.title}
                  </h3>

                  <p className="text-muted-foreground leading-relaxed mb-6 font-light">
                    {interest.description}
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {interest.features.map((feature, featureIndex) => (
                      <span
                        key={featureIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 border border-white/10 text-muted-foreground/80 group-hover:border-accent/30 group-hover:text-accent transition-colors"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-white/5 flex justify-between items-center">
                    {interest.link ? (
                      <a
                        href={interest.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-medium text-accent hover:text-white transition-colors gap-2 group-hover:translate-x-1 duration-300"
                      >
                        Explore <span className="text-lg">→</span>
                      </a>
                    ) : (
                      <span className="text-sm text-muted-foreground/50 italic">Coming Soon</span>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action Bar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-20 mx-auto max-w-4xl"
        >
          <div className="p-1 rounded-3xl bg-gradient-to-r from-transparent via-accent/20 to-transparent">
            <div className="bg-background/80 backdrop-blur-xl border border-white/10 rounded-[22px] p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute top-0 right-0 p-12 bg-accent/5 rounded-full blur-3xl -z-10" />
              <div className="absolute bottom-0 left-0 p-12 bg-primary/5 rounded-full blur-3xl -z-10" />

              <h3 className="text-2xl md:text-3xl font-bold mb-4">Let's Connect & Collaborate</h3>
              <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
                Whether it's discussing code, sharing flight stories, or finding common ground in faith.
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-accent">
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent animate-pulse" /> Collaborative Spirit</span>
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-300" /> Open Discourse</span>
                <span className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-500" /> Shared Growth</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section >
  );
};

export default InterestsSection;