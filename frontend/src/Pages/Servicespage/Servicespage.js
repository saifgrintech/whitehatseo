import React from 'react'
import Servicessection from './Servicessection'
import "./services.css"
import { Helmet } from 'react-helmet-async'

const Servicespage = () => {
  return (
    <>
      <Helmet>
        <title>Our Services - WhiteHatSEO</title>
        <meta name="description" content="Explore the range of digital marketing services offered by WhiteHatSEO, including SEO, PPC, and social media marketing." />
        <meta name="keywords" content="SEO Services, PPC Services, Social Media Marketing, Digital Marketing" />
        <meta property="og:title" content="Our Services - WhiteHatSEO" />
        <meta property="og:description" content="Discover our top-notch digital marketing services designed to boost your online presence." />
        <link rel="canonical" href="https://whitehatseo.in/services" />
      </Helmet>

     <div>
      <Servicessection />  
    </div>
    
    
    </>
  )
}

export default Servicespage
