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
        <title>Our Services List | Whitehat SEO</title>
        <meta name="description" content="Explore whitehat seo's services including SEO, PPC, social media marketing, content marketing, and analytics to grow traffic and conversions." />
        <meta property="og:title" content="Our Services List | Whitehat SEO" />
        <meta property="og:description" content="Explore whitehat seo's services including SEO, PPC, social media marketing, content marketing, and analytics to grow traffic and conversions." />
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
