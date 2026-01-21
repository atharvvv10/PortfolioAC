"use client";

import { useState, useRef } from "react";
import { Github, Linkedin, Mail, ExternalLink, Menu, X, Code, Database, Brain, Server, Shield, Terminal, Layers, GraduationCap, Calendar, Building, Send, CheckCircle, AlertCircle, BookOpen } from "lucide-react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const openExternalUrl = (url: string) => {
  window.parent.postMessage({ type: "OPEN_EXTERNAL_URL", data: { url } }, "*");
};

const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

const projects = [
  {
    name: "MultiAgents",
    description: "Modular multi-agent AI system enabling goal-driven workflows and intelligent task execution.",
    tech: ["Python", "Agentic AI", "LLMs"],
    github: "https://github.com/atharvvv10/MultiAgents",
  },
  {
    name: "MindChain",
    description: "Blockchain-based mental health application focused on privacy, data ownership, and secure record integrity.",
    tech: ["Blockchain", "Security", "Web Systems"],
    github: "https://github.com/atharvvv10/MindChain-",
  },
  {
    name: "Crop Yield Predictor",
    description: "Machine learning model predicting crop yield based on environmental and climate factors.",
    tech: ["Machine Learning", "Data Analysis", "Python"],
    github: "https://github.com/atharvvv10/Crop-Yield-Predictor",
  },
  {
    name: "Uber Analytics Dashboard",
    description: "Data analytics dashboard extracting insights from Uber trip data.",
    tech: ["Data Analytics", "Visualization", "SQL"],
    github: "https://github.com/atharvvv10/Uber-Analytics-Dashboard",
  },
  {
    name: "StreamForge Lakehouse ETL",
    description: "End-to-end ETL pipeline implementing a modern lakehouse architecture for analytics workloads.",
    tech: ["Data Engineering", "ETL", "Analytics"],
    github: "https://github.com/atharvvv10/streamforge-lakehouse-etl",
  },
  {
    name: "AI Study Notes Maker",
    description: "Automated study notes generator using LLMs for concise knowledge extraction.",
    tech: ["Python", "LLMs", "Automation"],
    github: "https://github.com/atharvvv10/ai-study-notes-maker",
  },
];

const experiences = [
  {
    role: "MERN Stack Intern",
    company: "EYGDS",
    description: "Developed a full-stack recipe-sharing application with authentication, REST APIs, and responsive UI using the MERN stack.",
    icon: Code,
  },
  {
    role: "Agentic AI Framework Intern",
    company: "Prodigal AI Technologies",
    description: "Built modular AI agents using Python and LLMs, focusing on real-time reasoning, goal-driven execution, and scalable agent architectures.",
    icon: Brain,
  },
];

