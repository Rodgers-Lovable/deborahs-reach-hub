import { motion } from "framer-motion";
import { Heart, Target, Award } from "lucide-react";
import aboutImage from "@/assets/about-learning.jpg";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-muted/30">
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
              About Me
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate about creating inclusive learning experiences where every child can thrive
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={aboutImage}
                alt="Child's hands arranging colorful geometric shapes during a learning activity"
                className="rounded-xl shadow-lg w-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <p className="text-lg text-foreground/90 leading-relaxed">
                Hello! I'm <strong>Deborah Nyachoti</strong>, a certified special education teacher
                with over 8 years of experience supporting children with diverse learning needs. My
                journey in special education has taught me that every child has unique strengths
                waiting to be discovered.
              </p>

              <p className="text-lg text-foreground/90 leading-relaxed">
                I specialize in creating individualized learning plans that meet each child exactly
                where they are, using evidence-based strategies, multisensory approaches, and lots
                of patience and encouragement.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-primary" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Child-Centered Approach</h3>
                    <p className="text-muted-foreground">
                      Every session is tailored to your child's interests, strengths, and learning
                      style.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-accent" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Goal-Oriented</h3>
                    <p className="text-muted-foreground">
                      Clear, measurable goals with regular progress monitoring and family
                      collaboration.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/30 flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-foreground" aria-hidden="true" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Evidence-Based Methods</h3>
                    <p className="text-muted-foreground">
                      Using research-backed strategies proven to support diverse learners.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
