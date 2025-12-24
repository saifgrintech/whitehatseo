import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Readytotalk from "../../Components/Readytotalk";
import Testimonials from "../Testimonials/Testimonials";
import PortfolioSlider from "../Portfolio/PortfolioSlider";

import "./plans.css";

const WEBSITE_URL = process.env.REACT_APP_FRONTEND;

const DigitalMarketingPlan = () => {
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
                    Data-Driven <span>Digital Marketing</span> Services That
                    Build Brands & Drive Revenue
                  </h1>

                  <p className="mt-3">
                    Looking to grow your brand across multiple digital channels?
                    Our digital marketing strategies combine SEO, PPC, social
                    media, and content marketing to deliver consistent growth
                    and measurable ROI.
                  </p>

                  <p className="mt-2">
                    We focus on the full customer journey — from awareness to
                    conversion — ensuring your brand stays visible, relevant,
                    and profitable in a competitive digital landscape.
                  </p>

                  <ul className="mt-3 p-0">
                    <li>
                      <i className="fa-solid fa-check"></i> Omnichannel Growth
                      Strategy
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i> Performance-Focused
                      Campaigns
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i> Transparent Reporting
                      & Analytics
                    </li>
                  </ul>

                  <div className="d-flex gap-3 mt-4">
                    <Link to="/contact" className="btn btn-dark p-3">
                      Get Free Marketing Audit
                    </Link>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="col-lg-6 text-center">
                  <img
                    src="/images/plans/digital.png"
                    className="img-fluid"
                    alt="Digital Marketing Services"
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
            Build a Strong Online Presence With{" "}
            <span>Digital Marketing</span> <br />
            That Drives Sustainable Growth
          </h2>

          <Link
            to="/contact"
            className="btn-purple1"
            style={{ textDecoration: "none" }}
          >
            Hire Digital Marketing Expert
          </Link>
        </div>
      </section>

      {/* HOW DIGITAL MARKETING SCALES */}
      <section className="inner_padding">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            How Our <span className="text-theme">Digital Marketing</span> Strategy
            Scales Your Business?
          </h2>

          <div className="row g-4">
            {[
              {
                icon: "🌐",
                title: "Full-Funnel Growth",
                desc: "We build strategies that guide users from discovery to conversion."
              },
              {
                icon: "📊",
                title: "Data-Backed Decisions",
                desc: "Every campaign is optimized using real-time performance data."
              },
              {
                icon: "🚀",
                title: "Scalable Results",
                desc: "Marketing strategies that grow as your business grows."
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
                Digital Marketing That Drives <span>Growth</span>, Not Guesswork
              </h2>

              <p className="text-white">
                We focus on conversions, engagement, and long-term brand value —
                not vanity metrics.
              </p>

              <Link to="/contact" className="btn-purple1">
                Let’s Grow Your Brand
              </Link>
            </div>

            <div className="col-lg-6">
              <div className="metrics-grid">
                {[
                  { label: "Traffic", icon: "fa-chart-line" },
                  { label: "Engagement", icon: "fa-heart" },
                  { label: "Leads", icon: "fa-user-plus" },
                  { label: "Conversions", icon: "fa-bullseye" },
                  { label: "Reach", icon: "fa-globe" },
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
            Digital Marketing Results That{" "}
            <span className="text-theme">Drive Impact</span>
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
                <i className="fa-solid fa-calendar-check"></i>
                <h2>9+</h2>
                <p>Years of Expertise</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stat-box">
                <i className="fa-solid fa-face-smile"></i>
                <h2>96%</h2>
                <p>Client Satisfaction</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stat-box">
                <i className="fa-solid fa-briefcase"></i>
                <h2>150+</h2>
                <p>Successful Campaigns</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-5">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            FAQs For <span className="text-theme">Digital Marketing</span>
          </h2>

          <div className="row">
            {[1, 2].map((col) => (
              <div className="col-md-6" key={col}>
                <div className="accordion bg-transparent">
                  {[
                    "What channels do you cover in digital marketing?",
                    "How soon can I see results?",
                    "Do you provide performance reports?",
                    "Can I scale services anytime?"
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
                          Yes, our digital marketing services are flexible,
                          scalable, and performance-driven.
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

export default DigitalMarketingPlan;
