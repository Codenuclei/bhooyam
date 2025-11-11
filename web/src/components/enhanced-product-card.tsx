"use client";

import React, { useRef, useEffect, useState, useMemo } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import Image from "next/image";
import {
  Star,
  Heart,
  ShoppingBag,
  Eye,
  Award,
  Shield,
  Truck,
  Clock,
  ChevronRight,
  Zap,
  TrendingUp,
  Droplets,
  Sun,
  CheckCircle,
  ArrowUpRight,
  Bookmark,
  Share2,
} from "lucide-react";

// Enhanced Product Card with Perfect Blur and Etiquette Features
interface EnhancedProductData {
  id: string;
  name: string;
  description: string;
  price: string;
  originalPrice?: string;
  images: string[];
  rating: number;
  reviews: number;
  features: string[];
  badges: string[];
  inStock: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
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
}

// Perfect Blur Background Component
const PerfectBlurBackground = ({
  isActive,
  mousePosition,
}: {
  isActive: boolean;
  mousePosition: { x: number; y: number };
}) => {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl">
      {/* Primary Gradient Layer */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, 
            rgba(255, 255, 255, 0.95) 0%, 
            rgba(248, 250, 252, 0.9) 25%, 
            rgba(241, 245, 249, 0.85) 50%, 
            rgba(248, 250, 252, 0.9) 75%, 
            rgba(255, 255, 255, 0.95) 100%)`,
        }}
        animate={{
          opacity: isActive ? 1 : 0.8,
        }}
        transition={{ duration: 0.4 }}
      />

      {/* Perfect Blur Overlay */}
      <motion.div
        className="absolute inset-0 backdrop-blur-xl"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%, 
            rgba(59, 130, 246, 0.08) 0%, 
            rgba(99, 102, 241, 0.06) 30%, 
            transparent 70%)`,
        }}
        animate={{
          opacity: isActive ? 1 : 0,
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Minimal Glassmorphism Effect */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-sm border border-white/30" />

      {/* Subtle Accent Lines */}
      <motion.div
        className="absolute top-0 left-0 h-px bg-gradient-to-r from-transparent via-slate-300/50 to-transparent"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-0 right-0 w-px bg-gradient-to-t from-transparent via-slate-300/50 to-transparent h-full"
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
      />
    </div>
  );
};

// Enhanced Rating Component
const EnhancedRating = ({
  rating,
  reviews,
}: {
  rating: number;
  reviews: number;
}) => {
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    return (
      <div className="flex items-center gap-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
          >
            <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
          </motion.div>
        ))}
        {hasHalfStar && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: fullStars * 0.1,
              type: "spring",
              stiffness: 200,
            }}
          >
            <Star className="h-3.5 w-3.5 fill-amber-200 text-amber-400" />
          </motion.div>
        )}
        {[...Array(5 - fullStars - (hasHalfStar ? 1 : 0))].map((_, i) => (
          <motion.div
            key={`empty-${i}`}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              delay: (fullStars + (hasHalfStar ? 1 : 0) + i) * 0.1,
            }}
          >
            <Star className="h-3.5 w-3.5 text-gray-300" />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div className="flex items-center gap-2">
      {renderStars()}
      <span className="text-sm font-medium text-slate-700">{rating}</span>
      <span className="text-sm text-slate-500">({reviews} reviews)</span>
    </div>
  );
};

