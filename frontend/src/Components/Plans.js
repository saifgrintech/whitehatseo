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


  const plansData = [
    {
      id: 1,
      title: "SEO",
      price: "150-300",
      icon: "fa-solid fa-magnifying-glass",
      slug: "services/search-engine-optimization",
    },
    {
      id: 2,
      title: "PPC",
      price: "100-300",
      icon: "fa-solid fa-hand-pointer",
      slug: "services/pay-per-click-ppc",
    },
    {
      id: 3,
      title: "Digital Marketing",
      price: "150-300",
      icon: "fa-solid fa-bullhorn",
      slug: "services/digital-marketing",
    },
    {
      id: 4,
      title: "Local SEO",
      price: "120-250",
      icon: "fa-solid fa-location-dot",
      slug: "services/local-seo",
    },
  ];





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

        <div className="row justify-content-center mt-sm-4">
        
              <div className="row g-4 justify-content-center mt-0">
                {plansData.map((plan) => (
                  <div className="col-xl-3 col-md-6 col-lg-4 col-sm-6" key={plan.id}>
                    <div className="card text-center h-100 border-0 shadow-sm rounded-4 plan-card">
                      <div className="card-body d-flex flex-column" style={{boxShadow:"none"}}>
                        {/* Icon */}
                        <div className="mb-3 fs-2 text-theme">
                          <i className={`bi ${plan.icon}`}></i>
                        </div>

                        {/* Title */}
                        <h3 className="fw-semibold mb-3">{plan.title}</h3>

                        {/* Price */}
                        <p className="text-muted mb-2">Starting From</p>
                        <h2 className="fw-bold mb-3">
                          ${plan.price}
                          <span className="fs-6 text-muted">/Month</span>
                        </h2>

                        {/* Buttons */}
                        <Link
                          to={`/${plan.slug}`}
                          className="btn btn-dark mb-2 fw-bold py-2"
                        >
                          Explore
                          <i className="fa-solid fa-arrow-right ms-2"></i>
                        </Link>


                        <Link to="/contact" className="btn plan_button fw-bold text-white py-2 ">
                          Contact Us
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
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
