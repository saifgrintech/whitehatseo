import React from "react";
import { Link } from "react-router-dom";
import Teamslider from "../../Components/Teamslider";
import Workslider from "../../Components/Workslider";
import Usersslider from "../../Components/Usersslider";
import Section3 from "../../Components/Section3";
import Founders from "../../Components/Founders";

import Plans from "../../Components/Plans";
// import Testimonials from "../Testimonials/Testimonials";

const Features = () => {
  return (
    <>
      <div className="features-section">
        <div className="container">
          <div className="box d-flex flex-column align-items-center justify-content-center">
            <h2>What Makes Us a Top SEO Company</h2>
            <div className='bar'></div>
            <p>
              WhiteHatSEO agency can provide several strategic advantages for businesses looking to improve their online presence and drive more traffic to their websites.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 py-3">
              <div className="card position-relative">
                <div className="d-flex align-items-center">
                  <div className="icons">
                    <i className="fa-solid fa-sack-dollar icons-inner"></i>
                  </div>

                  <div className="input">
                    <Link className="card-title">Revenue-Driven SEO</Link>
                    <p className="card-text mt-2">
                      We focus on generating qualified leads and real business growth—not
                      just increasing website traffic.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 py-3">
              <div className="card position-relative">
                <div className="d-flex align-items-center">
                  <div className="icons">
                    <i className="fa-solid fa-robot icons-inner"></i>
                  </div>

                  <div className="input">
                    <Link className="card-title">AI-Optimized Strategy</Link>
                    <p className="card-text mt-2">
                      Our approach is built for modern search, including AI-driven results
                      and evolving SERP features.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 py-3">
              <div className="card position-relative">
                <div className="d-flex align-items-center">
                  <div className="icons2">
                    <i className="fa-solid fa-bullseye icons-inner"></i>
                  </div>

                  <div className="input">
                    <Link className="card-title">Intent-Based Optimization</Link>
                    <p className="card-text mt-2">
                      We align content with user search intent across every stage of the
                      customer journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 py-3">
              <div className="card position-relative">
                <div className="d-flex align-items-center">
                  <div className="icons2">
                    <i className="fa-solid fa-award icons-inner"></i>
                  </div>

                  <div className="input">
                    <Link className="card-title">Authority-Focused Content</Link>
                    <p className="card-text mt-2">
                      We build topical authority through high-quality, relevant content—not
                      just keyword stuffing.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 py-3">
              <div className="card position-relative">
                <div className="d-flex align-items-center">
                  <div className="icons3">
                    <i className="fa-solid fa-chart-pie icons-inner"></i>
                  </div>

                  <div className="input">
                    <Link className="card-title">Integrated SEO Approach</Link>
                    <p className="card-text mt-2">
                      We combine SEO, content marketing, and conversion rate optimization
                      to maximize results.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 py-3">
              <div className="card position-relative">
                <div className="d-flex align-items-center">
                  <div className="icons3">
                    <i className="fa-solid fa-chart-line icons-inner"></i>
                  </div>

                  <div className="input">
                    <Link className="card-title">Data-Backed Decisions</Link>
                    <p className="card-text mt-2">
                      Our strategies are guided by real-time analytics, ensuring
                      continuous improvement and measurable ROI.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* <Plans /> */}

      <Section3 />


      <div className="team-section">

        <div className="box2  d-flex flex-column align-items-center justify-content-center">
          <h2>Meet Our Dedicated Team</h2>
          <div className='bar'></div>
          <p> Take a peek at WhiteHatSeo's dedicated team, then contact us to see how our strategy may assist with your SEO campaign. </p>
        </div>
        <div className="container">
          <div className="row justify-content-center mt-5">
            <Founders />
            <Teamslider />
          </div>

        </div>

      </div>



      <div className="works d-none">
        <div className="box d-flex flex-column align-items-center justify-content-center">
          <h2>Our Recent Works</h2>
          <div className='bar'></div>
          <p className="text-center">
          Take a look at WhiteHatSeo's recent projects and see how our innovative solutions can elevate your next campaign. 


          </p>
        </div>

        <div className="work-animation">

          <div className="workshape1">
            <img src='homeimages/workshape1.svg' className='cross-img' alt='cross' />
          </div>

          <div className="workshape2">
            <img src='homeimages/workshape2.svg' className='work-traingle' alt='traingle' />
          </div>

          <div className="workshape3">
            <img src='homeimages/workshape3.svg' className='work-traingle' alt='traingle' />
          </div>




        </div>


        <div className="d-flex justify-content-center">
          <Workslider />
        </div>
      </div>

    </>
  );
};

export default Features;