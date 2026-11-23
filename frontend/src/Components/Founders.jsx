import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import "./founders.css";

// Founder data: edit names, links and bios here (used on Home + About pages)
export const founders = [
  {
    id: "anjna",
    name: "Anjna Bhardwaj",
    role: "Co-Founder",
    cat: "position",
    expertise: "Branding/PPC",
    img: "/images/anjana.jpeg",
    linkedin: "https://www.linkedin.com/in/anjana-kumari-469087a8/",
    upwork: "https://www.upwork.com/freelancers/~016dfb55d27858d40f",
    highlights: ["8 Years on Upwork", "Hundreds of Clients", "Agency Co-Founder"],
    tagline:
      "From a Dream to an Entrepreneurial Journey – Built with Passion, Perseverance & Purpose",
    description: [
      {
        type: "p",
        text: "Every great journey begins with a dream. Mine began with a simple ambition: to build a career through my skills, create meaningful relationships, and make a difference in the success of others.",
      },
      {
        type: "p",
        text: "What started as an individual freelancing journey on Upwork gradually became something much bigger. Over eight successful years, I had the privilege of serving hundreds of clients, working with businesses from diverse industries, and building relationships based on trust, commitment, and results.",
      },
      {
        type: "p",
        text: "After eight rewarding years as a freelancer, I took a bold step forward – transforming my individual experience, professional expertise, and passion for digital marketing into my own agency, WhiteHatSEO.",
      },
      {
        type: "p",
        text: "For me, WhiteHatSEO is more than just a business. It represents years of hard work, lessons learned, client trust, and the courage to turn a personal dream into reality. My vision is to help businesses grow beyond boundaries through ethical, innovative, and result-driven digital marketing strategies.",
      },

      { type: "h", text: "My Professional Expertise" },
      {
        type: "p",
        text: "Over the years, I have developed expertise in helping businesses strengthen their digital presence, reach the right audience, and create sustainable growth. My core areas of expertise include:",
      },
      {
        type: "li",
        text: "Search Engine Optimization (SEO): On-page, off-page, technical, and comprehensive SEO strategies.",
      },
      {
        type: "li",
        text: "Keyword Research & Competitor Analysis: Identifying opportunities that help businesses outperform competitors.",
      },
      {
        type: "li",
        text: "Link Building & Backlink Strategies: Building quality backlinks through ethical and sustainable practices.",
      },
      {
        type: "li",
        text: "Local SEO: Google Business Profile optimization and local search visibility.",
      },
      {
        type: "li",
        text: "Content Marketing: Developing SEO-focused content strategies that attract and engage audiences.",
      },
      {
        type: "li",
        text: "Website Traffic & Lead Generation: Turning online visibility into meaningful business opportunities.",
      },
      {
        type: "li",
        text: "SEO Audits & Performance Analysis: Identifying opportunities, resolving technical issues, and improving website performance.",
      },
      {
        type: "li",
        text: "Digital Marketing Strategy: Creating customized strategies aligned with business goals and long-term growth.",
      },
      {
        type: "p",
        text: "I believe SEO is not simply about ranking a website on Google. It is about understanding people, building trust, creating visibility, and turning opportunities into business success.",
      },

      { type: "h", text: "The Woman Beyond the Professional Journey" },
      {
        type: "p",
        text: "Behind the entrepreneur is a woman who believes that dreams should never have an expiry date. I am also a proud mother of two wonderful children – a daughter and a son. They are my greatest blessings and my biggest inspiration.",
      },
      {
        type: "p",
        text: "Balancing motherhood, family responsibilities, and professional ambitions has not always been easy, but it has made me stronger, more patient, and more determined. My children have taught me that strength is not always about doing everything perfectly; sometimes, it is simply about showing up every day, moving forward, and never giving up on yourself.",
      },
      {
        type: "p",
        text: "My journey has taught me that being a mother and pursuing professional dreams are not two competing paths. Both can grow together, and both can make life more meaningful.",
      },

      { type: "h", text: "My Vision – Growing Together" },
      {
        type: "p",
        text: "Today, through WhiteHatSEO, I want to take everything I have learned over the years and use it to create meaningful opportunities for businesses. I believe in honest work, ethical marketing, continuous learning, and building relationships that last beyond individual projects.",
      },
      {
        type: "p",
        text: "My journey from a freelancer to an agency founder has taught me one important lesson: You don't need to have everything figured out to take the first step. You just need the courage to begin, the determination to continue, and the belief that something bigger is possible.",
      },
      {
        type: "p",
        text: "And this is not the end of my journey. It is the beginning of a new chapter. From one freelancer's dream to a vision of helping hundreds of businesses grow – this is the story behind WhiteHatSEO.",
      },
    ],
  },
  {
    id: "arti",
    name: "Arti Mehta",
    role: "Co-Founder",
    expertise: "SEO/SMM/PPC",
    img: "/images/arti-new.webp",
    cat: "position",
    linkedin: "https://www.linkedin.com/in/arti-mehta-b3930a132/",
    upwork: "https://www.upwork.com/freelancers/~010df2ede4e32402c7",
    highlights: ["9 Years Experience", "MCA", "SEO & PPC Specialist"],
    tagline: "A Woman Who Builds Dreams, Grows Businesses & Embraces Life",
    description: [
      {
        type: "p",
        text: "Every woman has a story, a dream, and the strength to turn it into reality. Mine is a journey of learning, independence, ambition, and finding happiness in everything I do.",
      },
      {
        type: "p",
        text: "With a Master's in Computer Applications (MCA), I began my career in the corporate world, spending 4 years as an SEO Executive before stepping into the world of freelancing. For the next 5 years, I worked as a full-time freelancer on Upwork, collaborating with clients worldwide and helping businesses grow their online presence.",
      },
      {
        type: "p",
        text: "Those 9 years of professional experience shaped my passion for digital marketing, especially SEO and PPC. Today, I bring together strategy, creativity, and data-driven thinking to help businesses reach the right audience, generate leads, and grow with confidence in the digital world.",
      },

      { type: "h", text: "My Expertise" },
      { type: "li", text: "PPC & Google Ads Management" },
      { type: "li", text: "SEO & Website Optimization" },
      { type: "li", text: "Keyword & Competitor Research" },
      { type: "li", text: "Paid Campaign Strategy & Optimization" },
      { type: "li", text: "Conversion Tracking & Analytics" },
      { type: "li", text: "Lead Generation & Digital Growth" },
      {
        type: "p",
        text: "For me, digital marketing is not just about clicks, rankings, or numbers. It is about helping businesses find opportunities, connect with customers, and turn their online presence into real growth.",
      },

      { type: "h", text: "More Than a Professional – A Woman Living Her Dreams" },
      {
        type: "p",
        text: "I am also a proud mother of a wonderful son, managing my home, my work, and my family while making time to enjoy life.",
      },
      {
        type: "p",
        text: "I believe women don't have to choose between ambition and family, career and happiness, or success and self-care. We can build careers, nurture our loved ones, chase our dreams, and enjoy the life we create.",
      },
      {
        type: "p",
        text: "My son inspires me, my work empowers me, and every new challenge reminds me that growth has no limits.",
      },
      {
        type: "p",
        text: "My message to every woman is simple: Believe in yourself, keep learning, don't be afraid to start, and never let your dreams become smaller than your responsibilities. You are capable of building both a beautiful career and a beautiful life.",
      },
      {
        type: "p",
        text: "Today, through my passion for digital marketing, I aim to help businesses around the world grow online—while continuing to grow, inspire, and enjoy my own journey.",
      },
      {
        type: "p",
        text: "Driven by passion. Powered by experience. Inspired by life.",
      },
    ],
  },
];

