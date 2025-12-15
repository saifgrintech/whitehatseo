import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const stripHtmlTags = (str) => {
  if (!str) return "";
  return str.replace(/<\/?[^>]+(>|$)/g, "").replace(/&nbsp;/g, " ");
};

const BASE_URL = process.env.REACT_APP_URL;
const WEBSITE_URL = process.env.REACT_APP_FRONTEND;

const Teamslider = () => {

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchTeam = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/team`);
        if (res.data && Array.isArray(res.data)) {
          setData(res.data);
        } else {
          setError("No team data available");
        }
      } catch (err) {
        setError(err.message || "Failed to load data");
      }
    };

    fetchTeam();

  }, []);

  //  If error, show a message
  if (error) {
    return <p className="text-danger text-center">{error}</p>;
  }

  //  If no data (empty list), show fallback
  if (!data || data.length === 0) {
    return <p className="text-center">No team members found.</p>;
  }

  return (
    <>
      <Swiper
      className='mt-5 px-2'
        modules={[Autoplay, Pagination, A11y]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        breakpoints={{
          600: { slidesPerView: 2 },
          768: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
          1200: { slidesPerView: 4 },
          // 1400: { slidesPerView: 5 },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card border-0">
              <div className="team-member">
               <img
          src={`${WEBSITE_URL}/teamimg/${item.image}`}
          className={`img ${
            item.title?.toLowerCase().includes('rohit') ||
            item.title?.toLowerCase().includes('arti')
              ? 'img-large'
              : ''
          }`}
          alt={item.title}
        />


                <div className="team-info">
                  <h5 className="member1-title m-0">{item.title}</h5>
                  <p className="member1-text m-0">{item.role}</p>
                </div>

                {/* <div className="content p-2">
                  <p>{stripHtmlTags(item.description)}</p>
                </div> */}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Teamslider;
