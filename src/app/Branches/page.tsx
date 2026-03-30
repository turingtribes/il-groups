"use client"
import Image from "next/image";
import { MapPin, Users, Mail, Phone, ArrowRight, Building2, Globe } from "lucide-react";
import "./page.css";

const buildingImg = "/building.png";
const whatsappIcon = "/icons/whatsapp.svg";
const emailIcon = "/icons/email.svg";

export default function Branches() {
  const branches = [
    {
      city: 'IL Groups', state: 'Tamil Nadu', hq: true,
      address: 'No.2741, Thirukkattalai, Ashok Nagar Bus stop, Sornaboomi Nagar, Pudukkottai – 622303',
      phone: '+91 99523 63079',
      email: 'igroups2025@gmail.com',
      team: 80,
    },
    {
      city: 'Impetus', state: 'Tamil Nadu', hq: false,
      address: 'TVS Shanmuga Nagar, Pudukkottai – 622303',
      phone: '+91 99523 63079',
      email: 'igroups2025@gmail.com',
      team: 80,
    },
    {
      city: 'Infinity', state: 'Tamil Nadu', hq: false,
      address: 'Ashok Nagar, Pudukkottai – 622001',
      phone: '+91 99523 63079',
      email: 'igroups2025@gmail.com',
      team: 45,
    },
    {
      city: 'Intelygenz', state: 'Tamil Nadu', hq: false,
      address: 'Ashok Nagar, Pudukkottai – 622001',
      phone: '+91 99523 63079',
      email: 'igroups2025@gmail.com',
      team: 30,
    },
    {
      city: 'Inspire', state: 'Tamil Nadu', hq: false,
      address: 'Melur, Tamil Nadu – 622001',
      phone: '+91 99523 63079',
      email: 'igroups2025@gmail.com',
      team: 25,
    },
    {
      city: 'Insight', state: 'Tamil Nadu', hq: false,
      address: 'Machuvadi, Pudukkottai – 622001',
      phone: '+91 99523 63079',
      email: 'igroups2025@gmail.com',
      team: 20,
    },
    {
      city: 'Innowave', state: 'Tamil Nadu', hq: false,
      address: 'Pattukottai Main – 622001',
      phone: '+91 99523 63079',
      email: 'igroups2025@gmail.com',
      team: 18,
    },
    {
      city: 'Infogain', state: 'Tamil Nadu', hq: false,
      address: 'Karaikudi 630001',
      phone: '+91 99523 63079',
      email: 'igroups2025@gmail.com',
      team: 18,
    },
  ];

  const stats = [
    { n: '8', l: 'Cities', icon: <MapPin size={20} /> },
    { n: '214+', l: 'Experts', icon: <Users size={20} /> },
    { n: '500+', l: 'Clients', icon: <Globe size={20} /> }
  ];

  return (
    <div className="page">
      <div className="mesh-gradient" />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge fade-up">
            <span className="dot" />
            GLOBAL REACH
          </div>

          <h1 className="fade-up" style={{ animationDelay: '0.1s' }}>
            We're <span>Everywhere</span> You Need Us.
          </h1>

          <p className="fade-up" style={{ animationDelay: '0.2s' }}>
            Expanding across India and beyond, providing world-class tech solutions 
            right at your doorstep. Discover our physical locations.
          </p>
        </div>
      </section>

      {/* PAN-INDIA BANNER */}
      <section className="stats-banner fade-up" style={{ animationDelay: '0.3s' }}>
        <div className="banner-content">
          <div className="banner-title">
            <h3>🇮🇳 Pan-India Presence</h3>
            <p>Proudly serving from Madurai to all major tech hubs.</p>
          </div>

          <div className="stats-grid">
            {stats.map((s, idx) => (
              <div key={idx} className="stat-item">
                <div className="stat-number">{s.n}</div>
                <div className="stat-label">
                  <span className="flex items-center gap-2 justify-center">
                    {s.icon} {s.l}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BRANCHES GRID */}
      <section className="branches-grid">
        <div className="grid">
          {branches.map((b, i) => (
            <div
              key={i}
              className={`card fade-up ${b.hq ? 'hq' : ''}`}
              style={{ animationDelay: `${0.1 * (i + 1)}s` }}
            >
              {b.hq && <div className="hq-badge">Headquarters</div>}

              <div className="card-icon">
                <Image 
                  src={buildingImg} 
                  alt={b.city} 
                  width={64} 
                  height={64} 
                  className="object-cover opacity-80"
                />
              </div>

              <div className="card-content">
                <h3>{b.city}</h3>
                <div className="card-state">{b.state}</div>

                <div className="card-details">
                  <div className="detail-item">
                    <MapPin size={18} className="text-cyan-400 shrink-0" />
                    <span>{b.address}</span>
                  </div>

                  <div className="detail-item">
                    <Image src={whatsappIcon} alt="whatsapp" width={18} height={18} />
                    <a
                      href={`https://wa.me/${b.phone.replace(/\D/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {b.phone}
                    </a>
                  </div>

                  <div className="detail-item">
                    <Image src={emailIcon} alt="email" width={18} height={18} />
                    <a href={`mailto:${b.email}`}>{b.email}</a>
                  </div>
                </div>

                <div className="card-divider" />

                <div className="card-team">
                  <div className="team-avatars">
                    {[1, 2, 3].map((_, j) => (
                      <div key={j} className="avatar-circle">
                         <Users size={10} className="text-cyan-400" />
                      </div>
                    ))}
                  </div>
                  <span className="team-count">{b.team}+ Team Members</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* VISIT SECTION */}
      <section className="visit-section fade-up" style={{ animationDelay: '0.6s' }}>
        <div className="visit-container">
          <div className="visit-grid">
            <div className="visit-content">
              <div className="badge">
                <span className="dot" />
                GET IN TOUCH
              </div>
              <h2>Want to <span>Visit Us?</span></h2>
              <p>
                Our doors are always open for innovators and partners. 
                Whether you're looking for a collaboration or just want to see 
                where the magic happens, we'd love to host you.
              </p>
              
              <div className="visit-ctas">
                <button className="cta-primary">
                  <ArrowRight size={18} /> Schedule a Visit
                </button>
                <button className="cta-secondary">
                  <MapPin size={18} /> Get Directions
                </button>
              </div>

              <div className="visit-info">
                <div className="info-item">
                  <Building2 size={20} className="text-cyan-400" />
                  <div>
                    <h4>Main Headquarters</h4>
                    <p>Sornaboomi Nagar, Pudukkottai</p>
                  </div>
                </div>
                <div className="info-item">
                  <Globe size={20} className="text-purple-400" />
                  <div>
                    <h4>Visiting Hours</h4>
                    <p>Mon - Sat: 9:00 AM - 6:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="visit-graphic">
              <div className="map-card">
                <div className="map-header">
                  <div className="map-dots">
                    <span /> <span /> <span />
                  </div>
                  <div className="map-title">HQ Location Preview</div>
                </div>
                <div className="map-body">
                  <div className="map-placeholder">
                    <div className="pulse-pin" style={{ top: '40%', left: '60%' }}>
                      <MapPin size={24} className="fill-cyan-400 text-cyan-400" />
                      <div className="pulse-ring" />
                    </div>
                  </div>
                  <div className="map-overlay">
                    <div className="hq-mini-card">
                      <Image src={buildingImg} alt="HQ" width={40} height={40} className="rounded-lg" />
                      <div>
                        <h6>IL Groups HQ</h6>
                        <p>Pudukkottai, TN</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}