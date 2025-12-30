import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Readytotalk from "../../Components/Readytotalk";
import Testimonials from "../Testimonials/Testimonials";

import './plans.css'
import CaseStudySlider from "../Homepage/CaseStudySlider";
const WEBSITE_URL = process.env.REACT_APP_FRONTEND;

const SEOPlan = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <section className="container3">
        <div className="header">
          <div className="box">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-6 mb-4 mb-lg-0 text-start">
                  <h1 className="hero-title text-start">
                    Professional <span>SEO Services</span> That Drive
                    Traffic, Leads & Revenue
                  </h1>

                  <p className="mt-3">
                    Looking to grow your business organically? Our data-driven
                    SEO strategies help you rank higher on Google, attract
                    high-intent users, and convert traffic into real customers.
                    We focus on sustainable growth — not short-term tricks.
                  </p>

                  <ul className="mt-3 p-0">
                    <li><i className="fa-solid fa-check"></i>  Result-Oriented SEO Campaigns</li>
                    <li><i className="fa-solid fa-check"></i>  Google-Compliant White Hat Techniques</li>
                    <li><i className="fa-solid fa-check"></i> Dedicated SEO Experts & Monthly Reports</li>
                  </ul>

                  <div className="d-flex gap-3 mt-4 ">
                    <Link to="/contact" className="gradient-button">
                      Get Free Consultation
                    </Link>
                  </div>
                </div>

                <div className="col-lg-6 text-center">
                  <img
                    src="/images/plans/seo-services.png"
                    className="img-fluid"
                    alt="SEO Services"
                  />
                </div>
              </div>
            </div>

            {/* Animations (UNCHANGED) */}
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
          <h2 className="fw-bold text-center">Our SEO Packages</h2>
          <p className="section-subtitle text-center">
            Flexible SEO plans designed for startups, growing businesses & enterprises
          </p>

          <div className="row g-4 mt-4">
            
            {/* BASIC PLAN */}
            <div className="col-lg-4 col-md-6">
              <div className="seo-plan-card h-100">
                <h3 className="plan-title">Basic SEO</h3>
                <p className="plan-price">$100 – $120 /month</p>

                <ul className="plan-features">
                  <li>Keyword research (up to 15 terms)</li>
                  <li>On-page optimization (10–15 pages)</li>
                  <li>Basic technical SEO audit</li>
                  <li>2–4 content pieces per month</li>
                  <li>Monthly / Quarterly reporting</li>
                  <li>Ideal for small businesses starting out</li>
                </ul>

                <Link to="/contact" className="plan-btn">
                  Let's connect
                </Link>
              </div>
            </div>

            {/* STANDARD PLAN */}
            <div className="col-lg-4 col-md-6">
              <div className="seo-plan-card highlight-plan h-100">
                <div className="popular-plan">Most Popular</div>
                <h3 className="plan-title">Standard SEO</h3>
                <p className="plan-price">$150 – $180 /month</p>

                <ul className="plan-features">
                  <li>Advanced keyword research (up to 30 terms)</li>
                  <li>On-page & technical optimization</li>
                  <li>4–8 content pieces per month</li>
                  <li>Basic link building</li>
                  <li>Competitor analysis</li>
                  <li>Bi-weekly performance reporting</li>
                  <li>Best for growing businesses</li>
                </ul>

                <Link to="/contact" className="plan-btn">
                  Let's connect
                </Link>
              </div>
            </div>

            {/* PREMIUM PLAN */}
            <div className="col-lg-4 col-md-12">
              <div className="seo-plan-card h-100">
                <h3 className="plan-title">Premium SEO</h3>
                <p className="plan-price">$250 – $300 /month</p>

                <ul className="plan-features">
                  <li>Comprehensive SEO strategy (100+ keywords)</li>
                  <li>Full technical audits & fixes</li>
                  <li>8+ high-quality content pieces monthly</li>
                  <li>Aggressive link building campaigns</li>
                  <li>Dedicated account manager</li>
                  <li>Advanced analytics & quarterly strategy reviews</li>
                  <li>Ideal for competitive & enterprise markets</li>
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
            Stop Losing Out on Leads – Our{" "}
            <span className="">SEO Strategies</span> <br/> Deliver Measurable Growth!
          </h2>
          <Link to="/contact" className="btn-purple1 " style={{textDecoration:"none"}}>
            Book a free Consultation
          </Link>
        </div>
      </section>

      {/* HOW SEO SCALES */}
      <section className="inner_padding">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            How Our <span className="text-theme">SEO Agency</span> Scales Your
            Business?
          </h2>

          <div className="row g-4">
            {[
              {
                icon: "🚀",
                title: "Hassle-Free Beginning",
                desc: "Quick onboarding, fast audits, and early SEO wins without technical hassle."
              },
              {
                icon: "🎯",
                title: "Ideal Customer Targeting",
                desc: "We identify keywords and intent that attract customers ready to convert."
              },
              {
                icon: "⚡",
                title: "Faster SEO Outcomes",
                desc: "Smart optimizations that accelerate indexing and rankings."
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
            
            {/* LEFT CONTENT */}
            <div className="col-lg-6 d-flex flex-column gap-2  gap-lg-3 text-white mb-4 mb-lg-0">
                <h2 className="fw-bold">
                SEO That Delivers <span className="">Real Leads</span>, Not Just Rankings
                </h2>

                <p className=" text-white">
                Our SEO strategies focus on measurable growth — traffic quality,
                conversions, and ROI — so every click brings real business impact.
                </p>

                <Link to="/contact" className="btn-purple1 ">
                Let’s Talk With Expert
                </Link>
            </div>

            {/* RIGHT METRICS */}
            <div className="col-lg-6">
                <div className="metrics-grid">
                {[
                    { label: "Traffic", icon: "fa-chart-line" },
                    { label: "Leads", icon: "fa-user-plus" },
                    { label: "CTR", icon: "fa-mouse-pointer" },
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

        {/* <div className="">
            <div className="container ">
              <CaseStudySlider />
                  <h2 className=" fw-bold text-center mb-4">
                    How We <span className="text-theme">Deliver Results</span>, Hear From Our Clients
                  </h2>
              <PortfolioSlider />
            </div>
        </div> */}

     {/* STATS SECTION */}
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
      <section className="inner_padding ">
        <div className="container">
          <h2 className="text-center fw-bold mb-5">
            FAQs For <span className="text-theme">SEO Services</span>
          </h2>

          <div className="row">
            {[1, 2].map((col) => (
              <div className="col-md-6" key={col}>
                <div className="accordion p-0 bg-transparent">
                  {[
                    "Is SEO right for my business?",
                    "How long does SEO take?",
                    "Do you provide monthly reports?",
                    "Can I cancel SEO anytime?"
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
                          Yes, our SEO services are flexible, transparent, and
                          performance-driven.
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

export default SEOPlan;
