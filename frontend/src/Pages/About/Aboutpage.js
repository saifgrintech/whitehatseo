import React from "react";
import Aboutsection from "./Aboutsection";
import "./aboutsection.css"
import { Helmet } from "react-helmet-async";



const Aboutpage = () => {
    return (
      <>
          <Helmet>
          <title>About WhitehatSEO | Ethical & Results-Focused SEO Agency</title>
          <meta name="description" content="Learn about Whitehat SEO, a trusted SEO agency delivering ethical, transparent, and Google-compliant SEO strategies for long-term growth." />
          <meta name="keywords" content="About WhiteHatSeo, SEO Company, Digital Marketing Agency" />
          <meta property="og:title" content="About WhitehatSEO | Ethical & Results-Focused SEO Agency" />
          <meta property="og:description" content="Learn about Whitehat SEO, a trusted SEO agency delivering ethical, transparent, and Google-compliant SEO strategies for long-term growth." />
          <link rel="canonical" href="https://whitehatseo.in/about" />
        </Helmet>

      <div>
        <Aboutsection />
      </div>

      </>
  
  
    )
  }
  
  export default Aboutpage