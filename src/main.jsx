import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const profile = {
  name: "Rishabh Kaushik",
  role: "Software Engineer",
  phone: "+91 9654491622",
  email: "rishabhkaushikcd53@gmail.com",
  location: "Ghaziabad, India",
  linkedin: "https://www.linkedin.com/in/rishabh-kaushik-/",
  github: "https://github.com/Rishabhkaushikcd53",
  gfg: "https://www.geeksforgeeks.org/user/rrishabhkaushikk/",
  leetcode: "https://leetcode.com/u/rrishabhkaushikk/",
  code360: "https://www.naukri.com/code360/profile/0c5c2e60-d212-41bf-885e-5f0b7a7874ce"
};

const projects = [
  {
    number: "01",
    title: "Learning Management System",
    category: "FULL STACK • MERN",
    description:
      "A full-stack LMS supporting course management, user roles and scalable content delivery, with secure JWT authentication and REST APIs.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "REST API"],
    github: "https://github.com/Rishabhkaushikcd53/LMS-APP"
  },
  {
    number: "02",
    title: "Banking Application",
    category: "BACKEND • JAVA",
    description:
      "A secure banking system for account management and transactions with role-based access control, SQLite persistence and Firebase Authentication.",
    tech: ["Java", "SQLite", "Firebase", "RBAC"],
    github: "https://github.com/Rishabhkaushikcd53/BankingApplication"
  },
  {
    number: "03",
    title: "Instagram Clone",
    category: "ANDROID • JAVA",
    description:
      "An Android social media application with real-time posts, authentication and profile management. UI rendering and database queries were optimized to reduce latency.",
    tech: ["Java", "Android", "Firebase", "Real-time DB"],
    github: "https://github.com/Rishabhkaushikcd53/InstagramCloneApplication"
  },
  {
    number: "04",
    title: "CPU Scheduling Algorithms",
    category: "SYSTEMS • C++",
    description:
      "An application implementing seven CPU scheduling algorithms using queues, priority queues and arrays for efficient process scheduling.",
    tech: ["C++", "Data Structures", "Operating Systems", "Algorithms"],
    github: "https://github.com/Rishabhkaushikcd53/CPU-scheduling-ALgo-s"
  }
];

const skills = [
  {
    title: "Languages & Problem Solving",
    items: ["C", "C++", "Java", "Python", "JavaScript", "SQL", "DSA", "OOP", "Competitive Programming"]
  },
  {
    title: "Frontend",
    items: ["React.js", "HTML5", "CSS3", "JavaScript ES6+", "Responsive Design", "State Management", "UI Optimization", "REST Integration"]
  },
  {
    title: "Backend & APIs",
    items: ["Node.js", "Express.js", "RESTful APIs", "JWT", "MVC Architecture", "Backend Logic", "API Testing", "Application Security", "Performance"]
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "MySQL", "SQLite", "Firebase", "CRUD", "Query Optimization", "Indexing", "Data Integrity", "Backup & Recovery"]
  },
  {
    title: "Tools & DevOps",
    items: ["Git", "GitHub", "Docker", "CI/CD", "Linux", "Debugging", "Code Reviews", "Deployment Workflows", "Agile Development"]
  },
  {
    title: "Core CS & Systems",
    items: ["Data Structures", "Algorithms", "Operating Systems", "DBMS", "Computer Networks", "Software Engineering", "System Design Basics", "Networking", "QA & Testing"]
  }
];

const metrics = [
  { value: "6+", label: "live web & e-commerce projects" },
  { value: "8", label: "international teams supported" },
  { value: "500+", label: "DSA problems solved" },
  { value: "27", label: "GeeksforGeeks institute rank" }
];