/**
 * Renders the founder cards (as grid columns) + the offcanvas drawer.
 * Place it inside a Bootstrap <div className="row"> in the team section.
 */
const Founders = () => {
  const [active, setActive] = useState(null); // person shown in the drawer
  const [open, setOpen] = useState(false); // drawer slide state
  const bodyRef = useRef(null);

  const openDrawer = (person) => {
    setActive(person);
    if (bodyRef.current) bodyRef.current.scrollTop = 0;
    setTimeout(() => setOpen(true), 30); // lets the slide-in transition run
  };
  const closeDrawer = () => setOpen(false);

  // Esc to close + lock main page scroll while the drawer is open
  useEffect(() => {
    if (!open) return;

    const html = document.documentElement;
    const body = document.body;
    const prev = {
      htmlOverflow: html.style.overflow,
      bodyOverflow: body.style.overflow,
      bodyPaddingRight: body.style.paddingRight,
    };
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`; // avoid layout jump

    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);

    return () => {
      document.removeEventListener("keydown", onKey);
      html.style.overflow = prev.htmlOverflow;
      body.style.overflow = prev.bodyOverflow;
      body.style.paddingRight = prev.bodyPaddingRight;
    };
  }, [open]);

  // Group consecutive list items into one <ul>; bold the "Title:" part
  const renderBlocks = (blocks) => {
    const out = [];
    let list = [];
    const flush = (key) => {
      if (list.length) {
        out.push(
          <ul className="whfd-list" key={`ul-${key}`}>
            {list}
          </ul>
        );
        list = [];
      }
    };
    blocks.forEach((b, i) => {
      if (b.type === "li") {
        const idx = b.text.indexOf(": ");
        list.push(
          <li key={i}>
            <i className="fa-solid fa-check"></i>
            <span>
              {idx > -1 ? (
                <>
                  <strong>{b.text.slice(0, idx)}</strong>
                  {b.text.slice(idx)}
                </>
              ) : (
                b.text
              )}
            </span>
          </li>
        );
        return;
      }
      flush(i);
      out.push(
        b.type === "h" ? (
          <h4 className="whfd-heading" key={i}>
            {b.text}
          </h4>
        ) : (
          <p className="whfd-text" key={i}>
            {b.text}
          </p>
        )
      );
    });
    flush("end");
    return out;
  };

  return (
    <>
      {founders.map((p) => (
              <div key={p.id} className="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-sm-0">
                <div
                  className="card border-0 whfd-card-click"
                  onClick={() => openDrawer(p)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && openDrawer(p)}
                >
                  <div className="team-member">
                    <img src={p.img} alt={p.name} className={`${p.cat} img img-large`} />
                    <div className="team-info">
                      <h5 className="member1-title m-0">{p.name}</h5>
                      <p className="member1-text m-0">{p.role}</p>
                      {/* <p className="member1-text m-0 mt-1"><b>Expertise: </b>{p.expertise}</p> */}
                    </div>
                  </div>
                </div>
              </div>
            ))}


      {/* TEAM OFFCANVAS DRAWER */}
      {active &&
        createPortal(
        <>
          <div
            className={`whfd-backdrop ${open ? "is-open" : ""}`}
            onClick={closeDrawer}
          ></div>

          <aside
            className={`whfd-drawer ${open ? "is-open" : ""}`}
            role="dialog"
            aria-modal="true"
            aria-hidden={!open}
            aria-label={active.name}
          >
            <button
              type="button"
              className="whfd-close"
              onClick={closeDrawer}
              aria-label="Close"
            >
              &times;
            </button>

            <div className="whfd-hero">
              <img className="whfd-photo" src={active.img} alt={active.name} />

              <div className="whfd-hero-info">
                <h3 className="whfd-name">{active.name}</h3>
                <span className="whfd-role">{active.role}</span>

                <div className="whfd-social">
                  <a
                    href={active.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whfd-social-btn"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={active.upwork}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whfd-social-btn"
                  >
                    <i className="fa-brands fa-upwork"></i>
                    <span>Upwork</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="whfd-body" ref={bodyRef}>
              {active.highlights && (
                <div className="whfd-chips">
                  {active.highlights.map((h) => (
                    <span className="whfd-chip" key={h}>
                      {h}
                    </span>
                  ))}
                </div>
              )}

              {active.tagline && (
                <blockquote className="whfd-tagline">{active.tagline}</blockquote>
              )}

              {renderBlocks(active.description)}
            </div>
          </aside>
        </>,
        document.body
      )}

    </>
  );
};

export default Founders;