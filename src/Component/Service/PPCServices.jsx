import React from "react";
import { useNavigate } from "react-router-dom";

const PPCServices = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            PPC Services
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Maximize ROI with
            <span className="text-white font-medium">
              {" "}targeted advertising campaigns
            </span>.
            We manage data-driven paid advertising that delivers measurable
            growth and qualified leads.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {[
            "ROI-focused ad strategies",
            "Advanced audience targeting",
            "Continuous optimization & testing",
            "Transparent performance reporting",
            "Scalable ad spend management",
            "Multi-platform PPC expertise",
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

        {/* PPC Process */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Our PPC Process
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
            Ready to Scale Your Ads?
          </h2>
          <p className="text-gray-400 mb-8">
            Let’s launch high-performing ad campaigns that convert.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Get Free PPC Consultation
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
    title: "Google Ads",
    description:
      "Capture high-intent traffic through search, display, and shopping ads.",
    points: [
      "Keyword research & bidding",
      "Search & display campaigns",
      "Shopping ads optimization",
      "Conversion tracking & reporting",
    ],
  },
  {
    title: "Meta Ads (Facebook & Instagram)",
    description:
      "Reach targeted audiences with high-converting social ads.",
    points: [
      "Audience research & targeting",
      "Creative ad strategy",
      "Lead generation campaigns",
      "A/B testing & optimization",
    ],
  },
  {
    title: "Instagram Ads",
    description:
      "Visually engaging ads that drive awareness and conversions.",
    points: [
      "Story & reel ads",
      "Creative optimization",
      "Engagement-focused campaigns",
      "Performance tracking",
    ],
  },
  {
    title: "LinkedIn Ads",
    description:
      "Generate high-quality B2B leads and brand awareness.",
    points: [
      "B2B audience targeting",
      "Sponsored content & InMail",
      "Lead gen forms",
      "Campaign optimization",
    ],
  },
  {
    title: "YouTube Ads",
    description:
      "Increase reach and conversions through video advertising.",
    points: [
      "Video ad strategy",
      "Audience targeting",
      "YouTube SEO alignment",
      "View & conversion optimization",
    ],
  },
];

const processSteps = [
  { title: "Research", desc: "Audience & competitor analysis" },
  { title: "Planning", desc: "Campaign structure & goals" },
  { title: "Launch", desc: "Ad setup & deployment" },
  { title: "Optimization", desc: "Continuous testing & scaling" },
  { title: "Reporting", desc: "Performance insights & ROI tracking" },
];

export default PPCServices;
