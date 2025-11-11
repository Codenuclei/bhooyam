"use client";

import React, { useState } from "react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { EnhancedProductCard } from "@/components/enhanced-product-card";
import {
  TruckIcon,
  ShieldCheckIcon,
  CheckBadgeIcon,
  ChartBarIcon,
  DeviceTabletIcon,
} from "@heroicons/react/24/outline";
import { LeafIcon } from "lucide-react";
import ModernSection from "@/components/cta";
// Add custom styles for animations and mint colors
const customStyles = `
  @keyframes gradient {
    0%, 100% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
  }
  .animate-gradient {
    background-size: 200% 200%;
    animation: gradient 3s ease infinite;
  }
  .bg-grid-pattern {
    background-image: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0);
    background-size: 20px 20px;
  }
  
  /* Custom Mint Color Definitions */
  .bg-mint-50 { background-color: #f0fdf4; }
  .bg-mint-100 { background-color: #dcfce7; }
  .bg-mint-200 { background-color: #bbf7d0; }
  .bg-mint-300 { background-color: #86efac; }
  .bg-mint-400 { background-color: #4ade80; }
  .bg-mint-500 { background-color: #22c55e; }
  .bg-mint-600 { background-color: #16a34a; }
  .bg-mint-700 { background-color: #15803d; }
  
  .text-mint-400 { color: #4ade80; }
  .text-mint-500 { color: #22c55e; }
  .text-mint-600 { color: #16a34a; }
  .text-mint-700 { color: #15803d; }
  
  .border-mint-200 { border-color: #bbf7d0; }
  .border-mint-300 { border-color: #86efac; }
  .border-mint-400 { border-color: #4ade80; }
  
  .from-mint-50 { --tw-gradient-from: #f0fdf4; }
  .from-mint-400 { --tw-gradient-from: #4ade80; }
  .from-mint-500 { --tw-gradient-from: #22c55e; }
  .to-mint-50 { --tw-gradient-to: #f0fdf4; }
  .to-green-400 { --tw-gradient-to: #4ade80; }
  .to-green-400 { --tw-gradient-to: #4ade80; }
  .hover\\:bg-mint-50:hover { background-color: #f0fdf4; }
`;

if (typeof document !== "undefined") {
  const styleSheet = document.createElement("style");
  styleSheet.textContent = customStyles;
  document.head.appendChild(styleSheet);
}
// Enhanced product data with complete interface
const products = [
  {
    id: "bhooyam-pro-system",
    name: "Ankuran Ārambha",
    description:
      "The foundation of our system, Ankuran Ārambh continuously monitors environmental parameters like temperature, humidity, and light to create the ideal growth conditions. It serves as the first step toward intelligent, data-driven hydroponic cultivation.",
    price: "₹8,000",
    originalPrice: "₹10,000",
    images: [
      "/WhatsApp Image 2025-11-07 at 21.58.23_755d8d4d.jpg",
      "/WhatsApp Image 2025-11-07 at 21.58.23_d5573056.jpg",
      "/WhatsApp Image 2025-11-07 at 21.58.24_4427d2e9.jpg",
    ],
    rating: 4.9,
    reviews: 247,
    features: [
      "100 plant capacity",
      "Environmental Monitoring",
      "Smart control",
      "Modular design",
    ],
    badges: ["Best Seller", "AI Powered"],
    inStock: true,
    isNew: false,
    isBestseller: true,
    metrics: {
      efficiency: 95,
      yield: 85,
      waterSaving: 90,
      energyEfficiency: 88,
    },
    etiquetteFeatures: {
      warranty: "5-year comprehensive",
      shipping: "",
      certification: "",
      support: "24/7 expert support",
    },
  },
  {
    id: "bhooyam-home-garden",
    name: "Ankuran Vriddhi",
    description:
      "Building upon the basics, Ankuran Vṛddhi adds smart sensing for pH, TDS, and air quality to ensure optimal nutrient and environmental balance. It features semi-automatic alerts that guide users in maintaining perfect conditions for plant growth.",
    price: "₹15,000",
    originalPrice: "₹18,000",
    images: [
      "/WhatsApp Image 2025-11-07 at 21.58.24_d5ea4a1e.jpg",
      "/WhatsApp Image 2025-11-07 at 21.58.25_8a39d759.jpg",
      "/WhatsApp Image 2025-11-07 at 21.58.25_a9071771.jpg",
    ],
    rating: 4.7,
    reviews: 183,
    features: [
      "100 plant capacity",
      "Air Quality Awareness",
      "Semi-Automatic (Alerts)",
      "Easy setup",
    ],
    badges: ["Home Use", "Quiet"],
    inStock: true,
    isNew: true,
    isBestseller: false,
    metrics: {
      efficiency: 82,
      yield: 75,
      waterSaving: 85,
      energyEfficiency: 90,
    },
    etiquetteFeatures: {
      warranty: "6-year warranty",
      shipping: "",
      certification: "",
      support: "24/7 expert support",
    },
  },
  {
    id: "bhooyam-farm-unit",
    name: "Ankuran Pragya",
    description:
      "The most advanced stage, Ankuran Pragya integrates AI-driven image and sensor fusion for precise plant health detection and nutrient control. It fully automates the hydroponic process through intelligent dosing and real-time environmental adjustments.",
    price: "₹20,000",
    originalPrice: "₹22,000",
    images: [
      "/WhatsApp Image 2025-11-07 at 21.58.25_d97da499.jpg",
      "/WhatsApp Image 2025-11-07 at 21.58.26_89af52e5.jpg",
      "/WhatsApp Image 2025-11-07 at 21.58.26_edce2dbc.jpg",
    ],
    rating: 4.8,
    reviews: 95,
    features: [
      "100 plant capacity",
      "Commercial grade",
      "Expandable",
      "Dedicated account manager",
    ],
    badges: ["Commercial", "Expandable"],
    inStock: true,
    isNew: false,
    isBestseller: false,
    metrics: {
      efficiency: 92,
      yield: 88,
      waterSaving: 87,
      energyEfficiency: 85,
    },
    etiquetteFeatures: {
      warranty: "7-year commercial warranty",
      shipping: "",
      certification: "",
      support: "Dedicated account manager",
    },
  },
];

