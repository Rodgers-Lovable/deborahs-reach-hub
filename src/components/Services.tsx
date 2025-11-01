import { useState } from "react";
import { motion } from "framer-motion";
import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";
import { ServiceModal } from "./ServiceModal";

export const Services = () => {
  const [selectedServiceId, setSelectedServiceId] = useState<string | null>(null);

  const selectedService = services.find((s) => s.id === selectedServiceId) || null;

  const handleReadMore = (serviceId: string) => {
    setSelectedServiceId(serviceId);
  };

  const handleCloseModal = () => {
    setSelectedServiceId(null);
  };

  const handleBookSession = () => {
    setSelectedServiceId(null);
    const element = document.getElementById("contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive support tailored to your child's unique needs and learning goals
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              service={service}
              onReadMore={handleReadMore}
              index={index}
            />
          ))}
        </div>
      </div>

      <ServiceModal
        service={selectedService}
        isOpen={!!selectedServiceId}
        onClose={handleCloseModal}
        onBookSession={handleBookSession}
      />
    </section>
  );
};
