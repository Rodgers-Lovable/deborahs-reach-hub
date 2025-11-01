import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import emailjs from "@emailjs/browser";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { config } from "@/config";

const contactSchema = yup.object({
  name: yup
    .string()
    .trim()
    .required("Name is required")
    .max(100, "Name must be less than 100 characters"),
  email: yup
    .string()
    .trim()
    .email("Please enter a valid email")
    .required("Email is required")
    .max(255, "Email must be less than 255 characters"),
  phone: yup
    .string()
    .trim()
    .matches(/^[0-9+\s()-]+$/, "Please enter a valid phone number")
    .max(20, "Phone number is too long"),
  childAge: yup
    .string()
    .trim()
    .max(50, "Please keep this brief"),
  message: yup
    .string()
    .trim()
    .required("Message is required")
    .max(2000, "Message must be less than 2000 characters"),
});

type ContactFormData = yup.InferType<typeof contactSchema>;

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: yupResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      await emailjs.send(
        config.emailjs.serviceId,
        config.emailjs.templateId,
        {
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || "Not provided",
          child_age: data.childAge || "Not provided",
          message: data.message,
          source: "Website Contact Form",
        },
        config.emailjs.publicKey
      );

      toast({
        title: "Message sent!",
        description: "Thank you for reaching out. I'll get back to you within 24 hours.",
      });
      reset();
    } catch (error) {
      console.error("EmailJS error:", error);
      toast({
        title: "Oops! Something went wrong",
        description: `Please try again or contact me directly at ${config.email}`,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
          Your Name <span className="text-destructive">*</span>
        </label>
        <Input
          id="name"
          type="text"
          {...register("name")}
          className="w-full focus-ring"
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
        />
        {errors.name && (
          <p id="name-error" className="text-sm text-destructive mt-1" role="alert">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
          Email Address <span className="text-destructive">*</span>
        </label>
        <Input
          id="email"
          type="email"
          {...register("email")}
          className="w-full focus-ring"
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
        />
        {errors.email && (
          <p id="email-error" className="text-sm text-destructive mt-1" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
          Phone Number (Optional)
        </label>
        <Input
          id="phone"
          type="tel"
          {...register("phone")}
          className="w-full focus-ring"
          aria-invalid={!!errors.phone}
          aria-describedby={errors.phone ? "phone-error" : undefined}
        />
        {errors.phone && (
          <p id="phone-error" className="text-sm text-destructive mt-1" role="alert">
            {errors.phone.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="childAge" className="block text-sm font-medium text-foreground mb-2">
          Child's Age (Optional)
        </label>
        <Input
          id="childAge"
          type="text"
          placeholder="e.g., 7 years old"
          {...register("childAge")}
          className="w-full focus-ring"
          aria-invalid={!!errors.childAge}
          aria-describedby={errors.childAge ? "childAge-error" : undefined}
        />
        {errors.childAge && (
          <p id="childAge-error" className="text-sm text-destructive mt-1" role="alert">
            {errors.childAge.message}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
          Message <span className="text-destructive">*</span>
        </label>
        <Textarea
          id="message"
          rows={6}
          {...register("message")}
          className="w-full focus-ring resize-none"
          placeholder="Tell me a bit about your child's needs and what you're looking for..."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="text-sm text-destructive mt-1" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
        size="lg"
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            <Send className="w-4 h-4 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
};