// const stats = [
// { icon: ChartBarIcon, value: "+500%", label: "Average yield increase" },
// { icon: LeafIcon, value: "-90%", label: "Water usage vs soil farms" },
// {
//   icon: DeviceTabletIcon,
//   value: "+80%",
//   label: "Lighting efficiency with LEDs",
// },
// ];

export default function Home() {
  const [activeCard, setActiveCard] = useState<string | null>(null);

  return (
    <>
      {/* Enhanced Navigation */}
      <Navbar />

      <main className="pt-16">
        {/* 1. Refined Hero Section with Perfect Mint Glassmorphism */}
        {/* 1. Refined Hero Section with Perfect Mint Glassmorphism */}
        <section className="relative bg-gradient-to-br from-mint-50 via-green-50 to-emerald-50 py-24 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-3"></div>
          {/* Soft Animated Background Elements */}
          <div className="absolute top-20 left-10 w-32 h-32 bg-mint-100/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-green-100/20 rounded-full blur-3xl animate-pulse delay-1000"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center lg:text-left lg:flex lg:items-center lg:justify-between">
              <div className="lg:w-1/2">
                <div className="inline-flex items-center gap-2 bg-white/70 backdrop-blur-md border border-mint-200/40 rounded-full px-4 py-2 mb-6 shadow-sm">
                  <div className="w-2 h-2 bg-mint-400 rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold text-mint-700">
                    Next-Gen Hydroponic Technology
                  </span>
                </div>

                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                  Grow More with{" "}
                  <span className="bg-gradient-to-r from-mint-500 via-green-500 to-emerald-500 bg-clip-text text-transparent animate-gradient">
                    Bhooyam
                  </span>
                </h1>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 mb-8 leading-relaxed">
                  Advanced hydroponic systems with AI optimization helping you
                  grow fresh produce year-round using 50% less water and zero
                  pesticides. The future of sustainable agriculture is here.
                </p>

                {/* Enhanced Stats Preview with Mint Glassmorphism */}
                <div className="grid grid-cols-3 gap-4 mb-8 lg:max-w-md">
                  {[
                    { value: "500%", label: "Yield Increase" },
                    { value: "90%", label: "Water Saved" },
                    { value: "24/7", label: "AI Monitoring" },
                  ].map((stat, idx) => (
                    <div
                      key={idx}
                      className="text-center p-3 bg-white/50 backdrop-blur-md rounded-xl border border-mint-200/30 shadow-sm"
                    >
                      <div className="text-2xl font-bold text-mint-600">
                        {stat.value}
                      </div>
                      <div className="text-xs text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button className="group inline-flex items-center justify-center bg-gradient-to-r from-mint-400 to-green-400 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                    Shop Systems
                    <svg
                      className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </button>
                  <button className="inline-flex items-center justify-center border-2 border-mint-400 text-mint-600 font-semibold py-4 px-8 rounded-xl hover:bg-mint-50 transition-all duration-300">
                    Book Demo
                  </button>
                </div>
              </div>

              <div className="lg:w-1/2 mt-12 lg:mt-0">
                <div className="relative">
                  {/* Main Product Image with Mint Glassmorphism */}
                  <div className="bg-white/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 transform rotate-2 hover:rotate-0 transition-transform duration-500 border border-mint-200/40">
                    <img
                      src="/WhatsApp Image 2025-11-07 at 21.58.23_1e9d59d5.jpg"
                      alt="Bhooyam Hydroponic System"
                      className="w-full h-64 lg:h-80 object-cover rounded-xl"
                    />
                  </div>

                  {/* Enhanced Floating Cards with Mint Theme */}
                  <div className="absolute -top-4 -left-4 bg-white/70 backdrop-blur-md rounded-xl shadow-lg p-4 transform -rotate-6 border border-mint-200/50">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-mint-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-semibold text-gray-800">
                        Live Growth Monitoring
                      </span>
                    </div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-mint-400 to-green-400 text-white rounded-xl shadow-lg p-4 transform rotate-6">
                    <div className="text-center">
                      <div className="text-lg font-bold">90%</div>
                      <div className="text-xs opacity-90">Water Saved</div>
                    </div>
                  </div>

                  <div className="absolute top-1/2 -right-6 bg-emerald-400 text-white rounded-xl shadow-lg p-3 transform rotate-12">
                    <div className="text-center">
                      <div className="text-sm font-bold">AI</div>
                      <div className="text-xs opacity-90">Powered</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 3. Enhanced Product Showcase with Mint Glassmorphism */}
        <section className="py-20 bg-gradient-to-br from-mint-50 to-green-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Ankuran - Intelligent Hydroponics Automation and Monitoring
                System
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Ankuran is a three-stage progressive hydroponics automation and
                monitoring system developed under the Bhooyam initiative. Each
                stage advances the system’s intelligence — from basic
                environmental monitoring to full AI-driven nutrient management
                and image-based growth analysis.
              </p>
            </div>

            {/* Enhanced Product Cards Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
              {products.map((product, index) => (
                <EnhancedProductCard
                  key={product.id}
                
                  product={product}
                  index={index}
                  isActive={activeCard === product.id}
                  onActivate={() =>
                    setActiveCard(activeCard === product.id ? null : product.id)
                  }
                />
              ))}
            </div>

            {/* Call to Action for Product Details with Mint Theme */}
            <div className="text-center mt-16">
              <div className="inline-flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-mint-400 to-green-400 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  View All Products
                </button>
                <button className="border-2 border-mint-400 text-mint-600 font-semibold py-4 px-8 rounded-xl hover:bg-mint-50 transition-all duration-300">
                  Compare Systems
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* 2. Enhanced Features Section with Mint Glassmorphism */}
        <section className="py-20 bg-gradient-to-b from-white to-mint-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                Why Choose Bhooyam?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Designed for modern growers who care about sustainability,
                efficiency, and the future of agriculture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {[
                {
                  icon: TruckIcon,
                  title: "Fast Delivery & Setup",
                  description:
                    "Get your system delivered and installed within days, not weeks. Start growing immediately.",
                  features: [
                    "2-5 day delivery",
                    "Professional installation",
                    "Same-week growing",
                  ],
                  gradient: "from-mint-400 to-green-400",
                },
                {
                  icon: ShieldCheckIcon,
                  title: "Quality Guaranteed",
                  description:
                    "Built to last with premium materials and comprehensive support for peace of mind.",
                  features: [
                    "5-year warranty",
                    "24/7 support",
                    "Quality certified",
                  ],
                  gradient: "from-green-400 to-emerald-400",
                },
                {
                  icon: CheckBadgeIcon,
                  title: "Award-Winning Design",
                  description:
                    "Recognized for innovation in sustainable agriculture technology and smart farming.",
                  features: [
                    "Eco-tech awards",
                    "Patent pending",
                    "Industry leader",
                  ],
                  gradient: "from-emerald-400 to-teal-400",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="group relative bg-white/60 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-500 border border-mint-200/40 hover:border-mint-300/50"
                >
                  {/* Soft Background Gradient Effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}
                  ></div>

                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center group-hover:scale-105 transition-all duration-300 mb-6 shadow-md`}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <ul className="space-y-3">
                      {feature.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-sm text-gray-700"
                        >
                          <div
                            className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full mr-3 shadow-sm`}
                          ></div>
                          <span className="font-medium">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Advanced Stats Section with Mint Glassmorphism */}
        {/* <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> */}
        {/* {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-8 rounded-2xl bg-gradient-to-br from-mint-50 to-green-50 border border-mint-200/40 backdrop-blur-sm"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-mint-400 to-green-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                    <stat.icon className="w-10 h-10 text-white" />
                  </div>
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    {stat.value}
                  </div>
                  <p className="text-gray-600 text-lg">{stat.label}</p>
                </div>
              ))} */}
        {/* </div>
          </div>
        </section> */}

        {/* 5. Premium CTA Section with Refined Color Palette */}

        <ModernSection />
      </main>

      {/* Footer Component */}
      <Footer />
    </>
  );
}
