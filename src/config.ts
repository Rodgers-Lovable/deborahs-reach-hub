export const config = {
  // Contact Information
  teacherName: "Deborah Nyachoti",
  email: "deborahnyachoti27@gmail.com",
  phone: "+254757869633",
  whatsappNumber:  "+254757869633",
  location: "Nairobi, Kenya",
  
  // EmailJS Configuration
  // Get these from https://www.emailjs.com/
  emailjs: {
    serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
    templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
    publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
  },
  
  // Social Media & Links
  social: {
    linkedin: "",
    facebook: "",
    instagram: "",
  },
  
  // Business Info
  yearsOfExperience: 3,
  servingArea: "Nairobi, Kenya",
} as const;
