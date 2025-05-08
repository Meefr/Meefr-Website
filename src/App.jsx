import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Track scroll position to highlight active nav item
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-slate-900/90 backdrop-blur-sm z-50 px-6 md:px-12 py-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("home");
            }}
            className="font-bold text-xl text-sky-400 hover:text-sky-300 transition"
          >
            MEEFR
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
                className={`text-sm font-medium hover:text-sky-400 transition ${
                  activeSection === item.toLowerCase()
                    ? "text-sky-400"
                    : "text-slate-300"
                }`}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Button */}
          <button
            className="md:hidden text-slate-300 hover:text-sky-400"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-16 left-0 right-0 bg-slate-900 z-40 shadow-lg md:hidden border-b border-slate-800">
          <div className="flex flex-col p-4">
            {["Home", "About", "Projects", "Skills", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.toLowerCase());
                }}
                className={`py-3 px-4 text-sm font-medium hover:bg-slate-800 rounded-md transition ${
                  activeSection === item.toLowerCase()
                    ? "text-sky-400"
                    : "text-slate-300"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}

      <main className="pt-20 px-6 md:px-12 max-w-7xl mx-auto space-y-24 pb-20">
        {/* Hero Section */}
        <section
          id="home"
          className="py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Image Container */}
          <div className="order-2 md:order-1 flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full border-4 border-sky-500/20 overflow-hidden bg-slate-800 flex items-center justify-center">
                {/* Placeholder for your photo */}
                <img
                  // src="../src/assets/photo1.png"
                  src="../src/assets/croped.png"
                  alt="Mohamed Essam Elramah"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-500/20 to-transparent"></div>
              </div>
              {/* Accent circles */}
              <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full bg-sky-500/10 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 rounded-full bg-purple-500/10 blur-xl"></div>
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2 space-y-6">
            <div>
              <p className="text-sky-400 font-medium mb-2">Hello, I'm</p>
              <h1 className="text-4xl md:text-6xl font-bold">
                Mohamed Essam Elramah
              </h1>
              <p className="text-xl text-slate-400 mt-3">
                Software Engineer | Full-Stack Web Developer | React.JS | NodeJS
                | Express.JS | Mongo DB
              </p>
            </div>

            <p className="text-slate-300 max-w-lg">
              Computer Science student and developer passionate about creating
              elegant solutions with modern web technologies.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://www.linkedin.com/in/mohamedelramah/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-medium px-5 py-2.5 rounded-md transition shadow-lg shadow-sky-900/20"
              >
                <Linkedin size={18} /> LinkedIn
              </a>
              <a
                href="https://github.com/Meefr"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-slate-800 hover:bg-slate-700 text-white font-medium px-5 py-2.5 rounded-md transition border border-slate-700"
              >
                <Github size={18} /> GitHub
              </a>
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("contact");
                }}
                className="inline-flex items-center gap-2 bg-transparent hover:bg-slate-800 text-slate-300 font-medium px-5 py-2.5 rounded-md transition border border-slate-700"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 scroll-mt-20">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-semibold text-slate-100 flex items-center gap-2 mb-6">
              <span className="text-sky-400 font-mono">01.</span> About Me
              <div className="h-px bg-slate-800 flex-grow ml-4"></div>
            </h2>

            <div className="space-y-4 text-slate-300">
              <p>
                Full-Stack MERN Developer | Backend Enthusiast | Tech Mentor &
                Community Leader Hey there! I'm Mohamed Essam ElRamah, a
                software engineer and graphic designer based in Cairo, Egypt. My
                passion for technology and problem-solving has driven me to
                explore multiple fields, from graphic design to full-stack
                development, always striving to learn and innovate.
              </p>
              <p>
                🔥 My Journey I started with graphic design during my secondary
                school years, creating logos, social media ads, and even
                experimenting with motion graphics. That creative spark led me
                to programming, and I decided to pursue Computer Science at Ain
                Shams University.
              </p>
              <p>
                💻 Tech Expertise <br/>🔹 Full-Stack MERN Developer (MongoDB,
                Express.js, React, Node.js) <br/>🔹 Backend Enthusiast – I thrive on
                building scalable, efficient systems! <br/>🔹 Frontend Development –
                Crafting smooth UI/UX with React & Tailwind CSS <br/>🔹 API
                Development & Integration – Handling RESTful APIs,
                authentication, and real-time data <br/>🔹 Problem-Solving &
                Competitive Programming – 1st place in a Data Structures
                competition (920 competitors!)
              </p>
              <p>
                👥 Leadership & Volunteering Beyond coding, I love giving back
                to the community. I actively mentor students, teach frontend and
                backend development, and participate in volunteering and tech
                events. Currently, I serve as the Backend Head in a student
                activity, leading teams in developing real-world applications
                and ensuring strong backend architectures.
              </p>
              <p>
                I also volunteer in multiple events to support and inspire
                others in tech. Additionally, I enjoy creating content and
                sharing knowledge through YouTube videos, helping others learn
                programming, algorithms, and software development concepts.
              </p>
              <p>
                📖 Always Learning & Growing I'm deeply passionate about
                cybersecurity and constantly explore new ways to enhance system
                security and prevent vulnerabilities. Alongside my full-stack
                expertise, I’m diving into ethical hacking, network security,
                and secure coding practices to expand my skill set.
              </p>
              <p>
                I’m always excited to learn new technologies, experiment with
                AI, DevOps, and cloud computing, and tackle challenging problems
                to create innovative solutions.
              </p>
              <p>Let's connect and collaborate on exciting projects! 👏🏻</p>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold text-slate-100 flex items-center gap-2 mb-12">
            <span className="text-sky-400 font-mono">02.</span> Featured
            Projects
            <div className="h-px bg-slate-800 flex-grow ml-4"></div>
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="bg-slate-800/50 rounded-lg border border-slate-700 hover:border-sky-500/50 transition-all duration-300 overflow-hidden group">
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-medium text-slate-100 group-hover:text-sky-400 transition">
                    LinkedIn Clone
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/linkedinCloneDepi/LinkedinClone"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full transition"
                      aria-label="View on GitHub"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href="#"
                      className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full transition"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400">
                  A full-stack LinkedIn replica built using React, Node.js,
                  MongoDB, Redux, and modern authentication flows.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs text-sky-400 bg-sky-900/20 px-3 py-1 rounded-full">
                    React
                  </span>
                  <span className="text-xs text-sky-400 bg-sky-900/20 px-3 py-1 rounded-full">
                    Node.js
                  </span>
                  <span className="text-xs text-sky-400 bg-sky-900/20 px-3 py-1 rounded-full">
                    MongoDB
                  </span>
                  <span className="text-xs text-sky-400 bg-sky-900/20 px-3 py-1 rounded-full">
                    Redux
                  </span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-slate-800/50 rounded-lg border border-slate-700 hover:border-sky-500/50 transition-all duration-300 overflow-hidden group">
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-medium text-slate-100 group-hover:text-sky-400 transition">
                    NASA Space Apps 2024
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/Meefr/NASA-Space-Apps-2024"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full transition"
                      aria-label="View on GitHub"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href="#"
                      className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full transition"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400">
                  Collaborated in a global hackathon to build a responsive
                  application visualizing space data using React and
                  TailwindCSS.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs text-sky-400 bg-sky-900/20 px-3 py-1 rounded-full">
                    React
                  </span>
                  <span className="text-xs text-sky-400 bg-sky-900/20 px-3 py-1 rounded-full">
                    TailwindCSS
                  </span>
                  <span className="text-xs text-sky-400 bg-sky-900/20 px-3 py-1 rounded-full">
                    Data Visualization
                  </span>
                </div>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-slate-800/50 rounded-lg border border-slate-700 hover:border-sky-500/50 transition-all duration-300 overflow-hidden group">
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-medium text-slate-100 group-hover:text-sky-400 transition">
                    FIRM Creatives
                  </h3>
                  <div className="flex gap-2">
                    <a
                      href="https://github.com/FIRM-fcis/FIRM-creatives"
                      target="_blank"
                      rel="noreferrer"
                      className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full transition"
                      aria-label="View on GitHub"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href="#"
                      className="p-2 text-slate-400 hover:text-white bg-slate-800 rounded-full transition"
                      aria-label="View Live Demo"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>

                <p className="text-slate-400">
                  A platform built to support creativity and collaboration using
                  modern web technologies and real-time features.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs text-sky-400 bg-sky-900/20 px-3 py-1 rounded-full">
                    React
                  </span>
                  <span className="text-xs text-sky-400 bg-sky-900/20 px-3 py-1 rounded-full">
                    Node.js
                  </span>
                  <span className="text-xs text-sky-400 bg-sky-900/20 px-3 py-1 rounded-full">
                    MongoDB
                  </span>
                </div>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-slate-800/50 rounded-lg border border-slate-700 hover:border-sky-500/50 transition-all duration-300 overflow-hidden group">
              <div className="p-6 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-medium text-slate-100 group-hover:text-sky-400 transition">
                    Tailored CV Generation
                  </h3>
                  <div className="flex gap-2">
                    <span className="text-xs bg-sky-500/20 text-sky-300 px-3 py-1 rounded-full">
                      In Progress
                    </span>
                  </div>
                </div>

                <p className="text-slate-400">
                  A smart system for generating personalized CVs based on job
                  requirements and skills, leveraging AI and modern design
                  principles.
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs text-sky-400 bg-sky-900/20 px-3 py-1 rounded-full">
                    React
                  </span>
                  <span className="text-xs text-sky-400 bg-sky-900/20 px-3 py-1 rounded-full">
                    Node.js
                  </span>
                  <span className="text-xs text-sky-400 bg-sky-900/20 px-3 py-1 rounded-full">
                    AI
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a
              href="https://github.com/Meefr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sky-400 hover:text-sky-300 transition font-medium"
            >
              View More Projects <ExternalLink size={16} />
            </a>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold text-slate-100 flex items-center gap-2 mb-12">
            <span className="text-sky-400 font-mono">03.</span> Skills &
            Technologies
            <div className="h-px bg-slate-800 flex-grow ml-4"></div>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Frontend */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-sky-400 mb-4">
                Frontend Development
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                  JavaScript / TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                  React.js / Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                  Redux / Context API
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                  TailwindCSS / Material UI
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                  Responsive Design
                </li>
              </ul>
            </div>

            {/* Backend */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-sky-400 mb-4">
                Backend Development
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                  Node.js / Express
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                  MongoDB / PostgreSQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                  REST APIs / GraphQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                  Firebase / Authentication
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                  Docker / CI/CD
                </li>
              </ul>
            </div>

            {/* Other Skills */}
            <div className="bg-slate-900/50 border border-slate-800 rounded-lg p-6">
              <h3 className="text-lg font-medium text-sky-400 mb-4">
                Other Skills
              </h3>
              <ul className="space-y-2 text-slate-300">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                  Flutter / Mobile Development
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                  Python / C++
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                  Data Structures / Algorithms
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                  Object-Oriented Programming
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-sky-400 rounded-full"></span>
                  Technical Teaching
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 scroll-mt-20">
          <h2 className="text-2xl font-semibold text-slate-100 flex items-center gap-2 mb-8">
            <span className="text-sky-400 font-mono">04.</span> Get In Touch
            <div className="h-px bg-slate-800 flex-grow ml-4"></div>
          </h2>

          <div className="max-w-2xl mx-auto text-center">
            <p className="text-slate-300 mb-8">
              I'm currently looking for new opportunities to apply and expand my
              skills. Whether you have a question or just want to say hi, I'll
              do my best to get back to you!
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="mailto:MohamedElramah737@gmail.com"
                className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition group"
              >
                <div className="p-3 bg-slate-800 rounded-full group-hover:bg-sky-900/20 transition">
                  <Mail size={20} />
                </div>
                <span>MohamedElramah737@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/mohamedelramah/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-slate-300 hover:text-sky-400 transition group"
              >
                <div className="p-3 bg-slate-800 rounded-full group-hover:bg-sky-900/20 transition">
                  <Linkedin size={20} />
                </div>
                <span>linkedin.com/in/mohamedelramah</span>
              </a>
            </div>

            <a
              href="mailto:MohamedElramah737@gmail.com"
              className="inline-flex items-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-medium px-8 py-3 rounded-md transition shadow-lg shadow-sky-900/20"
            >
              Say Hello
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 border-t border-slate-800 py-8">
        <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
          <p className="text-slate-400 text-sm">
            Designed & Built by Mohamed Elramah © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}
