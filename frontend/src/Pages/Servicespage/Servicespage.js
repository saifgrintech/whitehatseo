import React from 'react'
import Servicessection from './Servicessection'
import "./services.css"
import { Helmet } from 'react-helmet-async'

const Servicespage = () => {

   const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://whitehatseo.in/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Services",
        "item": "https://whitehatseo.in/services"
      }
    ]
  };


  return (
    <>
      <Helmet>
        <title>Our Services - WhiteHatSeo</title>
        <meta name="description" content="Explore the range of digital marketing services offered by WhiteHatSeo, including SEO, PPC, and social media marketing." />
        <meta name="keywords" content="SEO Services, PPC Services, Social Media Marketing, Digital Marketing" />
        <meta property="og:title" content="Our Services - WhiteHatSeo" />
        <meta property="og:description" content="Discover our top-notch digital marketing services designed to boost your online presence." />
        <link rel="canonical" href="https://whitehatseo.in/services" />

         <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
        
      </Helmet>

     <div>
      <Servicessection />  
    </div>
    
    
    </>
  )
}

export default Servicespage
