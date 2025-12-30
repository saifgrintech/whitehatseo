import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Readytotalk from "../../Components/Readytotalk";
import Testimonials from "../Testimonials/Testimonials";

import "./plans.css";

const WEBSITE_URL = process.env.REACT_APP_FRONTEND;

const PPCPlan = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="container3">
        <div className="header">
          <div className="box">
            <div className="container">
              <div className="row align-items-center">
                
                {/* LEFT CONTENT (ENHANCED) */}
                <div className="col-lg-6 mb-4 mb-lg-0 text-start">
                  <h1 className="hero-title text-start">
                    High-ROI <span>PPC Advertising</span> Services That Deliver
                    Instant Leads & Sales
                  </h1>

                  <p className="mt-3">
                    Want instant visibility and fast conversions? Our PPC
                    advertising services help businesses generate qualified
                    leads, maximize ad spend efficiency, and scale revenue
                    through highly targeted paid campaigns.
                  </p>

                  <p className="mt-2">
                    We manage Google Ads, Bing Ads, and paid social campaigns
                    with a sharp focus on ROI — ensuring every click has a
                    purpose and every rupee delivers value.
                  </p>

                  <ul className="mt-3 p-0">
                    <li>
                      <i className="fa-solid fa-check"></i> Conversion-Focused Ad
                      Campaigns
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i> Smart Budget &
                      Bid Optimization
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i> Dedicated PPC
                      Specialists & Reports
                    </li>
                  </ul>

                  <div className="d-flex gap-3 mt-4">
                    <Link to="/contact" className="gradient-button">
                      Get Free PPC Audit
                    </Link>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="col-lg-6 text-center">
                  <img
                    src="/images/plans/ppc.png"
                    className="img-fluid"
                    alt="PPC Services"
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
      </section>

      <section className="seo-plan-section  inner_padding">
        <div className="container">
          <h2 className="fw-bold text-center">Our PPC Packages</h2>
          <p className="section-subtitle text-center">
            Management fees only. Ad spend is paid directly to Google, Meta & other platforms.
          </p>

          <div className="row g-4 mt-4">

            {/* BASIC PPC */}
            <div className="col-lg-4 col-md-6">
              <div className="seo-plan-card h-100">
                <h3 className="plan-title">Basic PPC</h3>
                <p className="plan-price">$100 /month</p>

                <ul className="plan-features">
                  <li>Campaign setup & basic optimization</li>
                  <li>Keyword research</li>
                  <li>Ad creation (text ads)</li>
                  <li>1–2 platforms (Google Search)</li>
                  <li>Monthly performance reporting</li>
                  <li>Ideal for small budgets & testing</li>
                </ul>

                <Link to="/contact" className="plan-btn">
                 Let's connect
                </Link>
              </div>
            </div>

            {/* STANDARD PPC */}
            <div className="col-lg-4 col-md-6">
              <div className="seo-plan-card highlight-plan h-100">
                <div className="popular-plan">Most Popular</div>
                <h3 className="plan-title">Standard PPC</h3>
                <p className="plan-price">$150 – $180 /month</p>

                <ul className="plan-features">
                  <li>All Basic PPC features</li>
                  <li>Advanced targeting & bidding strategies</li>
                  <li>A/B testing of ads</li>
                  <li>Multi-platform ads (Search, Display, Remarketing)</li>
                  <li>Weekly optimizations</li>
                  <li>Conversion tracking setup</li>
                </ul>

                <Link to="/contact" className="plan-btn">
                  Let's connect
                </Link>
              </div>
            </div>

            {/* PREMIUM PPC */}
            <div className="col-lg-4 col-md-12">
              <div className="seo-plan-card h-100">
                <h3 className="plan-title">Premium PPC</h3>
                <p className="plan-price">$250 – $300 /month</p>

                <ul className="plan-features">
                  <li>All Standard PPC features</li>
                  <li>Full-funnel campaign strategy</li>
                  <li>Custom creatives & landing pages</li>
                  <li>Dedicated PPC account manager</li>
                  <li>Advanced analytics & ROI optimization</li>
                  <li>Best for high-volume & eCommerce brands</li>
                </ul>

                <Link to="/contact" className="plan-btn">
                  Let's connect
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>



      {/* CTA STRIP */}
      <section className="ready-to-talk position-relative">
        <div className="box">
          <h2 className="mb-5 mx-2">
            Stop Wasting Ad Spend — Our{" "}
            <span>PPC Strategies</span> <br />
            Drive Qualified Leads & Revenue
          </h2>

          <Link
            to="/contact"
            className="btn-purple1"
            style={{ textDecoration: "none" }}
          >
            Book a free Consultation
          </Link>
        </div>
      </section>

      {/* HOW PPC SCALES */}
      <section className="inner_padding">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            How Our <span className="text-theme">PPC Campaigns</span> Scale Your
            Business?
          </h2>

          <div className="row g-4">
            {[
              {
                icon: "⚡",
                title: "Instant Visibility",
                desc: "Appear on top of search results and social feeds within hours."
              },
              {
                icon: "🎯",
                title: "High-Intent Targeting",
                desc: "Reach users who are actively searching for your services."
              },
              {
                icon: "📈",
                title: "Optimized ROI",
                desc: "Continuous testing and optimization to maximize conversions."
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
                PPC That Delivers <span>Sales</span>, Not Just Clicks
              </h2>

              <p className="text-white">
                Our PPC management focuses on conversions, cost efficiency, and
                long-term profitability — not just traffic volume.
              </p>

              <Link to="/contact" className="btn-purple1">
                Let’s Talk With Expert
              </Link>
            </div>

            <div className="col-lg-6">
              <div className="metrics-grid">
                {[
                  { label: "Clicks", icon: "fa-mouse-pointer" },
                  { label: "Leads", icon: "fa-user-plus" },
                  { label: "CPC", icon: "fa-coins" },
                  { label: "Conversions", icon: "fa-bullseye" },
                  { label: "Reach", icon: "fa-globe" },
                  { label: "ROI", icon: "fa-chart-line" },
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
      {/* <div className="py-5">
        <div className="container py-4">
          <h2 className="fw-bold text-center mb-4">
            PPC Results That <span className="text-theme">Speak for Themselves</span>
          </h2>
          <PortfolioSlider />
        </div>
      </div> */}

      {/* STATS */}
      <section className="py-5 stats-section">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md-4">
              <div className="stat-box">
                <i className="fa-solid fa-calendar-check"></i>
                <h2>5+</h2>
                <p>Years PPC Experience</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stat-box">
                <i className="fa-solid fa-face-smile"></i>
                <h2>98%</h2>
                <p>Client Retention</p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="stat-box">
                <i className="fa-solid fa-briefcase"></i>
                <h2>100+</h2>
                <p>Successful Campaigns</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="inner_padding">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            FAQs For <span className="text-theme">PPC Services</span>
          </h2>

          <div className="row">
            {[1, 2].map((col) => (
              <div className="col-md-6" key={col}>
                <div className="accordion p-0 bg-transparent">
                  {[
                    "Is PPC suitable for my business?",
                    "How fast can I see results?",
                    "Do you manage ad budgets?",
                    "Can I pause campaigns anytime?"
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
                          Yes, our PPC plans are flexible, scalable, and fully
                          transparent.
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

export default PPCPlan;
