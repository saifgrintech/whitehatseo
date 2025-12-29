import React from "react";
import { Link } from "react-router-dom";
import Teamslider from "../../Components/Teamslider";
import Workslider from "../../Components/Workslider";
import Usersslider from "../../Components/Usersslider";
import Section3 from "../../Components/Section3";

import Plans from "../../Components/Plans";
// import Testimonials from "../Testimonials/Testimonials";

const Features = () => {



  return (
    <>
      <div className="features-section">
        <div className="container">
          <div className="box d-flex flex-column align-items-center justify-content-center">
            <h2>Our Features </h2>
            <div className='bar'></div>
            <p>
              WHITEHATSEO agency can provide several strategic advantages for businesses looking to improve their online presence and drive more traffic to their websites.
            </p>
          </div>

          <div className="row">
            <div className="col-lg-6 col-md-6 py-3">
              <div className="card position-relative">
                <div className="d-flex align-items-center">
                  <div className="icons">
                    <i className="fa-solid fa-gear icons-inner"></i>
                  </div>

                  <div className="input">
                    <Link className="card-title">
                      Expert Team
                    </Link>
                    <p className="card-text mt-2">
                      Our team is made up of talented professionals with a diverse set of skills, each bringing unique expertise to our SEO efforts.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 py-3">
              <div className="card position-relative">
                <div className="d-flex align-items-center">
                  <div className="icons">
                    <i className="fa-solid fa-envelope icons-inner"></i>
                  </div>

                  <div className="input">
                    <Link className="card-title">
                      Transparency and Communication
                    </Link>
                    <p className="card-text mt-2">
                      We provide clear, accessible reports and updates on campaign progress, performance metrics, and strategy adjustments.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 py-3">
              <div className="card position-relative">
                <div className="d-flex align-items-center">
                  <div className="icons2">
                    <i className="fa-solid fa-border-none icons-inner"></i>
                  </div>

                  <div className="input">
                    <Link className="card-title">
                      Customer Support and Service
                    </Link>
                    <p className="card-text mt-2">
                      Providing support through various channels such as email, phone, and live chat to accommodate different client preferences.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 py-3">
              <div className="card position-relative">
                <div className="d-flex align-items-center">
                  <div className="icons2">
                    <i className="fa-solid fa-circle-info icons-inner"></i>
                  </div>

                  <div className="input">
                    <Link className="card-title">
                      Proactive Issue Management
                    </Link>
                    <p className="card-text mt-2">
                      Providing practical and effective solutions to any challenges or obstacles that arise, maintaining a focus on achieving client goals.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 py-3">
              <div className="card position-relative">
                <div className="d-flex align-items-center">
                  <div className="icons3">
                    <i className="fa-solid fa-cube icons-inner"></i>
                  </div>

                  <div className="input">
                    <Link className="card-title">
                      Tailored Solutions
                    </Link>
                    <p className="card-text mt-2">
                      Customizing support and recommendations based on individual client needs, goals, and industry requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-6 py-3">
              <div className="card position-relative">
                <div className="d-flex align-items-center">
                  <div className="icons3">
                    <i className="fa-regular fa-bell icons-inner"></i>
                  </div>

                  <div className="input">
                    <Link className="card-title">
                      Customer Satisfaction

                    </Link>
                    <p className="card-text mt-2">
                      We build long-term relationships with clients through excellent service, reliability, and a commitment to their success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Plans />

      <Section3 />


      <div className="team-section">

        <div className="box2  d-flex flex-column align-items-center justify-content-center">
          <h2>Meet Our Dedicated Team</h2>
          <div className='bar'></div>
          <p> Take a peek at Whitehatseo's dedicated team, then contact us to see how our strategy may assist with your SEO campaign. </p>
        </div>
        <div className="container">
          <div className="row justify-content-center mt-5">
              <div className="col-sm-6 col-lg-4 col-xl-3 mb-4 mb-sm-0">
                <div className="card border-0">
                <div className="team-member">
                <img src="/images/rohit.jpg" className="img img-large"  />
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
                <img src="/images/arti.jpg" className="img img-large"  />
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



      <div className="works d-none">
        <div className="box d-flex flex-column align-items-center justify-content-center">
          <h2>Our Recent Works</h2>
          <div className='bar'></div>
          <p className="text-center">
          Take a look at Whitehatseo's recent projects and see how our innovative solutions can elevate your next campaign. 


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
