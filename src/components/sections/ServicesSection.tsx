import { Card } from "@/components/ui/card";

const InterestsSection = () => {
  const interests = [
    {
      icon: "📸",
      title: "Photography",
      description: "Capturing life's beautiful moments through the lens, from stunning landscapes to candid portraits.",
      features: ["Travel Photography", "Nature Shots", "Street Photography"]
    },
    {
      icon: "🎵",
      title: "Music",
      description: "Finding rhythm and melody in everyday life, whether it's playing instruments or discovering new artists.",
      features: ["Guitar Playing", "Music Discovery", "Concert Going"]
    },
    {
      icon: "✈️",
      title: "Travel & Adventure",
      description: "Exploring new places, cultures, and experiences that broaden perspectives and create lasting memories.",
      features: ["City Exploration", "Hiking Trails", "Cultural Experiences"]
    },
    {
      icon: "📚",
      title: "Learning & Growth",
      description: "Constantly curious about the world, always seeking new knowledge and skills to expand my horizons.",
      features: ["Reading Books", "Online Courses", "Skill Building"]
    }
  ];

  return (
    <section id="services" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-sunset bg-clip-text text-transparent">
            My Interests
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Life is a journey of discovery. Here are the passions and hobbies that fuel my curiosity 
            and bring joy to my everyday adventures.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {interests.map((interest, index) => (
            <Card 
              key={index} 
              className="group p-8 bg-gradient-glass backdrop-blur-md border-border/50 shadow-card hover:shadow-glow transition-all duration-500 hover:-translate-y-2"
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
                    <span className="font-medium">Explore More</span>
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
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
        </div>
      </div>
    </section>
  );
};

export default InterestsSection;