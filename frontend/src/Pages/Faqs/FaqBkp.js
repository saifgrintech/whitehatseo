
import React, { useState } from "react";
import Navbar from '../../Components/Navbar';
import axios from "axios";
import Footer from "../../Components/Footer";

const BASE_URL = process.env.REACT_APP_URL;
const WEBSITE_URL = process.env.REACT_APP_FRONTEND;


const Faq = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  };
  const [faqData, setFaqData] = useState({ smm: [], marketing: [], seo: [] });
  const [formData, setFormData] = useState(initialFormData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };






  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Send POST request to the server
      await axios.post(`${BASE_URL}/contact`, formData);

      // If successful, set success state and optionally reset form data
      setSuccess(true);
      setFormData(initialFormData); // Reset form data if needed
      setTimeout(() => {
        setSuccess("");
      }, 5000);
      
    } catch (error) {
      setError("Failed to send message");
      setTimeout(() => {
        setError("");
      }, 5000);
      console.error("Error sending message:", error);
    } finally {
      setLoading(false);
    }
  };



  return (
    <>
      <div className='faq_page'>
        <Navbar />

        <div className='container3'>
          <div className='box'>
            <h2>FAQ</h2>

            <div className="all-animation">
              <div className="all-animation1">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation1.png`}
                  className="circle-img"
                  alt="moon"
                />
              </div>

              <div className="all-animation2">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation2.svg`}
                  className="cross-img"
                  alt="cross"
                />
              </div>

              <div className="all-animation3">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation3.svg`}
                  className="circle-img"
                  alt="circle"
                />
              </div>

              <div className="all-animation4">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation4.svg`}
                  className="triangle-img"
                  alt="triangle"
                />
              </div>

              <div className="all-animation5">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation5.png`}
                  className="design1"
                  alt="zig-zag"
                />
              </div>

              <div className="all-animation6">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation6.svg`}
                  className="triangle3"
                  alt="triangle"
                />
              </div>

              <div className="all-animation7">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation7.svg`}
                  className="triangle3"
                  alt="triangle"
                />
              </div>

              <div className="all-animation8">
                <img
                  src={`${WEBSITE_URL}/all-animations/all-animation8.svg`}
                  className="triangle3"
                  alt="triangle"
                />
              </div>
            </div>


          </div>

        </div>

        <div className='faq_content'>
          <div className='container'>
            <h2 className="text-center">What Makes Us Different from Other SEO Companies?</h2>
            <p className="text-center ">Whitehatseo helps increase a website’s search ranking on a search engine results page (SERP) without staying outside of Google’s guidelines. Here is a passage that talks about various topics like business, travel, fashion, technology, and more. It is a bit difficult to understand and seems to be a mix of different ideas and words. We will try to improve its readability and present it in HTML format.</p>

            <ul className="faq_tabs nav nav-tabs mb-0 mb-md-5  border-0 d-flex justify-content-center" id="myTab" role="tablist">
              <li className="nav-item mb-4 mb-md-0" role="presentation">
                <button className="nav-link border-0 active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">SEO Questions</button>
              </li>
              <li className="nav-item mb-4 mb-md-0" role="presentation">
                <button className="nav-link border-0" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">SMM Questions</button>
              </li>
              <li className="nav-item mb-4 mb-md-0" role="presentation">
                <button className="nav-link border-0" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Digital Marketing Questions</button>
              </li>
            </ul>

            <div className="tab-content" id="myTabContent">
              <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">

                <div className="accordion" id="accordionExample">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Why is SEO Important?
                      </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>In the digital circle, SEO, or search engine optimization, is crucial. It serves as your online presence's compass. By making your website search engine friendly, like Google, you make sure anyone looking for your information can find it. This increases reputation and visibility while generating organic traffic. In essence, SEO is the key to realizing your online potential, connecting with the appropriate audience, and eventually succeeding in the world of technology.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Is SEO important for website
                      </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Yes, SEO (Search Engine Optimization) is crucial for a website's success. It plays a significant role in improving a website's visibility on search engines like Google, Bing, and Yahoo. SEO helps your website appear higher in search engine results pages (SERPs). This means more people are likely to find and visit your website.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        In 2024, will SEO still be important?
                      </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse mt-3" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Indeed, SEO remains important in 2024 and will continue to do so for some time to come. This is so that search engines can more effectively rank web pages when people type in search queries. SEO does this by assisting search engines in crawling and classifying your website. Google and other search engines want to assist people in finding the answers to their queries.</p>
                      </div>
                    </div>

                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                        How to optimize my website for mobile?
                      </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse mt-3" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Optimizing your website for mobile is important because more and more people are using their mobile devices to access the internet. In fact, according to Statista, mobile devices accounted for over 54% of global web traffic in 2022.</p>
                        <p>You may optimize your website for mobile in a variety of ways.</p>
                        <p>Here are a few of the most significant:</p>
                        <p>Make sure your website is mobile-friendly: A responsive website is one that automatically adjusts its layout to the screen size of the device being used to see it. This means that your website will look good and be easy to use on both desktop and mobile devices.</p>
                        <p>Use a mobile-friendly theme: There are a number of mobile-friendly themes available for most popular content management systems (CMS). These themes are designed to make your website look good and be easy to use on mobile devices.</p>
                        <p>Optimize your images: Images can take up a lot of space on a mobile device, so it is important to optimize your images for mobile. This implies compressing your photographs without sacrificing quality.</p>
                        <p>Use clear and concise text: Mobile users are more likely to scan your content than read it word-for-word. So, it is important to use clear and concise text on your website.</p>
                        <p>Use a call to action: A call to action is a button or link that tells your visitors what you want them to do. For example, you might want them to sign up for your email list, make a purchase, or contact you. Make sure your call to action is clear and easy to find on your mobile website.</p>
                        <p>Test your website on different devices: Once you have optimized your website for mobile, it is important to test it on different devices. This will help you make sure that your website looks good and is easy to use on all devices.                     By following these tips, you can optimize your website for mobile and make it easier for people to access your content on their mobile devices.
                        </p>
                      </div>
                    </div>

                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                        How to generate backlinks?
                      </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse mt-3" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>When generating backlinks, it is important to get backlinks from high-quality websites.</p>
                        <p>These are websites that have a good reputation and are considered to be authoritative. Backlinks from high-quality websites will give your website a boost in search engine rankings.</p>
                        <p>It is also important to get backlinks from relevant websites. These are websites that are related to your own website. Backlinks from relevant websites will help your website rank higher for the keywords that are relevant to your website.</p>
                        <p>Generating backlinks is a long-term process. Seeing results requires time and effort. However, if you are patient and consistent, you can build a strong backlink profile that will help your website rank higher in search engines.</p>
                        <p>Here are some additional tips for generating backlinks:</p>
                        <p>Create high-quality content: The best way to get backlinks is to create high-quality content that people want to link to. Your content should be relevant, well-written, and relevant to your intended audience.</p>
                        <p>Promote your content: Once you have created high-quality content, you need to promote it so that people will see it and link to it. You can promote your content on social media, in forums, and in other places where people are likely to see it.</p>
                        <p>Be patient: Building backlinks takes time and effort. Don't expect to see results overnight. Simply keep developing and promoting high-quality content, and you'll start to see backlinks appear.</p>
                        <p>By following these tips, you can build a strong backlink profile that will help your website rank higher in search engines.</p>
                      </div>
                    </div>

                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                        What are the most common SEO mistakes?
                      </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>There are many SEO mistakes that can be made, but some of the most common include:</p>
                        <p>Not optimizing your content for keywords: This is one of the most important things you can do for SEO. When you're creating content, make sure to use the right keywords throughout your text. You can identify the right keywords by using a keyword research tool.</p>
                        <p>Using too many keywords: Keyword stuffing is a bad SEO practice. It can actually hurt your ranking if you use too many keywords.</p>
                        <p>Not optimizing your title tags and meta descriptions: These are the snippets of text that appear in search engine results pages (SERPs). Make sure they accurately reflect the content of your page and include the relevant keywords.</p>
                        <p>Not building backlinks: Backlinks are links from other websites to yours. They provide search engines with evidence that your website is authoritative and trustworthy. Backlinks can be obtained by guest blogging, social media participation, and submitting your website to directories.</p>
                        <p>Not fixing technical SEO issues: If there are any technical issues with your website, such as slow loading times or broken links, these can hurt your SEO performance. Correct these issues as soon as feasible.</p>
                        <p>Not tracking your SEO progress: It's important to track your SEO progress so that you can see what's working and what's not.</p>
                        <p>There are a number of tools that you can use to track your SEO progress.
                          You may boost your website's rating in search engines and attract more traffic by avoiding these typical SEO errors.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                        How much does SEO cost?
                      </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>The cost of SEO can vary depending on a number of factors, including the size and complexity of your website, the level of competition in your industry, and the services that you require.</p>
                        <p>However, in general, SEO can range in cost from a few hundred dollars per month to several thousand dollars per month.</p>
                        <p>Check some of the factors that can affect the cost of SEO:</p>
                        <p>The size and complexity of your website: The larger and more complex your website is, the more time and effort it will take to optimize it for search engines. This will naturally increase the cost of SEO.</p>
                        <p>The level of competition in your industry: If you are in a highly competitive industry, you will need to invest more in SEO in order to rank well in search engines.</p>
                        <p>The services that you require: The specific services that you require will also affect the cost of SEO. For example, if you need help with keyword research, link building, or content optimization, you will need to pay more than if you only need help with technical SEO.</p>
                        <p>If you are on a budget, there are a number of things that you can do to improve your website's SEO.</p>
                        <p>Whitehatseo will help you in minimum budget. However, if you want to see significant results. A good SEO service will have the experience and expertise to help you improve your website's ranking in search engines and attract more traffic.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                        Can I do SEO myself?
                      </button>
                    </h2>
                    <div id="collapseEight" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Yes, you can do SEO yourself. There are a number of resources available online that can help you learn about SEO and how to improve your website's ranking in search engines.</p>
                        <p>Here are some of the resources that you can use to learn about SEO:</p>
                        <p>Google Search Console: Google Search Console is a free tool that allows you to track the performance of your website in Google Search. You can use Google Search Console to see how your website is ranking for different keywords, how much traffic you're getting from search engines, and other important metrics.</p>
                        <p>Moz's Blog: The Moz Blog is an excellent place to learn about SEO. From keyword research to link development, the site covers a wide range of topics. Search Engine Journal: Search Engine Journal is another great resource for learning about SEO. The blog covers a wide range of topics, from technical SEO to content marketing.</p>
                        <p>Once you have learned about SEO, you can start to implement the principles on your own website.There are several things you can do to boost the SEO of your website, including:</p>
                        <p>High-quality content creation: The basis of strong SEO is high-quality content. Make sure your material is useful, well-written, and pertinent to your intended audience.</p>
                        <p>Title tags and meta descriptions should be optimised: The text snippets that display in search engine results pages (SERPs) are your title tags and meta descriptions.</p>
                        <p>Creating backlinks: Backlinks are links to your website from other websites. They provide search engines with evidence that your website is authoritative and trustworthy. Backlinks can be obtained by guest blogging, social media participation, and submitting your website to directories.</p>
                        <p>Fixing technical SEO issues: If there are any technical issues with your website, such as slow loading times or broken links, these can hurt your SEO performance. Fix these issues as soon as possible. You may boost your website's SEO and attract more visitors by following these guidelines.</p>
                        <p>However, if you are not familiar with SEO or if you don't have the time to learn about it, you may want to consider hiring a professional SEO company.</p>
                        <p>A good SEO company will have the experience and expertise to help you improve your website's ranking in search engines and attract more traffic.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                        What is the difference between SEO and SEM?
                      </button>
                    </h2>
                    <div id="collapseNine" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>Search engine optimization (SEO) and search engine marketing (SEM) are two different but complementary strategies for improving your website's visibility in search engine results pages (SERPs).</p>
                        <p>SEO is the practise of improving your website's ranking in organic search results. This is done by improving the quality and relevance of your website's content, as well as its technical SEO.</p>
                        <p>SEM is the process of generating traffic to your website through paid advertising. This is done by creating and managing search engine ads, which appear at the top of SERPs when someone searches for specific keywords</p>
                        <p>SEO is a long-term strategy that requires patience and consistency. However, the results of SEO can be very rewarding, as they can help you attract more organic traffic to your website over time.</p>
                        <p>SEM is a short-term strategy that can help you generate traffic to your website quickly. However, the results of SEM can be expensive, and they may not be sustainable in the long term.</p>
                        <p>The best approach for you will depend on your specific goals and budget. If you are looking for a long-term strategy to improve your website's visibility in search engines, then SEO is a good option. If you are looking for a short-term way to generate traffic to your website, then SEM is a good option.</p>
                        <p>It is also possible to use both SEO and SEM together. This can help you achieve the best of both worlds, as you can attract both organic and paid traffic to your website.</p>
                        <p>I hope this helps! Let us know if you have other questions.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed mt-3" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTen" aria-expanded="false" aria-controls="collapseTen">
                        On-page and Off-page seo examples
                      </button>
                    </h2>
                    <div id="collapseTen" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                        <p>On-page SEO</p>
                        <p>Keyword research: This is the process of finding the right keywords to target for your website. You want to choose keywords that are relevant to your website's content and that have a high search volume.</p>
                        <p>Content optimization: This is the process of optimizing your website's content for search engines. This includes using the right keywords throughout your content, making sure your content is well-written and informative, and structuring your content in a way that is easy for search engines to crawl.</p>
                        <p>Meta descriptions and title tags: The text snippets that display in search engine results pages (SERPs) are your title tags and meta descriptions. Make sure that they accurately reflect the content of your page and include the relevant keywords.</p>
                        <p>Internal linking: Internal linking is the process of linking to other pages on your website from within your content. This helps search engines understand the structure of your website and helps users find their way around your website.Image optimization: Your images can also be optimized for search engines. This includes using the right keywords in your image alt text and filenames.</p>
                        <p>Off-page SEO</p>
                        <p>Backlinks: Backlinks are links to your website from other websites. They provide search engines with evidence that your website is authoritative and trustworthy. Backlinks can be obtained by guest blogging, social media participation, and submitting your website to directories.</p>
                        <p>Social media: Social media can also be used for SEO. When you share your content on social media, you are increasing the chances that it will be seen by people who are searching for the keywords that you are targeting.</p>
                        <p>Citations: Citations are mentions of your website in other online directories. They can help search engines understand the authority of your website. You can get citations by submitting your website to online directories and by being mentioned in other websites.</p>
                        <p>You may boost your website's SEO and attract more visitors by following these guidelines.</p>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
              <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                <div className="accordion" id="accordionExample1">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#smmcollapseOne" aria-expanded="true" aria-controls="smmcollapseOne">
                        What is SMM? What are the benefits of SMM?
                      </button>
                    </h2>
                    <div id="smmcollapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample1">
                      <div className="accordion-body">
                        <p>SMM stands for Social Media Marketing. It is a type of Internet marketing that uses social media platforms to promote products or services. SMM can be utilised to reach a large number of people, raise brand awareness, create leads, and increase sales.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#smmcollapseTwo" aria-expanded="false" aria-controls="smmcollapseTwo">
                        How do I create a successful SMM campaign?
                      </button>
                    </h2>
                    <div id="smmcollapseTwo" className="accordion-collapse collapse " data-bs-parent="#accordionExample1">
                      <div className="accordion-body">
                        <p>Creating a successful Social Media Marketing (SMM) campaign requires careful planning, strategic execution, and continuous monitoring. Here's a step-by-step guide to help you create an effective SMM campaign:</p>
                        <ul>
                          <li>Set clear goals.</li>
                          <li>Determine your target audience.</li>
                          <li>Create high-quality content.</li>
                          <li>Post consistently.</li>
                          <li>Use social media analytics.</li>
                          <li>Engage with your audience.</li>
                          <li>Use social media ads.</li>
                          <li>Use social media tools.</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#smmcollapseThree" aria-expanded="false" aria-controls="smmcollapseThree">
                        What are the best social media platforms for SMM?
                      </button>
                    </h2>
                    <div id="smmcollapseThree" className="accordion-collapse collapse " data-bs-parent="#accordionExample1">
                      <div className="accordion-body">
                        <p>The best social media platforms for SMM vary depending on your business and target audience. However, some of the most popular and effective social media platforms for SMM include:</p>
                        <ul>
                          <li>Facebook</li>
                          <li>Twitter</li>
                          <li>LinkedIn</li>
                        </ul>
                        <p>Instagram is a photo and video-sharing website that has over one billion active users. It's a great platform for sharing visual content and building a strong brand identity.</p>
                        <p>Pinterest is a visual discovery platform with more than 450 million active users. It's a great platform for sharing inspiring images and ideas, and for driving traffic to your website.</p>
                        <p>In addition to these popular platforms, there are a number of other social media platforms that can be effective for SMM. The best platform for your business will depend on your specific goals and target audience.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#smmcollapseFour" aria-expanded="false" aria-controls="smmcollapseFour">
                        How much does SMM cost?
                      </button>
                    </h2>
                    <div id="smmcollapseFour" className="accordion-collapse collapse " data-bs-parent="#accordionExample1">
                      <div className="accordion-body">
                        <p>The cost of SMM can vary depending on a number of factors, including:</p>

                        <p>The size of your business: Larger businesses with more complex needs will typically pay more for SMM than smaller businesses. <br />
                          The scope of your SMM campaign: A more comprehensive SMM campaign with more social media platforms and more content will typically cost more than a smaller campaign.</p>
                        <p>The level of service you need: If you need help with all aspects of SMM, such as content creation, scheduling, and analytics, you will typically pay more than if you Only need assistance with one or two aspects.</p>
                        <p>The experience of the SMM company or freelancer you hire: More experienced SMM companies and freelancers will typically charge more than less experienced ones.
                          In general, SMM can be a cost-effective way to reach a large audience and achieve marketing goals. However, it's important to set a budget before you start your SMM campaign so that you don't overspend. <br />
                          xpertise to do it yourself, hiring a social media manager or agency is a good option.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#smmcollapseFive" aria-expanded="false" aria-controls="smmcollapseFive">
                      What are the latest trends in SMM?
                      </button>
                    </h2>
                    <div id="smmcollapseFive" className="accordion-collapse collapse " data-bs-parent="#accordionExample1">
                      <div className="accordion-body">
                        <p>The latest trends in SMM are constantly evolving, but some of the most important trends to watch in 2024 include:</p>

                        <p>Short-form video: Short-form video is becoming increasingly popular on social media, with platforms like TikTok and YouTube Shorts leading the way. Brands that can create engaging and informative short-form videos will be well-positioned to reach a wider audience and connect with their target customers.</p>
                        <p>Live streaming: Live streaming is another growing trend in SMM, as it allows brands to connect with their audience in real time and build relationships. Live streaming can be used for a variety of purposes, such as product launches, behind-the-scenes tours, and customer Q&As.</p>
                        <p>Influencer marketing: Influencer marketing is still a popular trend in SMM, but it's evolving as brands look for more authentic and genuine ways to connect with their audience. In 2023, we'll see more brands working with micro-influencers, who have smaller but more engaged audiences.</p>
                        <p>Gamification: Gamification is the use of game-like elements in non-game contexts, and it's a growing trend in SMM. Gamification can be used to increase engagement, drive traffic, and collect data from users.</p>
                        <p>Artificial intelligence (AI): AI is rapidly evolving and is starting to be used in SMM in a variety of ways. For example, AI can be used to create personalized content, automate tasks, and analyze data.</p>
                        <p>These are just a few of the latest trends in SMM. By staying up-to-date on these trends, brands can ensure that they're using social media to reach their target audience and achieve their marketing goals.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#smmcollapseSix" aria-expanded="false" aria-controls="smmcollapseSix">
                      How can I use social media to boost sales?
                      </button>
                    </h2>
                    <div id="smmcollapseSix" className="accordion-collapse collapse " data-bs-parent="#accordionExample1">
                      <div className="accordion-body">
                        <p>Use social media to promote your products or services. Share photos and videos of your products, and write compelling descriptions that will make people want to buy them.</p>

                        <p>Offer discounts and promotions on social media. This is an excellent approach to attracting new clients and inspire existing customers to return for more.</p>
                        <p>Run contests and giveaways on social media. This is a fun and engaging way to promote your brand and generate excitement around your products or services.</p>
                        <p>Partner with influencers on social media. Influencers can assist you in reaching a larger audience and establishing credibility with potential consumers.</p>

                        <p>Use social media to collect customer feedback. This will help you improve your products or services and better understand your target audience.</p>
                        <p>Build ties with your customers by using social media. This will assist you in developing a loyal consumer base that will return for more.</p>
                        <p>By following these tips, you can use social media to increase sales and grow your business.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#smmcollapseSeven" aria-expanded="false" aria-controls="smmcollapseSeven">
                      How do I use social media to drive traffic to my website?
                      </button>
                    </h2>
                    <div id="smmcollapseSeven" className="accordion-collapse collapse " data-bs-parent="#accordionExample1">
                      <div className="accordion-body">
                        <p>Here are some tips on how to use social media to drive traffic to your website:</p>

                        <p>Add a call-to-action to your social media posts: In every post, make sure to include a clear call-to-action that encourages people to visit your website. This could be "Learn more at our website" or "Visit our website to shop now."</p>
                        <p>Use relevant hashtags: Hashtags are a great way to get your social media posts seen by more people. Your posts will appear in search results for relevant hashtags if you utilize them. <br />
                        Run contests and giveaways: Contests and giveaways are a great way to generate excitement around your brand and drive traffic to your website. When you run a contest or giveaway, make sure to include a link to your website in the rules and regulations.</p>
                        <p>Optimize your website for social media: Make sure your website is optimized for social media by adding social media sharing buttons to your pages. This makes it simple for others to share your material on social media.</p>

                        <p>Promote your website on social media: Don't just post links to your website on social media. Take the time to promote your website by writing about it, sharing images from it, and talking about it in your social media posts.</p>
                        <p>Use social media ads: Using social media ads to drive visitors to your website can be very effective. When you create social media ads, make sure to target your ads to your target audience. <br />
                        By following these tips, you can use social media to drive traffic to your website and grow your business.</p>
                       <h6>Here are some additional tips that are specific to driving traffic to your website through social media:</h6>
                       <ul>
                        <li>Create shareable content: The content you share on social media should be interesting and informative enough to make people want to share it with their friends and followers. This will allow you to reach a larger audience and increase traffic to your website.</li>
                        <li>Use visuals: Visual content is more likely than text-only content to be shared on social media. Make sure to include images, videos, or infographics in your social media posts to capture attention and drive traffic to your website.</li>
                        <li>Use a consistent brand voice: Your social media posts should be consistent with your website's branding. This will help people recognize your brand and remember you when they're ready to make a purchase.</li>
                        <li>Track your results: It's important to track the results of your social media marketing efforts to see what's working and what's not. This will help you adjust your strategy as needed and make sure you're getting the most out of your social media campaigns.</li>
                        <p>You may use social media to increase visitors to your website and develop your business by following these guidelines.</p>
                       </ul>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#smmcollapseEight" aria-expanded="false" aria-controls="smmcollapseEight">
                      Social media marketing advantages and disadvantages
                      </button>
                    </h2>
                    <div id="smmcollapseEight" className="accordion-collapse collapse " data-bs-parent="#accordionExample1">
                      <div className="accordion-body">
                        <p>Social media marketing is a great way to connect with your target audience, build brand awareness, and drive sales. However, there are also some disadvantages to social media marketing that you should be aware of.</p>

                       <h6>Advantages of social media marketing:</h6>
                       <ul>
                        <li>Reach a wider audience: Social media platforms have a large and engaged audience. By using social media marketing, you can reach a wider audience than you could through traditional marketing channels.</li>
                        <li>Build brand awareness: Social media is a great way to build brand awareness. When you share interesting and informative content on social media, you can raise awareness of your brand and products or services.</li>
                        <li>Drive sales: Social media can be a great way to drive sales. By promoting your products or services on social media, you can attract new customers and encourage existing customers to make repeat purchases.</li>
                        <li>Engage with customers: Social media is an excellent platform for engaging with customers. When you respond to comments and questions, you can build relationships with your customers and create a sense of community.</li>
                        <li>Collect customer feedback: Social media is a great way to collect customer feedback. When you ask for feedback, you can learn more about what your customers want and need. This data can assist you in improving your products or services.</li>
                        <li>Measure results: Social media analytics tools can help you measure the results of your social media marketing efforts. This information can help you see what's working and what's not, and adjust your strategy as needed.</li>
                        
                        <h6>Disadvantages of social media marketing:</h6>
                        <li>Time-consuming: Social media marketing can be time-consuming. You need to create and share content, engage with your audience, and track your results.</li>
                        <li>Requires expertise: Social media marketing requires some expertise. You need to know how to create engaging content, use social media analytics, and target your audience.</li>
                        <li>Subject to change: Social media platforms are constantly changing their algorithms and features. This can make it difficult to keep up and ensure that your content is seen by your target audience.</li>
                        <li>Risk of negative feedback: Social media is a public forum, so you are open to negative feedback. If you don't handle negative feedback well, it can damage your brand reputation.</li>
                        <li>Security risks: Social media sites might be exposed to security threats. If your social media accounts are hacked, it could damage your brand reputation and lead to data breaches.</li>
                       </ul>
                       <p>Overall, social media marketing is a powerful tool that can help businesses reach a wider audience, build brand awareness, and drive sales. However, it's important to be aware of the disadvantages of social media marketing and take steps to mitigate them.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#smmcollapseNine" aria-expanded="false" aria-controls="smmcollapseNine">
                      What are the best practices in SMM?
                      </button>
                    </h2>
                    <div id="smmcollapseNine" className="accordion-collapse collapse " data-bs-parent="#accordionExample1">
                      <div className="accordion-body">
                        <p>Social Media Marketing (SMM) involves a variety of strategies and techniques to effectively promote brands, engage with audiences, and drive desired outcomes on social media platforms. Here are some key best practices to consider:</p>

                       <h6>Here are some additional best practices that you may want to consider:</h6>
                       <ul>
                        <li>Begin with a strategy that is supported by an SMM Plan.</li>
                       <li>In all of your social media initiatives, be honest and transparent.</li>
                       <li>Before you begin, identify your target market and learn about its media habits.</li>
                       <li>Encourage audience participation and comments.</li>
                       <li>Keep in mind that what you know today may not be applicable tomorrow.</li>
                       <li>Promote your social media accounts.</li>
                       <li>Run contests and giveaways.</li>
                       <li>Engage with your audience.</li>
                       <li>Create high-quality content.</li>
                       <li>Use Hashtags Wisely</li>
                       <li>Monitor Analytics</li>
                       <li>Consistent Branding</li>
                       </ul>
                       <p>By following these best practices, you can create a successful social media marketing strategy that helps you achieve your business goals.</p>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#smmcollapseTen" aria-expanded="false" aria-controls="smmcollapseTen">
                      Is Pinterest Worth Considering for E-Commerce Businesses?
                      </button>
                    </h2>
                    <div id="smmcollapseTen" className="accordion-collapse collapse " data-bs-parent="#accordionExample1">
                      <div className="accordion-body">
                        <p>Absolutely! Pinterest is a visual discovery platform, perfect for e-commerce brands. Create visually appealing pins that showcase your products and link directly to your website. Utilize Rich Pins to provide additional product details and engage users seeking inspiration.</p>

                       <ul>
                      <li>Optimize Your Profile</li>
                      <li>Create High-Quality Pins</li>
                      <li>Keyword-Rich Descriptions</li>
                      <li>Organize Boards Strategically</li>
                      <li>Utilize Rich Pins</li>
                      <li>Engage with Users</li>
                      <li>Run Promoted Pins Campaigns</li>
                      <li>Showcase Customer Reviews and Testimonials</li>
                      <li>Seasonal and Trend-Centric Pins</li>
                      <li>Collaborate and Partner with Influencers</li>
                      <li>Consistent Pinning Schedule</li>
                      <li>Monitor Analytics and Iterate</li>
                       </ul>
                       <p>Remember, success on Pinterest, like any other platform, requires ongoing effort, adaptation, and a deep understanding of your target audience.</p>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div className="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
              <div className="accordion " id="accordionExample2">
                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#dmcollapseOne" aria-expanded="true" aria-controls="dmcollapseOne">
                      What's the Role of Dark Social in Digital Marketing?
                      </button>
                    </h2>
                    <div id="dmcollapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <p>Dark social refers to private sharing of content through platforms like messaging apps and email, making it hard to track. Learn how to leverage dark social for more accurate attribution and to tap into hidden engagement.</p>
                        <ul>
                          <li>Here is a list of dark social examples to keep in mind:</li>
                          <li>Social Networks (LinkedIn, Twitter, Instagram, etc.)</li>
                          <li>Content Platforms (Youtube, Apple Podcasts, etc.)</li>
                          <li>Groups & Communities (Slack Communities, Facebook Groups, etc.)</li>
                          <li>Employee Communications (Zoom, Slack Channels, etc.)</li>
                          <li>Word of Mouth (Texts, Calls, in-person convos, DMs, etc.)</li>
                          <li>Events & Meetups (Virtual events, In-Person Meetups, etc.)</li>
                          <li>Messaging Apps (What’s App, Facebook Messenger, etc.)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dmcollapseTwo" aria-expanded="false" aria-controls="dmcollapseTwo">
                      Why is Digital Marketing Important?
                      </button>
                    </h2>
                    <div id="dmcollapseTwo" className="accordion-collapse collapse " data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <p>Digital marketing allows businesses to reach a larger and targeted audience, track performance in real-time, build brand awareness, and engage with customers on a more personalized level.</p>
                      </div>
                    </div>
                  </div>            

                  <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dmcollapseThree" aria-expanded="false" aria-controls="dmcollapseThree">
                      Roll of Social Media Optimization(SMO) in Digital Marketing!
                      </button>
                    </h2>
                    <div id="dmcollapseThree" className="accordion-collapse collapse " data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <p>Social media optimisation (SMO) is a key component of our digital marketing strategy in the current digitized world. Around the world, a large number of people use social media. As a result, you can utilize SMO to promote the brand of the targeted demographic and attain your goal. In the world of digital marketing, SMO is quite important. The key benefits are an increase in visibility and SERP ranking. Each company's success in digital marketing depends on how many likes and shares its website content receives. One of the best ways to analyze your social media optimisation strategy in digital marketing is to look at platforms like Facebook, Instagram, and Twitter.</p>
                      </div>
                    </div>
                  </div>    

                    <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dmcollapseFour" aria-expanded="false" aria-controls="dmcollapseFour">
                      What is 7C in Digital Marketing? The key of successful business in Online World!
                      </button>
                    </h2>
                    <div id="dmcollapseFour" className="accordion-collapse collapse " data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <p>A framework known as the "7 C" in digital marketing aids marketers and organisations in creating efficient digital marketing plans. This framework incorporates several facets of the digital marketing procedure to guarantee a comprehensive and client-centered approach.</p>
                      </div>
                    </div>
                    </div>      

                    <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dmcollapseFive" aria-expanded="false" aria-controls="dmcollapseFive">
                      Can you provide of all IT Managenment services?
                      </button>
                    </h2>
                    <div id="dmcollapseFive" className="accordion-collapse collapse " data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <p>Our infrastructure management approach is holistic, addressing capacity monitoring, data storage, network utilisation, asset lifecycles, software patching, wired and wireless networking and more. And with increasing demand for more sustainability in their setups.</p>
                      </div>
                    </div>
                    </div> 

                    <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dmcollapseSix" aria-expanded="false" aria-controls="dmcollapseSix">
                      What is difference between Digital Marketing and Email Marketing?
                      </button>
                    </h2>
                    <div id="dmcollapseSix" className="accordion-collapse collapse " data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <p>Both digital marketing and email marketing are crucial marketing tactics. However, their strengths and limitations are distinct. Sending emails to subscriber lists with the intention of promoting a good or service is known as email marketing. All marketing initiatives that take place online, such as on Google, Facebook, Instagram, LinkedIn, Twitter, Amazon, and Flipkart, are collectively referred to as "digital marketing." Building relationships with customers and promoting sales can both be done extremely effectively with email marketing, which is a one-to-one communication medium. Digital marketing techniques include pay-per-click advertising, social media marketing, search engine optimization, and many others.</p>
                      </div>
                    </div>
                    </div> 

                    <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dmcollapseSeven" aria-expanded="false" aria-controls="dmcollapseSeven">
                      What is search engine optimization(SEO) in digital marketing and how to improve digital marketing strategy with SEO?
                      </button>
                    </h2>
                    <div id="dmcollapseSeven" className="accordion-collapse collapse " data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <p>Search engine optimization in digital marketing is a strategy that focuses on your website presence in search engine result pages.SEO has various techniques to improve website visibility and ranking.SEO is a critical component of your digital marketing strategy. SEO helps to target your audience, find your business and increase revenue through digital marketing.</p>
                      </div>
                    </div>
                    </div> 

                    <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dmcollapseEight" aria-expanded="false" aria-controls="dmcollapseEight">
                      How Do I Choose the Right Social Media Platforms for My Business?
                      </button>
                    </h2>
                    <div id="dmcollapseEight" className="accordion-collapse collapse " data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <p>Consider your target audience, goals, and content type. Platforms like Facebook, Instagram, LinkedIn, and Twitter cater to different demographics and contents</p>
                      </div>
                    </div>
                    </div> 

                    <div className="accordion-item">
                    <h2 className="accordion-header">
                      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#dmcollapseNine" aria-expanded="false" aria-controls="dmcollapseNine">
                      What's Email Marketing, and When Should I Use It?
                      </button>
                    </h2>
                    <div id="dmcollapseNine" className="accordion-collapse collapse " data-bs-parent="#accordionExample2">
                      <div className="accordion-body">
                        <p>Email marketing involves sending targeted emails to a list of subscribers. It's effective for nurturing leads, promoting offers, sharing updates, and maintaining customer relationships.</p>
                      </div>
                    </div>
                    </div> 

                   

                </div>
              </div>

            </div>







            <div className='faq_contact'>
              <h3 className="mb-3">Ask Your Questions</h3>

              <form onSubmit={handleSubmit}>
                <div className="row ">
                  <div className="col-lg-6 mb-4">
                    <div className="form-details">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="Your Name"
                        className="form-control"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>


                  <div className="col-lg-6 mb-4">
                    <div className="form-details">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email address"
                        className="form-control"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 mb-4">
                    <div className="form-details">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Your phone number"
                        className="form-control"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-6 mb-4">
                    <div className="form-details">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Your Subject"
                        className="form-control"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 mb-5">
                    <div className="form-details">
                      <textarea
                        name="message"
                        cols="30"
                        rows="5"
                        placeholder="Write your message"
                        className="form-control"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="col-lg-12 col-md-12 mb-3 text-centre">
                    <button
                      className="btn-purple1"
                      type="submit"
                      disabled={loading}
                    >
                      {loading ? "Sending..." : "SEND MESSAGE"}
                    </button>

                    {success && (
                      <div className="col-lg-12 py-3 ">
                        <h6 className="text-success">
                          Message sent successfully!
                        </h6>
                      </div>
                    )}

                    {error && (
                      <div className="col-lg-12 py-3 ">
                        <h6 className="text-danger">{error}</h6>
                      </div>
                    )}
                  </div>
                </div>
              </form>

            </div>




          </div>

        </div>

        <Footer />

      </div>

    </>
  )
}

export default Faq
