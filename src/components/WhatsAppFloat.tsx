import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { config } from "@/config";

export const WhatsAppFloat = () => {
  const handleClick = () => {
    const message = encodeURIComponent(
      "Hi! I found your website and I'm interested in learning more about your services."
    );
    window.open(
      `https://wa.me/${config.whatsappNumber.replace(/\D/g, "")}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <motion.button
      onClick={handleClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.3 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg focus-ring"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle className="w-6 h-6" aria-hidden="true" />
      <span className="absolute -top-1 -right-1 w-3 h-3 bg-destructive rounded-full animate-pulse" />
    </motion.button>
  );
};
