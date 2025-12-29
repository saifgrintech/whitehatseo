import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


const customers = [
  {
    id: 1,
    name: "Dylan Parker",
    role: "Founder, Auto Marketplace",
    videoThumb: "/images/client.png",
    challenge:
      "Low organic visibility and poor conversion rate from search traffic.",
    actions: [
      "SEO & content optimization",
      "High-intent keyword targeting",
      "Conversion-focused landing pages",
      "Performance tracking",
    ],
    duration: "Results in 4 Months",
    stats: [
      { value: "250%", label: "Traffic Growth" },
      { value: "3×", label: "Lead Increase" },
    ],
  },
  {
    id: 2,
    name: "Thomas Reed",
    role: "CEO, Job Portal",
    videoThumb: "/images/client.png",
    challenge: "Difficulty ranking in a competitive job-search niche.",
    actions: [
      "Custom SEO roadmap",
      "Technical SEO fixes",
      "Keyword gap analysis",
      "Ongoing optimization",
    ],
    duration: "Results in 6 Months",
    stats: [
      { value: "135%", label: "Organic Growth" },
      { value: "80+", label: "Top 3 Keywords" },
    ],
  },
];



const PortfolioSlider = () => {
  return (
    <div>
          <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={40}
                    slidesPerView={1}
                    className="hero-swiper"
                  >
                    {customers.map((c) => (
                      <SwiperSlide key={c.id}>
                        <div className="customer-card">
                          <div className="row">
                            <div className="col-md-5">
                              {/* Video */}
                              <div className="video-box h-100">
                                <img src={c.videoThumb} alt={c.name} />
                                <button className="play-btn">
                                  <i className="fa-solid fa-play"></i>
                                </button>
                              </div>
                            </div>
                            <div className="col-md-7">
                              {/* Content */}
                              <div className="customer-info text-start h-100">
                                <h3>{c.name}</h3>
                                <p className="role">{c.role}</p>

                                <div className="mb-3">
                                  <h4 className="mb-1">Challenge</h4>
                                  <p className="m-0">{c.challenge}</p>
                                </div>

                                <div className="mb-3">
                                  <h4 className="mb-1">What We Did</h4>
                                  <ul>
                                    {c.actions.map((a, i) => (
                                      <li key={i}>{a}</li>
                                    ))}
                                  </ul>
                                </div>

                                <div className="results">
                                  <span className="duration">{c.duration}</span>
                                  <div className="stats mt-3">
                                    {c.stats.map((s, i) => (
                                      <div key={i} className="stat">
                                        <strong>{s.value}</strong>
                                        <span>{s.label}</span>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
    </div>
  )
}

export default PortfolioSlider