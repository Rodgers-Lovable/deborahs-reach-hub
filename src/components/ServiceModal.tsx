import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, Users as UsersIcon, MessageCircle, Phone } from "lucide-react";
import { Service } from "@/types/service";
import { Button } from "@/components/ui/button";
import { config } from "@/config";

interface ServiceModalProps {
  service: Service | null;
  isOpen: boolean;
  onClose: () => void;
  onBookSession: () => void;
}

export const ServiceModal = ({ service, isOpen, onClose, onBookSession }: ServiceModalProps) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      returnFocusRef.current = document.activeElement as HTMLElement;
      closeButtonRef.current?.focus();
    } else if (returnFocusRef.current) {
      returnFocusRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen, onClose]);

  if (!service) return null;

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi! I'm interested in learning more about ${service.title}.`
    );
    window.open(
      `https://wa.me/${config.whatsappNumber.replace(/\D/g, "")}?text=${message}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-50"
            aria-hidden="true"
          />

          {/* Modal */}
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="bg-card rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="sticky top-0 bg-card border-b border-border px-6 py-4 flex items-center justify-between z-10">
                <h2 id="modal-title" className="text-2xl font-heading font-semibold text-foreground">
                  {service.title}
                </h2>
                <button
                  ref={closeButtonRef}
                  onClick={onClose}
                  className="p-2 rounded-lg hover:bg-muted transition-colors focus-ring"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 space-y-6">
                {/* Meta info */}
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  {service.ageRange && (
                    <div className="flex items-center gap-2">
                      <UsersIcon className="w-4 h-4 text-primary" />
                      <span>{service.ageRange}</span>
                    </div>
                  )}
                  {/* {service.duration && (
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{service.duration}</span>
                    </div>
                  )} */}
                </div>

                {/* Long description */}
                <div
                  className="prose prose-sm max-w-none text-foreground"
                  dangerouslySetInnerHTML={{ __html: service.longDescription }}
                />

                {/* Features */}
                {service.features && service.features.length > 0 && (
                  <div className="bg-muted/50 rounded-lg p-4">
                    <h3 className="font-semibold mb-3 text-foreground">What's Included:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <span className="text-primary mt-1">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button
                    onClick={onBookSession}
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground py-3"
                    size="lg"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Book a Consultation
                  </Button>

                  <Button
                    onClick={handleWhatsApp}
                    variant="outline"
                    className="flex-1  py-3"
                    size="lg"
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};
