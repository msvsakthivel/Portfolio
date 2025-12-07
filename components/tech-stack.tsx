"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaAws,
  FaCloud,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaPython,
} from "react-icons/fa";
import {
  SiJenkins,
  SiTerraform,
  SiKubernetes,
  SiGrafana,
  SiPrometheus,
  SiHtml5,
  SiCss3,
  SiUbuntu,
  SiSonarqube,
  SiJavascript,
} from "react-icons/si";
import SectionHeader from "./section-header";

interface Technology {
  name: string;
  category:
    | "language"
    | "frontend"
    | "backend"
    | "database"
    | "devops"
    | "cloud"
    | "monitoring"
    | "tools";
  icon: React.ReactNode;
  link: string;
}

const technologies: Technology[] = [
  { name: "Python", category: "language", icon: <FaPython className="w-5 h-5 text-blue-400" />, link: "https://www.python.org" },
  { name: "HTML", category: "frontend", icon: <SiHtml5 className="w-5 h-5 text-orange-500" />, link: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
  { name: "CSS", category: "frontend", icon: <SiCss3 className="w-5 h-5 text-blue-500" />, link: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
  { name: "JavaScript", category: "frontend", icon: <SiJavascript className="w-5 h-5 text-yellow-400" />, link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
  { name: "Jenkins", category: "devops", icon: <SiJenkins className="w-5 h-5 text-red-500" />, link: "https://www.jenkins.io" },
  { name: "Docker", category: "devops", icon: <FaDocker className="w-5 h-5 text-blue-400" />, link: "https://www.docker.com" },
  { name: "Kubernetes", category: "devops", icon: <SiKubernetes className="w-5 h-5 text-blue-500" />, link: "https://kubernetes.io" },
  { name: "Terraform", category: "cloud", icon: <SiTerraform className="w-5 h-5 text-purple-500" />, link: "https://www.terraform.io" },
  { name: "AWS", category: "cloud", icon: <FaAws className="w-5 h-5 text-orange-400" />, link: "https://aws.amazon.com" },
  { name: "Microsoft Azure", category: "cloud", icon: <FaCloud className="w-5 h-5 text-blue-500" />, link: "https://azure.microsoft.com/" },
  { name: "Prometheus", category: "monitoring", icon: <SiPrometheus className="w-5 h-5 text-orange-400" />, link: "https://prometheus.io" },
  { name: "Grafana", category: "monitoring", icon: <SiGrafana className="w-5 h-5 text-yellow-500" />, link: "https://grafana.com" },
  { name: "SonarQube", category: "monitoring", icon: <SiSonarqube className="w-5 h-5 text-sky-500" />, link: "https://www.sonarqube.org" },
  { name: "Linux", category: "tools", icon: <FaLinux className="w-5 h-5 text-gray-600" />, link: "https://www.linux.org" },
  { name: "Ubuntu", category: "tools", icon: <SiUbuntu className="w-5 h-5 text-orange-500" />, link: "https://ubuntu.com" },
  { name: "Git", category: "tools", icon: <FaGitAlt className="w-5 h-5 text-orange-500" />, link: "https://git-scm.com" },
];

const categories = [
  { id: "language", name: "Languages", color: "from-blue-500 to-violet-500", icon: <FaPython className="w-6 h-6" /> },
  { id: "frontend", name: "Frontend Basics", color: "from-blue-500 to-cyan-400", icon: <SiHtml5 className="w-6 h-6" /> },
  { id: "devops", name: "DevOps Tools", color: "from-violet-500 to-blue-500", icon: <FaDocker className="w-6 h-6" /> },
  { id: "cloud", name: "Cloud & Infrastructure", color: "from-blue-500 to-violet-500", icon: <FaCloud className="w-6 h-6" /> },
  { id: "monitoring", name: "Monitoring & Quality", color: "from-blue-500 to-violet-500", icon: <SiGrafana className="w-6 h-6" /> },
  { id: "tools", name: "OS & Utilities", color: "from-blue-500 to-violet-500", icon: <FaLinux className="w-6 h-6" /> },
];

export default function TechStack() {
  return (
    <section id="tech-stack" className="py-20 relative overflow-hidden bg-white text-gray-900">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
      <div
        className="absolute inset-0 bg-gradient-to-b from-white/0 via-gray-100/60 to-white/0"
        style={{
          maskImage: "radial-gradient(ellipse at center, white, transparent)",
          WebkitMaskImage: "radial-gradient(ellipse at center, white, transparent)",
        }}
      />
      <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-violet-500/20 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 md:px-6 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-16"
        >
          <SectionHeader
            title="Technical Expertise"
            description="Proficient in diverse technologies used to build secure, scalable cloud-native solutions"
          />

          {/* GRID STRUCTURE (unchanged) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category, i) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative group"
              >
                {/* Hover Glow */}
                <div
                  className={`absolute -inset-[1px] bg-gradient-to-r ${category.color} rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 group-hover:duration-200`}
                  style={{ opacity: 0.1 }}
                />

                {/* Card */}
                <div className="relative h-full bg-white/80 p-6 sm:p-7 rounded-2xl border border-gray-200 backdrop-blur-md shadow-sm space-y-4 group-hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      className={`bg-gradient-to-r ${category.color} p-3.5 rounded-xl text-white shadow-md`}
                    >
                      {category.icon}
                    </motion.div>
                    <h3 className="text-2xl font-semibold tracking-tight text-gray-900">
                      {category.name}
                    </h3>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap mt-8 gap-3">
                    {technologies
                      .filter((t) => t.category === category.id)
                      .map((tech, index) => (
                        <Link
                          href={tech.link}
                          key={tech.name}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: index * 0.05 }}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 cursor-pointer rounded-full text-sm bg-white/60 border border-gray-200 hover:border-gray-400 transition-all duration-300 flex items-center gap-2.5 backdrop-blur-sm hover:shadow-[0_0_12px_rgba(99,102,241,0.4)]"
                          >
                            <span className="text-lg">{tech.icon}</span>
                            <span className="font-medium text-xs sm:text-sm text-gray-900 whitespace-nowrap">
                              {tech.name}
                            </span>
                          </motion.div>
                        </Link>
                      ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
