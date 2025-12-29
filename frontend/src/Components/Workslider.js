import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Autoplay, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const stripHtmlTags = (str) => {
  if (!str) return "";
  return str.replace(/<\/?[^>]+(>|$)/g, "");
};

const BASE_URL = process.env.REACT_APP_URL;
const WEBSITE_URL = process.env.REACT_APP_FRONTEND;

const Workslider = () => {

  const [workData, setWorkData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchWork = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/work`);
        if (res.data && Array.isArray(res.data)) {
          setWorkData(res.data);
        } else {
          setError("No work data available");
        }
      } catch (err) {
        setError(err.message || "Failed to load work data");
      }
    };

    fetchWork();
  }, []);

  if (error) {
    return <p className="text-danger text-center">{error}</p>;
  }

  // if (!workData || workData.length === 0) {
  //   return ;
  // }

  return (
    <Swiper
      modules={[Autoplay, Pagination, A11y]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      pagination={{ clickable: true }}
      breakpoints={{
        475: { slidesPerView: 1 },
        600: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
        1200: { slidesPerView: 4 },
      }}
    >

      {(!workData || workData.length === 0) ? (
        <p className="text-center">No works found.</p>
      ) : (

        workData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="work position-relative">
              <img
                src={`${WEBSITE_URL}/workimages/${item.image}`}
                className="img1"
                alt={item.title || "work"}
              />
              <div className="works-content position-absolute">
                <div className="d-flex justify-content-end w-100">
                  <i className="fa-solid fa-gear"></i>
                </div>
                <div className="mt-lg-2 mt-4">
                  <h3>
                    <Link to="" className="text-white">{item.title}</Link>
                  </h3>
                  <p>{stripHtmlTags(item.description)}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))

      )}
    </Swiper>
  );
};

export default Workslider;
