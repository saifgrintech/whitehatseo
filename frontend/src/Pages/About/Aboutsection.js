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
              <h1 className='mb-0'>About Us</h1>
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
                    <p>Our aim is to deliver remarkable digital marketing services, along with exceptional SEO and SMM services for our clients, to maximize brand value worldwide and reduce any signs of stagnant leads or organic traffic issues. Furthermore, our goal is always client satisfaction at heart - which drives everything we do.</p>

                    {/* <p>{about.mission}</p> */}
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="inner">
                    <h3>Our Vision</h3>
                    {/* <p>{about.vision}</p> */}
                    <p>Our vision is to foster collaboration, success, and meaningful branding for businesses of all kinds. The core purpose of the company is providing clients and the business with tangible results your success is of upmost importance.</p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="inner">
                    <h3>Our Value</h3>
                    <p>WhitehatSeo team utilizes cutting-edge strategies to increase website visibility, organic traffic and rank higher on search engines for our clients benefit. This increases brand prestige, conversion rates and returns while staying ahead in technology advances. Our clients trust in us to exceed their expectations - make the switch today to learn how.</p>
                    {/* <p>{about.values}</p> */}
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
            <div className="col-lg-6 mx-auto">
              <div className="box2 d-flex flex-column align-items-center justify-contnt-center pb-0">
              <h2>Our Awesome Team</h2>
              <div className="bar"></div>
              <p>
              Take a peek at Whitehatseo's dedicated team, then contact us to see how our strategy may assist with your SEO campaign.
              </p>
            </div>
            </div>


           <div className="row justify-content-center ">
            <div className="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-sm-0">
              <div className="card border-0">
              <div className="team-member">
               <img src="/images/rohit.jpg" alt="rohit" className="img img-large"  />
                <div className="team-info">
                  <h5 className="member1-title m-0">Rohit Sharma</h5>
                  <p className="member1-text m-0">Senior Project Manager</p>
                  <p className="member1-text m-0 mt-1"><b>Expertise: </b>Branding/PPC</p>
                </div>
              </div>
            </div>
            </div>
            <div className="col-sm-6 col-lg-4 col-xl-3 ">
              <div className="card border-0">
              <div className="team-member">
               <img src="/images/arti.jpg" alt="arti" className="img img-large"  />
                <div className="team-info">
                  <h5 className="member1-title m-0">Arti Mehta</h5>
                  <p className="member1-text m-0"> Project Manager</p>
                   <p className="member1-text m-0 mt-1"><b>Expertise: </b>SEO/SMM/PPC</p>
                </div>
              </div>
            </div>
            </div>

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
