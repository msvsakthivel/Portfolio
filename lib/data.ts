
import { FaAmazon,FaCloud, FaGithub, FaGraduationCap, FaLinkedin,FaLinux, FaTwitter,} from "react-icons/fa";
import { MdMail } from "react-icons/md";


export const experienceData = [
  {
    title: "Internship",
    company: "Sohoran",
    location: "Erode, India",
    description: [
      "Designed, Developed, and Maintained robust software applications, ensuring high performance and scalability.",
    ],
    date: "May 2024 - Jun 2024",
  },
  {
    title: "Freelancer",
    company: "Self-Employed",
    location: "Remote",
    description: [
      "Implemented CI/CD pipelines using Jenkins, GitHub Actions, and ArgoCD for automated build and deployment.",
      "Deployed and managed scalable cloud infrastructure using AWS, Azure, and Terraform for improved reliability and performance.",

    ],
    date: "Aug 2024 - Oct 2025",
  },
] as const;

export const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/msvsakthivel",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/sakthivelmsv/?originalSubdomain=in",
    icon: FaLinkedin,
  },
 {
  label: "email",
  href: "https://mail.google.com/mail/?view=cm&fs=1&to=msvsakthivelmsv@gmail.com&su=Hello&body=I%20want%20to%20connect%20with%20you",
  icon:MdMail
},
  {
    label: "Twitter",
    href: "https://x.com/msvsakthivelmsv",
    icon: FaTwitter,
  },
] as const;

export const projects = [
  {
    title: "Event Management System",
    description:
      " Focused on building and maintaining websites using modern technologies such as HTML, CSS, JavaScript, and React.",
    tags: ["HTML", "CSS", "JavaScript", "PHP",],
    github: "https://github.com/msvsakthivel/EVENT-MANAGAMENT-SYSTEM",
    image: "/images/Event.gif",
  },
  {
    title: "Weather App",
    description:
      "Vaanilai is a modern web app that shows real-time weather details for any city you search.It displays temperature and climate conditions in a clean and user-friendly interface.Built using React, it ensures fast performance and smooth interaction for quick weather updates.",
    tags: ["HTML","CSS", "Docker", "Java Script", "React",],
    github: "https://github.com/msvsakthivel/Vaanilai",
    image: "/images/vaanilai.gif", 
  },
  //   {
  //   title: "Spotify Infrastructure Automation",
  //   description:
  //     "Automated Spotify infrastructure provisioning with modular, scalable IaC for cloud-native deployment.",
  //   tags: ["Terraform","Spotify API","AWS"],
  //   github: "https://github.com/Prakash2819/Terraform-Spotify",
  //   image: "/images/Spotify-thumbnail.gif", 
  // },

] as const;

export const certificates = [
  {
    id: 1,
    title: "Web Development",
    institution: "Soharon Infotech",
    duration: "Issued: July 2024",
    description: "Designed, Developed, and Maintained robust software applications, ensuring high performance and scalability.",
    link: "https://drive.google.com/file/d/1Pk_qWA8ho4Q-B_CbgLOmyKfUoLRBFCy-/view?usp=drive_link",
    icon: FaGraduationCap,
  },
  {
    id: 2,
    title: "Full Stack Development",
    institution: "Novi Tech",
    duration: "Issued: Aug 2025",
    description: "I developed real-time web projects that strengthened my skills in building responsive, user-friendly, and dynamic applications.",
    link: "https://drive.google.com/file/d/1B7UYYTt6OXkA-hOJR_Q8vFkYCuW2TQqj/view?usp=sharing",
    icon: FaGraduationCap,
  },
  {
    id: 3,
    title: "DevOps",
    institution: "Udemy",
    duration: "Issued: Dec 2025",
    description: "Completed a Professional DevOps Certification focused on CI/CD, automation, and modern software deployment practices.",
    link: "https://www.udemy.com/certificate/UC-673f72a0-431c-4e18-a98f-17d06b07644e/",
    icon: FaGraduationCap,
  },

  {
    id: 4,
    title: "Linux",
    institution: "Udemy",
    duration: "Issued: Dec 2025",
    description: "Advanced Linux training covering system administration, automation, and security for DevOps environments.",
    link: "https://www.udemy.com/certificate/UC-ceeafb80-40a3-43cf-9ec2-14857517ab8a/",
    icon: FaLinux,
  },
];

type EducationItem = {
  id: number;
  title: string;
  institution: string;
  duration: string;
  cgpa?: string;      
  hsc?: string;
  sslc?: string;
  description: string;
};

export const educationData: EducationItem[] = [
  {
    id: 1,
    title: "Bachelor of Computer Application",
    institution: "Excel college for Commerce and Science",
    duration: "2022 - 2025",
    cgpa:"CGPA : 6.5",
    description:
      "Pursuing in-depth studies in information technology, software engineering, and modern computing systems with a strong emphasis on practical projects and innovative solutions.",
  },
  {
    id: 2,
    title: "Higher Secondary School",
    institution: "Government Higher Secondary School Chittor",
    duration: "2016 - 2022",
    hsc:"SSLC : 58%" ,
    sslc:"HSLC : 58%",
    description: "Completed Higher Secondary education in the Maths-Biology group, building a strong foundation in Mathematics, Physics, Chemistry, and Biology.",
  },
];
