import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
// import "swiper/css/navigation";

const clientVideos = [
  {
    id: 1,
    name: "Amit Verma",
    role: "Founder, E-Commerce Brand",
    thumbnail: "/images/arti.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_1",
  },
  {
    id: 2,
    name: "Jessica Raymond",
    role: "Marketing Manager, SaaS Company",
    thumbnail: "/images/arti.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_2",
  },
  {
    id: 3,
    name: "Rahul Mehta",
    role: "Owner, Local Service Business",
    thumbnail: "/images/arti.jpg",
    videoUrl: "https://www.youtube.com/embed/VIDEO_ID_3",
  },
];

const ClientVideo = () => {
  return (
    <section className="client-video-section">
      <div className="container">
        <h2 className="section-title">  Hear from our clients </h2>

        <p className="section-desc">
          Businesses across industries trust our SEO and digital marketing
          strategies to improve visibility, generate qualified leads, and grow
          revenue. Hear directly from our clients about their experience.
        </p>

        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={30}
          slidesPerView={3}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-4"
        >
          {clientVideos.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="video-card">
                <div className="video-thumb">
                  <img src={item.thumbnail} alt={item.name} />
                  <button
                    className="play-btn"
                    onClick={() => window.open(item.videoUrl, "_blank", "noopener,noreferrer")}
                  >
                    <i className="fa-solid fa-play"></i>
                  </button>
                </div>

                <div className="video-info">
                  <h4>{item.name}</h4>
                  <p className="text-white">{item.role}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ClientVideo;
