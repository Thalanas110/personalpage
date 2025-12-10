import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import personalPhoto from "@/assets/personalPhoto.jpg";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 50 } as const }
};

const AboutSection = () => {
  // Personal info
  const personal = {
    birthDateTime: '2004-09-26T01:40:00',
    relationship: 'Engaged',
    sex: 'M',
    religion: 'Born Again Christian',
  };

  const calcAgeDetailed = (birthISO: string) => {
    const now = new Date();
    const birth = new Date(birthISO);

    let years = now.getFullYear() - birth.getFullYear();
    let months = now.getMonth() - birth.getMonth();
    let days = now.getDate() - birth.getDate();
    let hours = now.getHours() - birth.getHours();
    let minutes = now.getMinutes() - birth.getMinutes();

    if (minutes < 0) {
      minutes += 60;
      hours--;
    }
    if (hours < 0) {
      hours += 24;
      days--;
    }
    if (days < 0) {
      const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
      days += prevMonth.getDate();
      months--;
    }
    if (months < 0) {
      months += 12;
      years--;
    }

    return { years, months, days, hours, minutes };
  };

  const formatBirthday = (birthISO: string) => {
    const d = new Date(birthISO);
    return d.toLocaleString(undefined, {
      year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit'
    });
  };

  const handlePortfolioClick = () => {
    window.open("https://adriaansportfolio.netlify.app/", "_blank");
  };

  return (
    <section id="about" className="min-h-screen py-24 px-6 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-sky-blue/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center p-2 mb-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <span className="text-sm font-medium text-muted-foreground px-3">Flight Log: Captain's Profile</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-sunset bg-clip-text text-transparent">
            About The Captain
          </h2>
          <p className="text-xl text-muted-foreground/80 max-w-3xl mx-auto leading-relaxed font-light">
            Every flight plan has a story. Driven by faith, fueled by passion, and navigating towards the horizon.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-2 gap-12 items-start"
        >
          {/* Left Column: Narrative */}
          <div className="space-y-6">
            <motion.div variants={item}>
              <Card className="p-8 bg-white/5 backdrop-blur-md border border-white/10 shadow-card hover:border-accent/30 transition-colors duration-500 rounded-3xl">
                <h3 className="text-2xl font-semibold mb-4 text-accent flex items-center gap-3">
                  <span className="text-3xl">🔭</span> Vision
                </h3>
                <p className="text-lg text-muted-foreground/90 leading-relaxed mb-6 font-light">
                  To be a compassionate and skilled pilot and developer—using technology
                  not just for innovation, but as a tool to uplift communities. I seek to glorify God through every
                  line of code and every flight, rooted in excellence and integrity.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="p-8 bg-white/5 backdrop-blur-md border border-white/10 shadow-card hover:border-accent/30 transition-colors duration-500 rounded-3xl">
                <h3 className="text-2xl font-semibold mb-4 text-accent flex items-center gap-3">
                  <span className="text-3xl">🎯</span> Mission
                </h3>
                <p className="text-lg text-muted-foreground/90 leading-relaxed font-light">
                  Despite the challenges of the spectrum, my mission is to achieve the dream of becoming
                  an airline pilot while leveraging software engineering making a positive impact.
                  With God as my guide, passion as my fuel, and perseverance as my wings, I aim to reach the skies.
                </p>
              </Card>
            </motion.div>

            <motion.div variants={item}>
              <Card className="p-8 bg-white/5 backdrop-blur-md border border-white/10 shadow-card hover:border-accent/30 transition-colors duration-500 rounded-3xl">
                <h3 className="text-2xl font-semibold mb-6 text-accent">
                  Core Values
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Precision", desc: "Attention to detail in code & cockpit." },
                    { title: "Innovation", desc: "Pushing boundaries with new tech." },
                    { title: "Perseverance", desc: "Enduring hardship to reach heights." },
                    { title: "Growth", desc: "Continuous learning and improvement." }
                  ].map((value, index) => (
                    <div key={index} className="p-4 rounded-2xl bg-white/5 hover:bg-white/10 transition-colors duration-300 border border-white/5">
                      <div className="text-base font-bold text-foreground mb-1">{value.title}</div>
                      <div className="text-sm text-muted-foreground font-light">{value.desc}</div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div variants={item} className="text-center md:text-left">
              <Button
                size="lg"
                onClick={handlePortfolioClick}
                className="w-full md:w-auto px-8 py-6 text-lg rounded-full bg-gradient-aviation hover:bg-gradient-to-br hover:from-aviation-blue hover:to-aviation-light shadow-glow transition-all duration-300 transform hover:-translate-y-1"
              >
                View My Engineering Logbook 🛠️
              </Button>
            </motion.div>
          </div>

          {/* Right Column: Personal Info & Photo */}
          <div className="space-y-6">
            {/* Personal Photo */}
            <motion.div variants={item}>
              <div className="relative group">
                {/* Rotating Ring Effect */}
                <div className="absolute inset-0 bg-gradient-sunset rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-500 animate-pulse" />

                <Card className="relative p-8 bg-white/5 backdrop-blur-md border border-white/10 shadow-card overflow-hidden rounded-3xl text-center">
                  <div className="relative w-56 h-56 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full border-2 border-accent/20 animate-spin-slow p-2">
                      <div className="w-full h-full rounded-full border border-dashed border-accent/40" />
                    </div>
                    <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-background shadow-2xl">
                      <img
                        src={personalPhoto}
                        alt="Personal photo"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent">
                      Adriaan M. Dimate
                    </h4>
                    <p className="text-accent font-medium tracking-wide text-sm uppercase">Future Captain & Senior Engineer</p>
                    <p className="text-muted-foreground/80 text-sm italic mt-4 max-w-sm mx-auto">
                      "Welcome to my little corner of the internet. Fasten your seatbelts!"
                    </p>
                  </div>
                </Card>
              </div>
            </motion.div>

            {/* Stats / Info */}
            <motion.div variants={item}>
              <Card className="p-8 bg-white/5 backdrop-blur-md border border-white/10 shadow-card rounded-3xl">
                <h4 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
                  <span className="w-2 h-6 bg-accent rounded-full" /> Personal Manifest
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  {[
                    { icon: '🧭', title: 'Age', value: `${(() => { const a = calcAgeDetailed(personal.birthDateTime); return `${a.years}y ${a.months}m`; })()}` },
                    { icon: '🎂', title: 'Birthday', value: formatBirthday(personal.birthDateTime) },
                    { icon: '❤️', title: 'Status', value: personal.relationship },
                    { icon: '⚧', title: 'Sex', value: personal.sex },
                    { icon: '✝️', title: 'Religion', value: personal.religion },
                    { icon: '🎓', title: 'Student', value: 'Yes' },
                  ].map((item, idx) => (
                    <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                      <div className="text-xl mb-1 opacity-80">{item.icon}</div>
                      <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{item.title}</div>
                      <div className="text-sm font-medium text-foreground truncate">{item.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-sm text-center text-muted-foreground italic font-light">
                    "Blessed be the Lord, my rock, who trains my hands for war and my fingers for battle" <br />- Psalm 144:1
                  </p>
                </div>

                <div className="mt-6">
                  <Button
                    variant="outline"
                    className="w-full py-6 bg-transparent border-white/10 text-muted-foreground hover:text-foreground hover:bg-white/5 hover:border-accent/50 transition-all duration-300 group overflow-hidden relative"
                    onClick={() => window.open('https://moralesbucketlist.netlify.app', '_blank')}
                  >
                    <span className="relative z-10 flex items-center justify-center gap-2">
                      My Bucket List 🪣
                    </span>
                    <div className="absolute inset-0 bg-accent/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                  </Button>
                </div>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;