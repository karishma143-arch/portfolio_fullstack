import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, ChevronDown, Code, Database, Brain, BarChart3, MessageSquare, Activity, Download, MapPin, Calendar, Award, BookOpen } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isVisible, setIsVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.6 }
    );

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const projects = [
    {
      title: "Resume Screening Bot",
      description: "Built a resume ranking tool using TF-IDF and cosine similarity to match job descriptions to candidate resumes.",
      icon: <Code className="w-6 h-6" />,
      tech: ["Python", "TF-IDF", "Streamlit", "NLP"],
    },
    {
      title: "Customer Service REST API",
      description: "Spring Boot REST API with JWT authentication, ticket management, and role-based access.",
      icon: <MessageSquare className="w-6 h-6" />,
      tech: ["Java", "Spring Boot", "MySQL", "JWT"],
    },
    {
      title: "Ticket Classification System",
      description: "NLP-based system to auto-categorize support tickets with 94% accuracy.",
      icon: <Brain className="w-6 h-6" />,
      tech: ["Python", "scikit-learn", "NLP", "Flask"],
    },
    {
      title: "Analytics Data Pipeline",
      description: "ETL pipeline for processing and visualizing real-time customer interaction data.",
      icon: <BarChart3 className="w-6 h-6" />,
      tech: ["Kafka", "PostgreSQL", "ETL", "Analytics"],
    }
  ];

  const skills = {
    Languages: ["Python", "JavaScript", "Java", "SQL", "TypeScript", "Golang", "HTML", "CSS"],
    Frameworks: ["React", "Flask", "Spring Boot", "scikit-learn"],
    Tools: ["Git", "Postman", "Jupyter", "Figma", "Tableau"],
    Databases: ["PostgreSQL", "MySQL", "MongoDB", "Redis"]
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="text-center py-20">
        <h1 className="text-4xl font-bold mb-4">Karishma Grace</h1>
        <p className="text-lg mb-6">Full Stack Developer | Backend Engineer</p>
        <div className="flex justify-center gap-6 mb-8">
          <a href="mailto:karishmagrace8@gmail.com" className="hover:text-blue-400"><Mail /></a>
          <a href="https://linkedin.com/in/karishmagrace" className="hover:text-blue-400"><Linkedin /></a>
          <a href="tel:+19132634357" className="hover:text-blue-400"><Phone /></a>
        </div>
        <div className="max-w-3xl mx-auto text-white/80">
          <p className="mb-4">
            Entry-Level Software Engineer with strong backend skills in Python and Java, and practical experience with React, Flask, SQL, and more. Passionate about scalable systems and user-centric digital solutions.
          </p>
          <p>M.S. Computer Science @ University of Central Missouri | Open to Full-Time Roles</p>
        </div>
      </div>

      <section className="px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projects.map((proj, idx) => (
            <div key={idx} className="bg-white/10 p-6 rounded-xl shadow hover:scale-[1.02] transition">
              <div className="mb-4 text-blue-400">{proj.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{proj.title}</h3>
              <p className="text-white/70 mb-4">{proj.description}</p>
              <div className="flex flex-wrap gap-2">
                {proj.tech.map((t, i) => (
                  <span key={i} className="text-sm bg-white/10 px-3 py-1 rounded-full text-white/80">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 bg-black/20">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {Object.entries(skills).map(([title, items], idx) => (
            <div key={idx} className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-blue-400 mb-4">{title}</h3>
              <ul className="flex flex-wrap gap-2">
                {items.map((item, i) => (
                  <li key={i} className="bg-white/5 px-3 py-1 rounded-full text-sm text-white/70">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Let's Connect</h2>
        <div className="flex flex-col md:flex-row justify-center gap-10 text-center">
          <a href="mailto:karishmagrace8@gmail.com" className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition">
            <Mail className="mx-auto mb-2 text-blue-400" />
            <p className="text-white/80">karishmagrace8@gmail.com</p>
          </a>
          <a href="tel:+19132634357" className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition">
            <Phone className="mx-auto mb-2 text-green-400" />
            <p className="text-white/80">+1 (913) 263-4357</p>
          </a>
          <a href="https://linkedin.com/in/karishmagrace" className="bg-white/10 p-6 rounded-xl hover:bg-white/20 transition">
            <Linkedin className="mx-auto mb-2 text-purple-400" />
            <p className="text-white/80">LinkedIn Profile</p>
          </a>
        </div>
      </section>

      <footer className="text-center py-6 text-white/60 border-t border-white/10">
        <p>© 2025 Karishma Grace. Built with React and Tailwind CSS.</p>
      </footer>
    </div>
  );
};

export default Portfolio;
