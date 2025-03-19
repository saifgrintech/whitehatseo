import { React, useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Teamslider from "../../Components/Teamslider";
import "./aboutsection.css";
import Footer from "../../Components/Footer";
import Readytotalk from "../../Components/Readytotalk";
import Section3 from "../../Components/Section3";

import axios from "axios";

const BASE_URL = process.env.REACT_APP_URL;

const Aboutsection = () => {

  const [about, setAbout] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAboutus = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/aboutus`);
        setAbout(response.data);
        // console.log(response.data);
      } catch (error) {
        setError('Failed to fetch data');
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAboutus();
  }, []);

  return (
    <>
      <div className="aboutpage">
        <Navbar />

        <div className="container3">
          <div className="header">
            <div className="box">
              <h1>About Us</h1>
              <div className="all-animation">

                <div className="all-animation1">
                  <img src='all-animations/all-animation1.png' className='circle-img' alt='moon' />

                </div>

                <div className="all-animation2">
                  <img src='all-animations/all-animation2.svg' className='cross-img' alt='cross' />

                </div>

                <div className="all-animation3">
                  <img src='all-animations/all-animation3.svg' className='circle-img' alt='circle' />

                </div>

                <div className="all-animation4">
                  <img src='all-animations/all-animation4.svg' className='triangle-img' alt='triangle' />
                </div>

                <div className="all-animation5">
                  <img src='all-animations/all-animation5.png' className='design1' alt='zig-zag' />

                </div>

                <div className="all-animation6">
                  <img src='all-animations/all-animation6.svg' className='triangle3' alt='triangle' />

                </div>

                <div className="all-animation7">
                  <img src='all-animations/all-animation7.svg' className='triangle3' alt='triangle' />

                </div>

                <div className="all-animation8">
                  <img src='all-animations/all-animation8.svg' className='triangle3' alt='triangle' />

                </div>


              </div>
            </div>
          </div>
        </div>

        <div className="section4">
          <div className="container">
            <div className="">
              {/* {loading && <p>Loading...</p>} */}
              {error && <p className="text-danger text-center">{error}</p>}
              {
                !loading && about.map((about, index) => {
                  return (
                    <div className="row align-items-center" key={index}>
                      <div className="col-lg-6 py-3" >
                        <div className="aboutus-img">
                          <img src={`/aboutUs/${about.image}`} className="img1 w-100" alt="about-img" />
                        </div>
                      </div>

                      <div className="col-lg-6" key={about._id}>
                        <div className="section-content">
                          <h2>{about.title}</h2>
                          <div dangerouslySetInnerHTML={{ __html: about.description }} />
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>

            <div className="about-inner position-relative">
            
           { !loading && about.map((about, index) => {
              return(
              <div className="row" key={index}>
                <div className="col-lg-4">
                  <div className="inner">
                    <h3>Our Mission</h3>

                    <p>{about.mission}</p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="inner">
                    <h3>Our Vision</h3>
                    <p>{about.vision}</p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="inner">
                    <h3>Our Value</h3>
                    <p>{about.values}</p>
                  </div>
                </div>
              </div>
              )
            })
            }

            </div>
          </div>
        </div>

        <div className="team-section">
          <div className="container">
            <div className="box2 d-flex flex-column align-items-center justify-contnt-center py-5">
              <h2>Our Awesome Team</h2>
              <div className="bar"></div>
              <p>
              Take a peek at Whitehatseo's dedicated team, then contact us to see how our strategy may assist with your SEO campaign.
              </p>
            </div>

            <div className="row">
              <Teamslider />
            </div>
          </div>
        </div>

        <Readytotalk />

        <Section3 />
      </div>

      <Footer />
    </>
  );
};

export default Aboutsection;
