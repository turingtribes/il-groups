"use client";
import { useEffect, useRef, useState } from "react";
import "./About.css";

type TeamMember = {
  name: string;
  image: string;
  title: string;
  role: string;
  division: string;
  desc: string;
  color: string;
};

const team: TeamMember[] = [
  {
    name: "Miss. Kousalya B.E",
    image: "/assets/Kousalya_manager.jpeg",
    title: "CEO & Founder",
    role: "founder",
    division: "",
    desc: "A passionate leader dedicated to building opportunities and shaping future entrepreneurs.",
    color: "#6366f1",
  },
  {
    name: "Mr. Manikandan B.A",
    image: "/assets/mani_founder.jpeg",
    title: "General Manager",
    role: "manager",
    division: "",
    desc: "An experienced mentor focused on guiding individuals toward professional excellence.",
    color: "#8b5cf6",
  },
  {
    name: "Mr. Lal Prasanth B.Com",
    image: "/assets/LalPrasanth.jpeg",
    title: "Inspire Senior Manager",
    role: "senior",
    division: "Inspire",
    desc: "Drives inspiration across teams by fostering a culture of motivation, growth, and limitless potential.",
    color: "#3b82f6",
  },
  {
    name: "Miss. Janani Bsc",
    image: "/assets/Janani.jpeg",
    title: "Insight Senior Manager",
    role: "senior",
    division: "Insight",
    desc: "Transforms data into powerful insights, enabling smarter decisions and stronger business outcomes.",
    color: "#06b6d4",
  },
  {
    name: "Miss. Sharmila BE",
    image: "/assets/Sharmila.jpeg",
    title: "Infogen Senior Manager",
    role: "senior",
    division: "Infogen",
    desc: "Bridges knowledge and strategy to unlock new growth opportunities within the Infogen division.",
    color: "#10b981",
  },
  {
    name: "Mr. Rishenath BE",
    image: "/assets/Rishenath.jpeg",
    title: "Infogen Senior Manager",
    role: "senior",
    division: "Infogen",
    desc: "Champions team development and operational efficiency with a results-driven leadership approach.",
    color: "#f59e0b",
  },
  {
    name: "Mr. Muthumani Msc",
    image: "/assets/Muthumani.jpeg",
    title: "Intelygenz Senior Manager",
    role: "senior",
    division: "Intelygenz",
    desc: "Leads the Intelygenz division with sharp analytical thinking and a passion for intelligent solutions.",
    color: "#ec4899",
  },
];

