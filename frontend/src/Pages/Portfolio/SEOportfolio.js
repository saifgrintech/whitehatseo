import Navbar from "../../Components/Navbar";
import "./portfolio.css";
import { Link } from "react-router-dom";
import Footer from "../../Components/Footer.js";
import Testimonials from "../Testimonials/Testimonials.js";
import Readytotalk from "../../Components/Readytotalk.js";
import PortfolioSlider from "./PortfolioSlider.js";

import portfolioData from './portflioData.js'

const SEOportfolio = () => {
  return (
    <>
      <div className="porfolio_page">
        <Navbar />

        <div className="container3">
          <div className="header">
            <div className="box">
              <div className="hero-customer">
                <div className="col-lg-10 col-xxl-6 mx-auto">
                  <h1 className="hero-title px-3 mb-4"> Our SEO Case Studies </h1>
            <p className="mb-0">
              At WhiteHatSeo, we deliver measurable SEO results — higher
              rankings, better traffic, and improved organic ROI for real
              businesses.
            </p>
                  {/* <h1 className="hero-title  px-3">
                    How We <span>Deliver Results</span>, Hear From Our Clients
                  </h1> */}
                  {/* <PortfolioSlider /> */}
                
                </div>
              </div>
              <div className="all-animation">
                <div className="all-animation1">
                  <img
                    src="all-animations/all-animation1.png"
                    className="circle-img"
                    alt="moon"
                  />
                </div>

                <div className="all-animation2">
                  <img
                    src="all-animations/all-animation2.svg"
                    className="cross-img"
                    alt="cross"
                  />
                </div>

                <div className="all-animation3">
                  <img
                    src="all-animations/all-animation3.svg"
                    className="circle-img"
                    alt="circle"
                  />
                </div>

                <div className="all-animation4">
                  <img
                    src="all-animations/all-animation4.svg"
                    className="triangle-img"
                    alt="triangle"
                  />
                </div>

                <div className="all-animation5">
                  <img
                    src="all-animations/all-animation5.png"
                    className="design1"
                    alt="zig-zag"
                  />
                </div>

                <div className="all-animation6">
                  <img
                    src="all-animations/all-animation6.svg"
                    className="triangle3"
                    alt="triangle"
                  />
                </div>

                <div className="all-animation7">
                  <img
                    src="all-animations/all-animation7.svg"
                    className="triangle3"
                    alt="triangle"
                  />
                </div>

                <div className="all-animation8">
                  <img
                    src="all-animations/all-animation8.svg"
                    className="triangle3"
                    alt="triangle"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-lg-10 col-xxl-6 mx-auto">
        <section className="portfolio-section">
          <div className="portfolio-header">
            <h2>Our SEO Case Studies</h2>
           
          </div>

         <div className="">
            {portfolioData.map((item) => (
                <div
                key={item.id}
                className="card shadow-sm border-0 rounded-4 mb-5"
                >
                {/* Card Header */}
                <div className="card-header d-flex justify-content-between align-items-center text-white">
                    <h5 className="mb-0 fw-semibold">{item.client}</h5>
                    <img src={item.countryFlag} alt="Country Flag" />
                </div>

                {/* Card Body */}
                <div className="card-body">
                    {/* Images Section */}
                    <div className="row g-4 mb-4">
                    <div className="col-md-6 card_height">
                        <div className="border rounded p-2 bg-light h-100">
                        <img
                            src={item.previewImage}
                            alt={item.client}
                            className="img-fluid rounded"
                        />
                        </div>
                    </div>

                    <div className="col-md-6 card_height">
                        <div className="border rounded p-2 bg-light h-100">
                        <img
                            src={item.graphImage}
                            alt="Traffic Graph"
                            className="img-fluid rounded"
                        />
                        </div>
                    </div>
                    </div>

                    {/* Table Image */}
                    <div className="row">
                    <div className="col-12">
                        <img
                        src={item.tableImage}
                        alt="Keyword Rankings"
                        className="w-100 rounded"
                        />
                    </div>
                    </div>
                </div>

                {/* Card Footer */}
                <div className="card-footer d-flex gap-2 justify-content-between align-items-center flex-wrap">
                    <small>
                    Website :{" "}
                    <a
                        href={item.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fw-semibold text-decoration-none"
                    >
                        {item.website}
                    </a>
                    </small>

                    {/* <Link to="#" className="case_study_btn"> View Case Study </Link> */}
                </div>
                </div>
            ))}
        </div>

        </section>

        </div>
        
        <Readytotalk />
        <Testimonials />

        <Footer / >

      </div>
    </>
  );
};

export default SEOportfolio;
