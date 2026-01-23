import React from "react";
import { useNavigate } from "react-router-dom";

const SeoServices = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SEO Services
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Dominate search rankings and grow qualified traffic with our
            <span className="text-white font-medium">
              {" "}data-driven SEO strategies
            </span>.
            We combine AI-powered insights with proven SEO frameworks to help
            your business scale sustainably.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {[
            "Data-driven & ROI-focused SEO",
            "AI-powered keyword & content optimization",
            "Transparent reporting & measurable growth",
            "Scalable SEO for all business sizes",
            "White-hat techniques (Google-safe)",
            "Long-term ranking & traffic growth",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-neutral-800 rounded-2xl p-6"
            >
              <p className="text-gray-300">{item}</p>
            </div>
          ))}
        </div>

        {/* Services */}
        <div className="space-y-14">
          {services.map((service, index) => (
            <div key={index} className="bg-neutral-900 rounded-2xl p-8">
              <h2 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h2>
              <p className="text-gray-400 mb-4">{service.description}</p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Process */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Our SEO Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="bg-neutral-900 border border-neutral-800 rounded-xl p-6 text-center"
              >
                <p className="text-white font-medium mb-2">
                  {step.title}
                </p>
                <p className="text-gray-400 text-sm">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Rank Higher?
          </h2>
          <p className="text-gray-400 mb-8">
            Let’s build an SEO strategy that drives traffic, leads, and revenue.
          </p>

          {/* CONTACT PAGE NAVIGATION */}
          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Get Free SEO Consultation
          </button>
        </div>

        {/* BACK NAVIGATION */}
        <div className="mt-10 text-center">
          <button
            onClick={() => navigate("/services")}
            className="text-gray-400 hover:text-white transition"
          >
            ← Back to Services
          </button>
        </div>

      </div>
    </section>
  );
};

/* ======================
   DATA
====================== */

const services = [
  {
    title: "AI SEO",
    description:
      "Use artificial intelligence to uncover ranking opportunities and optimize content faster.",
    points: [
      "AI keyword clustering",
      "Search intent analysis",
      "Competitor & content gap analysis",
      "Predictive SEO insights",
    ],
  },
  {
    title: "Local SEO",
    description:
      "Get found by customers searching for services near your location.",
    points: [
      "Google Business Profile optimization",
      "Local citations & NAP consistency",
      "Local keyword targeting",
      "Review & reputation management",
    ],
  },
  {
    title: "On-Page SEO",
    description:
      "Optimize individual pages to improve rankings and user experience.",
    points: [
      "Meta titles & descriptions",
      "Content & heading optimization",
      "Internal linking strategy",
      "Image & schema optimization",
    ],
  },
  {
    title: "Link Building (Off-Page SEO)",
    description:
      "Build domain authority with high-quality and relevant backlinks.",
    points: [
      "White-hat link acquisition",
      "Guest posting & outreach",
      "Brand mentions",
      "Toxic link removal",
    ],
  },
  {
    title: "Ecommerce SEO",
    description:
      "Increase visibility and sales for your online store.",
    points: [
      "Product & category optimization",
      "SEO-friendly architecture",
      "Product schema & reviews",
      "Conversion-focused keywords",
    ],
  },
  {
    title: "Technical SEO",
    description:
      "Ensure your site is fast, crawlable, and technically sound.",
    points: [
      "Core Web Vitals optimization",
      "Mobile & speed optimization",
      "Indexing & crawl fixes",
      "Structured data setup",
    ],
  },
  {
    title: "SEO Audits",
    description:
      "Uncover issues and opportunities with a comprehensive SEO audit.",
    points: [
      "Technical & on-page audit",
      "Competitor benchmarking",
      "Actionable SEO roadmap",
      "Priority-based recommendations",
    ],
  },
  {
    title: "SEO Outsource",
    description:
      "Scale your growth with our dedicated SEO outsourcing solutions.",
    points: [
      "Dedicated SEO experts",
      "Monthly reporting",
      "Flexible engagement models",
      "White-label SEO services",
    ],
  },
];

const processSteps = [
  { title: "Discovery", desc: "Business goals & competitor analysis" },
  { title: "Strategy", desc: "Keyword mapping & roadmap" },
  { title: "Execution", desc: "On-page, technical & off-page SEO" },
  { title: "Optimization", desc: "Continuous improvements" },
  { title: "Growth", desc: "Scaling rankings & traffic" },
];

export default SeoServices;
