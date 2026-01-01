import { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Testimonials from "../Testimonials/Testimonials";
import { Link } from "react-router-dom";

import CaseStudySlider from "../Homepage/CaseStudySlider";
import { Helmet } from "react-helmet-async";
import BannerForm from "../../Components/BannerForm";
import CommonPlan from "../../Components/CommonPlan";

const BASE_URL = process.env.REACT_APP_URL;
const WEBSITE_URL = process.env.REACT_APP_FRONTEND;


const PPCSingle = () => {

    const [data, setData] = useState("");
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);
    
        useEffect(() => {
            const fetchServiceContent = async () => {
                setLoading(true);
    
                try {
                    const response = await fetch(
                        `${BASE_URL}/single-service/slug/pay-per-click-ppc`
                    );
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
            itemListElement: [
                {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://whitehatseo.in/",
                },
                {
                    "@type": "ListItem",
                    position: 2,
                    name: "Services",
                    item: "https://whitehatseo.in/services",
                },
                {
                    "@type": "ListItem",
                    position: 3,
                    name: "Pay-Per-Click",
                    item: "https://whitehatseo.in/services/pay-per-click-ppc",
                },
            ],
        };

  return (
      <>
            <Helmet>
                <title>PPC Services - WhiteHatSEO</title>
                <meta name="description" content="" />
                <link
                    rel="canonical"
                    href="https://whitehatseo.in/services/pay-per-click-ppc"
                />

                <script type="application/ld+json">
                    {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>

            <div className="service_single">
                <Navbar />

                <div className="container3">
                    <div className="header">
                        <div className="box">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className=" col-lg-7 position-relative text-start">
                                        <h1 className="hero-title mb-4 text-start">
                                            High-ROI <span>Pay Per Click </span>Advertising Services That Deliver
                                            Instant Traffic & Sales
                                        </h1>

                                        <p className="m-0">
                                            At <strong>WhiteHatSEO</strong>, our PPC services are built to generate
                                            immediate visibility, qualified leads, and measurable ROI. We create and
                                            manage high-performing pay-per-click campaigns across Google Ads, Bing Ads,
                                            and social advertising platforms to ensure your brand appears in front of
                                            the right audience at the right time. From keyword research and compelling
                                            ad copy to landing page optimization and conversion tracking, we focus on
                                            maximizing clicks, lowering cost-per-acquisition, and scaling profitable
                                            campaigns—without wasting your ad spend.
                                        </p>

                                        <ul className="mt-3 p-0">
                                            <li>
                                            <i className="fa-solid fa-check me-2"></i>Google Ads & Bing Ads Campaign
                                            Setup and Management
                                            </li>
                                            <li>
                                            <i className="fa-solid fa-check me-2"></i>High-Intent Keyword Research &
                                            Smart Bid Strategy
                                            </li>
                                            <li>
                                            <i className="fa-solid fa-check me-2"></i>Conversion-Focused Ad Copy &
                                            Landing Page Optimization
                                            </li>
                                            <li>
                                            <i className="fa-solid fa-check me-2"></i>Remarketing & Display Advertising
                                            to Re-Engage Users
                                            </li>
                                            <li>
                                            <i className="fa-solid fa-check me-2"></i>Transparent PPC Reporting with
                                            ROI, CPA & Conversion Tracking
                                            </li>
                                        </ul>

                                        <div className="d-flex gap-3 mt-4">
                                            <Link to="/contact" className="gradient-button">
                                            Get Free PPC Audit
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

                <section className="seo-plan-section  inner_padding">
                    <div className="container">
                    <h2 className="fw-bold text-center">Our PPC Packages</h2>
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

                <div className="features-section">
                    <div className="container">
                        <div className="box d-flex flex-column align-items-center justify-content-center">
                            <h2>PPC Features </h2>
                            <div className="bar"></div>
                            <p>
                                WHITEHATSEO agency can provide several strategic advantages for
                                businesses looking to improve their online presence and drive
                                more traffic to their websites.
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
                                            <div
                                                className="col-lg-6 col-md-6 py-3"
                                                key={feature._id || index}
                                            >
                                                <div className="card position-relative h-100">
                                                    <div className="d-flex flex-column">
                                                        <div
                                                            className={`icons ${index % 2 !== 0 ? "icons2" : ""
                                                                }`}
                                                        >
                                                            <i
                                                                className={`${feature.featureIcon} icons-inner`}
                                                            ></i>
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
                        Drive Instant Results with <span>High-Performance PPC Advertising</span> That Maximizes Clicks, Leads & ROI
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
                                <div className="faq-section py-5">
                                    <div className="container">
                                        <div className="accordion" id="faqAccordion">
                                            {data.faqs.map((faq, index) => (
                                                <div className="accordion-item mb-3" key={index}>
                                                    <h2
                                                        className="accordion-header"
                                                        id={`heading${index}`}
                                                    >
                                                        <button
                                                            className={`accordion-button ${index !== 0 ? "collapsed" : ""
                                                                }`}
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
                                                        className={`accordion-collapse collapse ${index === 0 ? "show" : ""
                                                            }`}
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

export default PPCSingle