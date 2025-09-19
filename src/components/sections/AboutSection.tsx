import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import personalPhoto from "@/assets/personal-photo-placeholder.jpg";

const AboutSection = () => {
  const handlePortfolioClick = () => {
    // Replace with your actual portfolio URL
    window.open("https://adriaandimate.vercel.app/", "_blank");
  };

  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-sunset bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every great journey begins with a single flight. Mine started with a passion for 
            innovation and a commitment to excellence.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-glass backdrop-blur-md border-border/50 shadow-card">
              <h3 className="text-2xl font-semibold mb-4 text-accent">
                My Mission
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Like a skilled pilot navigating through diverse weather conditions, I bring 
                adaptability, precision, and strategic thinking to every project. My goal is 
                to help businesses and individuals reach their destinations safely and efficiently.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With years of experience in the digital landscape, I've learned that success 
                isn't just about the destination—it's about the journey, the preparation, 
                and the trust you place in your pilot.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-glass backdrop-blur-md border-border/50 shadow-card">
              <h3 className="text-2xl font-semibold mb-4 text-accent">
                Core Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Precision", desc: "Attention to every detail" },
                  { title: "Innovation", desc: "Always pushing boundaries" },
                  { title: "Reliability", desc: "Consistent excellence" },
                  { title: "Growth", desc: "Continuous improvement" }
                ].map((value, index) => (
                  <div key={index} className="text-center p-4 rounded-lg bg-secondary/30">
                    <div className="font-semibold text-foreground">{value.title}</div>
                    <div className="text-sm text-muted-foreground">{value.desc}</div>
                  </div>
                ))}
              </div>
            </Card>

            <div className="text-center">
              <Button
                size="lg"
                onClick={handlePortfolioClick}
                className="px-8 py-4 text-lg bg-gradient-aviation hover:shadow-glow transition-all duration-300"
              >
                View My Works
              </Button>
            </div>
          </div>

          {/* Personal Image & Info */}
          <div className="space-y-6">
            {/* Personal Photo */}
            <Card className="p-8 bg-gradient-glass backdrop-blur-md border-border/50 shadow-card">
              <div className="text-center space-y-6">
                <div className="relative w-48 h-48 mx-auto">
                  <img 
                    src={personalPhoto} 
                    alt="Personal photo"
                    className="w-full h-full object-cover rounded-full border-4 border-accent shadow-glow"
                  />
                  <div className="absolute inset-0 rounded-full bg-gradient-sunset opacity-20 animate-pulse"></div>
                </div>
                <div className="space-y-3">
                  <h4 className="text-2xl font-semibold text-foreground">
                    Hello, I'm [Your Name]
                  </h4>
                  <p className="text-muted-foreground">
                    Welcome to my little corner of the internet where I share my journey, 
                    passions, and the things that make life interesting.
                  </p>
                </div>
              </div>
            </Card>

            {/* Personal Highlights */}
            <Card className="p-8 bg-gradient-glass backdrop-blur-md border-border/50 shadow-card">
              <div className="text-center space-y-6">
                <h4 className="text-xl font-semibold text-foreground">
                  What Makes Me Tick
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300">
                    <div className="text-2xl mb-2">🌟</div>
                    <div className="text-sm font-medium text-foreground">Curious Mind</div>
                    <div className="text-xs text-muted-foreground">Always learning</div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-sm font-medium text-foreground">Goal-Driven</div>
                    <div className="text-xs text-muted-foreground">Dream chaser</div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300">
                    <div className="text-2xl mb-2">🤝</div>
                    <div className="text-sm font-medium text-foreground">People Person</div>
                    <div className="text-xs text-muted-foreground">Love connections</div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300">
                    <div className="text-2xl mb-2">✨</div>
                    <div className="text-sm font-medium text-foreground">Creative Soul</div>
                    <div className="text-xs text-muted-foreground">Art & beauty</div>
                  </div>
                </div>
                <div className="pt-4 text-center">
                  <p className="text-sm text-muted-foreground italic">
                    "Life is either a daring adventure or nothing at all." - Helen Keller
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;