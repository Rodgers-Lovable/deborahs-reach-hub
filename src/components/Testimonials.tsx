import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Deborah has been a blessing to our family. Our son has made incredible progress in reading and now actually enjoys his lessons! Her patience and creativity are unmatched.",
      parent: "Sarah M.",
      relationship: "Parent of 8-year-old student",
    },
    {
      quote:
        "The individualized approach made all the difference. Deborah took time to understand my daughter's sensory needs and learning style. We've seen tremendous growth in confidence and skills.",
      parent: "James K.",
      relationship: "Parent of 6-year-old student",
    },
    {
      quote:
        "As a parent, I appreciate the regular communication and practical strategies Deborah shares. She's not just teaching my child—she's equipping our whole family with tools to support his learning.",
      parent: "Grace O.",
      relationship: "Parent of 10-year-old student",
    },
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
            What Families Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Testimonials from parents who've seen their children thrive
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full border-border hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <Quote
                    className="w-10 h-10 text-primary/20 mb-4"
                    aria-hidden="true"
                  />
                  <p className="text-foreground/90 mb-6 leading-relaxed italic">
                    "{testimonial.quote}"
                  </p>
                  <div className="border-t border-border pt-4">
                    <p className="font-semibold text-foreground">{testimonial.parent}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.relationship}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
