import React from "react";

const faqData = [
  {
    question: "What services does Whitehatseo offer?",
    answer:
      "Whitehatseo provides a full range of digital marketing services, including SEO, PPC, content marketing, technical SEO, and link building to improve online visibility and drive targeted traffic.",
  },
  {
    question: "How does Whitehatseo improve website rankings?",
    answer:
      "Whitehatseo uses ethical, data-driven strategies such as keyword research, on-page optimization, technical SEO, and high-quality backlinks to boost rankings and organic traffic.",
  },
  {
    question: "Is Whitehatseo suitable for small businesses?",
    answer:
      "Yes, Whitehatseo works with startups, small businesses, and enterprises by offering flexible and scalable SEO solutions tailored to different budgets and growth goals.",
  },
  {
    question: "How long does it take to see SEO results?",
    answer:
      "SEO is a long-term strategy, and most businesses start seeing noticeable improvements within 3–6 months, depending on competition and industry.",
  },
  {
    question: "Does Whitehatseo follow ethical SEO practices?",
    answer:
      "Yes, Whitehatseo strictly follows white-hat SEO techniques that comply with search engine guidelines, ensuring sustainable and long-term results.",
  },
  {
    question: "How can I get started with Whitehatseo?",
    answer:
      "You can get started by requesting a free SEO audit or consultation through their website to understand your current performance and growth opportunities.",
  },
  {
    question: "How much do SEO services cost?",
    answer:
      "SEO service costs depend on factors such as your business goals, industry competition, website size, and the scope of work required. At Whitehatseo, we offer flexible and customized SEO plans tailored to your needs—ensuring you receive maximum value, transparent service, and measurable results without unnecessary expenses.",
  },
];

const HomeFAQ = () => {
  return (
    <section className="home-faq pb-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2>Frequently Asked Questions</h2>
          <p className="text-muted">
            Find answers to common questions about our SEO services.
          </p>
        </div>

        <div className="accordion" id="homeFaqAccordion">
          {faqData.map((faq, index) => (
            <div className="accordion-item mb-3 border-0 shadow-sm" key={index}>
              <h2 className="accordion-header" id={`heading${index}`}>
                <button
                  className={`accordion-button ${index !== 0 ? "collapsed" : ""}`}
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target={`#collapse${index}`}
                  aria-expanded={index === 0 ? "true" : "false"}
                  aria-controls={`collapse${index}`}
                >
                  <i className="fa-solid fa-circle-question me-2"></i>
                  {faq.question}
                </button>
              </h2>

              <div
                id={`collapse${index}`}
                className={`accordion-collapse collapse ${index === 0 ? "show" : ""}`}
                aria-labelledby={`heading${index}`}
                data-bs-parent="#homeFaqAccordion"
              >
                <div className="accordion-body">
                  <p className="mb-0">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeFAQ;