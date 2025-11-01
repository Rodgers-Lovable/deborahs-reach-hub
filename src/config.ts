export const config = {
  // Contact Information
  teacherName: "Deborah Nyachoti",
  email: "deborah@example.com", // Replace with actual email
  phone: "+254712345678", // Replace with actual phone number
  whatsappNumber: "+254712345678", // Replace with actual WhatsApp number
  location: "Nairobi, Kenya",
  
  // EmailJS Configuration
  // Get these from https://www.emailjs.com/
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID",
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID",
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY",
  },
  
  // Social Media & Links
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
  },
  
  // Business Info
  yearsOfExperience: 8,
  servingArea: "Nairobi and Online",
} as const;
