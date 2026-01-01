import  { useState, useEffect } from "react";
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer';
import Testimonials from '../Testimonials/Testimonials';
import { Link } from 'react-router-dom';

import CaseStudySlider from "../Homepage/CaseStudySlider";
import { Helmet } from "react-helmet-async";
import BannerForm from "../../Components/BannerForm";

const BASE_URL = process.env.REACT_APP_URL;
const WEBSITE_URL = process.env.REACT_APP_FRONTEND;

const LocalSeoSingle = () => {

  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchServiceContent = async () => {
      setLoading(true);

      try {
        const response = await fetch(`${BASE_URL}/single-service/slug/local-seo`);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log(data);
        setData(data);

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServiceContent();
  }, []);



  const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://whitehatseo.in/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Services",
      "item": "https://whitehatseo.in/services"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Local SEO",
      "item": "https://whitehatseo.in/services/local-seo"
    }
  ]
};


  return (
    <>
        <Helmet>
        <title>Local SEO Services - WhiteHatSEO</title>
        <meta name="description" content="Local SEO services to improve Google Maps rankings and local visibility." />
        <link
          rel="canonical"
          href="https://whitehatseo.in/services/local-seo"
        />

        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

    <div className='service_single'>
      <Navbar />

      <div className="container3">
        <div className="header">
          <div className="box">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-7 position-relative text-start">
                <h1 className="hero-title mb-4 text-start">
                  Powerful <span>Local SEO Services</span> That Bring Customers
                  To Your Doorstep
                </h1>

                <p className="m-0">
                  At <strong>WhiteHatSEO</strong>, our Local SEO services are designed to help your business dominate local search results and connect with customers who are ready to buy. We optimize your Google Business Profile, local citations, and location-based keywords to ensure your brand appears in Google Maps, “near me” searches, and top local listings. By strengthening your local online presence, we help you attract high-intent local traffic, increase footfall, and generate consistent leads from your target area—all using proven, Google-approved strategies.
                </p>

                <ul className="mt-3 p-0">
                  <li><i className="fa-solid fa-check me-2"></i>Google Business Profile Optimization & Management</li>
                  <li><i className="fa-solid fa-check me-2"></i>Local Keyword Research & Location-Based Targeting</li>
                  <li><i className="fa-solid fa-check me-2"></i>Google Maps & “Near Me” Search Optimization</li>
                  <li><i className="fa-solid fa-check me-2"></i>NAP Consistency & Local Citations Building</li>
                  <li><i className="fa-solid fa-check me-2"></i>Local SEO Reporting with Rankings, Calls & Leads Tracking</li>
                </ul>

                <div className="d-flex gap-3 mt-4">
                  <Link to="/contact" className="gradient-button">
                    Get Free Local SEO Audit
                  </Link>
                </div>
              </div>


                <div className="col-lg-5 mt-5 mt-lg-0 ">
                  <BannerForm />
                </div>

              </div>
            </div>

            <div className="all-animation">
              <div className="all-animation1">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation1.png`}
                  className="circle-img"
                  alt="moon"
                />
              </div>


              <div className="all-animation3">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation3.svg`}
                  className="circle-img"
                  alt="circle"
                />
              </div>

              <div className="all-animation4">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation4.svg`}
                  className="triangle-img"
                  alt="triangle"
                />
              </div>

              <div className="all-animation5">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation5.png`}
                  className="design1"
                  alt="zig-zag"
                />
              </div>

              <div className="all-animation6">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation6.svg`}
                  className="triangle3"
                  alt="triangle"
                />
              </div>

              <div className="all-animation7">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation7.svg`}
                  className="triangle3"
                  alt="triangle"
                />
              </div>

              <div className="all-animation8">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation8.svg`}
                  className="triangle3"
                  alt="triangle"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

        <section className="seo-plan-section inner_padding">
        <div className="container">
            <h2 className="fw-bold text-center">Local SEO Packages</h2>

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

      <div className="features-section">
        <div className="container">
          <div className="box d-flex flex-column align-items-center justify-content-center">
            <h2>Local SEO Features </h2>
            <div className='bar'></div>
            <p>
              WHITEHATSEO agency can provide several strategic advantages for businesses looking to improve their online presence and drive more traffic to their websites.
            </p>
          </div>


          {/* Features */}
          <div className="col-12 mt-5">
            <div className="row">
              {data?.features &&
                data.features
                  .filter(
                    (feature) =>
                      feature.featureIcon?.trim() !== "" &&
                      feature.featureTitle?.trim() !== "" &&
                      feature.featureDesc?.trim() !== ""
                  )
                  .map((feature, index) => (
                    <div className="col-lg-6 col-md-6 py-3" key={feature._id || index}>
                      <div className="card position-relative h-100">
                        <div className="d-flex flex-column">

                          <div className={`icons ${index % 2 !== 0 ? "icons2" : ""}`}>
                            <i className={`${feature.featureIcon} icons-inner`}></i>
                          </div>

                          <div className="input">
                            <Link className="card-title">
                              {feature.featureTitle}
                            </Link>
                            <p className="card-text mt-2">
                              {feature.featureDesc}
                            </p>
                          </div>

                        </div>
                      </div>
                    </div>
                  ))}
            </div>
          </div>

        </div>
      </div>

      <div className="service_details ">
        <div className=" works p-0">
          <div className="container">
            <CaseStudySlider />
          </div>
        </div>
      </div>

      <Testimonials />

      <section className="ready-to-talk position-relative">
        <div className="box">
           <div className="col-sm-11 col-lg-8 col-xxl-7 mx-auto">
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
        </div>
      </section>

      <div className="row">
        <div className="faq-section py-5">
          <div className="container">
            <h2 className="text-center mb-0">Frequently Asked Questions</h2>
            {(!data?.faqs || data.faqs.length === 0) && (
              <div className="col-12 text-center ">
                <p className="text-danger m-0">
                  Data not available, please try again later.
                </p>
              </div>
            )}

            {data?.faqs && data.faqs.length > 0 && (
              <div className="faq-section py-5" >
                <div className="container">
                  <div className="accordion" id="faqAccordion">
                    {data.faqs.map((faq, index) => (
                      <div className="accordion-item mb-3" key={index}>
                        <h2 className="accordion-header" id={`heading${index}`}>
                          <button
                            className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target={`#collapse${index}`}
                            aria-expanded={index === 0 ? "true" : "false"}
                            aria-controls={`collapse${index}`}
                          >
                            {faq.faqTitle}
                          </button>
                        </h2>
                        <div
                          id={`collapse${index}`}
                          className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                          aria-labelledby={`heading${index}`}
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body pt-0 ">
                            {faq.faqDesc}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>


      <Footer />

    </div>
    </>
  )
}

export default LocalSeoSingle