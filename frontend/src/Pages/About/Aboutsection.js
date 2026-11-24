import { React, useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Teamslider from "../../Components/Teamslider";
import "./aboutsection.css";
import Footer from "../../Components/Footer";
import Readytotalk from "../../Components/Readytotalk";
import Section3 from "../../Components/Section3";
import Founders from "../../Components/Founders";

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

        {/* <div className="section4">
          <div className="container">
            <div className="">
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
              {!loading && about.map((about, index) => {
                return (
                  <div className="row" key={index}>
                    <div className="col-lg-4">
                      <div className="inner">
                        <h3>Our Mission</h3>
                        <p>Our aim is to deliver remarkable digital marketing services, along with exceptional SEO and SMM services for our clients, to maximize brand value worldwide and reduce any signs of stagnant leads or organic traffic issues. Furthermore, our goal is always client satisfaction at heart - which drives everything we do.</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="inner">
                        <h3>Our Vision</h3>
                        <p>Our vision is to foster collaboration, success, and meaningful branding for businesses of all kinds. The core purpose of the company is providing clients and the business with tangible results your success is of upmost importance.</p>
                      </div>
                    </div>
                    <div className="col-lg-4">
                      <div className="inner">
                        <h3>Our Value</h3>
                        <p>WhiteHatSeo team utilizes cutting-edge strategies to increase website visibility, organic traffic and rank higher on search engines for our clients benefit. This increases brand prestige, conversion rates and returns while staying ahead in technology advances. Our clients trust in us to exceed their expectations - make the switch today to learn how.</p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div> */}

        {/* ======================= OUR STORY SECTION ======================= */}
        <section className="our-story">
          <div className="container">

            {/* Heading */}
            <div className="story-heading text-center">
              <span className="story-label">Our Story</span>
              <h2>Built on Ambition, Driven by Purpose</h2>
              <div className="bar mx-auto"></div>
            </div>

            {/* HERO CARD (moved to top) */}
            <div className="story-hero">
              <span className="circle c1"></span>
              <span className="circle c2"></span>
              <span className="hero-quote-mark">“</span>

              <div className="row align-items-center position-relative">
                <div className="col-lg-7 mb-4 mb-lg-0">
                  <p className="hero-lead">
                    To every woman dreaming of starting something of her own: your dream
                    is valid. Your voice matters. Your ideas deserve a chance. And you
                    are capable of building something extraordinary.
                  </p>
                  <p className="hero-sub">
                    We started with a vision. We continue with purpose. And we hope our
                    journey inspires others to begin theirs.
                  </p>
                </div>

                <div className="col-lg-5">
                  <div className="hero-tagline">
                    <h4>Two founders.</h4>
                    <h4>One vision.</h4>
                    <h4 className="accent">Endless possibilities.</h4>
                  </div>
                </div>
              </div>

              <div className="hero-welcome-wrap">
                <span className="hero-welcome">Welcome to WhiteHatSEO.</span>
              </div>
            </div>

            {/* INTRO */}
            <div className="row align-items-center story-intro">
              <div className="col-lg-5 mb-4 mb-lg-0">
                <div className="story-quote">
                  <span className="quote-mark">“</span>
                  <p className="quote-text">
                    Every great journey begins with a dream — and the courage to take
                    the first step, even when the road ahead is uncertain.
                  </p>

                  <div className="founders">
                    <div className="avatars">
                      <span>AB</span>
                      <span>AM</span>
                    </div>
                    <div className="founders-info">
                      <strong>Anjna Bhardwaj &amp; Arti Mehta</strong>
                      <small>Co-Founders, WhiteHatSEO</small>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-7">
                <div className="story-text">
                  <p className="lead-para">
                    WhiteHatSEO was built on a shared vision, a belief in possibilities,
                    and the determination of two co-founders who wanted to create
                    something meaningful. What began as an entrepreneurial ambition has
                    grown into a journey of learning, challenges, resilience, and
                    helping businesses find their place in an increasingly digital world.
                  </p>
                  <p>
                    Our journey has never been just about building an agency or
                    delivering digital marketing services. It has been about building
                    relationships, earning trust, creating opportunities, and proving
                    that with the right mindset, dedication, and consistency, meaningful
                    growth is possible.
                  </p>
                  <p>
                    As co-founders, we bring different perspectives, strengths,
                    experiences, and ideas to the table. What unites us is our belief
                    that success is not built overnight. It takes commitment, continuous
                    learning, the courage to face challenges, and the willingness to
                    evolve with every new opportunity.
                  </p>
                </div>
              </div>
            </div>

            {/* JOURNEY OF COURAGE */}
            <div className="story-journey">
              <div className="journey-head text-center">
                <span className="mini-label">Our Journey</span>
                <h3>More than a business — a journey of courage</h3>
              </div>

              <div className="row journey-row">
                <div className="col-lg-4 mb-4 mb-lg-0">
                  <div className="journey-card">
                    <div className="j-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.3 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />
                      </svg>
                    </div>
                    <span className="j-step">01 · Believe</span>
                    <p>
                      For us, entrepreneurship is more than running a company. It is
                      about believing in yourself when things are difficult, making
                      decisions when there is uncertainty, learning from setbacks, and
                      continuing to move forward when the journey becomes challenging.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4 mb-4 mb-lg-0">
                  <div className="journey-card">
                    <div className="j-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 3v18M5 10l7-7 7 7" />
                      </svg>
                    </div>
                    <span className="j-step">02 · Lead</span>
                    <p>
                      As a woman co-founder, this journey carries a special meaning. We
                      believe women should never feel that their ambitions need to be
                      limited by society's expectations, circumstances, or fear of
                      failure. Building a business, leading a team, making decisions,
                      creating opportunities, and pursuing a vision are not defined by
                      gender — they are defined by courage, capability, and
                      determination.
                    </p>
                  </div>
                </div>

                <div className="col-lg-4">
                  <div className="journey-card">
                    <div className="j-icon">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1.1L12 21l7.8-7.5 1-1.1a5.5 5.5 0 000-7.8z" />
                      </svg>
                    </div>
                    <span className="j-step">03 · Inspire</span>
                    <p>
                      We hope our story encourages more women to believe in their
                      potential, take that first step, turn their ideas into reality,
                      and create their own path.
                    </p>
                  </div>
                </div>
              </div>

              <div className="journey-quote">
                <span className="jq-mark">“</span>
                <h4>You don't need to have everything figured out to begin.</h4>
                <p>
                  Sometimes, all you need is belief, the courage to start, and the
                  determination to keep going.
                </p>
              </div>
            </div>

            {/* BELIEVE + VISION */}
            <div className="row story-cards">
              <div className="col-lg-6 mb-4 mb-lg-0">
                <div className="story-card">
                  <div className="sc-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2l8 3v6c0 5-3.4 9.3-8 11-4.6-1.7-8-6-8-11V5l8-3z" />
                      <path d="M8.5 12l2.5 2.5 4.5-5" />
                    </svg>
                  </div>
                  <h3>What we believe</h3>
                  <p>
                    At WhiteHatSEO, we believe growth should be meaningful, sustainable,
                    and built on trust. We work with businesses to strengthen their
                    digital presence, improve visibility, connect with the right
                    audience, and build a foundation for long-term success.
                  </p>
                  <p>
                    Our approach is rooted in transparency, creativity, ethical
                    strategies, collaboration, and continuous innovation. We see our
                    clients not simply as projects, but as partners whose growth and
                    success matter to us.
                  </p>
                  <ul className="tick-list">
                    <li>Transparency</li>
                    <li>Creativity</li>
                    <li>Ethical Strategies</li>
                    <li>Collaboration</li>
                    <li>Innovation</li>
                    <li>Client Partnership</li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-6">
                <div className="story-card">
                  <div className="sc-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8S1 12 1 12z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </div>
                  <h3>Our vision for the future</h3>
                  <p>
                    We aspire to build more than a successful company. We want to build
                    a brand that creates opportunities, empowers people, inspires
                    entrepreneurs, and makes a meaningful difference in the businesses
                    and lives we touch.
                  </p>
                  <p>
                    Our journey continues — with bigger dreams, new challenges, stronger
                    partnerships, and an unwavering belief that success becomes more
                    meaningful when it creates opportunities for others.
                  </p>
                  <ul className="tick-list">
                    <li>Create Opportunities</li>
                    <li>Empower People</li>
                    <li>Inspire Entrepreneurs</li>
                    <li>Stronger Partnerships</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

        <div className="team-section">
          <div className="container">
            <div className="col-lg-6 mx-auto">
              <div className="box2 d-flex flex-column align-items-center justify-contnt-center pb-0">
                <h2>Our Awesome Team</h2>
                <div className="bar"></div>
                <p>
                  Take a peek at WhiteHatSeo's dedicated team, then contact us to see how our strategy may assist with your SEO campaign.
                </p>
              </div>
            </div>

            <div className="row justify-content-center ">
              <Founders />
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