import React from "react";
import Aboutsection from "./Aboutsection";
import "./aboutsection.css"
import { Helmet } from "react-helmet-async";



const Aboutpage = () => {
    return (
      <>
          <Helmet>
          <title>About Us - WhiteHatSEO</title>
          <meta name="description" content="Learn more about WhiteHatSEO, our mission, and how we provide the best SEO and digital marketing services globally and locally." />
          <meta name="keywords" content="About WhiteHatSEO, SEO Company, Digital Marketing Agency" />
          <meta property="og:title" content="About Us - WhiteHatSEO" />
          <meta property="og:description" content="Get to know more about WhiteHatSEO and our expertise in SEO and digital marketing." />
          <link rel="canonical" href="https://whitehatseo.in/about" />
        </Helmet>

      <div>
        <Aboutsection />
      </div>

      </>
  
  
    )
  }
  
  export default Aboutpage