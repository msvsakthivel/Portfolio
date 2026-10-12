
import {FaGithub, FaGraduationCap, FaLinkedin,FaLinux, FaTwitter,} from "react-icons/fa";
import { MdMail } from "react-icons/md";


export const experienceData = [
  {
    title: "Internship",
    company: "Sohoran",
    location: "Erode, India",
    description: [
  "Assisted with Windows and Linux system administration, including installation, configuration, and maintenance.",
  "Performed system troubleshooting, user account management, and software updates to support daily operations.",
  "Worked with Linux commands, log files, and basic networking while resolving technical issues.",
],
    date: "May 2024 - July 2024",
  },
  {
    title: "System Admin | Cloud Engineer",
    company: "N2 Services Private Limited",
    location: "Onsite",
   description: [
  "Manage Linux servers, user accounts, groups, file permissions, SSH access, and system services.",
  "Monitor CPU, memory, disk usage, processes, uptime, and server health.",
  "Troubleshoot Linux services, storage, networking, connectivity, and application log issues.",
  "Perform package installation, updates, filesystem maintenance, and system administration tasks.",
  "Support AWS services including EC2, VPC, IAM, Security Groups, S3, CloudWatch, and AWS CLI.",
  "Use Bash scripting to automate repetitive Linux administration and operational tasks.",
],
    date: "Mar 2026 - Present",
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
  title: "AWS VPC with Public-Private Subnet Architecture",
  description:
    "Designed and configured an AWS VPC with public and private subnets across two Availability Zones. Set up an Application Load Balancer, NAT Gateways, an Auto Scaling Group, Security Groups, and an S3 Gateway Endpoint to support secure, highly available cloud infrastructure.",
  tags: [
    "AWS",
    "VPC",
    "EC2",
    "Application Load Balancer",
    "NAT Gateway",
    "Auto Scaling",
    "Security Groups",
    "S3",
  ],
    image: "/images/aws-project.gif", 
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
    title: "System Engineer",
    institution: "Soharon Infotech",
    duration: "Issued: July 2024",
    description:     "Assisted with Windows and Linux system installation, configuration, and maintenance.",
    "Performed system troubleshooting, user account management, and software updates.",
    "Used Linux commands, reviewed log files, and practiced basic networking to resolve technical issues.",
    link: "https://drive.google.com/file/d/1EfZYZCpdTEtsRcL3wqFBMjMFsBCybYn_/view?usp=drive_link",
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
