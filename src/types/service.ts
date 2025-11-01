export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: string;
  ageRange?: string;
  duration?: string;
  features?: string[];
}
