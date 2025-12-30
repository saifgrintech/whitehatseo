import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Readytotalk from "../../Components/Readytotalk";
import Testimonials from "../Testimonials/Testimonials";

import './plans.css'
import CaseStudySlider from "../Homepage/CaseStudySlider";
const WEBSITE_URL = process.env.REACT_APP_FRONTEND;


const OurPlans = () => {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
     <div className="container3">
          <div className="header">
            <div className="box">
              <h1 className="mb-0">All Packages</h1>
              <div className="all-animation">

                <div className="all-animation1">
                  <img src='all-animations/all-animation1.png' className='circle-img' alt='moon' />

                </div>

                <div className="all-animation2">
                  <img src='all-animations/all-animation2.svg' className='cross-img' alt='cross' />

                </div>

                <div className="all-animation3">
                  <img src='all-animations/all-animation3.svg' className='circle-img' alt='circle' />

                </div>

                <div className="all-animation4">
                  <img src='all-animations/all-animation4.svg' className='triangle-img' alt='triangle' />
                </div>

                <div className="all-animation5">
                  <img src='all-animations/all-animation5.png' className='design1' alt='zig-zag' />

                </div>

                <div className="all-animation6">
                  <img src='all-animations/all-animation6.svg' className='triangle3' alt='triangle' />

                </div>

                <div className="all-animation7">
                  <img src='all-animations/all-animation7.svg' className='triangle3' alt='triangle' />

                </div>

                <div className="all-animation8">
                  <img src='all-animations/all-animation8.svg' className='triangle3' alt='triangle' />

                </div>


              </div>
            </div>
          </div>
        </div>

       <section className="seo-plan-section inner_padding ">
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

       <section className="seo-plan-section inner_padding pt-0">
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

        <section className="seo-plan-section  inner_padding pt-0">
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

      <section className="seo-plan-section inner_padding pt-0">
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

     

      <Readytotalk />
      <Testimonials />
      <Footer />
    </>
  );
}

export default OurPlans