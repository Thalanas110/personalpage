import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } as const }
};

const InterestsSection = () => {
  const interests = [
    {
      icon: "💻",
      title: "Programming & QA",
      description: "Creating and testing software solutions to  solve problems either I or others encounter.",
      features: ["Quality Assurance", "Software Development", "Problem Solving"]
    },
    {
      icon: "🎵",
      title: "Sleeping & Music",
      description: "After a long and tiring day, with my low social battery, I obviously would just rather sleep.",
      features: ["Bedroom sleeping", "Cuddling with my would-be wife", "Soft, mellow, Gospel music"]
    },
    {
      icon: "✈️",
      title: "Airplane Flying & Travelling",
      description: "As an aspiring pilot, yeah. We all know why. Best office ever to exist, especially during sunset.",
      features: ["Airports and Airplanes", "Path Planning and Conduct", "Exploring new places"]
    },
    {
      icon: "📚",
      title: "Reading & Learning",
      description: "You heard that right, I love reading. Just sad that I don't havve time and a good library to read books from.",
      features: ["Reading Books", "Online Courses", "Skill Building"]
    },
    {
      icon: "✝️",
      title: "Serving God",
      description: "I'm a Christian obviously, I don't want my programming skills to go to waste. I want to use it to serve God and His people.",
      features: ["Media Team", "Church Web Development", "Community Service", "Serving God"]
    }
  ];

  return (
    <section id="services" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-sunset bg-clip-text text-transparent">
            Main Interests lol
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm bored so read this thing hahaha goodluck!
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          {interests.map((interest, index) => (
            <motion.div key={index} variants={item}>
              <Card
                className="group h-full p-8 bg-gradient-glass backdrop-blur-md border-border/50 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
              >
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {interest.icon}
                  </div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">
                    {interest.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {interest.description}
                  </p>
                </div>

                <div className="space-y-3">
                  {interest.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-3 p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300"
                    >
                      <div className="w-2 h-2 bg-gradient-sunset rounded-full flex-shrink-0"></div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-border/30">
                  <div className="text-center">
                    <div className="inline-flex items-center space-x-2 text-accent group-hover:text-sunset-orange transition-colors duration-300">
                      <span className="font-medium">Explore More (to follow)</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-16 text-center"
        >
          <Card className="p-8 bg-gradient-aviation backdrop-blur-md border-border/50 shadow-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-foreground mb-4">
              Want to Connect?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'd love to hear about your interests and maybe discover some new hobbies together!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-accent">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Shared Adventures</span>
              </div>
              <div className="flex items-center space-x-2 text-accent">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Fun Conversations</span>
              </div>
              <div className="flex items-center space-x-2 text-accent">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Lasting Friendships</span>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section >
  );
};

export default InterestsSection;