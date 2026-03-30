import "./Internship.css";

const perks = [
  {
    label: "Internship",
    title: "Hands-On Learning",
    text: "Every program is designed as an active internship with practical work, team support, and real business exposure.",
  },
  {
    label: "Mentorship",
    title: "Guided Growth",
    text: "Learn inside a structured environment with mentors who help you build confidence, discipline, and consistency.",
  },
  {
    label: "Certificate",
    title: "Recognized Completion",
    text: "Receive an industry-recognized completion certificate from I Groups after successful training progress.",
  },
  {
    label: "Career Growth",
    title: "Clear Promotion Path",
    text: "Move step by step through a focused growth track that opens long-term leadership opportunities.",
  },
];

const trainingPath = [
  {
    step: "01",
    role: "Trainee",
    points: [
      "Punctuality, regularity, and responsibility",
      "Stability in business fundamentals",
      "Master of 5 Steps, 4 Factors, and 8 Steps",
      "Ringing the bell continuously for 3 days",
    ],
  },
  {
    step: "02",
    role: "Trainer",
    points: [
      "Teach and motivate others",
      "Run impact with consistency",
      "Replace yourself with trained successors",
      "Build deep field administration knowledge",
      "Build strong relationships",
      "Develop 3 strong trainees",
      "Show strong character and discipline",
      "Maintain minimum attendance in 180 days",
    ],
  },
  {
    step: "03",
    role: "Assistant Manager",
    points: [
      "Deep knowledge in office administration",
      "Accounting and stock control",
      "Interview process understanding",
      "Motivating large groups",
      "Banking and operational responsibility",
    ],
  },
  {
    step: "04",
    role: "Senior Manager",
    points: [
      "Run your own business",
      "Make final decisions confidently",
      "Develop strong managers",
      "Earn up to 6 lakhs per year",
    ],
  },
];

export default function Internship() {
  return (
    <div className="internship-shell">
      <section className="internship-hero">
        <div className="hero-noise" aria-hidden="true" />
        <div className="hero-orb hero-orb-left" aria-hidden="true" />
        <div className="hero-orb hero-orb-right" aria-hidden="true" />
        <div className="section-badge">INTERNSHIP</div>
        <h1 className="internship-title">
          Launch Your <span>Career</span>
          <br />
          Here
        </h1>
        <p className="internship-subtitle">
          Hands-on experience, real projects, and world-class mentorship for students and
          professionals ready to build a stronger future.
        </p>
        <div className="hero-actions">
          <button className="primary-btn">Apply Now</button>
          <button className="secondary-btn">Explore Path</button>
        </div>
      </section>

      <section className="internship-perks">
        <div className="section-heading">
          <div className="section-badge">PERKS</div>
          <h2>
            What Makes Us <span>Unique</span>
          </h2>
        </div>

        <div className="perk-grid">
          {perks.map((perk) => (
            <article className="perk-card" key={perk.label}>
              <div className="perk-chip">{perk.label}</div>
              <h3>{perk.title}</h3>
              <p>{perk.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="training-section">
        <div className="section-heading training-heading">
          <div className="section-badge">TRAINING PATH</div>
          <h2>
            Our <span>Training</span> Path
          </h2>
        </div>

        <div className="timeline">
          {trainingPath.map((item) => (
            <article className="timeline-item" key={item.step}>
              <div className="timeline-marker">
                <span>{item.step}</span>
              </div>
              <div className="timeline-content">
                <h3>{item.role}</h3>
                <ul>
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        <div className="promotion-note">
          <span className="promotion-star" aria-hidden="true">
            +
          </span>
          <p>
            We regularly conduct promotion functions to recognize and elevate talent at every
            level.
          </p>
        </div>
      </section>

      <section className="internship-cta">
        <div className="cta-panel">
          <div className="section-badge">NEXT STEP</div>
          <h2>Start Building Your Career With I Groups</h2>
          <p>
            Join a growth-focused internship environment where training, mentorship, and
            opportunity move together.
          </p>
          <button className="primary-btn">Apply for Internship</button>
        </div>
      </section>
    </div>
  );
}

function LegacyInternship() {
  return (
    <div className="internship-container">

      {/* HERO */}
      <section className="hero">
        <h1>Internship Program</h1>
        <p>Grow your career with structured training and real-world experience</p>
      </section>

      {/* TIMELINE */}
      <section className="timeline">

        {/* STEP 1 */}
        <div className="timeline-item">
          <div className="circle">01</div>
          <div className="content">
            <h3>Trainee</h3>
            <ul>
              <li>Punctuality, Regularity, Responsibility</li>
              <li>Stability in Business</li>
              <li>Master of 5 Steps, 4 Factors & 8 Steps</li>
              <li>Ringing the Bell for 3 Days</li>
            </ul>
          </div>
        </div>

        {/* STEP 2 */}
        <div className="timeline-item">
          <div className="circle">02</div>
          <div className="content">
            <h3>Trainer</h3>
            <ul>
              <li>Handling team members</li>
              <li>Leadership development</li>
              <li>Communication skills</li>
              <li>Training execution</li>
            </ul>
          </div>
        </div>

        {/* STEP 3 */}
        <div className="timeline-item">
          <div className="circle">03</div>
          <div className="content">
            <h3>Team Leader</h3>
            <ul>
              <li>Team management</li>
              <li>Target achievement</li>
              <li>Strategic planning</li>
              <li>Performance tracking</li>
            </ul>
          </div>
        </div>

        {/* STEP 4 */}
        <div className="timeline-item">
          <div className="circle">04</div>
          <div className="content">
            <h3>Manager</h3>
            <ul>
              <li>Branch handling</li>
              <li>Business growth</li>
              <li>Recruitment & training</li>
              <li>Leadership excellence</li>
            </ul>
          </div>
        </div>

      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Start Your Journey Today 🚀</h2>
        <button>Apply Now</button>
      </section>

    </div>
  );
}

void LegacyInternship;
