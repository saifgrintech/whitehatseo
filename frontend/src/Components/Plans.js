import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const BASE_URL = process.env.REACT_APP_URL;

const Plans = () => {
  const [plans, setPlans] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPlan, setCurrentPlan] = useState(null);

  useEffect(() => {
    const fetchPlans = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/plan`);
        setPlans(response.data);
      } catch (error) {
        console.error('Error fetching plans:', error);
      }
    };

    fetchPlans();
  }, []);

  const buyFunction = async (price, planName) => {
    setLoading(true);
    setCurrentPlan(planName);
    try {
      let response = await axios.post(`${BASE_URL}/payment`, { price, planName });
      if (response && response.status === 200) {
        window.location.href = response.data.url;
      }
      // if (response && response.status === 200) {
      //   window.open(response.data.url, '_blank');
      // }
    } catch (error) {
      console.error('Error initiating payment:', error);
      setLoading(false);
      setCurrentPlan(null);
    }
  };

  return (
    <div className="plans">
      <div className="users-animation">
        <div className="user-animation6">
          <img src='homeimages/user-animation6.svg' className='user-triangle2' alt='triangle' />
        </div>
        <div className="user-animation4">
          <img src='homeimages/user-animation4.svg' className='user-triangle' alt='triangle' />
        </div>
        <div className="user-animation8">
          <img src='homeimages/user-animation8.svg' className='user-cross' alt='cross' />
        </div>
      </div>

      <div className="container">
        <div className="box4 d-flex flex-column align-items-center justify-content-center">
          <h2>Pricing Plans</h2>
          <div className='bar'></div>
          <p>
          Whether you're a startup or an established enterprise, we offer pricing options designed to fit your needs and help you achieve your goals without breaking the bank.
          </p>
        </div>
      </div>

      <div className="row justify-content-center mt-4">
        {/* {plans.map(plan => (
          <div key={plan._id} className="col-lg-4 col-md-6 advanced-plan mb-5">
            <div className="d-flex card border-0">
              <div className="pricing-card text-align-center">
                <div className="pricing-header2 position-relative">
                  <h3>{plan.planName}</h3>
                </div>
                <div className="price">
                  <h1>
                    ${plan.price} <span>/ {plan.duration}</span>
                  </h1>
                </div>
                <div className="pricing-features text-align-center">
                  <div dangerouslySetInnerHTML={{ __html : plan.description}} />
                
                 
                  <div className="btn-hover text-center">
                    <button 
                      className="btn-purple1" 
                      type="button" 
                      onClick={() => buyFunction(plan.price, plan.planName)}
                      disabled={loading && currentPlan === plan.planName}  
                    >
                      {loading && currentPlan === plan.planName ? 'Redirecting...' : 'BUY PLAN'}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))} */}


          <div  className="col-lg-4 col-md-6 advanced-plan mb-5">
            <div className="d-flex card border-0">
              <div className="pricing-card text-align-center">
                <div className="pricing-header2 position-relative">
                  <h3>Basic SEO Plan</h3>
                </div>
                <div className="price">
                  <h1>
                    $150 <span>/month </span>
                  </h1>
                  <h5>(10 Keywords)</h5>
                </div>
                <div className="pricing-features text-align-center">
                  <ul className='p-0'>
                     <h4> <i className="fa-brands fa-searchengin"></i> Min. Contract 4 Months</h4>
                      <li className="ami-price"><i className="fa-solid fa-check"></i>Local & National SEO</li>
                      <li className="ami-price"><i className="fa-solid fa-check"></i>Minimum 8 Keywords</li>
                     <h4><i className="fa-brands fa-searchengin"></i> Top 10 Guarantee - 40%*</h4>
                     <h4><i className="fa-brands fa-searchengin"></i> Initial Research And Analysis</h4>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Business Analysis</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>In-depth Website Study</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Competitor Analysis</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Content Duplicacy Check</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Initial Backlinks Analysis</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Google Penalty Check</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Website Speed Analysis</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Keyword Research</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Canonicalization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Website Page Load Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Initial Report</li>
                     <h4><i className="fa-brands fa-searchengin"></i> On Page SEO</h4>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Title Tags Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>URL Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Internal linking & Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Content Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Robots.txt Creation</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>HTML & XML Sitemap Submission</li>
                     <li className="ami-price"><i className="fa-solid fa-xmark"></i>Schema For Contact</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Google Search Console</li>
                     <li className="ami-price"><i className="fa-solid fa-xmark"></i>Bing Webmaster Tools</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Google Analytics</li>
                     <li className="ami-price"><i className="fa-solid fa-xmark"></i>HTML Code Cleanup & Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Location Based Page Optimisation</li>                  
                     <h4><i className="fa-brands fa-searchengin"></i> Off Page SEO</h4>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Content Writing & Submission</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> PDF/Doc Submission</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Classifieds</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Blog Commenting</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Q & A</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Informational Article Writing & Submission</li>
                     <li className="ami-price"><i className="fa-solid fa-xmark"></i> Press Release Writing & Submission</li>
                     <li className="ami-price"><i className="fa-solid fa-xmark"></i> Guest Blog Posting</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> 4 Blogs Posting*</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Social Bookmarking</li>
                     <h4><i className="fa-brands fa-searchengin"></i> Local SEO</h4>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Google My Business Setup and Verification</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Google Places Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Google My Business Customer Reviews/ratings</li>
                     <li className="ami-price"><i className="fa-solid fa-xmark"></i> Bing local listing</li>
                     <h4><i className="fa-brands fa-searchengin"></i> Status And  Report</h4>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Search Engine Rank Report</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> SEO Reports</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Google Analytics Report</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Activitiy Report</li>
                     <li className="ami-price"><i className="fa-solid fa-xmark"></i> Monthly Action Plan</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Email/Chat/Online</li>
                     <li className="ami-price"><i className="fa-solid fa-xmark"></i> 24/7 Live Project Tracking</li>
                   

                  </ul>
                 
                  <div className="btn-hover text-center">
                 { /*  <button 
                      className="btn-purple1" 
                      type="button" 
                        onClick={() => buyFunction(150, "Basic Plan")}
                        disabled={loading && currentPlan === "Basic Plan"} 
                    >
                      {loading && currentPlan === "Basic Plan" ? 'Redirecting...' : 'BUY PLAN'}
                    </button> */}

                    <Link to='/contact'>
                     <button className="btn-purple1"  type="button" >Get in touch</button>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div  className="col-lg-4 col-md-6 advanced-plan mb-5">
            <div className="d-flex card border-0">
              <div className="pricing-card text-align-center">
                <div className="pricing-header2 position-relative">
                  <h3>Standard SEO Plan</h3>
                </div>
                <div className="price">
                  <h1>
                    $250 <span>/month </span>
                  </h1>
                  <h5>(20 Keywords)</h5>
                </div>
                <div className="pricing-features text-align-center">
                  <ul className='p-0'>
                     <h4> <i className="fa-brands fa-searchengin"></i> Min. Contract 6 Months</h4>
                      <li className="ami-price"><i className="fa-solid fa-check"></i>Local & National,International  SEO</li>
                      <li className="ami-price"><i className="fa-solid fa-check"></i>Minimum 20 Keywords</li>
                     <h4><i className="fa-brands fa-searchengin"></i> Top 10 Guarantee - 50%*</h4>
                     <h4><i className="fa-brands fa-searchengin"></i> Initial Research And Analysis</h4>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Business Analysis</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>In-depth Website Study</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Competitor Analysis</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Content Duplicacy Check</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Initial Backlinks Analysis</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Google Penalty Check</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Website Speed Analysis</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Keyword Research</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Canonicalization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Website Page Load Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Initial Report</li>
                     <h4><i className="fa-brands fa-searchengin"></i> On Page SEO</h4>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Title Tags Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>URL Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Internal linking & Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Content Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Robots.txt Creation</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>HTML & XML Sitemap Submission</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Schema For Contact</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Google Search Console</li>
                     <li className="ami-price"><i className="fa-solid fa-xmark"></i>Bing Webmaster Tools</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Google Analytics</li>
                     <li className="ami-price"><i className="fa-solid fa-xmark"></i>HTML Code Cleanup & Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Location Based Page Optimisation</li>                  
                     <h4><i className="fa-brands fa-searchengin"></i> Off Page SEO</h4>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Content Writing & Submission</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> PDF/Doc Submission</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Classifieds</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Blog Commenting</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Q & A</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Informational Article Writing & Submission</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Blog Posting</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Guest Blog Posting</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> 8 Blogs Posting*</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Social Bookmarking</li>
                     <h4><i className="fa-brands fa-searchengin"></i> Local SEO</h4>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Google My Business Setup and Verification</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Google Places Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Google My Business Customer Reviews/ratings</li>
                     <li className="ami-price"><i className="fa-solid fa-xmark"></i> Bing local listing</li>
                     <h4><i className="fa-brands fa-searchengin"></i> Status And  Report</h4>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Search Engine Rank Report</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> SEO Reports</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Google Analytics Report</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Activitiy Report</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Monthly Action Plan</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Email/Chat/Online</li>
                     <li className="ami-price"><i className="fa-solid fa-xmark"></i> 24/7 Live Project Tracking</li>
                   

                  </ul>
                 
                  <div className="btn-hover text-center">
                    {/* <button 
                      className="btn-purple1" 
                      type="button" 
                        onClick={() => buyFunction(250, "Standard Plan")}
                        disabled={loading && currentPlan === "Standard Plan"} 
                    >
                      {loading && currentPlan === "Standard Plan" ? 'Redirecting...' : 'BUY PLAN'}
                    </button> */}

                      <Link to='/contact'>
                     <button className="btn-purple1"  type="button" >Get in touch</button>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div  className="col-lg-4 col-md-6 advanced-plan mb-5">
            <div className="d-flex card border-0">
              <div className="pricing-card text-align-center">
                <div className="pricing-header2 position-relative">
                  <h3>Professional SEO Plan</h3>
                </div>
                <div className="price">
                  <h1>
                    $350 <span>/month </span>
                  </h1>
                  <h5>(30 Keywords)</h5>
                </div>
                <div className="pricing-features text-align-center">
                  <ul className='p-0'>
                     <h4> <i className="fa-brands fa-searchengin"></i> Min. Contract 12 Months</h4>
                      <li className="ami-price"><i className="fa-solid fa-check"></i>Local & National,International  SEO</li>
                      <li className="ami-price"><i className="fa-solid fa-check"></i>Minimum 20 Keywords</li>
                     <h4><i className="fa-brands fa-searchengin"></i> Top 10 Guarantee - 50%*</h4>
                     <h4><i className="fa-brands fa-searchengin"></i> Initial Research And Analysis</h4>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Business Analysis</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>In-depth Website Study</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Competitor Analysis</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Content Duplicacy Check</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Initial Backlinks Analysis</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Google Penalty Check</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Website Speed Analysis</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Keyword Research</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Canonicalization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Website Page Load Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Initial Report</li>
                     <h4><i className="fa-brands fa-searchengin"></i> On Page SEO</h4>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Title Tags Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>URL Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Internal linking & Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Content Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Robots.txt Creation</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>HTML & XML Sitemap Submission</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Schema For Contact</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Google Search Console</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Bing Webmaster Tools</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Google Analytics</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>HTML Code Cleanup & Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Location Based Page Optimisation</li>                  
                     <h4><i className="fa-brands fa-searchengin"></i> Off Page SEO</h4>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Content Writing & Submission</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> PDF/Doc Submission</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Classifieds</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Blog Commenting</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Q & A</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Informational Article Writing & Submission</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Press Release Writing & Submission</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Guest Blog Posting</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> 8 Blogs Posting*</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Social Bookmarking</li>
                     <h4><i className="fa-brands fa-searchengin"></i> Local SEO</h4>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Google My Business Setup and Verification</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Google Places Optimization</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Google My Business Customer Reviews/ratings</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Bing local listing</li>
                     <h4><i className="fa-brands fa-searchengin"></i> Status And  Report</h4>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Search Engine Rank Report</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> SEO Reports</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Google Analytics Report</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i>Activitiy Report</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Monthly Action Plan</li>
                     <li className="ami-price"><i className="fa-solid fa-check"></i> Email/Chat/Online</li>
                     <li className="ami-price"><i className="fa-solid fa-xmark"></i> 24/7 Live Project Tracking</li>
                   

                  </ul>
                 
                  <div className="btn-hover text-center">
                    {/* <button 
                      className="btn-purple1" 
                      type="button" 
                        onClick={() => buyFunction(350, "Professional Plan")}
                        disabled={loading && currentPlan === "Professional Plan"} 
                    >
                      {loading && currentPlan === "Professional Plan" ? 'Redirecting...' : 'BUY PLAN'}

                    </button> */}
                      <Link to='/contact'>
                     <button className="btn-purple1"  type="button" >Get in touch</button>
                      </Link>
                      
                  </div>
                </div>
              </div>
            </div>
          </div>

      </div>
      
      {loading && currentPlan && (
        <div className="loading-spinner mt-4">
          <h5>Redirecting to payment gateway, please wait...</h5>
        </div>
      )}
    </div>
  );
}

export default Plans;
