import React from "react";
import {
  Search,
  Globe,
  Share2,
  Palette,
  BarChart3,
  PenTool,
} from "lucide-react";

/* =======================
   SERVICE CARD (INLINE)
======================= */
const ServiceCard = ({ category }) => {
  const Icon = category.icon;

  return (
    <div className="group relative rounded-2xl overflow-hidden bg-black border border-white/10 hover:border-white/20 transition-all duration-300">
      {/* Background Image */}
      <img
        src={category.imageUrl}
        alt={category.title}
        className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black"></div>

      {/* Content */}
      <div className="relative z-10 p-8 h-full flex flex-col">
        <div className="flex items-center gap-3 mb-4">
          <Icon className={`w-8 h-8 ${category.color}`} />
          <h3 className="text-2xl font-bold text-white">
            {category.title}
          </h3>
        </div>

        <p className="text-gray-400 mb-6">
          {category.description}
        </p>

        <ul className="space-y-2 text-sm text-gray-300">
          {category.services.map((service, index) => (
            <li key={index}>• {service.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

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
      { name: "Link Building (Off Page SEO)" },
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
      { name: "Page Speed Optimisation Service" },
      { name: "Website Development" },
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
      { name: "Youtube Marketing" },
      { name: "Instagram Marketing" },
      { name: "Pinterest Marketing" },
      { name: "Linkedin Marketing" },
      { name: "Twitter Marketing" },
      { name: "SMO Service" },
    ],
  },
  {
    id: "branding",
    title: "Branding Service",
    icon: Palette,
    color: "text-yellow-400",
    description:
      "Create a lasting identity that resonates with your customers.",
    imageUrl: "https://picsum.photos/800/600?random=4",
    services: [
      { name: "Logo Design" },
      { name: "UI/UX Design" },
      { name: "Website Design" },
      { name: "Graphics Design" },
      { name: "Reputation Management" },
      { name: "Brand Videos" },
    ],
  },
  {
    id: "ppc",
    title: "PPC Service",
    icon: BarChart3,
    color: "text-orange-400",
    description:
      "Maximize ROI with targeted pay-per-click advertising campaigns.",
    imageUrl: "https://picsum.photos/800/600?random=5",
    services: [
      { name: "Google Ad Management" },
      { name: "Facebook / Meta Ad Management" },
      { name: "Instagram Ad Management" },
      { name: "Linkedin Ad Management" },
      { name: "Youtube Ad Management" },
    ],
  },
  {
    id: "content",
    title: "Content Marketing",
    icon: PenTool,
    color: "text-emerald-400",
    description: "Compelling content that drives traffic and converts leads.",
    imageUrl: "https://picsum.photos/800/600?random=6",
    services: [
      { name: "Content Writing Services" },
      { name: "Copywriting Services" },
      { name: "Email Marketing Services" },
    ],
  },
];

/* =======================
   MAIN COMPONENT
======================= */
const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-black relative">
      {/* Decorative Blurs */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-blue-900/20 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-purple-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-purple-500 font-bold tracking-wider text-sm uppercase mb-2 block">
            Our Expertise
          </span>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Comprehensive <span className="text-gray-500">Solutions</span>
          </h2>
          <p className="text-xl text-gray-400 font-light">
            We leverage cutting-edge technology and creative thinking to deliver
            services that scale with your ambition.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SERVICE_CATEGORIES.map((category) => (
            <ServiceCard key={category.id} category={category} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
