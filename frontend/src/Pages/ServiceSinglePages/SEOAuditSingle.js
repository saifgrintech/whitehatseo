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


const SEOAuditSingle = () => {
    const [data, setData] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchServiceContent = async () => {
            setLoading(true);

            try {
                const response = await fetch(
                    `${BASE_URL}/single-service/slug/seo-audit`
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
                name: "SEO Audit",
                item: "https://whitehatseo.in/services/seo-audit",
            },
        ],
    };

    return (
        <>
            <Helmet>
                <title>SEO Audit Services | Website SEO Analysis & Reporting</title>
                <meta name="description" content="Get a detailed SEO audit to identify ranking issues, technical gaps & optimization opportunities. Our SEO audit helps improve visibility & search performance." />
                <meta property="og:title" content="SEO Audit Services | Website SEO Analysis & Reporting" />
                <meta property="og:description" content="Get a detailed SEO audit to identify ranking issues, technical gaps & optimization opportunities. Our SEO audit helps improve visibility & search performance." />
                 <link rel="canonical" href="https://whitehatseo.in/services/seo-audit" />
                

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
                                            In-Depth <span>SEO Audit Services</span> To Identify
                                            Gaps, Fix Issues & Improve Rankings
                                        </h1>

                                        <p className="m-0">
                                            At <strong>WhiteHatSeo</strong>, our SEO Audit services provide a complete
                                            health check of your website to uncover issues that limit your search
                                            engine visibility and growth. We analyze technical SEO, on-page factors,
                                            off-page signals, content quality, and user experience to identify missed
                                            opportunities and ranking barriers. Our detailed, data-driven audit gives
                                            you clear insights and actionable recommendations to improve performance,
                                            strengthen authority, and build a solid foundation for long-term SEO
                                            success.
                                        </p>

                                        <ul className="mt-3 p-0">
                                            <li>
                                                <i className="fa-solid fa-check me-2"></i>Technical, On-Page & Off-Page SEO
                                                Analysis
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check me-2"></i>Website Speed, Core Web Vitals &
                                                Mobile Usability Review
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check me-2"></i>Keyword, Content & Competitor
                                                Gap Analysis
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check me-2"></i>Backlink Profile & Penalty Risk
                                                Assessment
                                            </li>
                                            <li>
                                                <i className="fa-solid fa-check me-2"></i>Actionable Audit Report with
                                                Priority-Based Fixes
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
                        <h2 className="fw-bold text-center">SEO Audit Packages</h2>

                        <CommonPlan />
                    </div>
                </section>

                <div className="features-section">
                    <div className="container">
                        <div className="box d-flex flex-column align-items-center justify-content-center">
                            <h2>SEO Audit Features </h2>
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
                                Uncover Growth Opportunities with a <span>Comprehensive SEO Audit</span> That Identifies Issues, Fixes Gaps & Improves Search Performance
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

export default SEOAuditSingle