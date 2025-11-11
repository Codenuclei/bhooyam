"use client";

import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useAnimation,
  useInView,
  AnimatePresence,
} from "framer-motion";
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
  Sparkles,
  Activity,
  BarChart3,
} from "lucide-react";

// Advanced Floating Particles Animation
const FloatingParticles = ({ count = 20 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<
    Array<{
      id: number;
      x: number;
      y: number;
      size: number;
      delay: number;
      duration: number;
      color: string;
    }>
  >([]);

  useEffect(() => {
    const newParticles = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 1,
      delay: Math.random() * 5,
      duration: Math.random() * 10 + 10,
      color: ["#10b981", "#059669", "#34d399", "#6ee7b7", "#a7f3d0"][
        Math.floor(Math.random() * 5)
      ],
    }));
    setParticles(newParticles);
  }, [count]);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 overflow-hidden pointer-events-none"
    >
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-60"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            backgroundColor: particle.color,
          }}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, -15, 0],
            scale: [1, 1.2, 0.8, 1],
            opacity: [0.6, 0.8, 0.4, 0.6],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Advanced Metrics Display
const AdvancedMetrics = ({
  metrics,
  isVisible,
}: {
  metrics: Record<string, number>;
  isVisible: boolean;
}) => {
  const metricConfigs = {
    efficiency: {
      icon: Zap,
      color: "from-yellow-400 to-orange-500",
      label: "Efficiency",
    },
    yield: {
      icon: TrendingUp,
      color: "from-green-400 to-emerald-500",
      label: "Yield",
    },
    waterSaving: {
      icon: Droplets,
      color: "from-blue-400 to-cyan-500",
      label: "Water Saving",
    },
    energyEfficiency: {
      icon: Sun,
      color: "from-amber-400 to-yellow-500",
      label: "Energy",
    },
  };

  return (
    <div className="grid grid-cols-2 gap-3">
      {Object.entries(metrics).map(([key, value], index) => {
        const config = metricConfigs[key as keyof typeof metricConfigs];
        if (!config) return null;

        const IconComponent = config.icon;

        return (
          <motion.div
            key={key}
            className="relative overflow-hidden bg-white/90 backdrop-blur-sm rounded-xl p-3 border border-gray-200/50"
            initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
            animate={{
              opacity: isVisible ? 1 : 0,
              scale: isVisible ? 1 : 0.8,
              rotateY: isVisible ? 0 : 90,
            }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
            whileHover={{ scale: 1.05, rotateX: 5 }}
          >
            {/* Animated Background Gradient */}
            <motion.div
              className={`absolute inset-0 bg-gradient-to-br ${config.color} opacity-10`}
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <motion.div
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <IconComponent
                    className={`h-4 w-4 bg-gradient-to-r ${config.color} bg-clip-text text-transparent`}
                  />
                </motion.div>
                <motion.span
                  className="text-lg font-bold text-gray-800"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  {value}%
                </motion.span>
              </div>

              <div className="space-y-2">
                <p className="text-xs font-medium text-gray-600">
                  {config.label}
                </p>
                <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                  <motion.div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${config.color} rounded-full`}
                    initial={{ width: "0%" }}
                    animate={{ width: isVisible ? `${value}%` : "0%" }}
                    transition={{
                      duration: 1.5,
                      delay: 0.3 + index * 0.2,
                      ease: "easeOut",
                    }}
                  />

                  {/* Animated Pulse Effect */}
                  <motion.div
                    className={`absolute inset-y-0 left-0 bg-gradient-to-r ${config.color} rounded-full opacity-60`}
                    initial={{ width: "0%" }}
                    animate={{
                      width: isVisible
                        ? [
                            `0%`,
                            `${value}%`,
                            `${Math.min(value + 10, 100)}%`,
                            `${value}%`,
                          ]
                        : "0%",
                      opacity: [0.6, 0.8, 0.4, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      delay: 1 + index * 0.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

// Advanced Product Card with Complex Animations
export const AdvancedProductCard = ({
  product,
  index,
  isActive,
  onActivate,
}: {
  product: {
    id: string;
    name: string;
    description: string;
    features: string[];
    metrics: Record<string, number>;
    price: string;
    image: string;
  };
  index: number;
  isActive: boolean;
  onActivate: () => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const isInView = useInView(cardRef, { once: true, amount: 0.3 });
  const controls = useAnimation();

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

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setMousePosition({ x, y });
  };

  const cardVariants = {
    initial: {
      opacity: 0,
      y: 60,
      rotateX: 45,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
    },
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative group cursor-pointer transition-all duration-700 ${
        isActive ? "scale-105 z-20" : "hover:scale-102"
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
          ? `perspective(1000px) rotateY(${
              (mousePosition.x - 0.5) * 15
            }deg) rotateX(${(mousePosition.y - 0.5) * -10}deg)`
          : "perspective(1000px) rotateY(0deg) rotateX(0deg)",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Dynamic Background with Floating Particles */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        <FloatingParticles count={15} />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-emerald-50/80 via-green-50/60 to-teal-50/80 backdrop-blur-sm"
          animate={{
            background: isActive
              ? "linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.15) 50%, rgba(13, 148, 136, 0.1) 100%)"
              : "linear-gradient(135deg, rgba(240, 253, 249, 0.8) 0%, rgba(236, 253, 245, 0.6) 50%, rgba(240, 253, 250, 0.8) 100%)",
          }}
          transition={{ duration: 0.5 }}
        />
      </div>

      {/* Interactive Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x * 100}% ${
            mousePosition.y * 100
          }%, rgba(16, 185, 129, 0.3) 0%, rgba(16, 185, 129, 0.1) 40%, transparent 70%)`,
        }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      {/* Main Content */}
      <div className="relative z-10 p-6 h-full bg-white/70 backdrop-blur-sm rounded-2xl border border-emerald-200/50 shadow-xl hover:shadow-2xl transition-shadow duration-500">
        {/* Header with Enhanced Animation */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <motion.div
              className="relative w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center overflow-hidden"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Leaf className="h-6 w-6 text-white" />
              </motion.div>

              {/* Sparkle Effects */}
              <motion.div
                className="absolute top-1 right-1"
                animate={{
                  opacity: [0, 1, 0],
                  scale: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: 1,
                }}
              >
                <Sparkles className="h-2 w-2 text-yellow-300" />
              </motion.div>
            </motion.div>

            <div>
              <motion.h3
                className="text-xl font-bold text-gray-900"
                animate={{
                  color: isActive ? "#059669" : "#111827",
                }}
                transition={{ duration: 0.3 }}
              >
                {product.name}
              </motion.h3>
              <motion.p
                className="text-emerald-600 font-semibold"
                animate={{
                  scale: isActive ? [1, 1.05, 1] : 1,
                }}
                transition={{
                  duration: 1,
                  repeat: isActive ? Infinity : 0,
                }}
              >
                {product.price}
              </motion.p>
            </div>
          </div>

          <motion.div
            animate={{
              rotate: isActive ? 90 : 0,
              scale: isActive ? 1.2 : 1,
            }}
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
          >
            <ChevronRight
              className={`h-5 w-5 ${
                isActive ? "text-emerald-600" : "text-gray-400"
              }`}
            />
          </motion.div>
        </div>

        {/* Enhanced Description */}
        <motion.p
          className="text-gray-600 text-sm mb-6 leading-relaxed"
          initial={{ opacity: 0.8 }}
          animate={{ opacity: isActive ? 1 : 0.8 }}
          transition={{ duration: 0.3 }}
        >
          {product.description}
        </motion.p>

        {/* Advanced Metrics */}
        <div className="mb-6">
          <AdvancedMetrics
            metrics={product.metrics}
            isVisible={isInView && (isActive || isHovered)}
          />
        </div>

        {/* Enhanced Features */}
        <div className="space-y-2 mb-6">
          <AnimatePresence>
            {product.features.slice(0, 3).map((feature, idx) => (
              <motion.div
                key={feature}
                className="flex items-center gap-3 text-sm text-gray-700 bg-white/60 backdrop-blur-sm rounded-lg p-2 border border-emerald-100/50"
                initial={{ opacity: 0, x: -20, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.9 }}
                transition={{
                  delay: index * 0.1 + idx * 0.1,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <motion.div
                  className="w-2 h-2 bg-emerald-500 rounded-full relative"
                  animate={{
                    scale: [1, 1.3, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(16, 185, 129, 0.5)",
                      "0 0 0 4px rgba(16, 185, 129, 0.1)",
                      "0 0 0 0 rgba(16, 185, 129, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.3,
                  }}
                />
                <span className="flex-1">{feature}</span>
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: idx * 0.5,
                  }}
                >
                  <Activity className="h-3 w-3 text-emerald-500" />
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Advanced Action Button */}
        <motion.button
          className="w-full relative overflow-hidden py-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white rounded-xl font-semibold shadow-lg group"
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          transition={{ type: "spring", stiffness: 400 }}
        >
          {/* Animated Background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-600"
            initial={{ x: "-100%", skewX: 45 }}
            whileHover={{ x: "0%", skewX: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          {/* Button Content */}
          <span className="relative z-10 flex items-center justify-center gap-2">
            <motion.span
              animate={{
                backgroundImage: isActive
                  ? [
                      "linear-gradient(45deg, #ffffff, #f0fdf4)",
                      "linear-gradient(45deg, #f0fdf4, #ffffff)",
                    ]
                  : "linear-gradient(45deg, #ffffff, #ffffff)",
              }}
              transition={{ duration: 1, repeat: isActive ? Infinity : 0 }}
              style={{
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Explore Advanced Features
            </motion.span>

            <motion.div
              animate={{
                x: [0, 5, 0],
                rotate: [0, 15, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <BarChart3 className="h-4 w-4 text-white" />
            </motion.div>
          </span>

          {/* Shimmer Effect */}
          <motion.div
            className="absolute inset-0 -skew-x-12 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ["-100%", "100%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.button>
      </div>
    </motion.div>
  );
};
