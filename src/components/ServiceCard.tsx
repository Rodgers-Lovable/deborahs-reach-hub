import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";
import { Service } from "@/types/service";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  service: Service;
  onReadMore: (serviceId: string) => void;
  index: number;
}

export const ServiceCard = ({ service, onReadMore, index }: ServiceCardProps) => {
  const Icon = (LucideIcons as any)[service.icon] || LucideIcons.BookOpen;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full hover:shadow-lg transition-all duration-300 group border-border">
        <CardHeader>
          <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
            <Icon className="w-6 h-6 text-primary" aria-hidden="true" />
          </div>
          <CardTitle className="text-xl font-heading">{service.title}</CardTitle>
          <CardDescription className="text-base mt-2">
            {service.shortDescription}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button
            variant="link"
            className="p-0 h-auto text-primary hover:text-primary/80"
            onClick={() => onReadMore(service.id)}
            aria-label={`Read more about ${service.title}`}
          >
            Read more →
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  );
};
