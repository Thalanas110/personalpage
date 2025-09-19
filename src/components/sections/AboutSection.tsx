import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import personalPhoto from "@/assets/personalPhoto.jpg";

const AboutSection = () => {
  const handlePortfolioClick = () => {
    // vercel portfolio Q bruh
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
            Every aspiring pilot has a story. With God, passion, and perseverance,
            here's mine.
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
                Despite autism spectrum, the aim is to achieve the dream of becoming
                an airline pilot while leveraging software engineering skills to make
                a positive impact in the tech world, no matter how long it takes, or
                whatever it will take.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                With God as my guide, I believe that with passion, perseverance,
                and a lot of coffee, I can overcome any obstacle and reach for the skies.
                Furthermore, I aim to use my programming skills to serve God and His people,
                spreading the Gospel through technology and innovation.
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
                  { title: "Pain Endurance", desc: "Ability to endure massive hardship" },
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
                    Hii, I'm Dr. Adriaan M. Dimate, Senior Captain
                  </h4>
                  <h5 className="text-lg text-accent font-medium">
                    (just kidding, probbs in the future, soon to be!)
                  </h5>
                  <p className="text-muted-foreground">
                    Welcome to my lil corner lolz
                    Enjoy reading this!
                  </p>
                </div>
              </div>
            </Card>

            {/* Personal Highlights */}
            <Card className="p-8 bg-gradient-glass backdrop-blur-md border-border/50 shadow-card">
              <div className="text-center space-y-6">
                <h4 className="text-xl font-semibold text-foreground">
                  ihhhhhh a few things about me
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300">
                    <div className="text-2xl mb-2">🌟</div>
                    <div className="text-sm font-medium text-foreground">Curious Mind</div>
                    <div className="text-xs text-muted-foreground">Always learning</div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300">
                    <div className="text-2xl mb-2">🎯</div>
                    <div className="text-sm font-medium text-foreground">Militaristic</div>
                    <div className="text-xs text-muted-foreground">Doesn't care if its impossible or no</div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300">
                    <div className="text-2xl mb-2">🤝</div>
                    <div className="text-sm font-medium text-foreground">Goal-Driven</div>
                    <div className="text-xs text-muted-foreground">Achieves objectives</div>
                  </div>
                  <div className="p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors duration-300">
                    <div className="text-2xl mb-2">✨</div>
                    <div className="text-sm font-medium text-foreground">God-powered</div>
                    <div className="text-xs text-muted-foreground">Guided, armored, victorious.</div>
                  </div>
                </div>
                <div className="pt-4 text-center">
                  <p className="text-sm text-muted-foreground italic">
                    "Blessed be the Lord, my rock, who trains my hands for war and my fingers for battle" - Psalm 144:1
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