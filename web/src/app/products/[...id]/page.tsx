"use client";

import { useState, useEffect, use } from "react";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import {
  ArrowLeft,
  Heart,
  ShoppingCart,
  Star,
  Truck,
  Shield,
  Headphones,
  Award,
  Plus,
  Minus,
  Check,
  Zap,
  Droplet,
  Sprout,
  CircuitBoard,
  Leaf,
  Timer,
  Wifi,
  Smartphone,
  TrendingUp,
  Users,
  BarChart3,
  Thermometer,
  Camera,
  MessageCircle,
  Calendar,
  Globe,
  Recycle,
  Battery,
  Settings,
  Phone,
  Mail,
  MapPin,
  CreditCard,
  Package,
  RefreshCw,
  AlertCircle,
  Info,
  ChevronRight,
  PlayCircle,
  Home,
  Building2,
  Lightbulb,
  FlowerIcon as Flower,
} from "lucide-react";

type Feature =
  | string
  | {
      title: string;
      desc?: string;
      icon?: React.ComponentType<{ className?: string }>;
    };

const products: Array<{
  id: string;
  name: string;
  category: string;
  seller: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  rating: number;
  reviews: number;
  features: Feature[];
  benefits: Array<
    | string
    | {
        title: string;
        desc?: string;
        icon?: React.ComponentType<{ className?: string }>;
      }
  >;
  badges: string[];
  inStock: boolean;
  isNew: boolean;
  isBestseller: boolean;
  metrics: {
    efficiency: number;
    yield: number;
    waterSaving: number;
    energyEfficiency: number;
  };
  etiquetteFeatures: {
    warranty: string;
    shipping: string;
    certification: string;
    support: string;
  };
  roi?: {
    monthlyProduction: string;
    monthlyValue: string;
    paybackPeriod: string;
    annualSavings: string;
  };
  idealFor?: string[];
  specifications: Array<
    | string
    | {
        label: string;
        value: string;
        icon?: React.ComponentType<{ className?: string }>;
      }
  >;
  certifications?: string[];
  whatInBox?: string[];
  support?: {
    setup: string;
    training: string;
    maintenance: string;
    consultation: string;
  };
}> = [
  {
    id: "bhooyam-pro-system",
    name: "Ankuran Ārambha",
    category: "Commercial",
    seller: "Bhooyam",
    description:
      "The foundation of our system, Ankuran Ārambh continuously monitors environmental parameters like temperature, humidity, and light to create the ideal growth conditions. It serves as the first step toward intelligent, data-driven hydroponic cultivation.",
    price: 8000,
    originalPrice: 10000,
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
    benefits: [
      {
        title: "High Efficiency",
        desc: "Up to 95% resource utilization",
        icon: TrendingUp,
      },
      {
        title: "Water Saving",
        desc: "90% less water than soil",
        icon: Droplet,
      },
      {
        title: "Energy Efficient",
        desc: "Low power consumption",
        icon: Battery,
      },
      "Easy Maintenance",
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
      shipping: "Free shipping",
      certification: "UL Listed, FDA Approved",
      support: "24/7 expert support",
    },
    roi: {
      monthlyProduction: "40kg",
      monthlyValue: "₹12,000",
      paybackPeriod: "8 months",
      annualSavings: "₹60,000",
    },
    idealFor: ["Restaurants", "Commercial Farms", "Hotels", "Supermarkets"],
    specifications: [
      { label: "Plant Capacity", value: "100", icon: Sprout },
      { label: "Power Consumption", value: "120W", icon: Battery },
      { label: "Dimensions", value: "120x60x180cm", icon: Settings },
      { label: "Connectivity", value: "WiFi", icon: Wifi },
      "Material: Food-grade ABS",
      "Water Tank: 60L",
    ],
    certifications: ["UL Listed", "FDA Approved", "Energy Star", "IP65 Rated"],
    whatInBox: [
      "Main Hydroponic Unit",
      "Nutrient Starter Pack",
      "User Manual",
      "Warranty Card",
      "Power Adapter",
    ],
    support: {
      setup: "Professional installation included.",
      training: "Online and onsite training available.",
      maintenance: "Annual maintenance contract.",
      consultation: "Free initial consultation.",
    },
  },
  {
    id: "bhooyam-home-garden",
    name: "Ankuran Vriddhi",
    category: "Home",
    seller: "Bhooyam",
    description:
      "Building upon the basics, Ankuran Vṛddhi adds smart sensing for pH, TDS, and air quality to ensure optimal nutrient and environmental balance. It features semi-automatic alerts that guide users in maintaining perfect conditions for plant growth.",
    price: 15000,
    originalPrice: 18000,
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
    benefits: [
      { title: "Quiet Operation", desc: "Low noise pumps", icon: Wifi },
      { title: "Home Friendly", desc: "Compact design", icon: Home },
      "Easy Setup",
      "Semi-Automatic Alerts",
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
      shipping: "Free shipping",
      certification: "FDA Approved",
      support: "24/7 expert support",
    },
    roi: {
      monthlyProduction: "25kg",
      monthlyValue: "₹7,500",
      paybackPeriod: "12 months",
      annualSavings: "₹36,000",
    },
    idealFor: ["Families", "Urban Homes", "Schools", "Community Centers"],
    specifications: [
      { label: "Plant Capacity", value: "100", icon: Sprout },
      { label: "Power Consumption", value: "80W", icon: Battery },
      { label: "Dimensions", value: "100x50x150cm", icon: Settings },
      { label: "Connectivity", value: "WiFi", icon: Wifi },
      "Material: Food-grade ABS",
      "Water Tank: 40L",
    ],
    certifications: ["FDA Approved", "Energy Star"],
    whatInBox: [
      "Main Hydroponic Unit",
      "Nutrient Starter Pack",
      "User Manual",
      "Warranty Card",
      "Power Adapter",
    ],
    support: {
      setup: "DIY setup guide included.",
      training: "Online training videos.",
      maintenance: "Phone support for maintenance.",
      consultation: "Email consultation available.",
    },
  },
  {
    id: "bhooyam-farm-unit",
    name: "Ankuran Pragya",
    category: "Commercial",
    seller: "Bhooyam",
    description:
      "The most advanced stage, Ankuran Pragya integrates AI-driven image and sensor fusion for precise plant health detection and nutrient control. It fully automates the hydroponic process through intelligent dosing and real-time environmental adjustments.",
    price: 20000,
    originalPrice: 22000,
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
    benefits: [
      {
        title: "AI Health Detection",
        desc: "Image & sensor fusion",
        icon: Camera,
      },
      { title: "Full Automation", desc: "Intelligent dosing", icon: Settings },
      "Expandable Design",
      "Dedicated Support",
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
      shipping: "Free shipping",
      certification: "UL Listed, Energy Star",
      support: "Dedicated account manager",
    },
    roi: {
      monthlyProduction: "60kg",
      monthlyValue: "₹18,000",
      paybackPeriod: "6 months",
      annualSavings: "₹90,000",
    },
    idealFor: ["Large Farms", "Agri Businesses", "Exporters", "Institutions"],
    specifications: [
      { label: "Plant Capacity", value: "100", icon: Sprout },
      { label: "Power Consumption", value: "150W", icon: Battery },
      { label: "Dimensions", value: "140x70x200cm", icon: Settings },
      { label: "Connectivity", value: "WiFi + Cellular", icon: Wifi },
      "Material: Food-grade ABS",
      "Water Tank: 80L",
    ],
    certifications: ["UL Listed", "Energy Star", "IP65 Rated"],
    whatInBox: [
      "Main Hydroponic Unit",
      "Nutrient Starter Pack",
      "User Manual",
      "Warranty Card",
      "Power Adapter",
      "Account Manager Contact",
    ],
    support: {
      setup: "Onsite professional setup.",
      training: "Dedicated training program.",
      maintenance: "Annual maintenance contract.",
      consultation: "Priority consultation.",
    },
  },
];

