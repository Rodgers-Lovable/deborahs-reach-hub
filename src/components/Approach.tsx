import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export const Approach = () => {
  const principles = [
    {
      title: "Individualized Learning Plans",
      description:
        "Every child is unique. I create personalized learning plans based on comprehensive assessments and ongoing progress monitoring.",
    },
    {
      title: "Multisensory Instruction",
      description:
        "Engaging visual, auditory, and kinesthetic learning pathways to enhance understanding and retention.",
    },
    {
      title: "Positive Reinforcement",
      description:
        "Building confidence through celebrating successes, encouraging effort, and creating a safe space to make mistakes and learn.",
    },
    {
      title: "Family Collaboration",
      description:
        "Regular communication and parent training to ensure consistency and support at home.",
    },
    {
      title: "Flexible Pacing",
      description:
        "Moving at your child's pace, with patience and understanding, ensuring mastery before advancing.",
    },
    {
      title: "Real-World Application",
      description:
        "Connecting learning to daily life, making skills functional and meaningful for each child.",
    },
  ];

  return (
    <section id="approach" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              My Teaching Approach
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Evidence-based strategies combined with compassion and creativity to support each
              learner's journey
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border border-border"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle2
                    className="w-6 h-6 text-accent flex-shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="font-heading font-semibold text-lg text-foreground mb-2">
                      {principle.title}
                    </h3>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
