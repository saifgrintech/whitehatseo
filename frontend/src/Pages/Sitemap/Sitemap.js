import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import "./sitemap.css";
import { Helmet } from "react-helmet-async";

const Sitemap = () => {
  return (
    <>
       <Helmet>
          <title>A complete Sitemap | Whitehat SEO</title>
          <meta name="description" content="Explore the complete sitemap of WhiteHatSEO to easily find all services, blog posts, and key pages for SEO, digital marketing, analytics, and more." />
          <meta name="keywords" content="Contact WhiteHatSeo, SEO Support, Digital Marketing Help" />
          <meta property="og:title" content="A complete Sitemap | Whitehat SEO" />
          <meta property="og:description" content="Explore the complete sitemap of WhiteHatSEO to easily find all services, blog posts, and key pages for SEO, digital marketing, analytics, and more." />
          <link rel="canonical" href="https://whitehatseo.in/sitemap" />

      </Helmet>

      <Navbar />

      <div className="container3">
        <div className="header">
          <div className="box">
            <h1 className="mb-0">Sitemap</h1>

            <div className="all-animation">
              <div className="all-animation1">
                <img src="all-animations/all-animation1.png" className="circle-img" alt="moon" />
              </div>
              <div className="all-animation2">
                <img src="all-animations/all-animation2.svg" className="cross-img" alt="cross" />
              </div>
              <div className="all-animation3">
                <img src="all-animations/all-animation3.svg" className="circle-img" alt="circle" />
              </div>
              <div className="all-animation4">
                <img src="all-animations/all-animation4.svg" className="triangle-img" alt="triangle" />
              </div>
              <div className="all-animation5">
                <img src="all-animations/all-animation5.png" className="design1" alt="zig-zag" />
              </div>
              <div className="all-animation6">
                <img src="all-animations/all-animation6.svg" className="triangle3" alt="triangle" />
              </div>
              <div className="all-animation7">
                <img src="all-animations/all-animation7.svg" className="triangle3" alt="triangle" />
              </div>
              <div className="all-animation8">
                <img src="all-animations/all-animation8.svg" className="triangle3" alt="triangle" />
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* SITEMAP CONTENT */}
      <section className="py-5">
        <div className="container">
          <div className="row g-4">

            {/* MAIN PAGES */}
            <div className="col-md-6 col-lg-3">
              <div className="sitemap-box">
                <h5 className="fw-bold mb-3">Main Pages</h5>
                <ul>
                  <li><Link to="/"><i className="fa-solid fa-arrow-right-long me-2"></i> Home</Link></li>
                  <li><Link to="/about"><i className="fa-solid fa-arrow-right-long me-2"></i> About Us</Link></li>
                  <li><Link to="/services"><i className="fa-solid fa-arrow-right-long me-2"></i> Services</Link></li>
                  <li><Link to="/case-studies"><i className="fa-solid fa-arrow-right-long me-2"></i> Case Studies</Link></li>
                  <li><Link to="/packages"><i className="fa-solid fa-arrow-right-long me-2"></i> Packages</Link></li>
                  <li><Link to="/contact"><i className="fa-solid fa-arrow-right-long me-2"></i> Contact</Link></li>
                </ul>
              </div>
            </div>

            {/* SERVICES – ALL 18 IN ONE CARD (2 COLUMNS) */}
            <div className="col-md-6 col-lg-6">
              <div className="sitemap-box">
                <h5 className="fw-bold mb-3">Services</h5>

                <div className="row">
                  <div className="col-md-6">
                    <ul>
                      <li><Link to="/services/search-engine-optimization"><i className="fa-solid fa-arrow-right-long me-2"></i> Search Engine Optimization</Link></li>
                      <li><Link to="/services/local-seo"><i className="fa-solid fa-arrow-right-long me-2"></i> Local SEO</Link></li>
                      <li><Link to="/services/social-media-marketing"><i className="fa-solid fa-arrow-right-long me-2"></i> Social Media Marketing</Link></li>
                      <li><Link to="/services/social-media-optimization"><i className="fa-solid fa-arrow-right-long me-2"></i> Social Media Optimization</Link></li>
                      <li><Link to="/services/pay-per-click-ppc"><i className="fa-solid fa-arrow-right-long me-2"></i> Pay Per Click (PPC)</Link></li>
                      <li><Link to="/services/digital-marketing"><i className="fa-solid fa-arrow-right-long me-2"></i> Digital Marketing</Link></li>
                      <li><Link to="/services/email-marketing"><i className="fa-solid fa-arrow-right-long me-2"></i> Email Marketing</Link></li>
                      <li><Link to="/services/content-marketing"><i className="fa-solid fa-arrow-right-long me-2"></i> Content Marketing</Link></li>
                      <li><Link to="/services/branding"><i className="fa-solid fa-arrow-right-long me-2"></i> Branding</Link></li>
                    </ul>
                  </div>

                  <div className="col-md-6">
                    <ul>
                      <li><Link to="/services/marketing-research"><i className="fa-solid fa-arrow-right-long me-2"></i> Marketing Research</Link></li>
                      <li><Link to="/services/off-page-seo"><i className="fa-solid fa-arrow-right-long me-2"></i> Off Page SEO</Link></li>
                      <li><Link to="/services/technical-seo"><i className="fa-solid fa-arrow-right-long me-2"></i> Technical SEO</Link></li>
                      <li><Link to="/services/seo-audit"><i className="fa-solid fa-arrow-right-long me-2"></i> SEO Audit</Link></li>
                      <li><Link to="/services/keyword-research"><i className="fa-solid fa-arrow-right-long me-2"></i> Keyword Research</Link></li>
                      <li><Link to="/services/google-tag-manager-gtm"><i className="fa-solid fa-arrow-right-long me-2"></i> Google Tag Manager</Link></li>
                      <li><Link to="/services/google-analytics-4-ga4"><i className="fa-solid fa-arrow-right-long me-2"></i> Google Analytics 4</Link></li>
                      <li><Link to="/services/google-my-business-gmb"><i className="fa-solid fa-arrow-right-long me-2"></i> Google My Business</Link></li>
                      <li><Link to="/services/link-building"><i className="fa-solid fa-arrow-right-long me-2"></i> Link Building</Link></li>
                    </ul>
                  </div>
                </div>

              </div>
            </div>

            {/* OTHER PAGES */}
            <div className="col-md-6 col-lg-3">
              <div className="sitemap-box">
                <h5 className="fw-bold mb-3">Other Pages</h5>
                <ul>
                  <li><Link to="/blogs"><i className="fa-solid fa-arrow-right-long me-2"></i> Blogs</Link></li>
                  <li><Link to="/faqs"><i className="fa-solid fa-arrow-right-long me-2"></i> FAQs</Link></li>
                  <li><Link to="/privacy-policy"><i className="fa-solid fa-arrow-right-long me-2"></i> Privacy Policy</Link></li>
                  <li><Link to="/terms-conditions"><i className="fa-solid fa-arrow-right-long me-2"></i> Terms & Conditions</Link></li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Sitemap;
