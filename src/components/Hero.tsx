import { motion } from "framer-motion";
import { MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { config } from "@/config";
import heroImage from "@/assets/hero-classroom.jpg";

export const Hero = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      "Hi! I'm interested in learning more about your special education services."
    );
    window.open(
      `https://wa.me/${config.whatsappNumber.replace(/\D/g, "")}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Bright, welcoming classroom with colorful learning materials and educational toys"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
              Helping Every Child Reach Their Full Potential
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto"
          >
            Individualized special education & tutoring — home-based & virtual sessions in Nairobi
            and online.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg px-8 py-6 h-auto"
            >
              <Phone className="w-5 h-5 mr-2" />
              Book a Consultation
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={handleWhatsApp}
              className="text-lg px-8 py-6 h-auto border-2"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Message on WhatsApp
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 pt-12 border-t border-border/50"
          >
            <div className="flex flex-wrap justify-center gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                  {config.yearsOfExperience}+
                </div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">1:1</div>
                <div className="text-sm text-muted-foreground">Personalized Support</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">Home</div>
                <div className="text-sm text-muted-foreground">& Virtual Sessions</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
