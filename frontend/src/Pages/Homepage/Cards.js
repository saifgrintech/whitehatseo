import React from 'react'

const Cards = () => {
  return (
    <>

      <div className='container mt-5 pt-md-5'>
        <div className='row all-cards'>

          <div className=" col-sm-6 col-md-6 col-lg-3" >
            <div className='card border-0 card-hover'>
              <div className="card-body">
                <i className="fa-solid fa-bars-progress  icon1"></i>
                <h5 className="card-title">Seo Services</h5>
                <p className="card-text">Maximize your online visibility and drive organic traffic with Whitehatseo's comprehensive SEO services. Our team's proven strategies tailored to your unique business needs, ensuring your website ranks higher on search engines and attracts qualified leads.</p>

              </div>
            </div>
          </div>

          <div className=" col-sm-6 col-md-6 col-lg-3" >
            <div className='card border-0'>
              <div className="card-body">
                <i className="fa-solid fa-code  icon2"></i>
                <h5 className="card-title">Facebook Ads</h5>
                <p className="card-text">
                Enhance your brand’s reach and drive impactful results with Whitehatseo's Facebook Ads services. Our expert team crafts tailored ad campaigns that resonate with your target audience, strategic targeting, and continuous optimization. 
                </p>
              </div>
            </div>
          </div>

          <div className=" col-sm-6 col-md-6 col-lg-3" >
            <div className='card border-0'>
              <div className="card-body">
                <i className="fa-solid fa-code  icon2"></i>
                <h5 className="card-title">Google Ads</h5>
                <p className="card-text">Drive targeted traffic and maximize conversions with Whitehatseo's Google Ads services. Our team creates custom ad campaigns designed to reach your ideal audience and generate immediate results. 
                </p>
              </div>
            </div>
          </div>

          <div className=" col-sm-6 col-md-6 col-lg-3" >
            <div className='card border-0'>
              <div className="card-body">
                <i className="fa-solid fa-code  icon2"></i>
                <h5 className="card-title">Keyword Research</h5>
                <p className="card-text">Unlock the potential of your SEO strategy with Whitehatseo's comprehensive Keyword Research services. Our team conducts in-depth analysis to identify high-value keywords tailored to your industry, audience, and goals.</p>
              </div>
            </div>
          </div>

        </div>
      </div>



    </>




  )
}

export default Cards
