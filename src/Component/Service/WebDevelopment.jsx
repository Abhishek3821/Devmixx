import React from "react";
import { useNavigate } from "react-router-dom";

const WebDevelopment = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-black text-gray-200 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Web Development Services
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Scalable, high-performance websites built for
            <span className="text-white font-medium">
              {" "}growth, speed, and conversions
            </span>.
            We design and develop modern websites that deliver real business
            results.
          </p>
        </div>

        {/* Why Choose Us */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {[
            "High-performance & scalable architecture",
            "SEO-friendly & conversion-focused builds",
            "Mobile-first & responsive design",
            "Fast loading & optimized code",
            "Secure & future-ready solutions",
            "Ongoing support & maintenance",
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

        {/* Development Process */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white text-center mb-10">
            Our Web Development Process
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
            Ready to Build Your Website?
          </h2>
          <p className="text-gray-400 mb-8">
            Let’s create a fast, scalable website that grows your business.
          </p>

          <button
            onClick={() => navigate("/contact")}
            className="px-8 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
          >
            Get Free Consultation
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
    title: "WordPress Development",
    description:
      "Custom, scalable WordPress websites built for performance and ease of management.",
    points: [
      "Custom themes & plugins",
      "SEO-friendly structure",
      "Speed & security optimization",
      "Easy content management",
    ],
  },
  {
    title: "Ecommerce Website Development",
    description:
      "High-converting ecommerce websites designed to increase sales.",
    points: [
      "WooCommerce / Custom ecommerce",
      "Secure payment integration",
      "Product & category optimization",
      "Conversion-focused UX",
    ],
  },
  {
    title: "Custom Website Development",
    description:
      "Tailor-made websites built to match your business requirements.",
    points: [
      "React / modern frameworks",
      "Scalable architecture",
      "API-driven development",
      "Custom features & integrations",
    ],
  },
  {
    title: "Website Maintenance",
    description:
      "Keep your website secure, updated, and running smoothly.",
    points: [
      "Regular updates & backups",
      "Security monitoring",
      "Bug fixes",
      "Performance optimization",
    ],
  },
  {
    title: "Website Migration",
    description:
      "Seamless migration without data loss or SEO impact.",
    points: [
      "Platform-to-platform migration",
      "SEO-safe redirects",
      "Database & content transfer",
      "Downtime-free migration",
    ],
  },
  {
    title: "Page Speed Optimization",
    description:
      "Improve load times and Core Web Vitals.",
    points: [
      "Code & asset optimization",
      "Core Web Vitals improvements",
      "Caching & CDN setup",
      "Performance audits",
    ],
  },
  {
    title: "API Integration",
    description:
      "Connect your website with third-party tools and services.",
    points: [
      "Payment gateways",
      "CRM & marketing tools",
      "Custom REST APIs",
      "Secure data handling",
    ],
  },
];

const processSteps = [
  { title: "Discovery", desc: "Understanding goals & requirements" },
  { title: "Planning", desc: "Architecture & tech stack selection" },
  { title: "Design", desc: "UI/UX & user journey" },
  { title: "Development", desc: "Clean & scalable code" },
  { title: "Launch", desc: "Testing, deployment & support" },
];

export default WebDevelopment;
