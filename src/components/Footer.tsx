import { Heart } from "lucide-react";
import { config } from "@/config";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground/5 border-t border-border py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                © {currentYear} {config.teacherName}. All rights reserved.
              </p>
            </div>

            <div className="text-center md:text-left">
              <p className="text-sm text-muted-foreground">
                Developed and Maintained by{" "}
                <a
                  href={`${config.developer.website}`}
                  className="text-primary"
                >
                  {config.developer.name}
                </a>
              </p>
            </div>

            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart
                className="w-4 h-4 text-destructive fill-destructive"
                aria-label="love"
              />
              <span>for every child's potential</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-xs text-muted-foreground max-w-2xl mx-auto">
              All sessions are conducted in compliance with professional
              teaching standards and child safety protocols. Individual results
              may vary based on each child's unique needs and circumstances.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