function Icon({ name, size = 20 }) {
  const common = {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  };

  const paths = {
    arrow: <><path d="M5 12h14"/><path d="m13 6 6 6-6 6"/></>,
    external: <><path d="M14 5h5v5"/><path d="M10 14 19 5"/><path d="M19 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1h4"/></>,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    phone: <><path d="M22 16.9v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.2 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.9Z"/></>,
    linkedin: <><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z"/><path d="M2 9h4v12H2z"/><path d="M4 4.5a2 2 0 1 0 0 .01"/></>,
    github: <><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3.3-.4 6.8-1.6 6.8-7A5.5 5.5 0 0 0 19.3 3.7 5.1 5.1 0 0 0 19.2 0S18 0 15 2.1a13.4 13.4 0 0 0-7 0C5 0 3.8 0 3.8 0a5.1 5.1 0 0 0-.1 3.7A5.5 5.5 0 0 0 2.2 7.5c0 5.4 3.5 6.6 6.8 7A4.8 4.8 0 0 0 8 18v4"/><path d="M8 19c-3 .9-3-1.4-4.2-1.7"/></>,
    menu: <><path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/></>,
    close: <><path d="m6 6 12 12"/><path d="m18 6-12 12"/></>,
    download: <><path d="M12 3v12"/><path d="m7 10 5 5 5-5"/><path d="M5 21h14"/></>,
    check: <><path d="m5 12 4 4L19 6"/></>,
    map: <><path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/></>,
    calendar: <><rect x="3" y="4" width="18" height="17" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>
  };

  return <svg {...common}>{paths[name]}</svg>;
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ["home", "about", "experience", "projects", "skills", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible) setActive(visible.target.id);
      },
      { rootMargin: "-20% 0px -65% 0px", threshold: [0.05, 0.25, 0.5] }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="site">
      <div className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); go("home"); }}>
            <span className="brand-mark">RK</span>
            <span>Rishabh Kaushik</span>
          </a>
          <div className="top-contact">
            <a href={`mailto:${profile.email}`}><Icon name="mail" size={16}/>{profile.email}</a>
            <a href={`tel:${profile.phone.replace(/\s/g, "")}`}><Icon name="phone" size={16}/>{profile.phone}</a>
          </div>
        </div>
      </div>

      <header className="nav">
        <div className="nav-inner">
          <a className="nav-name" href="#home" onClick={(e) => { e.preventDefault(); go("home"); }}>Software Engineer</a>
          <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Open navigation">
            <Icon name={menuOpen ? "close" : "menu"} size={22}/>
          </button>
          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            {["about", "experience", "projects", "skills", "contact"].map((id) => (
              <a key={id} className={active === id ? "active" : ""} href={`#${id}`} onClick={(e) => { e.preventDefault(); go(id); }}>
                {id}
              </a>
            ))}
            <a className="nav-resume" href="/Rishabh-Kaushik-Resume.pdf" target="_blank" rel="noreferrer">Resume</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-grid">
            <div>
              <div className="availability"><span></span> OPEN TO SOFTWARE ENGINEERING OPPORTUNITIES</div>
              <h1>Software engineer focused on <em>building dependable products.</em></h1>
              <p className="hero-lead">
                Full-stack and backend developer with experience supporting live web and e-commerce applications,
                production-oriented REST APIs, functional testing, and infrastructure troubleshooting.
              </p>
              <div className="hero-actions">
                <button className="btn btn-primary" onClick={() => go("projects")}>Explore my work <Icon name="arrow" size={18}/></button>
                <a className="btn btn-ghost" href="/Rishabh-Kaushik-Resume.pdf" target="_blank" rel="noreferrer"><Icon name="download" size={17}/> Resume</a>
              </div>
              <div className="hero-links">
                <a href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" size={17}/> LinkedIn</a>
                <a href={profile.github} target="_blank" rel="noreferrer"><Icon name="github" size={17}/> GitHub</a>
                <a href={`mailto:${profile.email}`}><Icon name="mail" size={17}/> Email</a>
              </div>
            </div>

            <aside className="hero-panel">
              <div className="panel-label">PROFILE</div>
              <div className="panel-title">Engineering with a practical mindset.</div>
              <p>
                I value clear communication, accountability, disciplined learning and well-structured solutions —
                the same principles I bring to team-based engineering work.
              </p>
              <div className="panel-line"></div>
              <div className="mini-grid">
                <div><span>Based in</span><strong>Ghaziabad, India</strong></div>
                <div><span>Education</span><strong>B.Tech — IT</strong></div>
                <div><span>University</span><strong>NSUT, West Campus</strong></div>
                <div><span>Target roles</span><strong>SWE • Full Stack • Backend</strong></div>
              </div>
            </aside>
          </div>
        </section>

        <section className="metrics">
          <div className="metrics-inner">
            {metrics.map((m) => <div className="metric" key={m.label}><strong>{m.value}</strong><span>{m.label}</span></div>)}
          </div>
        </section>

        <section id="about" className="section split-section">
          <div className="section-kicker">01 / ABOUT</div>
          <div className="section-content">
            <h2>Strong fundamentals, practical project work, and a bias toward learning.</h2>
            <div className="about-copy">
              <p>
                I hold a B.Tech in Information Technology from Netaji Subhas University of Technology (West Campus).
                My foundation spans Data Structures and Algorithms, Operating Systems, Database Management Systems,
                Computer Networks and software engineering principles.
              </p>
              <p>
                I have worked across full-stack development, backend services, testing and infrastructure support.
                I enjoy taking requirements, understanding the underlying system, and turning them into dependable
                application features.
              </p>
            </div>
            <div className="principles">
              {["Clear communication", "Accountability", "Continuous learning", "Structured problem solving"].map((x) =>
                <div key={x}><Icon name="check" size={17}/>{x}</div>
              )}
            </div>
          </div>
        </section>

        <section id="experience" className="section split-section experience-section">
          <div className="section-kicker">02 / EXPERIENCE</div>
          <div className="section-content">
            <div className="experience-head">
              <div>
                <p className="eyebrow">ASSOCIATE INTERN</p>
                <h2>Cosmic365</h2>
              </div>
              <div className="date"><Icon name="calendar" size={16}/> May 2024 — Nov 2024</div>
            </div>
            <p className="experience-intro">
              Contributed to live web and e-commerce applications across international teams, supporting production-ready
              feature delivery and software quality.
            </p>
            <div className="experience-grid">
              <article><strong>6+</strong><span>live web & e-commerce projects across 8 international teams</span></article>
              <article><strong>20+</strong><span>business and product requirements translated into features</span></article>
              <article><strong>99%</strong><span>system availability supported in production environments</span></article>
              <article><strong>50+</strong><span>REST API, manual and functional test cases executed</span></article>
              <article><strong>40+</strong><span>defects identified to improve release stability</span></article>
              <article><strong>30+</strong><span>hardware, software and network issues resolved</span></article>
            </div>
            <ul className="timeline-list">
              <li>Supported Node.js backend services and monitored performance and uptime.</li>
              <li>Translated business and product requirements into functional application features, reducing rework and clarification cycles by 25%.</li>
              <li>Identified defects through REST API, manual and functional testing, contributing to a 30% improvement in release stability.</li>
              <li>Assisted with routers, switches, firewalls, backups and disaster recovery while maintaining data security compliance.</li>
              <li>Completed 100+ SMART learning sessions with mentor reviews to strengthen problem-solving, collaboration and software development practices.</li>
            </ul>
          </div>
        </section>

        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <div className="section-kicker">03 / SELECTED PROJECTS</div>
            <h2>Proof of what I can build.</h2>
            <p>Four projects across full-stack development, backend engineering, Android and systems programming.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project" key={project.title}>
                <div className="project-top"><span>{project.number}</span><span>{project.category}</span></div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">{project.tech.map((t) => <span key={t}>{t}</span>)}</div>
                <a className="project-link" href={project.github} target="_blank" rel="noreferrer">
                  View source <Icon name="external" size={16}/>
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="section skills-section">
          <div className="section-kicker">04 / TECHNICAL SKILLS</div>
          <div className="skills-layout">
            <div>
              <h2>A stack built around strong fundamentals.</h2>
              <p className="muted">
                The portfolio reflects the technologies and capabilities listed in my resume — from application code
                and databases to testing, deployment workflows and core computer science.
              </p>
            </div>
            <div className="skills-list">
              {skills.map((group) => (
                <div className="skill-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <div className="skill-pills">{group.items.map((item) => <span key={item}>{item}</span>)}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section proof-section">
          <div className="proof-card">
            <div>
              <div className="section-kicker">05 / ACHIEVEMENTS</div>
              <h2>Evidence beyond the project list.</h2>
            </div>
            <div className="achievement-list">
              <div><strong>500+</strong><span>DSA problems solved across GeeksforGeeks, LeetCode and Coding Ninjas.</span></div>
              <div><strong>27</strong><span>Institute rank on GeeksforGeeks.</span></div>
              <div><strong>2 years</strong><span>Represented the institution in football.</span></div>
              <div><strong>100+</strong><span>SMART learning sessions completed with mentor reviews.</span></div>
            </div>
          </div>
          <div className="credentials">
            <div>
              <p className="eyebrow">CERTIFICATIONS</p>
              <h3>The Complete 2024 Web Development Bootcamp</h3>
              <span>Udemy • 62 hours</span>
            </div>
            <div>
              <h3>Mastering Data Structures & Algorithms using C and C++</h3>
              <span>Udemy</span>
            </div>
          </div>
        </section>

        <section className="section online-section">
          <div className="section-kicker">06 / FIND ME ONLINE</div>
          <div className="online-grid">
            <a href={profile.linkedin} target="_blank" rel="noreferrer"><span>LinkedIn</span><Icon name="external" size={17}/></a>
            <a href={profile.github} target="_blank" rel="noreferrer"><span>GitHub</span><Icon name="external" size={17}/></a>
            <a href={profile.gfg} target="_blank" rel="noreferrer"><span>GeeksforGeeks</span><Icon name="external" size={17}/></a>
            <a href={profile.leetcode} target="_blank" rel="noreferrer"><span>LeetCode</span><Icon name="external" size={17}/></a>
            <a href={profile.code360} target="_blank" rel="noreferrer"><span>Coding Ninjas / Code360</span><Icon name="external" size={17}/></a>
          </div>
        </section>

        <section className="section life-section">
          <div className="life-grid">
            <div>
              <div className="section-kicker">07 / BEYOND CODE</div>
              <h2>Curious outside the codebase, too.</h2>
              <p className="muted">
                The resume also reflects interests that shape how I learn, communicate and stay disciplined.
              </p>
            </div>
            <div className="life-columns">
              <div className="life-card">
                <span>LANGUAGES</span>
                <strong>English — Proficient</strong>
                <strong>German — Advanced</strong>
              </div>
              <div className="life-card">
                <span>INTERESTS</span>
                <div className="life-pills">
                  <i>MMA</i><i>Fitness training</i><i>Tech journals</i><i>Chess</i><i>Tech blogging</i>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="contact-inner">
            <div className="section-kicker">08 / CONTACT</div>
            <h2>Let's build something dependable.</h2>
            <p>
              I am seeking entry-level Software Engineer, Full Stack Developer or Backend Developer opportunities.
              I would welcome the opportunity to discuss how I can contribute.
            </p>
            <div className="contact-actions">
              <a className="btn btn-primary" href={`mailto:${profile.email}`}>Email me <Icon name="arrow" size={18}/></a>
              <a className="btn btn-ghost" href={profile.linkedin} target="_blank" rel="noreferrer"><Icon name="linkedin" size={17}/> LinkedIn</a>
              <a className="btn btn-ghost" href="/Rishabh-Kaushik-Cover-Letter.pdf" target="_blank" rel="noreferrer">Cover letter <Icon name="external" size={16}/></a>
            </div>
            <div className="contact-details">
              <a href={`mailto:${profile.email}`}><Icon name="mail" size={17}/>{profile.email}</a>
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}><Icon name="phone" size={17}/>{profile.phone}</a>
              <span><Icon name="map" size={17}/>{profile.location}</span>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <span>© 2026 Rishabh Kaushik</span>
        <span>Software Engineer • Full Stack • Backend</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