// Professional Metrics Display
const ProfessionalMetrics = ({
  metrics,
  isVisible,
}: {
  metrics: EnhancedProductData["metrics"];
  isVisible: boolean;
}) => {
  const metricConfigs = {
    efficiency: { icon: Zap, color: "amber", label: "Efficiency", unit: "%" },
    yield: { icon: TrendingUp, color: "emerald", label: "Yield", unit: "%" },
    waterSaving: {
      icon: Droplets,
      color: "blue",
      label: "Water Saving",
      unit: "%",
    },
    energyEfficiency: {
      icon: Sun,
      color: "orange",
      label: "Energy",
      unit: "%",
    },
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      {Object.entries(metrics).map(([key, value], index) => {
        const config = metricConfigs[key as keyof typeof metricConfigs];
        if (!config) return null;

        const IconComponent = config.icon;
        const colorClasses: Record<string, string> = {
          amber: "text-amber-600 bg-amber-50 border-amber-200",
          emerald: "text-emerald-600 bg-emerald-50 border-emerald-200",
          blue: "text-blue-600 bg-blue-50 border-blue-200",
          orange: "text-orange-600 bg-orange-50 border-orange-200",
        };

        return (
          <motion.div
            key={key}
            className={`relative p-3 rounded-xl border backdrop-blur-sm ${
              colorClasses[config.color]
            }`}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              y: isVisible ? 0 : 20,
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ scale: 1.05, y: -2 }}
          >
            <div className="flex items-center justify-between mb-2">
              <IconComponent
                className={`h-4 w-4 ${
                  colorClasses[config.color].split(" ")[0]
                }`}
              />
              <span className="text-sm font-bold">
                {value}
                {config.unit}
              </span>
            </div>
            <p className="text-xs font-medium opacity-80">{config.label}</p>

            {/* Progress Bar */}
            <div className="mt-2 h-1.5 bg-white/60 rounded-full overflow-hidden">
              <motion.div
                className={`h-full ${colorClasses[config.color]
                  .split(" ")[0]
                  .replace("text", "bg")}`}
                initial={{ width: "0%" }}
                animate={{ width: isVisible ? `${value}%` : "0%" }}
                transition={{
                  duration: 1,
                  delay: 0.5 + index * 0.1,
                  ease: "easeOut",
                }}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// Etiquette Features Component
const EtiquetteFeatures = ({
  features,
}: {
  features: EnhancedProductData["etiquetteFeatures"];
}) => {
  const featureIcons = {
    warranty: Shield,
    shipping: Truck,
    certification: Award,
    support: Clock,
  };

  return (
    <div className="space-y-2">
      {Object.entries(features).map(([key, value], index) => {
        const IconComponent = featureIcons[key as keyof typeof featureIcons];

        return (
          <motion.div
            key={key}
            className="flex items-center gap-3 p-2 rounded-lg bg-white/60 backdrop-blur-sm border border-slate-200/50"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
          >
            <div className="p-1.5 rounded-md bg-slate-100">
              <IconComponent className="h-3.5 w-3.5 text-slate-600" />
            </div>
            <div className="flex-1">
              <p className="text-xs font-medium text-slate-700 capitalize">
                {key}
              </p>
              <p className="text-xs text-slate-600">{value}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// Main Enhanced Product Card
export const EnhancedProductCard = ({
  product,
  index,
  isActive,
  onActivate,
}: {
  product: EnhancedProductData;
  index: number;
  isActive: boolean;
  onActivate: () => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorited, setIsFavorited] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.6,
          delay: index * 0.15,
          type: "spring",
          stiffness: 80,
        },
      });
    }
  }, [isInView, controls, index]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const discountPercentage = product.originalPrice
    ? Math.round(
        (1 -
          parseInt(product.price.slice(1)) /
            parseInt(product.originalPrice.slice(1))) *
          100
      )
    : 0;

  return (
    <motion.div
      ref={cardRef}
      className={`relative group cursor-pointer transition-all duration-500 ${
        isActive ? "scale-105 z-20" : "hover:scale-[1.02]"
      }`}
      initial={{ opacity: 0, y: 40, scale: 0.95 }}
      animate={controls}
      onClick={onActivate}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateY(${
              (mousePosition.x - 0.5) * 8
            }deg) rotateX(${(mousePosition.y - 0.5) * -5}deg)`
          : "perspective(1000px) rotateY(0deg) rotateX(0deg)",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Perfect Blur Background */}
      <PerfectBlurBackground
        isActive={isActive}
        mousePosition={mousePosition}
      />

      {/* Content Container */}
      <div
        className="relative z-10 p-6 h-full"
        onClick={() => (window.location.href = `/products/${product.id}`)}
      >
        {/* Product Header with Badges */}
        <div className="relative mb-4">
          {/* Product Image */}
          <div className="relative h-48 rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 mb-3">
            <Image
              src={product.images[currentImageIndex]}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Badges */}
            <div className="absolute top-3 left-3 flex flex-col gap-2">
              {product.isNew && (
                <span className="px-2 py-1 bg-blue-500 text-white text-xs font-bold rounded-full">
                  NEW
                </span>
              )}
              {product.isBestseller && (
                <span className="px-2 py-1 bg-amber-500 text-white text-xs font-bold rounded-full">
                  BESTSELLER
                </span>
              )}
              {discountPercentage > 0 && (
                <span className="px-2 py-1 bg-red-500 text-white text-xs font-bold rounded-full">
                  -{discountPercentage}%
                </span>
              )}
            </div>

            {/* Action Buttons */}
            <div className="absolute top-3 right-3 flex flex-col gap-2">
              <motion.button
                className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFavorited(!isFavorited);
                }}
              >
                <Heart
                  className={`h-4 w-4 ${
                    isFavorited ? "fill-red-500 text-red-500" : "text-slate-600"
                  }`}
                />
              </motion.button>
              <motion.button
                className="p-2 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <Share2 className="h-4 w-4 text-slate-600" />
              </motion.button>
            </div>

            {/* Stock Status */}
            <div className="absolute bottom-3 left-3">
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                  product.inStock
                    ? "bg-emerald-100 text-emerald-700 border border-emerald-200"
                    : "bg-red-100 text-red-700 border border-red-200"
                }`}
              >
                {product.inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>
          </div>

          {/* Image Indicators */}
          {product.images.length > 1 && (
            <div className="flex justify-center gap-1 mb-3">
              {product.images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentImageIndex(idx);
                  }}
                  className={`w-2 h-2 rounded-full transition-all ${
                    currentImageIndex === idx
                      ? "bg-blue-500 w-6"
                      : "bg-slate-300"
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-3">
          {/* Title and Rating */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              {product.name}
            </h3>
            <EnhancedRating rating={product.rating} reviews={product.reviews} />
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-slate-900">
              {product.price}
            </span>
            {product.originalPrice && (
              <span className="text-lg text-slate-500 line-through">
                {product.originalPrice}
              </span>
            )}
          </div>

          {/* Description */}
          <p className="text-sm text-slate-600 leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Professional Metrics */}
          <ProfessionalMetrics
            metrics={product.metrics}
            isVisible={isInView && (isActive || isHovered)}
          />

          {/* Etiquette Features */}
          <EtiquetteFeatures features={product.etiquetteFeatures} />

          {/* Action Buttons */}
          <div className="flex gap-2 pt-3">
            <motion.button
              className="flex-1 bg-slate-900 text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02, y: -1 }}
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingBag className="h-4 w-4" />
              Add to Cart
            </motion.button>
            <motion.button
              className="p-3 bg-slate-100 text-slate-700 rounded-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="h-4 w-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