const skills = [
  {
    name: "AI & Machine Learning",
    icon: Brain,
    items: ["Python", "Machine Learning fundamentals", "Model training & evaluation", "LLM integration", "Prompt engineering"],
  },
  {
    name: "Data Science & Analytics",
    icon: Database,
    items: ["Data preprocessing", "Exploratory Data Analysis (EDA)", "SQL", "Pandas / NumPy", "Data visualization"],
  },
  {
    name: "Agentic AI Systems",
    icon: Layers,
    items: ["Multi-agent workflows", "Goal-driven agents", "Tool calling", "LLM orchestration"],
  },
  {
    name: "Data Engineering & ETL",
    icon: Server,
    items: ["ETL pipelines", "Lakehouse concepts", "Data modeling", "Batch processing"],
  },
  {
    name: "Full-Stack Development",
    icon: Code,
    items: ["MERN stack", "REST APIs", "Authentication", "Backend architecture"],
  },
  {
    name: "Programming Languages",
    icon: Terminal,
    items: ["Python", "JavaScript", "TypeScript", "Java"],
  },
  {
    name: "Tools & Platforms",
    icon: ExternalLink,
    items: ["Git & GitHub", "Postman", "Figma", "SQL / NoSQL"],
  },
  {
    name: "Security & Systems",
    icon: Shield,
    items: ["Backend security practices", "Authentication & authorization", "Basic cybersecurity awareness"],
  },
];

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 5000);
    } catch {
      setFormStatus("error");
      setTimeout(() => setFormStatus("idle"), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-[#030712] text-[#f1f5f9]">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/20 via-[#030712] to-[#030712] pointer-events-none" />

      <header className="fixed top-0 left-0 right-0 z-50 bg-[#030712]/80 backdrop-blur-xl border-b border-[#1e293b]">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <a href="#" className="text-xl font-bold tracking-tight">
            <span className="text-indigo-400">Atharv</span> Chougale
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm text-[#94a3b8] hover:text-white transition-colors duration-200"
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={() => openExternalUrl("https://github.com/atharvvv10")}
              className="p-2 rounded-lg hover:bg-[#1e293b] transition-colors"
            >
              <Github className="w-5 h-5" />
            </button>
            <button
              onClick={() => openExternalUrl("https://www.linkedin.com/in/atharv-chougale-730042343/")}
              className="p-2 rounded-lg hover:bg-[#1e293b] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </button>
            <button
              onClick={() => openExternalUrl("https://medium.com/@atharvachaugale22")}
              className="p-2 rounded-lg hover:bg-[#1e293b] transition-colors"
            >
              <BookOpen className="w-5 h-5" />
            </button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#0f172a] border-b border-[#1e293b]"
          >
            <div className="px-6 py-4 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-[#94a3b8] hover:text-white transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="flex gap-4 pt-4 border-t border-[#1e293b]">
                <button onClick={() => openExternalUrl("https://github.com/atharvvv10")}>
                  <Github className="w-5 h-5" />
                </button>
                <button onClick={() => openExternalUrl("https://www.linkedin.com/in/atharv-chougale-730042343/")}>
                  <Linkedin className="w-5 h-5" />
                </button>
                <button onClick={() => openExternalUrl("https://medium.com/@atharvachaugale22")}>
                  <BookOpen className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </header>

      <main className="relative z-10">
        <section className="min-h-screen flex items-center justify-center pt-20">
          <div className="max-w-6xl mx-auto px-6 py-20">
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex-1 text-center"
              >
                <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-[#2a3441] bg-[#0d1117]/80 backdrop-blur-sm mb-10">
                  <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                  </svg>
                  <span className="text-[#94a3b8] font-medium">Computer Science Undergraduate</span>
                </div>

                <h1 className="text-6xl lg:text-8xl font-bold tracking-tight mb-6">
                  <span className="text-white">Atharv</span>
                  <br />
                  <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Chougale</span>
                </h1>

                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#3a4451]" />
                  <p className="text-[#94a3b8] text-lg">
                    Class of 2026 | AI, ML, Data Science & Systems
                  </p>
                  <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#3a4451]" />
                </div>

                <p className="text-[#94a3b8] text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
                  Hands-on experience building intelligent systems across Agentic AI,
                  data-driven architectures, analytics pipelines, and full-stack applications.
                </p>

                <div className="flex flex-wrap gap-4 justify-center">
                  <a
                    href="#projects"
                    className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 rounded-lg font-medium transition-all duration-200 hover:shadow-lg hover:shadow-indigo-500/25 flex items-center gap-2"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    View Projects
                  </a>
                  <button
                    onClick={() => openExternalUrl("https://github.com/atharvvv10")}
                    className="px-6 py-3 border border-[#1e293b] hover:border-indigo-500/50 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
                  >
                    <Github className="w-5 h-5" />
                    GitHub
                  </button>
                  <button
                    onClick={() => openExternalUrl("https://www.linkedin.com/in/atharv-chougale-730042343/")}
                    className="px-6 py-3 border border-[#1e293b] hover:border-indigo-500/50 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
                  >
                    <Linkedin className="w-5 h-5" />
                    LinkedIn
                  </button>
                  <button
                    onClick={() => openExternalUrl("https://medium.com/@atharvachaugale22")}
                    className="px-6 py-3 border border-[#1e293b] hover:border-indigo-500/50 rounded-lg font-medium transition-all duration-200 flex items-center gap-2"
                  >
                    <BookOpen className="w-5 h-5" />
                    Medium
                  </button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="about" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-indigo-400 text-sm tracking-[0.3em] uppercase mb-4">Who I Am</p>
                <h2 className="text-6xl lg:text-7xl font-bold mb-2">
                  <span className="text-white">About</span>
                </h2>
                <h2 className="text-6xl lg:text-7xl font-bold text-indigo-400 mb-12">
                  Me
                </h2>
                
                <div className="flex items-center gap-8">
                  <div className="text-center">
                    <p className="text-4xl font-bold text-white">2+</p>
                    <p className="text-[#64748b] text-sm mt-1">Internships</p>
                  </div>
                  <div className="w-px h-12 bg-[#1e293b]" />
                  <div className="text-center">
                    <p className="text-4xl font-bold text-white">2026</p>
                    <p className="text-[#64748b] text-sm mt-1">Graduating</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="absolute -left-4 top-0 bottom-0 w-1 rounded-full bg-gradient-to-b from-indigo-500 via-indigo-500/50 to-transparent" />
                <div className="bg-[#0a1628]/80 backdrop-blur-sm border border-[#1e293b] rounded-2xl p-8 space-y-6">
                  <p className="text-xl lg:text-2xl font-semibold text-white leading-relaxed">
                    I'm a Computer Science undergraduate with strong engineering fundamentals and hands-on internship experience in AI systems and full-stack development.
                  </p>
                  <p className="text-[#94a3b8] leading-relaxed">
                    My work spans machine learning, data engineering, agentic AI frameworks, and web development, with a focus on building systems that are scalable, maintainable, and production-ready.
                  </p>
                  <p className="text-[#94a3b8] leading-relaxed">
                    I enjoy working close to real-world problems—designing clean architectures, developing reliable pipelines, and turning ideas into practical applications. Whether it's multi-agent AI workflows, ETL systems, or full-stack products, I prioritize clarity, performance, and long-term usability.
                  </p>
                  <p className="text-indigo-300 italic leading-relaxed">
                    I'm currently seeking opportunities to contribute to meaningful technical challenges while continuing to grow as an engineer.
                  </p>
                </div>
                <div className="absolute -bottom-2 -right-2 w-20 h-1 rounded-full bg-indigo-500" />
              </motion.div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-24 bg-[#0a0f1a]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-3">
                Featured <span className="text-indigo-400">Projects</span>
              </h2>
              <p className="text-[#94a3b8]">
                A selection of projects showcasing my technical range and problem-solving approach.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => {
                const projectColors = [
                  { bg: "bg-gradient-to-br from-violet-500 to-purple-600", border: "hover:border-violet-500/50" },
                  { bg: "bg-gradient-to-br from-blue-500 to-indigo-600", border: "hover:border-blue-500/50" },
                  { bg: "bg-gradient-to-br from-emerald-500 to-teal-600", border: "hover:border-emerald-500/50" },
                  { bg: "bg-gradient-to-br from-orange-500 to-amber-600", border: "hover:border-orange-500/50" },
                  { bg: "bg-gradient-to-br from-pink-500 to-rose-600", border: "hover:border-pink-500/50" },
                  { bg: "bg-gradient-to-br from-cyan-500 to-blue-600", border: "hover:border-cyan-500/50" },
                ];
                const projectColor = projectColors[index % projectColors.length];
                
                return (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className={`group bg-[#0c1524] border border-[#1e293b]/50 rounded-2xl p-6 ${projectColor.border} transition-all duration-300 flex flex-col h-full`}
                  >
                    <div className={`w-12 h-12 ${projectColor.bg} rounded-xl flex items-center justify-center mb-5 shadow-lg`}>
                      <Code className="w-6 h-6 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-400 transition-colors">
                      {project.name}
                    </h3>
                    
                    <p className="text-[#94a3b8] text-sm mb-5 leading-relaxed flex-grow">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-5">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1.5 bg-[#1a2744] border border-[#2a3f5f] text-xs font-medium rounded-full text-indigo-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <button
                      onClick={() => openExternalUrl(project.github)}
                      className="inline-flex items-center gap-2 text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors mt-auto"
                    >
                      <Github className="w-4 h-4" />
                      View Source Code
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="experience" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-3">
                Professional <span className="text-indigo-400">Experience</span>
              </h2>
              <p className="text-[#94a3b8]">
                Internships where I gained hands-on industry experience.
              </p>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/50 via-indigo-500/30 to-indigo-500/50 hidden lg:block" />
              <div className="absolute left-1/2 top-[140px] -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 hidden lg:block" />
              <div className="absolute left-1/2 top-[170px] -translate-x-1/2 w-2 h-2 rounded-full bg-indigo-500/70 hidden lg:block" />
              <div className="absolute left-1/2 bottom-[140px] -translate-x-1/2 w-3 h-3 rounded-full bg-indigo-500 hidden lg:block" />
              <div className="absolute left-1/2 bottom-[110px] -translate-x-1/2 w-2 h-2 rounded-full bg-indigo-500/70 hidden lg:block" />
              
              <div className="space-y-12 lg:space-y-0">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="lg:w-[45%] lg:pr-8"
                >
                  <div className="bg-[#0c1524] border border-[#1e293b]/50 rounded-2xl p-8">
                    <div className="w-14 h-14 bg-indigo-600 rounded-xl flex items-center justify-center mb-6">
                      <Code className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a2744] border border-[#2a3f5f] rounded-full mb-4">
                      <Building className="w-4 h-4 text-indigo-400" />
                      <span className="text-indigo-300 text-sm font-medium">EYGDS</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">MERN Stack Intern</h3>
                    <p className="text-[#94a3b8] leading-relaxed mb-6">
                      Developed a full-stack recipe-sharing application with authentication, REST APIs, and responsive UI using the MERN stack.
                    </p>
                    
                    <div className="flex items-center gap-2 text-indigo-400">
                      <div className="w-6 h-px bg-indigo-400" />
                      <span className="text-sm font-medium">Internship</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="lg:w-[45%] lg:ml-auto lg:pl-8 lg:-mt-20"
                >
                  <div className="bg-[#0c1524] border border-[#1e293b]/50 rounded-2xl p-8">
                    <div className="w-14 h-14 bg-violet-600 rounded-xl flex items-center justify-center mb-6">
                      <Brain className="w-7 h-7 text-white" />
                    </div>
                    
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1a2744] border border-[#2a3f5f] rounded-full mb-4">
                      <Building className="w-4 h-4 text-violet-400" />
                      <span className="text-violet-300 text-sm font-medium">Prodigal AI Technologies</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4">Agentic AI Framework Intern</h3>
                    <p className="text-[#94a3b8] leading-relaxed mb-6">
                      Built modular AI agents using Python and LLMs, focusing on real-time reasoning, goal-driven execution, and scalable agent architectures.
                    </p>
                    
                    <div className="flex items-center gap-2 text-indigo-400">
                      <div className="w-6 h-px bg-indigo-400" />
                      <span className="text-sm font-medium">Internship</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="py-24 bg-[#0a0f1a]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-3">
                Technical <span className="text-indigo-400">Skills</span>
              </h2>
              <p className="text-[#94a3b8]">
                Core competencies across AI, data, and software engineering.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {skills.map((skill, index) => {
                const colors = [
                  { bg: "bg-gradient-to-br from-violet-500 to-purple-600", dot: "bg-violet-400" },
                  { bg: "bg-gradient-to-br from-blue-500 to-indigo-600", dot: "bg-blue-400" },
                  { bg: "bg-gradient-to-br from-emerald-500 to-teal-600", dot: "bg-emerald-400" },
                  { bg: "bg-gradient-to-br from-orange-500 to-amber-600", dot: "bg-orange-400" },
                  { bg: "bg-gradient-to-br from-pink-500 to-rose-600", dot: "bg-pink-400" },
                  { bg: "bg-gradient-to-br from-cyan-500 to-blue-600", dot: "bg-cyan-400" },
                  { bg: "bg-gradient-to-br from-red-500 to-orange-600", dot: "bg-red-400" },
                  { bg: "bg-gradient-to-br from-rose-400 to-pink-500", dot: "bg-rose-400" },
                ];
                const color = colors[index % colors.length];
                
                return (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="bg-[#0c1524] border border-[#1e293b]/50 rounded-2xl p-6 hover:border-[#2a3f5f] transition-all duration-300"
                  >
                    <div className={`w-14 h-14 ${color.bg} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                      <skill.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="font-bold text-white text-lg mb-5">{skill.name}</h3>
                    <ul className="space-y-3">
                      {skill.items.map((item) => (
                        <li key={item} className="text-[#94a3b8] text-sm flex items-center gap-3">
                          <span className={`w-2 h-2 rounded-full ${color.dot} flex-shrink-0`} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section id="education" className="py-24">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold mb-3">
                <span className="text-emerald-400">Education</span>
              </h2>
              <p className="text-[#94a3b8]">
                Academic foundation in Computer Science
              </p>
            </motion.div>

            <div className="flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="max-w-xl w-full"
              >
                <div className="bg-[#0c1524] border border-[#1e293b]/50 rounded-2xl p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                      <GraduationCap className="w-8 h-8 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-emerald-500/10 border border-emerald-500/30 rounded-full mb-4">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        <span className="text-emerald-400 text-sm font-medium">2022 - 2026</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-white mb-2">
                        Bachelor of Engineering
                      </h3>
                      <p className="text-emerald-400 font-medium mb-4">
                        Computer Science
                      </p>
                      <div className="flex items-center gap-2 text-[#94a3b8]">
                        <Building className="w-4 h-4 text-[#64748b]" />
                        <span className="text-sm">Savitribai Phule Pune University</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-[#0a0f1a]">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <p className="text-[#64748b] text-sm tracking-[0.2em] uppercase mb-4">CONTACT</p>
              <h2 className="text-5xl font-bold mb-4">
                Let's <span className="text-violet-400">Connect</span>
              </h2>
              <p className="text-[#94a3b8]">
                Open to internships and entry-level roles starting 2026
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                <button
                  onClick={() => openExternalUrl("https://www.linkedin.com/in/atharv-chougale-730042343/")}
                  className="w-full flex items-center gap-4 p-4 bg-[#0c1524] border border-[#1e293b]/50 rounded-xl hover:border-violet-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Linkedin className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-white">LinkedIn</p>
                    <p className="text-[#64748b] text-sm">Connect with me</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#64748b] group-hover:text-violet-400 transition-colors" />
                </button>

                <button
                  onClick={() => openExternalUrl("mailto:atharvchougale10@gmail.com")}
                  className="w-full flex items-center gap-4 p-4 bg-[#0c1524] border border-[#1e293b]/50 rounded-xl hover:border-violet-500/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-violet-500 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-white">Email</p>
                    <p className="text-[#64748b] text-sm">atharvchougale10@gmail.com</p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-[#64748b] group-hover:text-violet-400 transition-colors" />
                </button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="bg-[#0c1524] border border-[#1e293b]/50 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <Send className="w-5 h-5 text-violet-400" />
                    <h3 className="text-lg font-semibold text-white">Send a Message</h3>
                  </div>

                  <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[#64748b] text-xs uppercase tracking-wider mb-2">NAME</label>
                        <input
                          type="text"
                          name="from_name"
                          placeholder="Your name"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-[#0a0f1a] border border-[#1e293b] rounded-lg focus:border-violet-500 focus:outline-none transition-colors placeholder:text-[#4a5568] text-sm"
                        />
                      </div>
                      <div>
                        <label className="block text-[#64748b] text-xs uppercase tracking-wider mb-2">EMAIL</label>
                        <input
                          type="email"
                          name="reply_to"
                          placeholder="your@email.com"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-[#0a0f1a] border border-[#1e293b] rounded-lg focus:border-violet-500 focus:outline-none transition-colors placeholder:text-[#4a5568] text-sm"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-[#64748b] text-xs uppercase tracking-wider mb-2">MESSAGE</label>
                      <textarea
                        name="message"
                        placeholder="What would you like to say?"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-[#0a0f1a] border border-[#1e293b] rounded-lg focus:border-violet-500 focus:outline-none transition-colors resize-none placeholder:text-[#4a5568] text-sm"
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={formStatus === "sending"}
                      className="w-full py-3.5 bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 disabled:opacity-50 rounded-lg font-medium text-sm transition-all duration-200 flex items-center justify-center gap-2"
                    >
                      {formStatus === "sending" ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Send Message
                        </>
                      )}
                    </button>
                    
                    {formStatus === "success" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 text-green-400 text-sm"
                      >
                        <CheckCircle className="w-4 h-4" />
                        Message sent successfully!
                      </motion.div>
                    )}
                    
                    {formStatus === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-center gap-2 text-red-400 text-sm"
                      >
                        <AlertCircle className="w-4 h-4" />
                        Failed to send. Please try again.
                      </motion.div>
                    )}
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#1e293b] py-8">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[#94a3b8] text-sm text-center">
            © 2026 Atharv Chougale. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}
