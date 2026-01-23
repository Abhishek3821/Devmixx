import React from "react";
import { useNavigate } from "react-router-dom";

const BrandingServices = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Branding Services
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Create a lasting identity that resonates with customers and builds
            <span className="text-white font-medium">
              {" "}trust, recognition, and loyalty
            </span>.
            We design brands that communicate value and stand out in the market.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {[
            "Strategic brand positioning",
            "Consistent visual identity",
            "User-centered design approach",
            "Modern & scalable branding",
            "Creative storytelling",
            "Brand assets ready for all platforms",
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

        {/* Branding Process */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Our Branding Process
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
            Ready to Build a Strong Brand?
          </h2>
          <p className="text-gray-400 mb-8">
            Let’s craft a brand identity that connects and converts.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Get Free Branding Consultation
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
    title: "Logo Design",
    description:
      "Create a memorable logo that reflects your brand’s values and personality.",
    points: [
      "Custom logo concepts",
      "Brand color & typography",
      "Scalable & versatile formats",
      "Brand usage guidelines",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Design intuitive digital experiences that users love.",
    points: [
      "User research & wireframing",
      "Modern interface design",
      "Conversion-focused layouts",
      "Usability & accessibility",
    ],
  },
  {
    title: "Graphic Design",
    description:
      "Visually compelling designs for digital and print media.",
    points: [
      "Marketing creatives",
      "Social media graphics",
      "Business collaterals",
      "Consistent brand visuals",
    ],
  },
  {
    title: "Brand Videos",
    description:
      "Tell your brand story through engaging video content.",
    points: [
      "Brand intro & explainer videos",
      "Motion graphics",
      "Social media video content",
      "Storytelling-driven visuals",
    ],
  },
];

const processSteps = [
  { title: "Research", desc: "Understanding brand & audience" },
  { title: "Strategy", desc: "Brand positioning & messaging" },
  { title: "Design", desc: "Visual identity creation" },
  { title: "Refinement", desc: "Feedback & iterations" },
  { title: "Launch", desc: "Brand rollout & support" },
];

export default BrandingServices;
