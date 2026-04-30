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
                <title>SSEO (Search Engine Optimisation) Services | WhitehatSEO</title>
                <meta name="description" content="SEO services include strategies like keyword research, content optimization, technical SEO & link building to improve your website’s visibility on search engines." />
                <meta property="og:title" content="SEO (Search Engine Optimisation) Services | WhitehatSEO" />
                <meta property="og:description" content="SEO services include strategies like keyword research, content optimization, technical SEO & link building to improve your website’s visibility on search engines." />
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
                                        <h1 className="hero-title mb-2 text-start">
                                            Professional <span>SEO Services</span> (Search Engine Optimization Services)
                                        </h1>

                                        <p className="m-0">
                                           Whitehat <b>SEO services</b> are designed to improve your website’s visibility, drive targeted traffic, and increase your conversion rate. As a trusted <Link to='/'>SEO agency</Link>, we offer complete <b>search engine optimization services</b> tailored to your business goals.
                                           <br />
                                           Whether you are a startup or an established brand, our strategies focus on enhancing your online presence, improving search engine rankings, and delivering measurable results.

                                        </p>
                                        <div className="case-header mt-3">
                                            <h2>Grow Your Business with Whitehat SEO Services</h2>
                                            <p className="m-0">
                                            If your website is not ranking on the first page of search engines, you’re missing valuable traffic and potential customers. Our search engine optimization services are designed to boost your visibility and help you dominate your industry.
                                            <br />
                                            Search engine optimisation services involve optimizing your website to rank higher on search engine results pages (SERPs). This includes a combination of <Link to='/services/technical-seo'>technical SEO</Link>, content creation, keyword research, and link building to ensure your website meets search engine guidelines. <br />

                                            <b>Our goal is simple:</b> help your business appear in front of the right audience at the right time.

                                            </p>
                                        </div>

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
                            <h3>Our Complete SEO Services Include</h3>
                            <div className="bar"></div>
                            <p>
                               Our complete <b>SEO services</b> are designed to cover every aspect of your online growth, from in-depth keyword research and technical SEO to content creation, <Link to='/services/link-building'>link building</Link>, and performance tracking. These <b>search engine optimization services</b> work together to improve your search engine rankings, enhance user experience, and drive more targeted traffic and conversions to your website.

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
                                                            <h4 className="card-title">
                                                                {feature.featureTitle}
                                                            </h4>
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
