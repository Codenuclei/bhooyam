"use client";

import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { EnhancedProductCard } from "./enhanced-product-card";
import {
  Leaf,
  Droplets,
  Sun,
  Wind,
  Zap,
  TrendingUp,
  Shield,
  Award,
  ChevronRight,
  Play,
  Pause,
  RotateCcw,
} from "lucide-react";

// Advanced Particle System for Background
const ParticleField = ({ count = 100, speed = 0.01 }) => {
  const points = useRef<THREE.Points>(null);
  const particlesPosition = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * speed;
      points.current.rotation.y = state.clock.elapsedTime * speed * 0.5;
    }
  });

  const particlesMaterial = useMemo(
    () =>
      new THREE.PointsMaterial({
        color: "#10b981",
        size: 0.02,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      }),
    []
  );

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[particlesPosition, 3]}
          array={particlesPosition}
          count={particlesPosition.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <primitive object={particlesMaterial} attach="material" />
    </points>
  );
};

// Advanced Morphing Shape
const MorphingShape = ({ morphSpeed = 1 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const geometryRef = useRef<THREE.SphereGeometry>(null);

  useFrame((state) => {
    if (meshRef.current && geometryRef.current) {
      const time = state.clock.elapsedTime * morphSpeed;
      const positionAttribute = geometryRef.current.attributes.position;

      for (let i = 0; i < positionAttribute.count; i++) {
        const x = positionAttribute.getX(i);
        const y = positionAttribute.getY(i);
        const z = positionAttribute.getZ(i);

        const noise = Math.sin(time + x * 2) * Math.cos(time + y * 2) * 0.1;
        positionAttribute.setZ(i, z + noise);
      }

      positionAttribute.needsUpdate = true;
      meshRef.current.rotation.x = time * 0.3;
      meshRef.current.rotation.y = time * 0.2;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, 0]}>
      <sphereGeometry ref={geometryRef} args={[1, 64, 64]} />
      <meshStandardMaterial
        color="#059669"
        transparent
        opacity={0.3}
        wireframe
      />
    </mesh>
  );
};

// Advanced Interactive Product Card
interface ProductData {
  id: string;
  name: string;
  description: string;
  features: string[];
  metrics: {
    efficiency: number;
    yield: number;
    waterSaving: number;
    energyEfficiency: number;
  };
  price: string;
  image: string;
}

const InteractiveProductCard = ({
  product,
  index,
  isActive,
  onActivate,
}: {
  product: ProductData;
  index: number;
  isActive: boolean;
  onActivate: () => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();
  const isInView = useInView(cardRef, { once: true });

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  }, []);

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        y: 0,
        rotateX: 0,
        transition: {
          duration: 0.8,
          delay: index * 0.2,
          type: "spring",
          stiffness: 100,
        },
      });
    }
  }, [isInView, controls, index]);

  const cardVariants = {
    initial: { opacity: 0, y: 50, rotateX: 45 },
    animate: { opacity: 1, y: 0, rotateX: 0 },
  };

  const metricIcons = {
    efficiency: <Zap className="h-4 w-4" />,
    yield: <TrendingUp className="h-4 w-4" />,
    waterSaving: <Droplets className="h-4 w-4" />,
    energyEfficiency: <Sun className="h-4 w-4" />,
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative group cursor-pointer transition-all duration-500 ${
        isActive ? "scale-105 z-10" : ""
      }`}
      variants={cardVariants}
      initial="initial"
      animate={controls}
      onClick={onActivate}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        transform: isHovered
          ? `rotateY(${(mousePosition.x - 0.5) * 10}deg) rotateX(${
              (mousePosition.y - 0.5) * -10
            }deg)`
          : "rotateY(0deg) rotateX(0deg)",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Floating Canvas Background */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <ParticleField count={50} speed={0.005} />
          <MorphingShape morphSpeed={0.5} />
        </Canvas>
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/90 via-green-50/80 to-teal-50/90 backdrop-blur-sm" />
      </div>

      {/* Interactive Glow Effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%, rgba(16, 185, 129, 0.2) 0%, transparent 50%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 p-6 h-full bg-white/60 backdrop-blur-sm rounded-2xl border border-emerald-200/50 shadow-xl">
        {/* Product Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                {product.name}
              </h3>
              <p className="text-emerald-600 font-semibold">{product.price}</p>
            </div>
          </div>
          <motion.div
            animate={{ rotate: isActive ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronRight className="h-5 w-5 text-emerald-600" />
          </motion.div>
        </div>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-6 leading-relaxed">
          {product.description}
        </p>

        {/* Advanced Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {Object.entries(product.metrics).map(([key, value]) => (
            <motion.div
              key={key}
              className="bg-white/80 backdrop-blur-sm rounded-xl p-3 border border-emerald-100/50"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="text-emerald-600">
                  {metricIcons[key as keyof typeof metricIcons]}
                </div>
                <span className="text-xs font-medium text-gray-700 capitalize">
                  {key.replace(/([A-Z])/g, " $1").toLowerCase()}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-emerald-100 rounded-full h-2 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-emerald-500 to-green-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${value}%` }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
                <span className="text-sm font-bold text-emerald-600">
                  {value}%
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Features with Advanced Animations */}
        <div className="space-y-2">
          {product.features.slice(0, 3).map((feature, idx) => (
            <motion.div
              key={idx}
              className="flex items-center gap-2 text-sm text-gray-700"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 + idx * 0.1 }}
            >
              <motion.div
                className="w-2 h-2 bg-emerald-500 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  backgroundColor: ["#10b981", "#059669", "#10b981"],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: idx * 0.5,
                }}
              />
              <span>{feature}</span>
            </motion.div>
          ))}
        </div>

        {/* Interactive Action Button */}
        <motion.button
          className="w-full mt-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl font-semibold shadow-lg group relative overflow-hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            Explore Details
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ChevronRight className="h-4 w-4" />
            </motion.div>
          </span>
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.3 }}
          />
        </motion.button>
      </div>
    </motion.div>
  );
};

