import React from "react";
import {
  Search,
  Globe,
  Share2,
  Palette,
  BarChart3,
  PenTool,
  ArrowUpRight,
} from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

/* =======================
   SERVICES DATA
======================= */
const SERVICE_CATEGORIES = [
  {
    id: "seo",
    title: "SEO Services",
    icon: Search,
    color: "text-green-400",
    description: "Dominate search rankings with our data-driven SEO strategies.",
    imageUrl: "https://picsum.photos/800/600?random=1",
    services: [
      { name: "AI SEO" },
      { name: "Local SEO" },
      { name: "On Page SEO" },
      { name: "Link Building" },
      { name: "Ecommerce SEO" },
      { name: "Technical SEO" },
      { name: "SEO Audits" },
      { name: "SEO Outsource" },
    ],
  },
  {
    id: "web-dev",
    title: "Web Development",
    icon: Globe,
    color: "text-blue-400",
    description: "Scalable, high-performance websites built for growth.",
    imageUrl: "https://picsum.photos/800/600?random=2",
    services: [
      { name: "WordPress Development" },
      { name: "Ecommerce Website Development" },
      { name: "Custom Website Development" },
      { name: "Website Maintenance" },
      { name: "Website Migration" },
      { name: "Page Speed Optimization" },
      { name: "API Integration" },
    ],
  },
  {
    id: "smm",
    title: "SMM Services",
    icon: Share2,
    color: "text-pink-400",
    description: "Engage your audience across all major social platforms.",
    imageUrl: "https://picsum.photos/800/600?random=3",
    services: [
      { name: "Facebook Marketing" },
      { name: "Instagram Marketing" },
      { name: "Youtube Marketing" },
      { name: "LinkedIn Marketing" },
      { name: "Twitter Marketing" },
    ],
  },
  {
    id: "branding",
    title: "Branding Service",
    icon: Palette,
    color: "text-yellow-400",
    description: "Create a lasting identity that resonates with customers.",
    imageUrl: "https://picsum.photos/800/600?random=4",
    services: [
      { name: "Logo Design" },
      { name: "UI/UX Design" },
      { name: "Graphic Design" },
      { name: "Brand Videos" },
    ],
  },
  {
    id: "ppc",
    title: "PPC Service",
    icon: BarChart3,
    color: "text-orange-400",
    description: "Maximize ROI with targeted advertising campaigns.",
    imageUrl: "https://picsum.photos/800/600?random=5",
    services: [
      { name: "Google Ads" },
      { name: "Meta Ads" },
      { name: "Instagram Ads" },
      { name: "LinkedIn Ads" },
      { name: "Youtube Ads" },
    ],
  },
  {
    id: "content",
    title: "Content Marketing",
    icon: PenTool,
    color: "text-emerald-400",
    description: "Content that drives traffic and conversions.",
    imageUrl: "https://picsum.photos/800/600?random=6",
    services: [
      { name: "Content Writing" },
      { name: "Copywriting" },
      { name: "Email Marketing" },
    ],
  },
];

/* =======================
   BREADCRUMB
======================= */
const Breadcrumb = ({ title }) => {
  const navigate = useNavigate();

  return (
    <nav className="mb-10 text-sm text-gray-400">
      <button
        onClick={() => navigate("/services")}
        className="hover:text-white transition"
      >
        Services
      </button>
      <span className="mx-2">/</span>
      <span className="text-white">{title}</span>
    </nav>
  );
};

/* =======================
   ENHANCED SERVICE CARD
======================= */
const ServiceCard = ({ category }) => {
  const navigate = useNavigate();
  const Icon = category.icon;

  const handleKeyDown = (e) => {
    if (e.key === "Enter" || e.key === " ") {
      navigate(`/services/${category.id}`);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      aria-label={`View details for ${category.title}`}
      onClick={() => navigate(`/services/${category.id}`)}
      onKeyDown={handleKeyDown}
      className="
        group relative cursor-pointer rounded-2xl overflow-hidden
        bg-black/60 backdrop-blur-xl
        border border-white/10
        transition-all duration-300
        hover:-translate-y-2 hover:border-white/20
        focus:outline-none focus:ring-2 focus:ring-white/30
      "
    >
      {/* Glow */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-pink-500/20 blur-2xl" />
      </div>

      {/* View Details */}
      <div className="absolute top-4 right-4 z-20 flex items-center gap-1 rounded-full bg-black/70 backdrop-blur border border-white/20 px-3 py-1 text-xs text-white opacity-0 group-hover:opacity-100 group-focus:opacity-100 transition">
        View details
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
      </div>

      {/* Background */}
      <img
        src={category.imageUrl}
        alt={category.title}
        className="absolute inset-0 w-full h-full object-cover opacity-15 group-hover:opacity-25 transition-opacity duration-500"
      />

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black" />

      {/* Content */}
      <div className="relative z-10 p-8">
        <div className="mb-5 inline-flex items-center justify-center rounded-xl bg-white/5 p-3 border border-white/10 transition group-hover:scale-110 group-hover:bg-white/10">
          <Icon className={`w-8 h-8 ${category.color}`} />
        </div>

        <h3 className="text-2xl font-bold text-white mb-3">
          {category.title}
        </h3>

        <p className="text-gray-400 mb-6 leading-relaxed">
          {category.description}
        </p>

        <ul className="space-y-2 text-sm text-gray-300">
          {category.services.map((service, i) => (
            <li key={i} className="flex gap-2">
              <span className="text-white/40">•</span>
              <span>{service.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

/* =======================
   MAIN COMPONENT
======================= */
const Services = () => {
  const { id } = useParams();

  if (id) {
    const service = SERVICE_CATEGORIES.find((s) => s.id === id);

    if (!service) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
          Service not found
        </div>
      );
    }

    return (
      <section className="min-h-screen bg-black text-white px-6 py-24">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb title={service.title} />

          <h1 className="text-5xl font-bold mb-6">
            {service.title}
          </h1>

          <p className="text-gray-400 text-xl mb-10">
            {service.description}
          </p>

          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {service.services.map((item, i) => (
              <li
                key={i}
                className="border border-white/10 rounded-xl p-4 text-gray-300"
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
      </section>
    );
  }

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-purple-500 font-bold uppercase text-sm">
            Our Expertise
          </span>
          <h2 className="text-5xl font-bold text-white mt-4">
            Comprehensive <span className="text-gray-500">Solutions</span>
          </h2>
          <p className="text-gray-400 text-xl mt-6">
            We build scalable digital solutions that grow your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CATEGORIES.map((category) => (
            <ServiceCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