interface ProductPageProps {
  params: Promise<{ id: string | string[] }>;
}

function renderStars(rating: number) {
  const fullStars = Math.floor(rating);
  const halfStar = rating % 1 >= 0.5;
  return (
    <div className="flex gap-0.5 items-center">
      {[...Array(fullStars)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
      ))}
      {halfStar && <Star className="h-4 w-4 fill-yellow-200 text-yellow-400" />}
      {[...Array(5 - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
        <Star key={`empty-${i}`} className="h-4 w-4 text-gray-300" />
      ))}
    </div>
  );
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  const productId = Array.isArray(id) ? id[0] : id;
  const product = products.find((p) => p.id === productId);

  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [activeTab, setActiveTab] = useState("features");
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-updating images functionality
  useEffect(() => {
    if (!isAutoPlay || !product || product.images.length <= 1) return;

    const interval = setInterval(() => {
      setSelectedImage((prevImage) => (prevImage + 1) % product.images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [isAutoPlay, product]);

  // Pause auto-play when user manually selects an image
  const handleImageSelect = (index: number) => {
    setSelectedImage(index);
    setIsAutoPlay(false);

    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => {
      setIsAutoPlay(true);
    }, 10000);
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4 text-emerald-700">
            Product Not Found
          </h1>
          <p className="text-gray-600 mb-6">
            Sorry, we couldn't find that product.
          </p>
          <Link
            href="/products"
            className="bg-gradient-to-r from-emerald-500 to-cyan-400 text-white px-6 py-3 rounded-lg font-semibold hover:from-emerald-600 hover:to-cyan-500 transition-all"
          >
            Back to Products
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50/30">
      {/* Header with Integrated Navbar */}
      <header className="bg-white/95 backdrop-blur-lg border-b border-slate-200/40 sticky top-0 z-50 shadow-xl shadow-slate-200/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-xl flex items-center justify-center shadow-lg shadow-blue-200/40">
                <span className="text-white font-bold text-lg">B</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-slate-700 to-blue-600 bg-clip-text text-transparent">
                Bhooyam
              </span>
            </Link>
            <Navbar />
            <div className="flex items-center gap-4">
              <button className="bg-gradient-to-r from-blue-400 to-indigo-400 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-500 hover:to-indigo-500 transition-all shadow-lg shadow-blue-200/40 hover:shadow-xl hover:shadow-blue-300/40 hover:scale-105">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <Link
          href="/products"
          className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors bg-white/60 backdrop-blur-sm rounded-lg px-3 py-2 w-fit border border-slate-200/50 shadow-sm hover:shadow-md hover:bg-white/80"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="text-sm font-medium">Back to Products</span>
        </Link>
      </div>

      {/* Product Detail */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative overflow-hidden rounded-2xl bg-white/70 backdrop-blur-sm aspect-square border-2 border-slate-200/50 shadow-xl shadow-slate-200/20">
              <Image
                src={product.images[selectedImage]}
                alt={product.name}
                fill
                className="object-cover transition-all duration-500"
              />
              {product.originalPrice && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white px-3 py-2 rounded-full text-sm font-bold shadow-lg backdrop-blur-sm">
                  Save ${product.originalPrice - product.price}
                </div>
              )}

              {/* Auto-play indicator */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2">
                <button
                  onClick={() => setIsAutoPlay(!isAutoPlay)}
                  className={`p-2 rounded-full backdrop-blur-sm border transition-all ${
                    isAutoPlay
                      ? "bg-blue-400/90 text-white border-blue-300 shadow-lg"
                      : "bg-white/90 text-gray-600 border-gray-200 hover:bg-white"
                  }`}
                  title={isAutoPlay ? "Pause slideshow" : "Start slideshow"}
                >
                  {isAutoPlay ? (
                    <div className="w-3 h-3 bg-white rounded-sm"></div>
                  ) : (
                    <div className="w-0 h-0 border-l-[6px] border-l-current border-t-[3px] border-b-[3px] border-t-transparent border-b-transparent ml-0.5"></div>
                  )}
                </button>
              </div>

              {/* Image progress indicators */}
              {product.images.length > 1 && (
                <div className="absolute bottom-4 left-4 flex gap-2">
                  {product.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handleImageSelect(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        selectedImage === index
                          ? "bg-blue-400 w-6"
                          : "bg-white/60 hover:bg-white/80"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="grid grid-cols-4 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => handleImageSelect(index)}
                  className={`overflow-hidden rounded-xl border-2 transition-all duration-300 backdrop-blur-sm relative ${
                    selectedImage === index
                      ? "border-blue-400 ring-2 ring-blue-200/50 shadow-lg shadow-blue-200/40 bg-white/90"
                      : "border-gray-200/70 hover:border-blue-300 bg-white/60 hover:bg-white/80 hover:shadow-md"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    width={100}
                    height={100}
                    className="w-full h-20 object-cover"
                  />
                  {selectedImage === index && (
                    <div className="absolute inset-0 bg-blue-400/15 flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-400 rounded-full shadow-lg"></div>
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-4">
            {/* Category Badge */}
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-blue-100/60 to-indigo-100/60 backdrop-blur-sm text-blue-700 rounded-full text-xs font-semibold tracking-wide uppercase border border-blue-200/40 shadow-md">
              {product.category}
            </span>

            {/* Product Title */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {product.name}
              </h1>
              <p className="text-gray-600">by {product.seller}</p>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                {renderStars(product.rating)}
                <span className="font-semibold text-gray-900">
                  {product.rating}
                </span>
                <span className="text-gray-500">
                  ({product.reviews} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-bold text-blue-600">
                ${product.price}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-lg text-gray-500 line-through">
                    ${product.originalPrice}
                  </span>
                  <span className="bg-rose-100 text-rose-700 px-2 py-1 rounded text-sm font-semibold">
                    {Math.round(
                      (1 - product.price / product.originalPrice) * 100
                    )}
                    % OFF
                  </span>
                </>
              )}
            </div>

            {/* Stock Status */}
            <div className="flex items-center gap-2">
              <div
                className={`w-3 h-3 rounded-full ${
                  product.inStock ? "bg-teal-400" : "bg-rose-400"
                }`}
              ></div>
              <span
                className={`font-semibold ${
                  product.inStock ? "text-teal-600" : "text-rose-600"
                }`}
              >
                {product.inStock ? "In Stock - Ready to Ship" : "Out of Stock"}
              </span>
            </div>

            {/* Description */}
            <p className="text-lg text-gray-700 leading-relaxed">
              {product.description}
            </p>

            {/* Key Benefits */}
            <div className="bg-gradient-to-br from-blue-50/60 to-indigo-50/60 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/40 shadow-lg shadow-blue-100/20">
              <h3 className="font-semibold text-blue-700 mb-4 flex items-center gap-2">
                <Check className="h-5 w-5" />
                Key Benefits
              </h3>
              <ul className="space-y-3">
                {product.benefits.map((benefit, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-blue-700 bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-blue-100/40"
                  >
                    {typeof benefit === "object" && benefit.icon ? (
                      <benefit.icon className="h-5 w-5 mt-0.5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <Check className="h-4 w-4 mt-0.5 text-blue-600 flex-shrink-0" />
                    )}
                    <div>
                      <span className="text-sm font-semibold block">
                        {typeof benefit === "object" ? benefit.title : benefit}
                      </span>
                      {typeof benefit === "object" && benefit.desc && (
                        <span className="text-xs text-blue-600">
                          {benefit.desc}
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* ROI Calculator - New Component */}
            {product.roi && (
              <div className="bg-gradient-to-br from-teal-50/60 to-emerald-50/60 backdrop-blur-sm rounded-2xl p-6 border border-teal-200/40 shadow-lg">
                {" "}
                <h3 className="font-semibold text-green-700 mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Return on Investment
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-green-100/50">
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-semibold text-gray-900">
                        Monthly Production
                      </span>
                    </div>
                    <p className="text-lg font-bold text-green-600">
                      {product.roi.monthlyProduction}
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-green-100/50">
                    <div className="flex items-center gap-2 mb-2">
                      <CreditCard className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-semibold text-gray-900">
                        Monthly Value
                      </span>
                    </div>
                    <p className="text-lg font-bold text-green-600">
                      {product.roi.monthlyValue}
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-green-100/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Timer className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-semibold text-gray-900">
                        Payback Period
                      </span>
                    </div>
                    <p className="text-lg font-bold text-green-600">
                      {product.roi.paybackPeriod}
                    </p>
                  </div>
                  <div className="bg-white/60 backdrop-blur-sm rounded-lg p-4 border border-green-100/50">
                    <div className="flex items-center gap-2 mb-2">
                      <Zap className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-semibold text-gray-900">
                        Annual Savings
                      </span>
                    </div>
                    <p className="text-lg font-bold text-green-600">
                      {product.roi.annualSavings}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Ideal For Section - New Component */}
            {product.idealFor && (
              <div className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-sm rounded-2xl p-6 border border-blue-200/50 shadow-lg">
                <h3 className="font-semibold text-blue-700 mb-4 flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  Perfect For
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {product.idealFor.map((use, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-white/60 backdrop-blur-sm rounded-lg p-3 border border-blue-100/50"
                    >
                      <Building2 className="h-4 w-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-700">
                        {use}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity & Actions */}
            {product.inStock && (
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <span className="font-semibold text-gray-900">Quantity:</span>
                  <div className="flex items-center bg-white/70 backdrop-blur-sm border border-gray-300/50 rounded-xl shadow-md">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="p-3 hover:bg-white/80 transition-colors rounded-l-xl"
                    >
                      <Minus className="h-4 w-4" />
                    </button>
                    <span className="px-6 py-2 font-semibold min-w-[3rem] text-center bg-gradient-to-r from-emerald-50/50 to-cyan-50/50">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="p-3 hover:bg-white/80 transition-colors rounded-r-xl"
                    >
                      <Plus className="h-4 w-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="p-3 rounded-xl bg-white/70 backdrop-blur-sm border border-gray-300/50 hover:bg-white/90 transition-all shadow-md hover:shadow-lg"
                  >
                    <Heart
                      className={`h-5 w-5 ${
                        isFavorite
                          ? "fill-red-500 text-red-500"
                          : "text-gray-500"
                      }`}
                    />
                  </button>
                </div>

                <div className="flex gap-3">
                  <button className="flex-1 bg-gradient-to-r from-emerald-500 to-cyan-400 text-white py-3 px-6 rounded-xl font-semibold hover:from-emerald-600 hover:to-cyan-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-emerald-200/50 hover:shadow-xl hover:shadow-emerald-300/50 backdrop-blur-sm">
                    <ShoppingCart className="h-5 w-5" />
                    Add to Cart
                  </button>
                  <button className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-3 px-6 rounded-xl font-semibold hover:from-gray-700 hover:to-gray-800 transition-all shadow-lg shadow-gray-300/30 hover:shadow-xl">
                    Buy Now
                  </button>
                </div>
              </div>
            )}

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200/50">
              {[
                {
                  icon: <Truck className="h-5 w-5" />,
                  title: "Free Shipping",
                  desc: "On orders over $500",
                },
                {
                  icon: <Shield className="h-5 w-5" />,
                  title: "2 Year Warranty",
                  desc: "Comprehensive coverage",
                },
                {
                  icon: <Headphones className="h-5 w-5" />,
                  title: "24/7 Support",
                  desc: "Expert assistance",
                },
                {
                  icon: <Award className="h-5 w-5" />,
                  title: "Award Winning",
                  desc: "Industry recognized",
                },
              ].map((badge, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-emerald-100/50 shadow-md hover:bg-white/80 hover:shadow-lg transition-all"
                >
                  <div className="text-emerald-600 p-2 bg-gradient-to-br from-emerald-50 to-cyan-50 rounded-lg">
                    {badge.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      {badge.title}
                    </p>
                    <p className="text-xs text-gray-600">{badge.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certifications & Awards - New Section */}
        {product.certifications && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Award className="h-6 w-6 text-emerald-600" />
              Certifications & Awards
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {product.certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-white/60 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 shadow-md text-center hover:shadow-lg transition-all"
                >
                  <Shield className="h-8 w-8 text-emerald-600 mx-auto mb-2" />
                  <p className="text-sm font-semibold text-gray-900">{cert}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* What's in the Box - New Section */}
        {product.whatInBox && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Package className="h-6 w-6 text-emerald-600" />
              What's in the Box
            </h2>
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {product.whatInBox.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/50 rounded-lg border border-emerald-100/30"
                  >
                    <Check className="h-4 w-4 text-emerald-600 flex-shrink-0" />
                    <span className="text-sm font-medium text-gray-700">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Support & Training - New Section */}
        {product.support && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
              <Headphones className="h-6 w-6 text-emerald-600" />
              Support & Training
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Settings className="h-5 w-5 text-blue-600" />
                  <h3 className="font-semibold text-blue-700">
                    Professional Setup
                  </h3>
                </div>
                <p className="text-sm text-gray-600">{product.support.setup}</p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-purple-200/50 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <Lightbulb className="h-5 w-5 text-emerald-200" />
                  <h3 className="font-semibold text-purple-700">
                    Training Program
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  {product.support.training}
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-green-200/50 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <RefreshCw className="h-5 w-5 text-green-600" />
                  <h3 className="font-semibold text-green-700">Maintenance</h3>
                </div>
                <p className="text-sm text-gray-600">
                  {product.support.maintenance}
                </p>
              </div>
              <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 border border-orange-200/50 shadow-md">
                <div className="flex items-center gap-3 mb-4">
                  <MessageCircle className="h-5 w-5 text-orange-600" />
                  <h3 className="font-semibold text-orange-700">
                    Consultation
                  </h3>
                </div>
                <p className="text-sm text-gray-600">
                  {product.support.consultation}
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Contact & Ordering Info - New Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
            <Phone className="h-6 w-6 text-emerald-600" />
            Get Started Today
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-emerald-50/80 to-green-50/80 backdrop-blur-sm rounded-xl p-6 border border-emerald-200/50 shadow-md">
              <Phone className="h-8 w-8 text-emerald-600 mb-3" />
              <h3 className="font-semibold text-emerald-700 mb-2">Call Us</h3>
              <p className="text-sm text-gray-600 mb-2">
                Speak with a growing expert
              </p>
              <p className="font-bold text-emerald-600">1-800-BHOOYAM</p>
            </div>
            <div className="bg-gradient-to-br from-blue-50/80 to-cyan-50/80 backdrop-blur-sm rounded-xl p-6 border border-blue-200/50 shadow-md">
              <Mail className="h-8 w-8 text-blue-600 mb-3" />
              <h3 className="font-semibold text-blue-700 mb-2">
                Email Support
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                24/7 technical assistance
              </p>
              <p className="font-bold text-blue-600">support@bhooyam.com</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50/80 to-pink-50/80 backdrop-blur-sm rounded-xl p-6 border border-purple-200/50 shadow-md">
              <MapPin className="h-8 w-8 text-emerald-200 mb-3" />
              <h3 className="font-semibold text-purple-700 mb-2">
                Visit Showroom
              </h3>
              <p className="text-sm text-gray-600 mb-2">
                See our systems in action
              </p>
              <p className="font-bold text-emerald-200">Schedule Tour</p>
            </div>
          </div>
        </div>

        {/* Enhanced Product Information Tabs */}
        <div className="mt-16">
          <div className="bg-gradient-to-br from-white/80 to-emerald-50/60 backdrop-blur-lg rounded-3xl border border-emerald-200/40 shadow-2xl shadow-emerald-100/30 overflow-hidden">
            {/* Tab Navigation */}
            <nav className="bg-gradient-to-r from-emerald-50/90 to-cyan-50/90 backdrop-blur-sm border-b border-emerald-200/50 p-2">
              <div className="flex bg-white/60 rounded-2xl p-1 shadow-inner">
                {[
                  {
                    id: "features",
                    label: "Smart Features",
                    icon: CircuitBoard,
                  },
                  { id: "specifications", label: "Tech Specs", icon: Settings },
                  {
                    id: "reviews",
                    label: `Reviews (${product.reviews})`,
                    icon: Star,
                  },
                  { id: "comparison", label: "Compare", icon: BarChart3 },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex-1 flex items-center justify-center gap-2 py-4 px-4 rounded-xl font-semibold text-sm transition-all duration-300 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-emerald-500 to-cyan-400 text-white shadow-lg shadow-emerald-200/50 transform scale-105"
                        : "text-gray-600 hover:text-emerald-700 hover:bg-emerald-50/50 hover:shadow-md"
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                    <span className="sm:hidden">
                      {tab.id === "reviews"
                        ? `★ ${product.reviews}`
                        : tab.label.split(" ")[0]}
                    </span>
                  </button>
                ))}
              </div>
            </nav>

            {/* Tab Content */}
            <div className="p-8 bg-gradient-to-br from-white/50 to-emerald-50/30 backdrop-blur-sm">
              {activeTab === "features" && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-3">
                      <CircuitBoard className="h-6 w-6 text-emerald-600" />
                      Advanced Features & Technology
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Discover the cutting-edge technology that makes{" "}
                      {product.name} the most advanced hydroponic system in its
                      class.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {product.features.map((feature, index) => (
                      <div
                        key={index}
                        className="group relative bg-gradient-to-br from-white/80 to-emerald-50/60 backdrop-blur-sm rounded-2xl border border-emerald-200/50 p-6 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        <div className="relative">
                          <div className="flex items-start gap-4">
                            {typeof feature === "object" && feature.icon ? (
                              <div className="p-3 bg-gradient-to-br from-emerald-100 to-cyan-100 rounded-xl shadow-md group-hover:shadow-lg transition-shadow">
                                <feature.icon className="h-6 w-6 text-emerald-600" />
                              </div>
                            ) : (
                              <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-cyan-400 rounded-full shadow-md mt-2"></div>
                            )}
                            <div className="flex-1">
                              <h4 className="text-lg font-bold text-gray-900 mb-2">
                                {typeof feature === "object"
                                  ? feature.title
                                  : feature}
                              </h4>
                              {typeof feature === "object" && feature.desc && (
                                <p className="text-gray-600 leading-relaxed">
                                  {feature.desc}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}{" "}
              {activeTab === "specifications" && (
                <div className="space-y-6">
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 flex items-center justify-center gap-3">
                      <Settings className="h-6 w-6 text-emerald-600" />
                      Technical Specifications
                    </h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                      Detailed technical specifications for the {product.name}{" "}
                      hydroponic system.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {product.specifications.map((spec, index) => (
                      <div
                        key={index}
                        className="group bg-gradient-to-br from-white/80 to-blue-50/40 backdrop-blur-sm rounded-xl border border-blue-200/50 p-5 shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        {typeof spec === "object" ? (
                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                              <div className="p-2 bg-gradient-to-br from-blue-100 to-emerald-100 rounded-lg group-hover:shadow-md transition-shadow">
                                {spec.icon && (
                                  <spec.icon className="h-5 w-5 text-blue-600" />
                                )}
                              </div>
                              <span className="font-semibold text-gray-900">
                                {spec.label}
                              </span>
                            </div>
                            <span className="text-gray-700 font-medium bg-white/60 px-3 py-1 rounded-lg">
                              {spec.value}
                            </span>
                          </div>
                        ) : (
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-gray-900">
                              {spec.split(":")[0]}
                            </span>
                            <span className="text-gray-700 font-medium bg-white/60 px-3 py-1 rounded-lg">
                              {spec.split(":")[1]}
                            </span>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Additional Compliance & Safety Info */}
                  <div className="mt-8 bg-gradient-to-br from-gray-50/80 to-blue-50/60 backdrop-blur-sm rounded-xl border border-gray-200/50 p-6">
                    <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                      <Shield className="h-5 w-5 text-green-600" />
                      Compliance & Safety
                    </h4>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                      <div className="bg-white/60 rounded-lg p-3">
                        <p className="text-xs text-gray-600">UL Listed</p>
                        <p className="font-semibold text-green-600">
                          ✓ Certified
                        </p>
                      </div>
                      <div className="bg-white/60 rounded-lg p-3">
                        <p className="text-xs text-gray-600">FDA Approved</p>
                        <p className="font-semibold text-green-600">
                          ✓ Materials
                        </p>
                      </div>
                      <div className="bg-white/60 rounded-lg p-3">
                        <p className="text-xs text-gray-600">Energy Star</p>
                        <p className="font-semibold text-green-600">
                          ✓ Efficient
                        </p>
                      </div>
                      <div className="bg-white/60 rounded-lg p-3">
                        <p className="text-xs text-gray-600">IP65 Rated</p>
                        <p className="font-semibold text-green-600">
                          ✓ Protected
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "reviews" && (
                <div className="space-y-6">
                  {/* Review Summary */}
                  <div className="bg-gradient-to-br from-yellow-50/80 to-orange-50/80 backdrop-blur-sm rounded-xl p-6 border border-yellow-200/50">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900 flex items-center gap-2">
                        <Star className="h-5 w-5 text-yellow-500" />
                        Customer Reviews
                      </h3>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {renderStars(product.rating)}
                        </div>
                        <span className="font-bold text-lg">
                          {product.rating}
                        </span>
                        <span className="text-gray-600">
                          ({product.reviews} reviews)
                        </span>
                      </div>
                    </div>
                    <div className="grid grid-cols-5 gap-2 mb-4">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-2">
                          <span className="text-sm">{stars}</span>
                          <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-yellow-400 h-2 rounded-full"
                              style={{
                                width: `${
                                  stars === 5 ? 75 : stars === 4 ? 20 : 5
                                }%`,
                              }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Individual Reviews */}
                  {[
                    {
                      name: "Sarah M.",
                      title: "Restaurant Owner",
                      content:
                        "This system has revolutionized our fresh herb supply. We're saving thousands monthly and our customers love the freshness!",
                      rating: 5,
                      verified: true,
                      helpful: 23,
                    },
                    {
                      name: "Mike D.",
                      title: "Commercial Farmer",
                      content:
                        "The AI climate control is incredible. Set it and forget it - perfect yields every time. ROI was achieved in just 6 months.",
                      rating: 5,
                      verified: true,
                      helpful: 18,
                    },
                    {
                      name: "Lisa K.",
                      title: "Grocery Store Manager",
                      content:
                        "Our customers specifically ask for Bhooyam-grown produce. The quality and consistency is unmatched.",
                      rating: 5,
                      verified: true,
                      helpful: 15,
                    },
                  ].map((review, i) => (
                    <div
                      key={i}
                      className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-emerald-100/30 shadow-sm hover:bg-white/70 hover:shadow-md transition-all"
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            {renderStars(review.rating)}
                            {review.verified && (
                              <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-medium">
                                Verified Purchase
                              </span>
                            )}
                          </div>
                          <p className="font-semibold text-gray-900">
                            {review.name}
                          </p>
                          <p className="text-sm text-emerald-600 font-medium">
                            {review.title}
                          </p>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed mb-4">
                        {review.content}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>Purchased {i + 2} months ago</span>
                        <button className="flex items-center gap-1 hover:text-emerald-600">
                          <span>Helpful ({review.helpful})</span>
                          <ChevronRight className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              {activeTab === "comparison" && (
                <div className="space-y-6">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Compare Bhooyam Models
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead>
                        <tr className="border-b border-emerald-200/50">
                          <th className="text-left p-4 font-semibold text-gray-900">
                            Feature
                          </th>
                          <th className="text-center p-4 font-semibold text-emerald-600">
                            Bhooyam Pro
                          </th>
                          <th className="text-center p-4 font-semibold text-blue-600">
                            Bhooyam Home
                          </th>
                          <th className="text-center p-4 font-semibold text-emerald-200">
                            Bhooyam Mini
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {[
                          {
                            feature: "Plant Capacity",
                            pro: "48 plants",
                            home: "24 plants",
                            mini: "12 plants",
                          },
                          {
                            feature: "Price",
                            pro: "$1,299",
                            home: "$699",
                            mini: "$349",
                          },
                          {
                            feature: "AI Control",
                            pro: "Advanced",
                            home: "Smart",
                            mini: "Basic",
                          },
                          {
                            feature: "App Control",
                            pro: "Full Suite",
                            home: "Standard",
                            mini: "Basic",
                          },
                          {
                            feature: "Best For",
                            pro: "Commercial",
                            home: "Families",
                            mini: "Beginners",
                          },
                          {
                            feature: "Setup Time",
                            pro: "30 min",
                            home: "15 min",
                            mini: "5 min",
                          },
                          {
                            feature: "ROI Period",
                            pro: "6-8 months",
                            home: "8-12 months",
                            mini: "12+ months",
                          },
                        ].map((row, index) => (
                          <tr
                            key={index}
                            className="border-b border-gray-100 hover:bg-emerald-50/30"
                          >
                            <td className="p-4 font-medium text-gray-900">
                              {row.feature}
                            </td>
                            <td className="p-4 text-center text-emerald-600 font-medium">
                              {row.pro}
                            </td>
                            <td className="p-4 text-center text-blue-600 font-medium">
                              {row.home}
                            </td>
                            <td className="p-4 text-center text-emerald-200 font-medium">
                              {row.mini}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <Link
                      href="/products/bhooyam-pro"
                      className="bg-emerald-50 border border-emerald-200 rounded-xl p-4 text-center hover:bg-emerald-100 transition-colors"
                    >
                      <h4 className="font-semibold text-emerald-700">
                        Bhooyam Pro
                      </h4>
                      <p className="text-sm text-emerald-600">
                        For Commercial Use
                      </p>
                    </Link>
                    <Link
                      href="/products/bhooyam-home"
                      className="bg-blue-50 border border-blue-200 rounded-xl p-4 text-center hover:bg-blue-100 transition-colors"
                    >
                      <h4 className="font-semibold text-blue-700">
                        Bhooyam Home
                      </h4>
                      <p className="text-sm text-blue-600">For Families</p>
                    </Link>
                    <Link
                      href="/products/bhooyam-mini"
                      className="bg-purple-50 border border-purple-200 rounded-xl p-4 text-center hover:bg-purple-100 transition-colors"
                    >
                      <h4 className="font-semibold text-purple-700">
                        Bhooyam Mini
                      </h4>
                      <p className="text-sm text-emerald-200">For Beginners</p>
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
