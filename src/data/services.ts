import { Service } from "@/types/service";

export const services: Service[] = [
  {
    id: "literacy-support",
    title: "Literacy Support",
    shortDescription: "Building foundational reading and writing skills through multisensory approaches.",
    longDescription: `
      <p>Specialized literacy instruction designed for learners with diverse needs. Using evidence-based multisensory techniques, I help children develop strong reading, writing, and comprehension skills at their own pace.</p>
      <p><strong>What we focus on:</strong></p>
      <ul>
        <li>Phonemic awareness and phonics instruction</li>
        <li>Reading fluency and comprehension strategies</li>
        <li>Written expression and handwriting skills</li>
        <li>Vocabulary development through engaging activities</li>
      </ul>
      <p>Each session is tailored to your child's learning style, strengths, and areas for growth.</p>
    `,
    icon: "BookOpen",
    ageRange: "5-14 years",
    duration: "60 minutes",
    features: ["Multisensory approach", "Individualized pacing", "Progress tracking"],
  },
  {
    id: "numeracy-skills",
    title: "Numeracy & Math Skills",
    shortDescription: "Making math accessible and enjoyable through hands-on, concrete learning experiences.",
    longDescription: `
      <p>Mathematics instruction that meets learners where they are. I use concrete materials, visual supports, and real-world applications to build mathematical understanding and confidence.</p>
      <p><strong>Areas covered:</strong></p>
      <ul>
        <li>Number sense and counting skills</li>
        <li>Basic operations (addition, subtraction, multiplication, division)</li>
        <li>Money skills and practical mathematics</li>
        <li>Time-telling and measurement concepts</li>
        <li>Problem-solving strategies</li>
      </ul>
      <p>Sessions include manipulatives, games, and activities that make math concrete and meaningful.</p>
    `,
    icon: "Calculator",
    ageRange: "5-16 years",
    duration: "60 minutes",
    features: ["Hands-on materials", "Visual supports", "Real-world applications"],
  },
  {
    id: "social-skills",
    title: "Social Skills Development",
    shortDescription: "Nurturing positive relationships and communication through guided practice and play.",
    longDescription: `
      <p>Social skills training designed to help children navigate social situations with confidence. Through structured activities, role-playing, and real-life practice, children learn essential interaction skills.</p>
      <p><strong>Key focus areas:</strong></p>
      <ul>
        <li>Turn-taking and sharing</li>
        <li>Reading social cues and body language</li>
        <li>Conversation skills and active listening</li>
        <li>Conflict resolution and problem-solving</li>
        <li>Emotional regulation and self-awareness</li>
        <li>Making and maintaining friendships</li>
      </ul>
      <p>Sessions can be conducted one-on-one or in small groups for peer interaction opportunities.</p>
    `,
    icon: "Users",
    ageRange: "4-16 years",
    duration: "45-60 minutes",
    features: ["Role-playing activities", "Peer interaction", "Parent coaching"],
  },
  {
    id: "sensory-integration",
    title: "Sensory Integration Support",
    shortDescription: "Creating sensory-friendly learning experiences for children with sensory processing differences.",
    longDescription: `
      <p>Specialized support for children who experience sensory processing challenges. I create adaptive learning environments and incorporate sensory strategies to enhance attention, regulation, and learning.</p>
      <p><strong>What's included:</strong></p>
      <ul>
        <li>Sensory-friendly learning spaces</li>
        <li>Regulation breaks and movement activities</li>
        <li>Adaptive seating and positioning</li>
        <li>Sensory tools and fidgets for focus</li>
        <li>Calming strategies and routines</li>
        <li>Collaboration with occupational therapists</li>
      </ul>
      <p>I work closely with families to understand each child's sensory profile and create supportive strategies.</p>
    `,
    icon: "Sparkles",
    ageRange: "3-12 years",
    duration: "45-90 minutes",
    features: ["Sensory assessments", "Adaptive materials", "Parent training"],
  },
  {
    id: "life-skills",
    title: "Life Skills & Independence",
    shortDescription: "Teaching practical daily living skills to promote independence and confidence.",
    longDescription: `
      <p>Functional life skills instruction to help children and teens develop the independence they need for daily living. Sessions focus on practical, real-world skills tailored to each learner's age and abilities.</p>
      <p><strong>Skills we work on:</strong></p>
      <ul>
        <li>Self-care routines (dressing, grooming, hygiene)</li>
        <li>Food preparation and kitchen safety</li>
        <li>Money management and shopping skills</li>
        <li>Time management and organization</li>
        <li>Community navigation and safety</li>
        <li>Household responsibilities</li>
      </ul>
      <p>I use task analysis, visual supports, and repeated practice to build mastery and confidence.</p>
    `,
    icon: "Home",
    ageRange: "6-18 years",
    duration: "60-90 minutes",
    features: ["Task breakdown", "Visual schedules", "Community-based learning"],
  },
  {
    id: "curriculum-modification",
    title: "Curriculum Support & Modification",
    shortDescription: "Adapting school curriculum to match your child's learning needs and pace.",
    longDescription: `
      <p>Individualized curriculum support that bridges the gap between school expectations and your child's current abilities. I work alongside classroom teachers and families to modify assignments, assessments, and learning materials.</p>
      <p><strong>Services include:</strong></p>
      <ul>
        <li>Breaking down complex assignments into manageable steps</li>
        <li>Creating visual supports and graphic organizers</li>
        <li>Developing alternative assessment methods</li>
        <li>Pre-teaching and reinforcing classroom content</li>
        <li>Homework support and organization strategies</li>
        <li>IEP goal alignment and progress monitoring</li>
      </ul>
      <p>Regular communication with school teams ensures consistency and collaborative support.</p>
    `,
    icon: "GraduationCap",
    ageRange: "5-16 years",
    duration: "60 minutes",
    features: ["School collaboration", "Modified materials", "Progress reports"],
  },
];
