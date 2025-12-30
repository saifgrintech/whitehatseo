import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Readytotalk from "../../Components/Readytotalk";
import Testimonials from "../Testimonials/Testimonials";

import "./plans.css";

const WEBSITE_URL = process.env.REACT_APP_FRONTEND;

const LocalSEO = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="container3">
        <div className="header">
          <div className="box">
            <div className="container">
              <div className="row align-items-center">

                {/* LEFT CONTENT */}
                <div className="col-lg-6 mb-4 mb-lg-0 text-start">
                  <h1 className="hero-title text-start">
                    Powerful <span>Local SEO</span> Services That Drive
                    Local Traffic, Calls & Store Visits
                  </h1>

                  <p className="mt-3">
                    Want more customers from your local area? Our Local SEO
                    strategies help your business rank higher on Google Maps
                    and local search results.
                  </p>

                  <p className="mt-2">
                    We optimize your Google Business Profile, local citations,
                    reviews, and location-based keywords for consistent growth.
                  </p>

                  <ul className="mt-3 p-0">
                    <li>
                      <i className="fa-solid fa-check"></i> Google Maps & GMB Optimization
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i> Local Keyword & Location Targeting
                    </li>
                    <li>
                      <i className="fa-solid fa-check"></i> NAP Consistency & Review Growth
                    </li>
                  </ul>

                  <div className="d-flex gap-3 mt-4">
                    <Link to="/contact" className="gradient-button">
                      Get Local SEO Strategy
                    </Link>
                  </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="col-lg-6 text-center">
                  <img
                    src="/images/plans/local-seo.png"
                    className="img-fluid"
                    alt="Local SEO Services"
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

      <section className="seo-plan-section inner_padding">
        <div className="container">
            <h2 className="fw-bold text-center">Local SEO Packages</h2>
            <p className="section-subtitle text-center">
            Tailored for businesses targeting local customers through Google Business Profile, citations & reviews
            </p>

            <div className="row g-4 mt-4">

            {/* BASIC LOCAL SEO */}
            <div className="col-lg-4 col-md-6">
                <div className="seo-plan-card h-100">
                <h3 className="plan-title">Basic Local SEO</h3>
                <p className="plan-price">$120 /month</p>

                <ul className="plan-features">
                    <li>Google Business Profile optimization</li>
                    <li>Basic citations & directory listings</li>
                    <li>On-page local SEO tweaks</li>
                    <li>Review monitoring</li>
                    <li>Monthly / Quarterly reporting</li>
                    <li>Ideal for single-location businesses</li>
                </ul>

                <Link to="/contact" className="plan-btn">
                    Let's connect
                </Link>
                </div>
            </div>

            {/* STANDARD LOCAL SEO */}
            <div className="col-lg-4 col-md-6">
                <div className="seo-plan-card highlight-plan h-100">
                    <div className="popular-plan">Most Popular</div>
                <h3 className="plan-title">Standard Local SEO</h3>
                <p className="plan-price">$150 – $180 /month</p>

                <ul className="plan-features">
                    <li>All Basic Local SEO features</li>
                    <li>Ongoing citation building</li>
                    <li>Local content creation (2–4 pieces/month)</li>
                    <li>Review strategy & response management</li>
                    <li>Local link building</li>
                    <li>Analytics tracking & insights</li>
                </ul>

                <Link to="/contact" className="plan-btn">
                    Let's connect
                </Link>
                </div>
            </div>

            {/* PREMIUM LOCAL SEO */}
            <div className="col-lg-4 col-md-12">
                <div className="seo-plan-card h-100">
                <h3 className="plan-title">Premium Local SEO</h3>
                <p className="plan-price">$220 – $250 /month</p>

                <ul className="plan-features">
                    <li>All Standard Local SEO features</li>
                    <li>Multi-location SEO management</li>
                    <li>Advanced local content & schema markup</li>
                    <li>Competitive local market analysis</li>
                    <li>Dedicated support & priority handling</li>
                    <li>Custom reporting & strategy</li>
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
            Get Found by <span>Local Customers Exactly When They’re</span> <br />
            Searching for Your Services Nearby
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

      {/* HOW LOCAL SEO WORKS */}
      <section className="inner_padding">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            How Our <span className="text-theme">Local SEO</span> Strategy
            Helps You Rank Faster
          </h2>

          <div className="row g-4">
            {[
              {
                icon: "📍",
                title: "Google Business Optimization",
                desc: "We fully optimize your GMB profile for better map visibility."
              },
              {
                icon: "🔎",
                title: "Local Keyword Targeting",
                desc: "Location-based keywords that attract ready-to-convert customers."
              },
              {
                icon: "⭐",
                title: "Reviews & Trust Signals",
                desc: "Improve credibility with reviews, citations & local mentions."
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
                Local SEO That Drives <span>Calls</span>, Visits & Leads
              </h2>

              <p className="text-white">
                We focus on high-intent local searches that convert into
                phone calls, directions, and real customers.
              </p>

              <Link to="/contact" className="btn-purple1">
                Let’s Talk With Expert
              </Link>
            </div>

            <div className="col-lg-6">
              <div className="metrics-grid">
                {[
                  { label: "Map Rankings", icon: "fa-location-dot" },
                  { label: "Local Leads", icon: "fa-phone" },
                  { label: "Reviews", icon: "fa-star" },
                  { label: "Traffic", icon: "fa-chart-line" },
                  { label: "Visibility", icon: "fa-eye" },
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

      {/* STATS */}
       <section className="py-5 stats-section">
            <div className="users">
               <div className="users-animation">

            <div className="user-animation1">
                <img src={`${WEBSITE_URL}/homeimages/user-animation1.png`} className='circle3' alt='moon' />

            </div>


            <div className="user-animation2">
                <img src={`${WEBSITE_URL}/homeimages/user-animation2.svg`} className='circle' alt='circle' />

            </div>

            <div className="user-animation3">
                <img src={`${WEBSITE_URL}/homeimages/user-animation3.svg`} className='circle' alt='circle' />

            </div>

            <div className="user-animation4">
                <img src={`${WEBSITE_URL}/homeimages/user-animation4.svg`} className='user-triangle' alt='triangle' />

            </div>

            <div className="user-animation5">
                <img src={`${WEBSITE_URL}/homeimages/user-animation5.png`} className='user-design' alt='zig-zag' />
            </div>

            <div className="user-animation6">
                <img src={`${WEBSITE_URL}/homeimages/user-animation6.svg`} className='user-triangle2' alt='triangle' />
            </div>

            <div className="user-animation7">
                <img src={`${WEBSITE_URL}/homeimages/user-animation7.svg`} className='user-triangle3' alt='triangle' />
            </div>

            <div className="user-animation8">
                <img src={`${WEBSITE_URL}/homeimages/user-animation8.svg`} className='user-cross' alt='cross' />
            </div>

              </div>     
            <div className="container">
                <div className="row text-center g-4">

                <div className="col-md-4">
                    <div className="stat-box">
                    <i className="fa-solid fa-calendar-check"></i>
                    <h2>5+</h2>
                    <p>Years of Experience</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="stat-box">
                    <i className="fa-solid fa-face-smile"></i>
                    <h2>98%</h2>
                    <p>Client Satisfaction</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div className="stat-box">
                    <i className="fa-solid fa-briefcase"></i>
                    <h2>100+</h2>
                    <p>Projects Completed</p>
                    </div>
                </div>

                </div>
            </div>
            </div>
        </section>


      {/* FAQ */}
      <section className="inner_padding">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            FAQs For <span className="text-theme">Local SEO</span>
          </h2>

          <div className="row">
            {[1, 2].map((col) => (
              <div className="col-md-6" key={col}>
                <div className="accordion p-0 bg-transparent">
                  {[
                    "How long does Local SEO take?",
                    "Do you optimize Google Business Profile?",
                    "Can you rank my business in multiple locations?",
                    "Is Local SEO suitable for service-based businesses?"
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
                          Yes, Local SEO helps businesses improve visibility
                          in Google Maps, local search results, and nearby
                          customer searches.
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

export default LocalSEO;
