import React from 'react'
import Blogsection from './Blogsection'
import { Helmet } from 'react-helmet-async'



const Blogpage = () => {
  return (
    <>
      <Helmet>
        <title>SEO & Digital Marketing Blog |  Whitehat SEO</title>
        <meta name="description" content="Stay updated with the latest SEO, digital marketing, and Google algorithm insights. Expert tips, guides, and strategies by WhiteHatSEO." />
        <meta property="og:title" content="SEO & Digital Marketing Blog |  Whitehat SEO" />
        <meta property="og:description" content="Stay updated with the latest SEO, digital marketing, and Google algorithm insights. Expert tips, guides, and strategies by WhiteHatSEO." />
        <link rel="canonical" href="https://whitehatseo.in/blogs" />
      </Helmet>

      <div> 
        <Blogsection />
      </div>
    </>
  )
}

export default Blogpage
