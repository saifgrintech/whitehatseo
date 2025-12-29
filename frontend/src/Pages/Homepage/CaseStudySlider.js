import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Link } from "react-router-dom";
// import "./CaseStudySlider.css";

const caseStudies = [
  {
    id: 1,
    industry: "Organic Skincare / Beauty",
    project: "Milari Organics",
    location: "Melbourne, Australia",
    website: "https://milariorganics.com.au/",
    country: "Australia",
    flag: "/images/australia.png",
    challenge:
      "Low brand visibility in a competitive organic skincare market, limited keyword rankings for product-focused searches, and inconsistent organic traffic growth due to low domain authority and minimal content optimization.",
    resultStat: "93.4% ",
    resultText:
      "Organic traffic increased significantly through targeted keyword optimization, high-quality content creation, and improved on-page SEO. Milari Organics achieved stronger visibility for commercial and informational keywords, higher search rankings for core product pages, and improved engagement across the site.",
    keywords: [
      { name: "Organic baby mattress", rank: 1 },
      { name: "Green baby mattress", rank: 1 },
      { name: "Non toxic cot mattress", rank: 1 },
    ],
    image: "/images/projects/milari.png",
    image_graph: "/images/projects/malari_graph.png",
  },
  {
    id: 2,
    industry: "Printing & Branding Services",
    project: "Alpine Print",
    location: "New Zealand",
    website: "https://www.alpineprint.nz/",
    country: "New Zealand",
    flag: "/images/new-zealand.png",
    challenge:
      "Low online visibility for commercial printing services, limited rankings for location-based keywords, and inconsistent organic traffic in a highly competitive local print market. The website also faced under-optimized service pages and minimal keyword penetration for high-intent searches.",
    resultStat: "95.9% ",
    resultText:
      "Organic traffic increased through strategic local SEO, service-page optimization, and targeted content improvements. Alpine Print achieved stronger rankings for high-conversion keywords, improved local search presence across New Zealand, and higher engagement from business customers.",
    keywords: [
      { name: "Business card printing", rank: 1 },
      { name: "Offset digital printing", rank: 1 },
      { name: "Custom booklets printing", rank: 1 },
    ],
    image: "/images/projects/alpine.png",
    image_graph: "/images/projects/alpine_graph.png",
  },
   {
    id: 3,
    industry: "Bond Cleaning & End of Lease Cleaning ",
    project: "Premium-Bond Cleaning",
    location: "Australia",
    website: "https://premiumbondclean.com.au/",
    country: "Australia",
    flag: "/images/australia.png",
    challenge:
      "Low organic visibility in a highly competitive local cleaning market, poor rankings for high-intent bond cleaning keywords, and inconsistent website traffic across major Australian cities due to limited local SEO optimization and weak service-page targeting.",
    resultStat: "93.8% ",
    resultText:
      "Organic traffic increased significantly through location-focused SEO, optimized service pages, and targeted keyword strategies. Premium Bond Clean achieved stronger local rankings, higher enquiry-driven traffic, and improved visibility for competitive bond and end-of-lease cleaning searches.",
    keywords: [
      { name: "Bond cleaning melbourne", rank: 1 },
      { name: "Rental bond cleaning service", rank: 1 },
      { name: "Same day bond cleaning", rank: 1 },
    ],
    image: "/images/projects/premiumBond.png",
    image_graph: "/images/projects/premiumBond_graph.png",
  },
];

const CaseStudySlider = () => {
  return (
    <section className="case-study-section">
      <div className="container">
        <div className="col-lg-7 mx-auto">
            <div className="case-header w-100 mb-5">
            <div className="d-flex flex-column justify-content-center align-items-center">
                <h2 className="mb-0">Proven SEO Results</h2>
                <div className="bar"></div>

            </div>
          <p className="text-center">
            At <strong>WhiteHatSEO</strong>, we deliver measurable growth through
            ethical SEO strategies, data-driven execution, and long-term
            performance.
          </p>
        </div>
        </div>

        <Swiper
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 4000, 
            disableOnInteraction: false, 
          }}
          loop={true}
          pagination={{ clickable: true }}
          spaceBetween={40}
          slidesPerView={1}
          className="pb-5"
        >
          {caseStudies.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="case-card">
                {/* LEFT */}
                <div className="case-image d-flex flex-column justify-content-between h-100">
                    <div>
                        <img src={item.image} alt="Website Image" />
                    </div>
                    <div>
                        <img src={item.image_graph} alt="SEO Growth Chart" />
                        {/* <div className="d-flex justify-content-center">
                        <a href="#" className="view-link"> View Full Case Study </a>
                        </div> */}
                    </div>
                </div>

               

                {/* RIGHT */}
                 <div className="case-content h-100 ">
                  <div className="case-top mb-3">
                    <span className="industry">{item.industry}</span>
                    <img src={item.flag} alt={item.country} />
                  </div>

                  <h4 className="project mb-3">
                    Project : <Link to={item.website} target="_blank">{item.project}</Link>
                  </h4>
                 <div className="mb-3 d-flex align-items-baseline">
                     <h4 className="mb-0">Location :{""}</h4> <p className="m-0 ps-1">{item.location}</p>
                 </div>

                 <div className="mb-3">
                     <h4 className="mb-1">Challenge</h4>
                    <p>{item.challenge}</p>
                 </div>

                  <div className="mb-2">
                    <h4 className="mb-1">Results</h4>
                    <div className="result-highlight">
                        <span>{item.resultStat}</span>
                    </div>
                  </div>
                  <p>{item.resultText}</p>

                  <div className="keyword-table-wrapper">
                        <table className="keyword-table">
                            <thead>
                            <tr>
                                <th>Keyword</th>
                                <th>Ranking</th>
                            </tr>
                            </thead>
                            <tbody>
                            {item.keywords.map((k, i) => (
                                <tr key={i}>
                                <td>{k.name}</td>
                                <td>#{k.rank}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        </div>


                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default CaseStudySlider;