const stats = [
  { num: "500+", label: "Projects Delivered", icon: "◈" },
  { num: "200+", label: "Team Members", icon: "◉" },
  { num: "8", label: "City Branches", icon: "◎" },
  { num: "12+", label: "Years Experience", icon: "◆" },
  { num: "98%", label: "Client Retention", icon: "◇" },
  { num: "30+", label: "Awards Won", icon: "★" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

function CountUp({ target, duration = 1800 }: { target: string; duration?: number }) {
  const [display, setDisplay] = useState("0");
  const { ref, inView } = useInView();

  useEffect(() => {
    if (!inView) return;
    const isPercent = target.includes("%");
    const isPlus = target.includes("+");
    const num = parseInt(target.replace(/\D/g, ""));
    const suffix = isPercent ? "%" : isPlus ? "+" : "";
    let start = 0;
    const step = Math.ceil(num / (duration / 16));
    const timer = setInterval(() => {
      start = Math.min(start + step, num);
      setDisplay(start + suffix);
      if (start >= num) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target, duration]);

  return <span ref={ref}>{display || target}</span>;
}

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const storySection = useInView();
  const missionSection = useInView();
  const teamSection = useInView();
  const footerSection = useInView();

  // Parallax on hero particles
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const hero = heroRef.current;
      if (!hero) return;
      const { clientX, clientY } = e;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (clientX - cx) / cx;
      const dy = (clientY - cy) / cy;
      hero.querySelectorAll<HTMLElement>(".particle").forEach((p, i) => {
        const depth = (i % 3) + 1;
        p.style.transform = `translate(${dx * depth * 12}px, ${dy * depth * 8}px)`;
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="about-root">
  
      {/* Ambient background blobs */}
      <div className="ambient" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="grid-overlay" />
      </div>

      {/* ── HERO ── */}
      <section className="hero-section" ref={heroRef}>
        {[...Array(18)].map((_, i) => (
          <div key={i} className="particle" style={{ "--i": i } as React.CSSProperties} />
        ))}
        <div className="hero-inner">
          <div className="tag-pill animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <span className="tag-dot" />ABOUT US
          </div>
          <h1 className="hero-title animate-slide-up" style={{ animationDelay: "0.25s" }}>
            We Are <span className="gradient-text">IL Groups</span>
          </h1>
          <p className="hero-sub animate-fade-in" style={{ animationDelay: "0.45s" }}>
            A passionate team of technologists, designers, and strategists united by one mission.
          </p>
          <div className="hero-line animate-scale-x" style={{ animationDelay: "0.65s" }} />
        </div>
      </section>

      {/* ── STORY + STATS ── */}
      <section
        className={`story-section section-pad ${storySection.inView ? "in-view" : ""}`}
        ref={storySection.ref}
      >
        <div className="story-left stagger-left">
          <div className="tag-pill"><span className="tag-dot" />OUR STORY</div>
          <h2 className="section-title">
            Building Tomorrow's<br />
            <span className="gradient-text">Big Future</span>
          </h2>
          <p className="body-text">
            Welcome to IL Groups Business Training Centre, a fast-growing training network
            established in 2021, headquartered in Pudukkottai and expanding across Tamil Nadu.
          </p>
          <p className="body-text">
            We specialize in developing individuals into confident professionals, skilled managers,
            and successful entrepreneurs through structured training and real-world exposure.
          </p>
          <ul className="check-list">
            {["Award-Winning Innovation", "Pan-India Presence", "24/7 Dedicated Support"].map((item) => (
              <li key={item}><span className="check-icon">✦</span>{item}</li>
            ))}
          </ul>
          <button className="cta-btn">
            <span>Work With Us</span>
            <span className="btn-arrow">→</span>
          </button>
        </div>

        <div className="stats-grid stagger-right">
          <div className="stats-label">Company at a Glance</div>
          {stats.map((s, i) => (
            <div
              className="stat-card"
              key={i}
              style={{ "--delay": `${i * 0.08}s` } as React.CSSProperties}
            >
              <div className="stat-icon">{s.icon}</div>
              <div className="stat-num">
                <CountUp target={s.num} />
              </div>
              <div className="stat-label">{s.label}</div>
              <div className="stat-glow" />
            </div>
          ))}
        </div>
      </section>

      {/* ── MISSION / VISION ── */}
      <section
        className={`mv-section section-pad ${missionSection.inView ? "in-view" : ""}`}
        ref={missionSection.ref}
      >
        {[
          {
            emoji: "🎯",
            title: "Our Mission",
            text: "To empower individuals with knowledge, skills, and confidence to succeed in business and leadership roles.",
            accent: "#6366f1",
          },
          {
            emoji: "🔭",
            title: "Our Vision",
            text: "To become one of the leading business training networks across Tamil Nadu, creating thousands of successful managers and entrepreneurs.",
            accent: "#8b5cf6",
          },
        ].map((card, i) => (
          <div
            className="mv-card"
            key={i}
            style={{ "--accent": card.accent, "--delay": `${i * 0.15}s` } as React.CSSProperties}
          >
            <div className="mv-icon">{card.emoji}</div>
            <h3 className="mv-title">{card.title}</h3>
            <p className="mv-text">{card.text}</p>
            <div className="mv-border" />
          </div>
        ))}
      </section>

      {/* ── TEAM ── */}
      <section
        className={`team-section section-pad ${teamSection.inView ? "in-view" : ""}`}
        ref={teamSection.ref}
      >
        <div className="section-header">
          <div className="tag-pill"><span className="tag-dot" />LEADERSHIP</div>
          <h2 className="section-title">
            Meet the <span className="gradient-text">Visionaries</span>
          </h2>
        </div>

        <div className="team-grid">
          {team.map((member, i) => (
            <div
              className="team-card"
              key={i}
              style={
                {
                  "--accent": member.color,
                  "--delay": `${i * 0.07}s`,
                } as React.CSSProperties
              }
            >
              <div className="avatar-wrap">
                <div className="avatar-ring" />
                <div className="avatar-img">
                  <img src={member.image} alt={member.name} className="avatar-photo" />
                </div>
              </div>
              <h3 className="team-name">{member.name}</h3>
              <p className="team-role">{member.title}</p>
              <p className="team-desc">{member.desc}</p>
              <div className="team-card-glow" />
            </div>
          ))}
        </div>
      </section>

      {/* ── FOOTER CARDS ── */}
      <section
        className={`footer-section section-pad ${footerSection.inView ? "in-view" : ""}`}
        ref={footerSection.ref}
      >
        <div className="footer-card fc-what">
          <div className="fc-icon">⚡</div>
          <h3>What We Do</h3>
          <p className="fc-sub">At IL Groups, we provide:</p>
          <ul>
            {[
              "Structured business training programs",
              "Internship opportunities for real experience",
              "Certification for skill recognition",
              "Leadership development programs",
              "Career growth through promotions",
            ].map((item) => (
              <li key={item}><span className="li-dash">–</span>{item}</li>
            ))}
          </ul>
        </div>

        <div className="footer-card fc-achieve">
          <div className="fc-icon">🏆</div>
          <h3>Our Achievements</h3>
          <div className="achieve-stats">
            {[["2021", "ESTABLISHED"], ["7+", "BRANCHES"], ["1000+", "MANAGERS"]].map(
              ([n, l]) => (
                <div className="achieve-item" key={l}>
                  <span className="achieve-num">{n}</span>
                  <span className="achieve-label">{l}</span>
                </div>
              )
            )}
          </div>
          <ul>
            <li><span className="li-dash">–</span>Strong presence across Tamil Nadu</li>
            <li><span className="li-dash">–</span>Continuous career support system</li>
          </ul>
        </div>

        <div className="footer-card fc-why">
          <div className="fc-icon">💡</div>
          <h3>Why Choose Us</h3>
          <ul>
            {[
              "Practical and easy-to-understand training",
              "Clear career growth path",
              "Supportive mentorship",
              "Regular recognition & promotions",
              "Strong network and opportunities",
            ].map((item) => (
              <li key={item}><span className="li-check">✓</span>{item}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
