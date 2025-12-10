import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

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
    toast({
      title: "Message System Offline",
      description: "This frequency is currently silent. Please use the direct contact methods on the right!",
      variant: "destructive"
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
      value: "+63 943 065 4178",
      action: "tel:+639430654178"
    },
    {
      icon: "📍",
      title: "Base",
      value: "Olongapo City, Zambales",
      action: "#"
    }
  ];

  return (
    <section id="contact" className="min-h-screen py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-gradient-radial from-accent/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-sunset bg-clip-text text-transparent">
            Request Clearance
          </h2>
          <p className="text-xl text-muted-foreground/80 max-w-2xl mx-auto font-light">
            Ready to collaborate? Establish radio contact below.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="p-8 bg-white/5 backdrop-blur-md border border-white/10 shadow-card rounded-3xl h-full">
              <div className="mb-6 flex justify-between items-center">
                <h3 className="text-2xl font-semibold text-foreground">
                  Flight Plan (Message)
                </h3>
                <span className="px-3 py-1 bg-red-500/10 text-red-500 text-xs rounded-full border border-red-500/20 animate-pulse">
                  Radio Silence
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80 pl-1">Name</label>
                    <Input
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Captain Name"
                      className="bg-white/5 border-white/10 focus:border-accent text-foreground placeholder:text-muted-foreground/30 h-12 rounded-xl"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground/80 pl-1">Email Coordinates</label>
                    <Input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="pilot@airline.com"
                      className="bg-white/5 border-white/10 focus:border-accent text-foreground placeholder:text-muted-foreground/30 h-12 rounded-xl"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80 pl-1">Subject</label>
                  <Input
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    placeholder="Briefing Topic"
                    className="bg-white/5 border-white/10 focus:border-accent text-foreground placeholder:text-muted-foreground/30 h-12 rounded-xl"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80 pl-1">Message</label>
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Enter flight details..."
                    rows={6}
                    className="bg-white/5 border-white/10 focus:border-accent text-foreground placeholder:text-muted-foreground/30 rounded-xl resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full h-12 text-lg bg-gradient-sunset hover:shadow-glow transition-all duration-300 rounded-xl"
                >
                  Transmit Message 📡
                </Button>
              </form>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="p-8 bg-gradient-aviation backdrop-blur-md border border-white/10 shadow-card rounded-3xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl group-hover:bg-accent/20 transition-colors" />
              <h3 className="text-2xl font-semibold text-foreground mb-8 relative z-10">
                Direct Channels
              </h3>
              <div className="space-y-4 relative z-10">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.action}
                    target={info.action.startsWith('http') ? '_blank' : undefined}
                    rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="flex items-center space-x-4 p-4 rounded-2xl bg-white/5 hover:bg-white/10 border border-transparent hover:border-white/10 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="w-12 h-12 rounded-full bg-background/30 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300 shadow-lg">
                      {info.icon}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-muted-foreground">{info.title}</div>
                      <div className="text-lg font-medium text-foreground group-hover:text-accent transition-colors duration-300">
                        {info.value}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            <Card className="p-8 bg-white/5 backdrop-blur-md border border-white/10 shadow-card rounded-3xl text-center">
              <div className="flex flex-col items-center gap-4">
                <div className="animate-float text-6xl">🛫</div>
                <div>
                  <h4 className="text-xl font-bold bg-gradient-sunset bg-clip-text text-transparent">Thank you for visiting!</h4>
                  <p className="text-muted-foreground mt-2 font-light">
                    "May your skies be clear and your code be bug-free."
                  </p>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;