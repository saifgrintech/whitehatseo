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

const SEOSingle = () => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServiceContent = async () => {
            setLoading(true);

            try {
                const response = await fetch(
                    `${BASE_URL}/single-service/slug/search-engine-optimization`
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
                name: "Search Engine Optimization",
                item: "https://whitehatseo.in/services/search-engine-optimization",
            },
        ],
    };

    return (
        <>
            <Helmet>
                <title>Search Engine Optimization Services | Whitehat SEO Agency</title>
                <meta name="description" content="Our search engine optimization services use proven whitehat SEO techniques to improve rankings, traffic, and sustainable online visibility." />
                <meta property="og:title" content="Search Engine Optimization Services | Whitehat SEO Agency" />
                <meta property="og:description" content="Our search engine optimization services use proven whitehat SEO techniques to improve rankings, traffic, and sustainable online visibility." />
                <link rel="canonical" href="https://whitehatseo.in/services/search-engine-optimization" />

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
                                            Professional <span>SEO Services</span> That Drive Traffic,
                                            Leads & Revenue
                                        </h1>

                                        <p className="m-0">
                                            At <strong>WhiteHatSeo</strong>, we specialize in
                                            delivering powerful, ethical, and results-driven SEO
                                            solutions tailored to your business goals. Our team
                                            combines advanced keyword research, technical SEO, and
                                            content optimization strategies to ensure your website
                                            ranks higher on Google, attracts qualified visitors, and
                                            converts traffic into loyal customers. We prioritize
                                            sustainable growth over shortcuts, focusing on strategies
                                            that enhance your online presence, build authority, and
                                            maximize ROI. Whether you're a startup, e-commerce store,
                                            or enterprise, our customized SEO campaigns are designed
                                            to increase visibility, improve search engine rankings,
                                            and drive measurable results for your business.
                                        </p>

                                        <ul className="mt-3 p-0">
                                            <li>
                                                <i className="fa-solid fa-check me-2"></i>
                                                Result-Oriented SEO Campaigns to boost your rankings
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check me-2"></i>
                                                Google-Compliant White Hat Techniques for long-term
                                                success
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check me-2"></i>Comprehensive
                                                Keyword Research & On-Page Optimization
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check me-2"></i>Dedicated SEO
                                                Experts & Transparent Monthly Reports
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check me-2"></i>Local & Global
                                                SEO Strategies to reach the right audience
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
                        <h2 className="fw-bold text-center">Our SEO Packages</h2>

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

                <div className="features-section">
                    <div className="container">
                        <div className="box d-flex flex-column align-items-center justify-content-center">
                            <h2>SEO Features </h2>
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
                                {(!data?.features || data.features.length === 0) && (
                                    <div className="col-12 text-center ">
                                        <p className="text-danger m-0">
                                            Data not available, please try again later.
                                        </p>
                                    </div>
                                )}

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
                                Stop Losing Out on Leads – Our{" "}
                                <span className="">SEO Strategies</span> <br /> Deliver Measurable
                                Growth!
                            </h2>
                            <Link
                                to="/contact"
                                className="btn-purple1 "
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
    );
};

export default SEOSingle;
