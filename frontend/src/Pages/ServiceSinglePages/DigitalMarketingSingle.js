import { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import Testimonials from "../Testimonials/Testimonials";
import { Link } from "react-router-dom";

import CaseStudySlider from "../Homepage/CaseStudySlider";
import { Helmet } from "react-helmet-async";
import BannerForm from "../../Components/BannerForm";

const BASE_URL = process.env.REACT_APP_URL;
const WEBSITE_URL = process.env.REACT_APP_FRONTEND;


const DigitalMarketingSingle = () => {

    const [data, setData] = useState("");
        const [loading, setLoading] = useState(false);
        const [error, setError] = useState(null);
    
        useEffect(() => {
            const fetchServiceContent = async () => {
                setLoading(true);
    
                try {
                    const response = await fetch(
                        `${BASE_URL}/single-service/slug/digital-marketing`
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
                    name: "Digital Marketing",
                    item: "https://whitehatseo.in/services/digital-marketing",
                },
            ],
        };

  return (
      <>
            <Helmet>
                <title>Digital Marketing Services - WhiteHatSeo</title>
                <meta name="description" content="" />
                <link
                    rel="canonical"
                    href="https://whitehatseo.in/services/digital-marketing"
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
                                   <div className="col-lg-7 position-relative text-start">
                                    <h1 className="hero-title mb-4 text-start">
                                        Complete <span>Digital Marketing Services</span> That Accelerate
                                        Your Online Growth
                                    </h1>

                                    <p className="m-0">
                                        At <strong>WhiteHatSeo</strong>, our Digital Marketing services are designed
                                        to create a powerful online presence and drive consistent business growth.
                                        We combine SEO, PPC advertising, social media marketing, and content
                                        strategies to attract the right audience, generate qualified leads, and
                                        increase conversions. Our data-driven approach ensures every campaign is
                                        optimized for performance, ROI, and scalability. Whether your goal is brand
                                        awareness, lead generation, or sales growth, we deliver integrated digital
                                        marketing solutions that produce measurable results.
                                    </p>

                                    <ul className="mt-3 p-0">
                                        <li>
                                        <i className="fa-solid fa-check me-2"></i>End-to-End Digital Marketing
                                        Strategy & Execution
                                        </li>
                                        <li>
                                        <i className="fa-solid fa-check me-2"></i>SEO, PPC & Social Media Marketing
                                        Under One Roof
                                        </li>
                                        <li>
                                        <i className="fa-solid fa-check me-2"></i>Content Marketing That Builds
                                        Authority & Trust
                                        </li>
                                        <li>
                                        <i className="fa-solid fa-check me-2"></i>Conversion Rate Optimization
                                        (CRO) for Higher ROI
                                        </li>
                                        <li>
                                        <i className="fa-solid fa-check me-2"></i>Advanced Analytics, GA4 & Clear
                                        Performance Reporting
                                        </li>
                                    </ul>

                                    <div className="d-flex gap-3 mt-4">
                                        <Link to="/contact" className="gradient-button">
                                        Get Free Consultation
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
                    <h2 className="fw-bold text-center">Digital Marketing Packages</h2>

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

                <div className="features-section">
                    <div className="container">
                        <div className="box d-flex flex-column align-items-center justify-content-center">
                            <h2>Digital Marketing Features </h2>
                            <div className="bar"></div>
                            <p>
                                WhiteHatSeo agency can provide several strategic advantages for
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
                            Accelerate Business Growth with <span>Result-Driven Digital Marketing</span> That Attracts, Engages & Converts Your Ideal Customers
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

export default DigitalMarketingSingle