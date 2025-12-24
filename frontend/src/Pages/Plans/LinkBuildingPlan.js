import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Readytotalk from "../../Components/Readytotalk";
import Testimonials from "../Testimonials/Testimonials";
import PortfolioSlider from "../Portfolio/PortfolioSlider";

import "./plans.css";

const WEBSITE_URL = process.env.REACT_APP_FRONTEND;

const LinkBuildingPlan = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="container3">
        <div className="header">
          <div className="box">
            <div className="container">
              <div className="row align-items-center">

                {/* LEFT CONTENT */}
                <div className="col-lg-6 mb-4 mb-lg-0 text-start">
                  <h1 className="hero-title text-start">
                    Powerful <span>Link Building</span> Services That Boost
                    Authority, Rankings & Trust
                  </h1>

                  <p className="mt-3">
                    Struggling to rank despite good content? Our ethical link
                    building strategies help your website gain authority,
                    credibility, and long-term ranking power.
                  </p>

                  <p className="mt-2">
                    We earn high-quality backlinks from relevant, authoritative
                    websites — no spam, no shortcuts, only Google-safe results.
                  </p>

                  <ul className="mt-3 p-0">
                    <li>
                      <i className="fa-solid fa-check"></i> White-Hat &
                      Outreach-Based Links
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i> Niche-Relevant &
                      High-Authority Domains
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i> Manual Quality Checks
                      & Transparent Reports
                    </li>
                  </ul>

                  <div className="d-flex gap-3 mt-4">
                    <Link to="/contact" className="btn btn-dark p-3">
                      Get Backlink Strategy
                    </Link>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="col-lg-6 text-center">
                  <img
                    src="/images/plans/link-building.png"
                    className="img-fluid"
                    alt="Link Building Services"
                  />
                </div>
              </div>
            </div>

            {/* ANIMATIONS (UNCHANGED) */}
            <div className="all-animation">
              {[
                "all-animation1.png",
                "all-animation2.svg",
                "all-animation3.svg",
                "all-animation4.svg",
                "all-animation5.png",
                "all-animation6.svg",
                "all-animation7.svg",
                "all-animation8.svg",
              ].map((img, i) => (
                <div key={i} className={`all-animation${i + 1}`}>
                  <img src={`all-animations/${img}`} alt="animation" />
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>

      {/* CTA STRIP */}
      <section className="ready-to-talk position-relative">
        <div className="box">
          <h2 className="mb-5 mx-2">
            Build Authority With <span>High-Quality Backlinks</span> <br />
            That Google Trusts
          </h2>

          <Link
            to="/contact"
            className="btn-purple1"
            style={{ textDecoration: "none" }}
          >
            Hire Link Building Expert
          </Link>
        </div>
      </section>

      {/* HOW LINK BUILDING WORKS */}
      <section className="inner_padding">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            How Our <span className="text-theme">Link Building</span> Strategy
            Strengthens Your SEO
          </h2>

          <div className="row g-4">
            {[
              {
                icon: "🔍",
                title: "Prospect Research",
                desc: "We identify authoritative, niche-relevant websites for outreach."
              },
              {
                icon: "🤝",
                title: "Manual Outreach",
                desc: "Personalized outreach to earn genuine editorial backlinks."
              },
              {
                icon: "📈",
                title: "Authority Growth",
                desc: "Consistent link velocity that improves trust and rankings."
              }
            ].map((item, i) => (
              <div className="col-md-4" key={i}>
                <div className="card shadow-sm border-0 h-100">
                  <div className="card-body p-4">
                    <div className="how-icon fs-2 mb-3">{item.icon}</div>
                    <h5 className="fw-bold mb-3">{item.title}</h5>
                    <p>{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PERFORMANCE SECTION */}
      <section className="performance-section">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-6 d-flex flex-column gap-3 text-white mb-4 mb-lg-0">
              <h2 className="fw-bold">
                Link Building That Builds <span>Authority</span>, Not Penalties
              </h2>

              <p className="text-white">
                We focus on quality over quantity — helping your site earn
                trusted links that strengthen rankings and brand credibility.
              </p>

              <Link to="/contact" className="btn-purple1">
                Let’s Build Authority
              </Link>
            </div>

            <div className="col-lg-6">
              <div className="metrics-grid">
                {[
                  { label: "Backlinks", icon: "fa-link" },
                  { label: "Authority", icon: "fa-shield-halved" },
                  { label: "Trust", icon: "fa-thumbs-up" },
                  { label: "Rankings", icon: "fa-arrow-up" },
                  { label: "Traffic", icon: "fa-chart-line" },
                  { label: "ROI", icon: "fa-coins" },
                ].map((item, i) => (
                  <div className="metric-card" key={i}>
                    <i className={`fa-solid ${item.icon}`}></i>
                    <span>{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <div className="py-5">
        <div className="container py-4">
          <h2 className="fw-bold text-center mb-4">
            Proven <span className="text-theme">Link Building</span> Results
          </h2>
          <PortfolioSlider />
        </div>
      </div>

      {/* STATS */}
      <section className="py-5 stats-section">
        <div className="container">
          <div className="row text-center g-4">

            <div className="col-md-4">
              <div className="stat-box">
                <i className="fa-solid fa-link"></i>
                <h2>50K+</h2>
                <p>High-Quality Links Built</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stat-box">
                <i className="fa-solid fa-face-smile"></i>
                <h2>97%</h2>
                <p>Client Retention Rate</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stat-box">
                <i className="fa-solid fa-ranking-star"></i>
                <h2>300+</h2>
                <p>Websites Ranked</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            FAQs For <span className="text-theme">Link Building</span>
          </h2>

          <div className="row">
            {[1, 2].map((col) => (
              <div className="col-md-6" key={col}>
                <div className="accordion bg-transparent">
                  {[
                    "Are your links Google-safe?",
                    "What types of backlinks do you build?",
                    "How many links do I get per month?",
                    "Can I choose my target pages?"
                  ].map((q, i) => (
                    <div className="accordion-item mb-2" key={i}>
                      <h2 className="accordion-header">
                        <button
                          className="accordion-button collapsed"
                          data-bs-toggle="collapse"
                          data-bs-target={`#faq${col}${i}`}
                        >
                          {q}
                        </button>
                      </h2>
                      <div
                        id={`faq${col}${i}`}
                        className="accordion-collapse collapse"
                      >
                        <div className="accordion-body">
                          Yes, all links are built using white-hat,
                          outreach-driven methods aligned with Google
                          guidelines.
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Readytotalk />
      <Testimonials />
      <Footer />
    </>
  );
};

export default LinkBuildingPlan;