// Main Interactive Showcase Component
export const InteractiveProductShowcase = () => {
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

  const products = [
    {
      id: "bhooyam-pro",
      name: "Bhooyam Pro",
      description: "Professional autonomous hydroponic system with AI-powered climate control and advanced monitoring capabilities for commercial operations.",
      price: "$1,299",
      originalPrice: "$1,599",
      images: ["/WhatsApp Image 2025-11-07 at 21.58.23_1e9d59d5.jpg"],
      rating: 4.9,
      reviews: 124,
      features: [
        "48 plant capacity",
        "AI-powered climate control",
        "Mobile app monitoring",
        "Commercial-grade construction",
        "Automated nutrient dosing",
        "Real-time analytics dashboard"
      ],
      badges: ["Professional", "Commercial Grade"],
      inStock: true,
      isNew: true,
      isBestseller: true,
      metrics: {
        efficiency: 95,
        yield: 88,
        waterSaving: 90,
        energyEfficiency: 85
      },
      etiquetteFeatures: {
        warranty: "3 Year Commercial Warranty",
        shipping: "Free Express Delivery",
        certification: "CE, FCC, ISO Certified",
        support: "24/7 Priority Support"
      }
    },
    {
      id: "bhooyam-home",
      name: "Bhooyam Home",
      description: "Perfect for families with smart automation, energy efficient design, and easy smartphone control for home growing.",
      price: "$699",
      originalPrice: "$899",
      images: ["/WhatsApp Image 2025-11-07 at 21.58.23_1e9d59d5.jpg"],
      rating: 4.8,
      reviews: 89,
      features: [
        "24 plant capacity",
        "Smartphone control",
        "Auto nutrient dosing",
        "Energy efficient design",
        "LED grow lights included",
        "Water level sensors"
      ],
      badges: ["Family Favorite", "Energy Efficient"],
      inStock: true,
      isBestseller: true,
      metrics: {
        efficiency: 87,
        yield: 82,
        waterSaving: 85,
        energyEfficiency: 92
      },
      etiquetteFeatures: {
        warranty: "2 Year Home Warranty",
        shipping: "Free Standard Delivery",
        certification: "CE, FCC Certified",
        support: "Business Hours Support"
      }
    },
    {
      id: "bhooyam-compact",
      name: "Bhooyam Compact",
      description: "Compact solution for small spaces with essential features and beginner-friendly design perfect for apartments.",
      price: "$399",
      images: ["/WhatsApp Image 2025-11-07 at 21.58.23_1e9d59d5.jpg"],
      rating: 4.6,
      reviews: 56,
      features: [
        "12 plant capacity",
        "Basic app control",
        "Manual nutrient system",
        "LED lighting included",
        "Water circulation pump",
        "Compact desktop design"
      ],
      badges: ["Beginner Friendly", "Space Saver"],
      inStock: true,
      isNew: true,
      metrics: {
        efficiency: 78,
        yield: 75,
        waterSaving: 80,
        energyEfficiency: 88
      },
      etiquetteFeatures: {
        warranty: "1 Year Standard Warranty",
        shipping: "Free Standard Delivery",
        certification: "CE Certified",
        support: "Email Support"
      }
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlay && !activeProduct) {
      let currentIndex = 0;
      autoPlayRef.current = setInterval(() => {
        setActiveProduct(products[currentIndex].id);
        currentIndex = (currentIndex + 1) % products.length;
      }, 4000);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlay, activeProduct, products]);

  const handleProductActivate = (productId: string) => {
    setActiveProduct(activeProduct === productId ? null : productId);
    setIsAutoPlay(false);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
    if (!isAutoPlay) {
      setActiveProduct(null);
    }
  };

  const resetShowcase = () => {
    setActiveProduct(null);
    setIsAutoPlay(true);
  };

  return (
    <div className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(148, 163, 184, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(148, 163, 184, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Sophisticated Header */}
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-xl rounded-full border border-slate-200/50 shadow-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-slate-700">Premium Product Experience</span>
          </motion.div>

          <motion.h2
            className="text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Professional Hydroponic Systems
          </motion.h2>

          <motion.p
            className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover our award-winning collection of intelligent hydroponic systems designed for 
            exceptional performance, reliability, and sustainable growing excellence.
          </motion.p>

          {/* Control Panel */}
          <motion.div
            className="flex items-center justify-center gap-4 mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <button
              onClick={toggleAutoPlay}
              className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-emerald-200/50 shadow-lg hover:shadow-xl transition-all"
            >
              {isAutoPlay ? (
                <Pause className="h-4 w-4 text-emerald-600" />
              ) : (
                <Play className="h-4 w-4 text-emerald-600" />
              )}
              <span className="text-sm font-semibold text-gray-700">
                {isAutoPlay ? "Pause" : "Auto Play"}
              </span>
            </button>

            <button
              onClick={resetShowcase}
              className="flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-xl border border-emerald-200/50 shadow-lg hover:shadow-xl transition-all"
            >
              <RotateCcw className="h-4 w-4 text-emerald-600" />
              <span className="text-sm font-semibold text-gray-700">Reset</span>
            </button>
          </motion.div>
        </div>

        {/* Enhanced Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {products.map((product, index) => (
              <EnhancedProductCard
                key={product.id}
                product={product}
                index={index}
                isActive={activeProduct === product.id}
                onActivate={() => handleProductActivate(product.id)}
              />
            ))}
          </AnimatePresence>
        </div>

        {/* Advanced Status Indicators */}
        <motion.div
          className="flex justify-center mt-12 gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          {products.map((product, index) => (
            <motion.button
              key={product.id}
              onClick={() => handleProductActivate(product.id)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeProduct === product.id
                  ? "bg-emerald-500 w-8"
                  : "bg-emerald-200 hover:bg-emerald-300"
              }`}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            />
          ))}
        </motion.div>
      </div>
    </div>
  );
};
