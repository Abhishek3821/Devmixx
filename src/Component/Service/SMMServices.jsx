import React from "react";
import { useNavigate } from "react-router-dom";

const SMMServices = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            SMM Services
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Engage your audience across all major social platforms and
            build a strong
            <span className="text-white font-medium">
              {" "}brand presence
            </span>.
            We create data-driven social media strategies that increase
            reach, engagement, and conversions.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {[
            "Platform-specific growth strategies",
            "Content-driven audience engagement",
            "Consistent brand voice & visuals",
            "Data-backed performance tracking",
            "Organic & paid growth support",
            "Scalable social media management",
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

        {/* SMM Process */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Our Social Media Process
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
            Ready to Grow on Social Media?
          </h2>
          <p className="text-gray-400 mb-8">
            Let’s build a powerful social media presence for your brand.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Get Free SMM Consultation
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
    title: "Facebook Marketing",
    description:
      "Build brand awareness and generate leads through strategic Facebook campaigns.",
    points: [
      "Content planning & posting",
      "Community engagement",
      "Page optimization",
      "Analytics & reporting",
    ],
  },
  {
    title: "Instagram Marketing",
    description:
      "Grow followers and engagement with visually compelling content.",
    points: [
      "Reels & story strategy",
      "Hashtag & reach optimization",
      "Influencer collaboration support",
      "Performance tracking",
    ],
  },
  {
    title: "YouTube Marketing",
    description:
      "Increase visibility and subscribers with video-focused strategies.",
    points: [
      "Channel optimization",
      "Video SEO",
      "Content planning",
      "Audience growth strategy",
    ],
  },
  {
    title: "LinkedIn Marketing",
    description:
      "Reach decision-makers and generate B2B leads.",
    points: [
      "Profile & page optimization",
      "Thought leadership content",
      "Lead generation strategy",
      "Analytics & insights",
    ],
  },
  {
    title: "Twitter Marketing",
    description:
      "Build real-time engagement and brand conversations.",
    points: [
      "Tweet strategy & scheduling",
      "Trend monitoring",
      "Audience engagement",
      "Performance reporting",
    ],
  },
];

const processSteps = [
  { title: "Audit", desc: "Social profile & competitor analysis" },
  { title: "Strategy", desc: "Platform-wise content planning" },
  { title: "Creation", desc: "Posts, reels & creatives" },
  { title: "Engagement", desc: "Community management" },
  { title: "Optimization", desc: "Performance tracking & scaling" },
];

export default SMMServices;
