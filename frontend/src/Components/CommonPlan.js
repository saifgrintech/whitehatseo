import { Link } from "react-router-dom"

const CommonPlan = () => {
    return (
        <div className="row g-4 mt-4">

            {/* BASIC DIGITAL MARKETING */}
            <div className="col-lg-4 col-md-6">
              <div className="seo-plan-card h-100">
                <h3 className="plan-title">Basic Package</h3>
                <p className="plan-price">$150 /month</p>

                <ul className="plan-features">
                  <li>8–12 posts per month</li>
                  <li>2–3 platforms (Meta, LinkedIn)</li>
                  <li>Basic content creation</li>
                  <li>Post scheduling & publishing</li>
                  <li>Limited community engagement</li>
                  <li>Monthly performance reports</li>
                  <li>Organic focus with light ad support</li>
                </ul>

                <Link to="/contact" className="plan-btn">
                  Let's connect
                </Link>
              </div>
            </div>

            {/* STANDARD DIGITAL MARKETING */}
            <div className="col-lg-4 col-md-6">
              <div className="seo-plan-card highlight-plan h-100">
                <div className="popular-plan">Most Popular</div>
                <h3 className="plan-title">Standard Package</h3>
                <p className="plan-price">$180 – $220 /month</p>

                <ul className="plan-features">
                  <li>15–25 posts per month</li>
                  <li>3–4 platforms (Meta, LinkedIn, TikTok)</li>
                  <li>Custom graphics & video content</li>
                  <li>Paid ads management</li>
                  <li>Audience targeting & A/B testing</li>
                  <li>Engagement & growth strategy</li>
                  <li>Bi-weekly performance reports</li>
                </ul>

                <Link to="/contact" className="plan-btn">
                  Let's connect
                </Link>
              </div>
            </div>

            {/* PREMIUM DIGITAL MARKETING */}
            <div className="col-lg-4 col-md-12">
              <div className="seo-plan-card h-100">
                <h3 className="plan-title">Premium Package</h3>
                <p className="plan-price">$250 – $300 /month</p>

                <ul className="plan-features">
                  <li>25+ posts/month (all major platforms Meta, Linkedin, Tiktok etc. )</li>
                  <li>Advanced content (Reels, Stories, Videos)</li>
                  <li>Full paid ad campaigns & retargeting</li>
                  <li>Influencer outreach (optional)</li>
                  <li>Dedicated account manager</li>
                  <li>Detailed analytics & insights</li>
                </ul>

                <Link to="/contact" className="plan-btn">
                  Let's connect
                </Link>
              </div>
            </div>

          </div>
    )
}

export default CommonPlan