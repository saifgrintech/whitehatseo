import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../store/auth';

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useAuth();
  const [activeCollapse, setActiveCollapse] = useState(null);

  useEffect(() => {
    const updateSidebarClass = () => {
      setIsSidebarOpen(window.innerWidth <= 992);
    };

    // Run on window resize
    window.addEventListener('resize', updateSidebarClass);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', updateSidebarClass);
  }, [setIsSidebarOpen]);

  const handleCollapseToggle = (collapseId) => {
    setActiveCollapse((prev) => (prev === collapseId ? null : collapseId));
  };

  return (
    <>
      <div className={`left_sidebar p-3 ${isSidebarOpen ? 'open' : ''}`}>
        <div className="d-flex justify-content-between">
          <Link to='/dashboard' style={{ textDecoration: "none", color: "white" }}>
            <h4 className='mb-3'>WhiteHatSeo</h4>
          </Link>
        </div>

        <div className='mt-4'>
          <span className='small text-uppercase text-gray-500'>pages</span>
          <ul className='p-0 side_list mt-2'>
            <hr className='m-0' />
            <li>
              <p className="d-flex justify-content-between m-0 py-2">
                <Link to='/dashboard' className='list_item p-0'><i className="fa-solid fa-gauge me-2"></i>Dashboard</Link>
              </p>
            </li>
            <hr className='m-0' />

            {/* About Us */}
            <li>
              <p
                className="d-flex justify-content-between m-0 py-2"
                onClick={() => handleCollapseToggle('collapseAbout')}
              >
                <span><i className="fa-solid fa-address-card me-2"></i> About Us</span>
                <span><i className={`fa-solid fa-chevron-${activeCollapse === 'collapseAbout' ? 'down' : 'right'}`}></i></span>
              </p>
              <div className={`collapse ${activeCollapse === 'collapseAbout' ? 'show' : ''}`} id="collapseAbout">
                <div className="card">
                  <Link to="/about-list">About List</Link>
                </div>
              </div>
            </li>
            <hr className='m-0' />

            {/* Blogs */}
            <li>
              <p
                className="d-flex justify-content-between m-0 py-2"
                onClick={() => handleCollapseToggle('collapseBlogs')}
              >
                <span><i className="fa-solid fa-blog me-2"></i>Blogs</span>
                <span><i className={`fa-solid fa-chevron-${activeCollapse === 'collapseBlogs' ? 'down' : 'right'}`}></i></span>
              </p>
              <div className={`collapse ${activeCollapse === 'collapseBlogs' ? 'show' : ''}`} id="collapseBlogs">
                <div className="card">
                  <Link to="/blog-list">Blog List</Link>
                </div>
              </div>
            </li>
            <hr className='m-0' />

            {/* Single Blogs */}
            <li>
              <p
                className="d-flex justify-content-between m-0 py-2"
                onClick={() => handleCollapseToggle('collapseSingleBlogs')}
              >
                <span><i className="fa-solid fa-file-pen me-2"></i>Single Blogs</span>
                <span><i className={`fa-solid fa-chevron-${activeCollapse === 'collapseSingleBlogs' ? 'down' : 'right'}`}></i></span>
              </p>
              <div className={`collapse ${activeCollapse === 'collapseSingleBlogs' ? 'show' : ''}`} id="collapseSingleBlogs">
                <div className="card">
                  <Link to="/singleblog-list">Single Blog List</Link>
                </div>
              </div>
            </li>
            <hr className='m-0' />

            {/* Team */}
            <li>
              <p
                className="d-flex justify-content-between m-0 py-2"
                onClick={() => handleCollapseToggle('collapseTeam')}
              >
                <span><i className="fa-solid fa-users me-2"></i>Team</span>
                <span><i className={`fa-solid fa-chevron-${activeCollapse === 'collapseTeam' ? 'down' : 'right'}`}></i></span>
              </p>
              <div className={`collapse ${activeCollapse === 'collapseTeam' ? 'show' : ''}`} id="collapseTeam">
                <div className="card">
                  <Link to="/team-list">Team List</Link>
                </div>
              </div>
            </li>
            <hr className='m-0' />

            {/* Our Works */}
            <li>
              <p
                className="d-flex justify-content-between m-0 py-2"
                onClick={() => handleCollapseToggle('collapseWorks')}
              >
                <span><i className="fa-brands fa-creative-commons-nd me-2"></i>Our Works</span>
                <span><i className={`fa-solid fa-chevron-${activeCollapse === 'collapseWorks' ? 'down' : 'right'}`}></i></span>
              </p>
              <div className={`collapse ${activeCollapse === 'collapseWorks' ? 'show' : ''}`} id="collapseWorks">
                <div className="card">
                  <Link to="/work-list">Work List</Link>
                </div>
              </div>
            </li>
            <hr className='m-0' />

            {/* Services */}
            <li>
              <p
                className="d-flex justify-content-between m-0 py-2"
                onClick={() => handleCollapseToggle('collapseServices')}
              >
                <span><i className="fa-solid fa-cogs me-2"></i>Services</span>
                <span><i className={`fa-solid fa-chevron-${activeCollapse === 'collapseServices' ? 'down' : 'right'}`}></i></span>
              </p>
              <div className={`collapse ${activeCollapse === 'collapseServices' ? 'show' : ''}`} id="collapseServices">
                <div className="card">
                  <Link to="/service-list">Service List</Link>
                </div>
              </div>
            </li>
            <hr className='m-0' />

            {/* Single Services */}
            <li>
              <p
                className="d-flex justify-content-between m-0 py-2"
                onClick={() => handleCollapseToggle('collapseSingleServices')}
              >
                <span><i className="fa-solid fa-tools me-2"></i>Single Services</span>
                <span><i className={`fa-solid fa-chevron-${activeCollapse === 'collapseSingleServices' ? 'down' : 'right'}`}></i></span>
              </p>
              <div className={`collapse ${activeCollapse === 'collapseSingleServices' ? 'show' : ''}`} id="collapseSingleServices">
                <div className="card">
                  <Link to="/singleService-list">Single Service List</Link>
                </div>
              </div>
            </li>
            <hr className='m-0' />

            {/* Products */}
            <li>
              <p
                className="d-flex justify-content-between m-0 py-2"
                onClick={() => handleCollapseToggle('collapseProducts')}
              >
                <span><i className="fa-solid fa-box-open me-2"></i>Products</span>
                <span><i className={`fa-solid fa-chevron-${activeCollapse === 'collapseProducts' ? 'down' : 'right'}`}></i></span>
              </p>
              <div className={`collapse ${activeCollapse === 'collapseProducts' ? 'show' : ''}`} id="collapseProducts">
                <div className="card">
                  <Link to="/product-list">Product List</Link>
                </div>
              </div>
            </li>
            <hr className='m-0' />

            {/* Testimonials */}
            <li>
              <p
                className="d-flex justify-content-between m-0 py-2"
                onClick={() => handleCollapseToggle('collapseTestimonials')}
              >
                <span><i className="fa-solid fa-comment-dots me-2"></i>Testimonials</span>
                <span><i className={`fa-solid fa-chevron-${activeCollapse === 'collapseTestimonials' ? 'down' : 'right'}`}></i></span>
              </p>
              <div className={`collapse ${activeCollapse === 'collapseTestimonials' ? 'show' : ''}`} id="collapseTestimonials">
                <div className="card">
                  <Link to="/testimonial-list">Testimonial List</Link>
                </div>
              </div>
            </li>
            <hr className='m-0' />

            {/* Our Contacts */}
            <li>
              <p className="d-flex justify-content-between m-0 py-2">
                <Link to='/contact-list' className='list_item p-0'><i className="fa-solid fa-phone me-2"></i>Our Contacts</Link>
              </p>
            </li>
            <hr className='m-0' />

            {/* Our Faqs */}
            <li>
              <p className="d-flex justify-content-between m-0 py-2">
                <Link to='/faq-list' className='list_item p-0'><i className="fa-solid fa-circle-question me-2"></i>Our Faqs</Link>
              </p>
            </li>
            <hr className='m-0' />

            {/* Our Plans */}
            <li>
              <p className="d-flex justify-content-between m-0 py-2">
                <Link to='/plan-list' className='list_item p-0'><i className="fa-solid fa-dollar-sign me-2"></i>Our Plans</Link>
              </p>
            </li>
            <hr className='m-0' />

            {/* All Users */}
            <li>
              <p className="d-flex justify-content-between m-0 py-2">
                <Link to='/all-users' className='list_item p-0'><i className="fa-solid fa-users me-2"></i>All Users</Link>
              </p>
            </li>
            <hr className='m-0' />
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
