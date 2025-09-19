import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission is under construction. This should come as a form of email being sent to me lolz
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "aadimate55@gmail.com",
      action: "mailto:aadimate55@gmail.com"
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+63 943 065 4178 (PH)",
      action: "tel:+639430654178"
    },
    {
      icon: "📍",
      title: "Location",
      value: "Olongapo City, Zambales, Philippines 2200",
      action: "#"
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "Connect with me",
      action: "tofollow"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16 overflow-visible">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-sunset bg-clip-text text-transparent leading-[1.18] md:leading-[1.12] pb-1">
            Ready for Departure?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's chart a course together. Whether you have a project in mind or just want to connect, 
            I'm here to help you reach your destination.
          </p>
          <h3 className="text-lg text-muted-foreground mt-2">
            (Still under construction tho, so yeahh)
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 bg-gradient-glass backdrop-blur-md border-border/50 shadow-card">
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              Send a Message (Currently not working, under construction. Just use the details at the right side)
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Name
                  </label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-accent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Email
                  </label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your@email.com"
                    required
                    className="bg-secondary/50 border-border/50 focus:border-accent"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project inquiry"
                  required
                  className="bg-secondary/50 border-border/50 focus:border-accent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your project..."
                  rows={6}
                  required
                  className="bg-secondary/50 border-border/50 focus:border-accent resize-none"
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-sunset hover:shadow-glow transition-all duration-300"
              >
                Launch Message 🚀
              </Button>
            </form>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="p-8 bg-gradient-glass backdrop-blur-md border-border/50 shadow-card">
              <h3 className="text-2xl font-semibold text-foreground mb-6">
                Get In Touch
              </h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform duration-300">
                      {info.icon}
                    </div>
                    <div>
                      <div className="font-medium text-foreground">{info.title}</div>
                      <div className="text-muted-foreground group-hover:text-accent transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-gradient-aviation backdrop-blur-md border-border/50 shadow-card">
              <h4 className="text-xl font-semibold text-foreground mb-4">
                (this is under construction please bear with me, I can't do these just yet lolz)
              </h4>
              <div className="space-y-3 text-muted-foreground">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Response within 24 hours</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Free initial consultation</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Flexible scheduling</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-gradient-glass backdrop-blur-md border-border/50 shadow-card text-center">
              <div className="animate-float">
                <div className="text-4xl mb-3">✈️</div>
                <p className="text-muted-foreground">
                  Lets gooo!
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;