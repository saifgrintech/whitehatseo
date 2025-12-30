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
      <section className="container3">
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
                    <Link to="/contact" className="gradient-button">
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
      </section>

      <section className="seo-plan-section inner_padding">
        <div className="container">
          <h2 className="fw-bold text-center">Digital Media Promotion Packages</h2>
          <p className="section-subtitle text-center">
            Build brand awareness, engagement & growth across social media platforms
          </p>

          <div className="row g-4 mt-4">

            {/* BASIC DIGITAL MARKETING */}
            <div className="col-lg-4 col-md-6">
              <div className="seo-plan-card h-100">
                <h3 className="plan-title">Basic Digital Media</h3>
                <p className="plan-price">$150 /month</p>

                <ul className="plan-features">
                  <li>8–12 posts per month</li>
                  <li>2–3 platforms (Meta, LinkedIn)</li>
                  <li>Basic content creation</li>
                  <li>Post scheduling & publishing</li>
                  <li>Limited community engagement</li>
                  <li>Monthly performance reports</li>
                  <li>Organic focus with light ad support</li>
                </ul>

                <Link to="/contact" className="plan-btn">
                  Let's connect
                </Link>
              </div>
            </div>

            {/* STANDARD DIGITAL MARKETING */}
            <div className="col-lg-4 col-md-6">
              <div className="seo-plan-card highlight-plan h-100">
                <div className="popular-plan">Most Popular</div>
                <h3 className="plan-title">Standard Digital Media</h3>
                <p className="plan-price">$180 – $220 /month</p>

                <ul className="plan-features">
                  <li>15–25 posts per month</li>
                  <li>3–4 platforms (Meta, LinkedIn, TikTok)</li>
                  <li>Custom graphics & video content</li>
                  <li>Paid ads management</li>
                  <li>Audience targeting & A/B testing</li>
                  <li>Engagement & growth strategy</li>
                  <li>Bi-weekly performance reports</li>
                </ul>

                <Link to="/contact" className="plan-btn">
                  Let's connect
                </Link>
              </div>
            </div>

            {/* PREMIUM DIGITAL MARKETING */}
            <div className="col-lg-4 col-md-12">
              <div className="seo-plan-card h-100">
                <h3 className="plan-title">Premium Digital Media</h3>
                <p className="plan-price">$250 – $300 /month</p>

                <ul className="plan-features">
                  <li>25+ posts/month (all major platforms Meta, Linkedin, Tiktok etc. )</li>
                  <li>Advanced content (Reels, Stories, Videos)</li>
                  <li>Full paid ad campaigns & retargeting</li>
                  <li>Influencer outreach (optional)</li>
                  <li>Dedicated account manager</li>
                  <li>Detailed analytics & insights</li>
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
            Build a Strong Online Presence With{" "}
            <span>Digital Marketing</span> <br />
            That Drives Sustainable Growth
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
               Let’s Talk With Expert
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
      {/* <div className="py-5">
        <div className="container py-4">
          <h2 className="fw-bold text-center mb-4">
            Digital Marketing Results That{" "}
            <span className="text-theme">Drive Impact</span>
          </h2>
          <PortfolioSlider />
        </div>
      </div> */}

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
            FAQs For <span className="text-theme">Digital Marketing</span>
          </h2>

          <div className="row">
            {[1, 2].map((col) => (
              <div className="col-md-6" key={col}>
                <div className="accordion p-0 bg-transparent">
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
