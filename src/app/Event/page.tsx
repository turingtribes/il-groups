"use client"
import { useEffect, useState, useMemo, useRef } from "react";
import { CalendarDays, MapPin, Users, Search, Filter, ArrowRight, BellRing } from "lucide-react";
import "./page.css";

interface Event {
  id: string;
  type: string;
  title: string;
  desc: string;
  date: string;
  location: string;
  seats: string;
  photo: string;
}

const mockEvents: Event[] = [
  {
    id: "1",
    type: "Workshop",
    title: "Flutter Bootcamp",
    desc: "Master cross-platform mobile development from zero to hero with hands-on real-world projects.",
    date: "2026-04-10",
    location: "Chennai, TN",
    seats: "50",
    photo: "/events/flutter.png",
  },
  {
    id: "2",
    type: "Hackathon",
    title: "AI Innovation Challenge",
    desc: "Collaborate with talented developers to build groundbreaking AI-powered solutions in 48 hours.",
    date: "2026-05-01",
    location: "Bangalore, KA",
    seats: "100",
    photo: "/events/ai.png",
  },
  {
    id: "3",
    type: "Conference",
    title: "Tech Vision 2026",
    desc: "Explore the future of web technologies and network with industry leaders at our annual summit.",
    date: "2026-06-15",
    location: "Hyderabad, TS",
    seats: "250",
    photo: "/events/conference.png",
  },
  {
    id: "4",
    type: "Webinar",
    title: "Cloud Native Mastery",
    desc: "Join our expert-led session on scaling applications using modern cloud-native architectures.",
    date: "2026-04-22",
    location: "Online",
    seats: "500",
    photo: "/events/cloud.png",
  },
];

const delay = (ms: number) => new Promise(res => setTimeout(res, ms));

export default function EventPage() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTab, setActiveTab] = useState("All");
const eventsRef = useRef<HTMLElement | null>(null);
  const categories = ["All", "Workshop", "Hackathon", "Conference", "Webinar"];

  useEffect(() => {
    delay(1000).then(() => {
      setEvents(mockEvents);
      setLoading(false);
    });
  }, []);

  const filteredEvents = useMemo(() => {
    return events.filter(e => {
      const matchesSearch = e.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                            e.desc.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesTab = activeTab === "All" || e.type === activeTab;
      return matchesSearch && matchesTab;
    });
  }, [events, searchTerm, activeTab]);

  return (
    <div className="page">
      <div className="mesh-gradient" />

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <div className="badge fade-up">
            <span className="dot" />
            UPCOMING EVENTS
          </div>

          <h1 className="fade-up" style={{ animationDelay: '0.1s' }}>
            Elevate Your Skills. <br />
            <span>Connect with Experts.</span>
          </h1>

          <p className="fade-up" style={{ animationDelay: '0.2s' }}>
            Join our vibrant community of developers and innovators. From deep-dive 
            workshops to high-stakes hackathons, find your next big opportunity here.
          </p>

          <div className="hero-cta fade-up" style={{ animationDelay: '0.3s' }}>
           <button
  className="cta-primary"
  onClick={() =>
    eventsRef.current?.scrollIntoView({ behavior: "smooth" })
  }
>
  Browse Events <ArrowRight size={18} />
</button>
            <button className="cta-secondary">
              <BellRing size={18} /> Get Notified
            </button>
          </div>
        </div>
      </section>

      {/* FILTER SECTION */}
      <section className="filter-container fade-up" style={{ animationDelay: '0.4s' }}>
        <div className="filter-wrapper">
          <div className="tabs">
            {categories.map((tab) => (
              <button
                key={tab}
                className={`tab ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="search-bar">
            <Search size={18} className="search-icon" />
            <input 
              type="text" 
              placeholder="Search events..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* EVENTS GRID */}
<section ref={eventsRef} className="events-section">
          {loading ? (
          <div className="loader-container">
            <div className="loader" />
          </div>
        ) : (
          <>
            {filteredEvents.length > 0 ? (
              <div className="grid">
                {filteredEvents.map((e, idx) => (
                  <div 
                    key={e.id} 
                    className="card fade-up" 
                    style={{ animationDelay: `${0.1 * (idx + 1)}s` }}
                  >
                    <div className="card-img">
                      <img src={e.photo} alt={e.title} />
                      <span className="tag">{e.type}</span>
                    </div>

                    <div className="card-body">
                      <div className="date-badge">
                        <span className="month">{new Date(e.date).toLocaleString('default', { month: 'short' }).toUpperCase()}</span>
                        <span className="day">{new Date(e.date).getDate()}</span>
                      </div>
                      
                      <div className="card-main">
                        <h3>{e.title}</h3>
                        <p>{e.desc}</p>

                        <div className="meta">
                          <span title="Location"><MapPin size={14} /> {e.location}</span>
                          <span title="Seats Available"><Users size={14} /> {e.seats} Seats</span>
                        </div>

                        <button className="btn">
                          View Details <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="no-events">
                <Search size={48} className="no-icon" />
                <h3>No events found</h3>
                <p>Try adjusting your search or filters to find what you're looking for.</p>
                <button className="btn-clear" onClick={() => {setSearchTerm(""); setActiveTab("All");}}>
                  Clear all filters
                </button>
              </div>
            )}
          </>
        )}
      </section>

      {/* FOOTER CTA */}
      <section className="join-community fade-up" style={{ animationDelay: '0.5s' }}>
        <div className="community-card">
          <h2>Never Miss an Update</h2>
          <p>Join 2,000+ developers in our community for early access to all events.</p>
          <div className="community-links">
            <button className="wa-btn">Join WhatsApp Group</button>
            <button className="ds-btn">Join Discord Server</button>
          </div>
        </div>
      </section>
    </div>
  );
}
