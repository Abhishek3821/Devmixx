import React from "react";
import { useNavigate } from "react-router-dom";

const ContentMarketing = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Content Marketing Services
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Content that drives
            <span className="text-white font-medium">
              {" "}traffic, engagement, and conversions
            </span>.
            We craft strategic content that attracts the right audience and
            turns visitors into customers.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {[
            "SEO-driven content strategy",
            "Audience-focused storytelling",
            "High-quality & original content",
            "Conversion-oriented copy",
            "Consistent brand voice",
            "Measurable content performance",
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
            <div
              key={index}
              className="bg-neutral-900 rounded-2xl p-8"
            >
              <h2 className="text-2xl font-semibold text-white mb-3">
                {service.title}
              </h2>
              <p className="text-gray-400 mb-4">
                {service.description}
              </p>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                {service.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Content Process */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Our Content Marketing Process
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
            Ready to Scale with Content?
          </h2>
          <p className="text-gray-400 mb-8">
            Let’s create content that attracts, engages, and converts.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Get Free Content Consultation
          </button>
        </div>

        {/* Back Button */}
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
    title: "Content Writing",
    description:
      "High-quality content that improves SEO and builds authority.",
    points: [
      "Blog & article writing",
      "SEO-optimized content",
      "Website content",
      "Long-form & pillar pages",
    ],
  },
  {
    title: "Copywriting",
    description:
      "Persuasive copy that drives action and conversions.",
    points: [
      "Landing page copy",
      "Sales & ad copy",
      "Product descriptions",
      "Brand messaging",
    ],
  },
  {
    title: "Email Marketing",
    description:
      "Email campaigns that nurture leads and boost conversions.",
    points: [
      "Email campaign strategy",
      "Newsletter creation",
      "Automation & drip campaigns",
      "Performance tracking",
    ],
  },
];

const processSteps = [
  { title: "Research", desc: "Audience & keyword analysis" },
  { title: "Strategy", desc: "Content planning & calendar" },
  { title: "Creation", desc: "Writing & optimization" },
  { title: "Distribution", desc: "Publishing & promotion" },
  { title: "Optimization", desc: "Tracking & improvement" },
];

export default ContentMarketing;
