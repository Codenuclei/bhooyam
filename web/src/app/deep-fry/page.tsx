"use client";
import React, { useEffect, useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  FaLeaf,
  FaStar,
  FaShippingFast,
  FaUsers,
  FaRobot,
  FaArrowRight,
  FaBolt,
  FaRulerCombined,
  FaWeightHanging,
  FaSeedling,
  FaAward,
  FaShieldAlt,
  FaSyncAlt,
  FaPercentage,
  FaChartLine,
  FaBox,
  FaUserCheck,
  FaMinus,
  FaPlus,
  FaClock,
  FaSmile,
  FaGift,
} from "react-icons/fa";
import { IoMdClose, IoMdMail } from "react-icons/io";
import { MdOutlineWaterDrop } from "react-icons/md";
import { BiDroplet, BiLeaf, BiAtom } from "react-icons/bi";
import { GiPlantSeed } from "react-icons/gi";

// Modern 2025 design trends implementation
// - Glassmorphism 2.0 with depth-aware blur
// - Micro-interactions and scroll-triggered animations
// - AI-assisted UI patterns with predictive elements
// - Bold minimalist typography with variable fonts
// - 3D product visualization with perspective effects
// - Gradient intelligence system
// - Accessibility-first design with semantic HTML
// - Kinetic typography and dynamic text scaling
// - Immersive background experiences with parallax
// - Cursor-aware interactions and hover effects

export default function HydroProductPage() {
  // Mock data remains the same but enhanced for modern UI

  const mockProduct = {
    id: "hydro-1",
    name: "AeroMint Hydroponic Kit",
    tagline: "Smart, compact, and whisper-quiet hydroponics for modern homes",
    price: 249,
    images: [
      "/WhatsApp Image 2025-11-07 at 21.58.23_1e9d59d5.jpg",
      "/WhatsApp Image 2025-11-07 at 21.58.23_29c76e62.jpg",
      "/WhatsApp Image 2025-11-07 at 21.58.23_3e2b8f5a.jpg",
      "/WhatsApp Image 2025-11-07 at 21.58.23_5a9d2c7e.jpg",
      "/WhatsApp Image 2025-11-07 at 21.58.23_7f1b5e9c.jpg",
      "/WhatsApp Image 2025-11-07 at 21.58.23_9e5c2a8d.jpg",
      "/WhatsApp Image 2025-11-07 at 21.58.23_b2f8e1a7.jpg",
      "/WhatsApp Image 2025-11-07 at 21.58.23_d4c9f6e2.jpg",
      "/WhatsApp Image 2025-11-07 at 21.58.23_f8a3d7b9.jpg",
    ],
    colors: ["#86efac", "#94a3b8", "#f8fafc"],
    colorNames: ["Mint", "Slate", "White"],
    features: [
      {
        icon: <BiDroplet className="text-2xl" />,
        title: "Closed-loop nutrient delivery",
        desc: "Self-regulating system for optimal plant health",
      },
      {
        icon: <FaBolt className="text-2xl" />,
        title: "Whisper-quiet pump (< 32dB)",
        desc: "Operates quieter than a library whisper",
      },
      {
        icon: <FaRobot className="text-2xl" />,
        title: "App + local controls",
        desc: "Smart scheduling & real-time sensor monitoring",
      },
      {
        icon: <FaBox className="text-2xl" />,
        title: "Modular grow trays",
        desc: "Expand your system as your garden grows",
      },
    ],
    description:
      "AeroMint brings maximum yield from minimal space. Surgical-grade lighting and intelligent sensors ensure your plants thrive with minimal intervention.",
    specs: {
      power: "18W (Energy Star certified)",
      dimensions: "40 × 18 × 35 cm",
      weight: "3.2 kg (lightweight aircraft-grade aluminum)",
      reservoir: "1.5 L self-cleaning system",
    },
  };

  const mockPurchases = [
    {
      id: 1,
      name: "Riya",
      avatar: <FaLeaf className="text-emerald-400" />,
      qty: 1,
      when: "2h",
    },
    {
      id: 2,
      name: "Arjun",
      avatar: <BiLeaf className="text-emerald-400" />,
      qty: 2,
      when: "6h",
    },
    {
      id: 3,
      name: "Zoe",
      avatar: <GiPlantSeed className="text-emerald-400" />,
      qty: 1,
      when: "1d",
    },
  ];

  // Enhanced state management with modern patterns
  const [bgIndex, setBgIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const [cart, setCart] = useState<{
    productId: string;
    qty: number;
    price: number;
  } | null>(null);
  const [showBeta, setShowBeta] = useState(false);
  const [betaEmail, setBetaEmail] = useState("");
  const [purchases, setPurchases] = useState(mockPurchases);
  const [selectedColor, setSelectedColor] = useState(0);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isScrolled, setIsScrolled] = useState(false);

  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.95]);
  const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.8]);

  // Advanced background carousel with fade transitions
  useEffect(() => {
    const id = setInterval(
      () => setBgIndex((i) => (i + 1) % mockProduct.images.length),
      4000
    );
    return () => clearInterval(id);
  }, []);

  // Cursor tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: { clientX: number; clientY: number }) => {
      setCursorPosition({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Scroll detection for header effects
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function addToPreorder() {
    setCart({ productId: mockProduct.id, qty, price: mockProduct.price * qty });
    setPurchases((p) => [
      {
        id: Date.now(),
        name: "You",
        avatar: <FaUserCheck className="text-emerald-400" />,
        qty,
        when: "just now",
      },
      ...p.slice(0, 5), // Keep it clean
    ]);

    // Micro-interaction feedback
    navigator.vibrate?.(50);
  }

  function joinBeta(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (!betaEmail.includes("@")) {
      alert("Please enter a valid email address");
      return;
    }

    setShowBeta(false);
    alert(
      `Perfect! We'll reach out to ${betaEmail} with your beta access details.`
    );
    setBetaEmail("");
  }

  // AI-assisted purchase suggestion
  const aiSuggestion =
    qty > 1
      ? `💡 Smart suggestion: Most growers start with ${qty} units for optimal yield distribution`
      : `💡 Pro tip: Consider adding a spare nutrient cartridge for uninterrupted growth cycles`;

  return (
    <div
      ref={containerRef}
      className="min-h-screen font-sans antialiased bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 text-gray-900 overflow-x-hidden transition-colors duration-500"
    >
      {/* Enhanced hero with parallax and depth effects */}
      <motion.header
        style={{ scale: headerScale, opacity: heroOpacity }}
        className="relative h-screen min-h-[80vh] flex items-center overflow-hidden"
      >
        {/* Advanced background system with multiple layers */}
        <div className="absolute inset-0">
          {mockProduct.images.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{
                opacity: index === bgIndex ? 1 : 0,
                scale: index === bgIndex ? 1.05 : 1.1,
              }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className={`absolute inset-0 -z-10 ${
                index === bgIndex ? "brightness-90" : "brightness-75 blur-sm"
              }`}
            >
              <div className="w-full h-full relative">
                <motion.img
                  src={image}
                  alt={`Hero background ${index + 1}`}
                  className="w-full h-full object-cover"
                  style={{
                    x: -cursorPosition.x * 20,
                    y: -cursorPosition.y * 20,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-transparent to-white/80" />
              </div>
            </motion.div>
          ))}

          {/* Animated gradient overlay */}
          <motion.div
            animate={{
              background: [
                "linear-gradient(45deg, rgba(34,197,94,0.1), transparent 70%)",
                "linear-gradient(135deg, transparent 30%, rgba(59,130,246,0.15))",
                "linear-gradient(45deg, rgba(34,197,94,0.1), transparent 70%)",
              ],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 -z-10"
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 md:px-8 w-full">
          {/* Modern minimalist navigation */}
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className={`flex items-center justify-between py-4 ${
              isScrolled
                ? "backdrop-blur-xl bg-white/80 shadow-lg"
                : "bg-transparent"
            } rounded-full px-4 md:px-6 transition-all duration-300`}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 cursor-pointer"
            >
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 shadow-lg flex items-center justify-center font-bold text-white text-xl">
                <motion.span
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                >
                  AM
                </motion.span>
              </div>
              <span className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                Aero<span className="text-gray-700">Mint</span>
              </span>
            </motion.div>

            <div className="flex items-center gap-3">
              <motion.button
                whileHover={{ x: 5 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowBeta(true)}
                className="relative group rounded-full px-4 py-2 text-sm font-medium bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-1">
                  <span>🌱 Beta Access</span>
                  <span className="bg-white/20 backdrop-blur-sm rounded-full px-1.5 py-0.5 text-xs flex items-center">
                    <BiAtom className="mr-1 text-xs" /> AI Enhanced
                  </span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>
          </motion.nav>

          {/* Hero content with kinetic typography */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="pt-16 md:pt-24 max-w-3xl"
          >
            <motion.div
              className="overflow-hidden mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold leading-tight tracking-tight"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #10b981, #0ea5e9, #8b5cf6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
                initial={{ y: 20 }}
                animate={{ y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="block"
                >
                  <FaSeedling className="inline-block mr-2 text-emerald-500" />{" "}
                  Grow
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="block bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent"
                >
                  Smarter,
                </motion.span>
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="block"
                >
                  Not Harder
                </motion.span>
              </motion.h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="text-xl md:text-2xl text-gray-700 mb-8"
            >
              The world's most intelligent hydroponic system for urban homes and
              conscious growers.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                whileHover={{
                  y: -2,
                  boxShadow: "0 10px 25px -5px rgba(16, 185, 129, 0.4)",
                }}
                whileTap={{ scale: 0.98 }}
                onClick={() =>
                  document
                    .getElementById("product-preview")
                    ?.scrollIntoView({ behavior: "smooth" })
                }
                className="group relative rounded-xl px-6 py-3 text-lg font-semibold bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>✨ See Magic</span>
                  <FaArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowBeta(true)}
                className="relative rounded-xl px-6 py-3 text-lg font-medium bg-white/80 backdrop-blur-sm border border-gray-200 shadow-sm hover:bg-gray-50 transition-all duration-300"
              >
                <span className="flex items-center gap-2">
                  <span>🧪 Early Access</span>
                  <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-bold">
                    47% off
                  </span>
                </span>
              </motion.button>
            </motion.div>

            {/* Social proof with micro-animations */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex flex-wrap gap-4 text-sm"
            >
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium">1,247 growers</span>
                <span className="text-gray-600">joined this week</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 border border-gray-200">
                <FaStar className="h-4 w-4 text-yellow-400" />
                <span className="font-bold text-yellow-600">4.9</span>
                <span className="text-gray-600">· 287 reviews</span>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* 3D product preview floating element */}
        <motion.div
          id="product-preview"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.0 }}
          className="absolute bottom-8 right-4 md:right-8 w-48 md:w-64 h-48 md:h-64 rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl overflow-hidden cursor-grab active:cursor-grabbing"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateX(${(cursorPosition.y - 0.5) * 10}deg) rotateY(${
              (cursorPosition.x - 0.5) * -15
            }deg)`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-500/20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center p-4">
              <div className="w-24 h-24 mx-auto rounded-lg bg-gradient-to-br from-emerald-300 to-teal-400 flex items-center justify-center shadow-lg">
                <BiLeaf className="text-4xl text-white" />
              </div>
              <p className="mt-2 text-sm font-medium text-white">
                Interactive Preview
              </p>
            </div>
          </div>
        </motion.div>
      </motion.header>

      {/* Main content with scroll-triggered animations */}
      <main className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-16">
        {/* Product showcase section */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700 mb-4"
            >
              <BiLeaf className="inline-block mr-1" /> Smart Hydroponics
              Redefined
            </motion.span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              The Future of Home Growing
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              AeroMint combines cutting-edge technology with elegant design to
              make hydroponic gardening accessible, efficient, and beautiful.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 md:p-8 border border-gray-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center flex-shrink-0">
                    <BiAtom className="text-xl text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      AI-Powered Growth
                    </h3>
                    <p className="text-gray-600">
                      Our neural network analyzes your plants 24/7, adjusting
                      light, nutrients, and water delivery for optimal growth
                      cycles.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mt-6">
                  {mockProduct.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white/50 backdrop-blur-sm rounded-xl p-4 border border-gray-200/30"
                    >
                      <div className="mb-2">{feature.icon}</div>
                      <h4 className="font-semibold mb-1">{feature.title}</h4>
                      <p className="text-sm text-gray-600">{feature.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-6 border border-emerald-200"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center">
                    <BiAtom className="text-white font-bold text-sm" />
                  </div>
                  <h4 className="font-bold text-lg">Smart Recommendation</h4>
                </div>
                <p className="text-gray-700">
                  Based on your space and growing preferences, our AI suggests
                  the perfect starter kit configuration for maximum yield.
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {[
                    "🥬 Leafy Greens",
                    "🍓 Berries",
                    "🌶️ Herbs",
                    "🌸 Flowers",
                  ].map((plant, index) => (
                    <motion.button
                      key={index}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className="px-3 py-1 rounded-full text-sm font-medium bg-white/80 backdrop-blur-sm border border-emerald-200 text-emerald-700 hover:bg-emerald-50 transition-all duration-200"
                    >
                      {plant}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Enhanced product visualization */}
              <div className="relative bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-4 md:p-8 shadow-2xl border border-gray-200/50 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/5 to-teal-500/5 opacity-30 rounded-2xl" />

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold text-gray-900">
                      Product Explorer
                    </h3>
                    <div className="flex gap-2">
                      {mockProduct.colorNames.map((color, index) => (
                        <motion.button
                          key={index}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedColor(index)}
                          className={`w-8 h-8 rounded-full border-2 transition-all duration-300 ${
                            selectedColor === index
                              ? "ring-2 ring-offset-2 ring-emerald-500 ring-offset-white"
                              : "border-gray-300"
                          }`}
                          style={{
                            background: mockProduct.colors[index],
                            borderColor: mockProduct.colors[index],
                          }}
                          aria-label={`Select ${color} color`}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="relative aspect-square rounded-2xl bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl border border-white/20 mb-6 overflow-hidden">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 flex items-center justify-center"
                      style={{
                        backgroundImage: `radial-gradient(circle at ${
                          cursorPosition.x * 100
                        }% ${
                          cursorPosition.y * 100
                        }%, rgba(255,255,255,0.1), transparent 40%)`,
                      }}
                    >
                      <div className="text-center p-8">
                        <div className="w-32 h-32 mx-auto rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg transform rotate-6">
                          <BiLeaf className="text-5xl text-white" />
                        </div>
                        <p className="mt-4 text-lg font-semibold text-gray-800">
                          {mockProduct.colorNames[selectedColor]} Edition
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span className="font-medium">Preorder Price</span>
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-600 to-teal-600">
                          ₹{mockProduct.price}
                        </span>
                      </div>
                      <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: "85%" }}
                          className="h-full bg-gradient-to-r from-emerald-500 to-teal-600"
                        />
                      </div>
                      <p className="text-xs text-gray-500 mt-1">
                        <FaUsers className="inline-block mr-1 text-emerald-500" />
                        85% of early batch claimed • Ships Q1 2026
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">
                          Quantity
                        </label>
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => setQty(Math.max(1, qty - 1))}
                            className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            <FaMinus className="text-lg text-gray-600" />
                          </button>
                          <input
                            type="number"
                            min={1}
                            max={10}
                            value={qty}
                            onChange={(e) =>
                              setQty(
                                Math.max(
                                  1,
                                  Math.min(10, Number(e.target.value || 1))
                                )
                              )
                            }
                            className="w-16 text-center rounded-lg border border-gray-300 py-1 px-2 focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                          />
                          <button
                            onClick={() => setQty(Math.min(10, qty + 1))}
                            className="w-8 h-8 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          >
                            <FaPlus className="text-lg text-gray-600" />
                          </button>
                        </div>
                      </div>
                      <div className="flex-1">
                        <label className="block text-sm font-medium mb-1">
                          Estimated Yield
                        </label>
                        <div className="bg-white/80 backdrop-blur-sm rounded-lg p-3 text-center border border-gray-200/50">
                          <div className="text-2xl font-bold text-emerald-600">
                            {qty * 2.5}kg
                          </div>
                          <p className="text-xs text-gray-500 mt-1">
                            <FaChartLine className="inline-block mr-1" />
                            per harvest cycle
                          </p>
                        </div>
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.3 }}
                      className="text-sm text-emerald-600 bg-emerald-50 p-3 rounded-lg flex items-center"
                    >
                      <BiAtom className="mr-2 text-lg" />
                      {aiSuggestion}
                    </motion.div>

                    <motion.button
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={addToPreorder}
                      className="w-full rounded-xl py-4 px-6 text-lg font-bold bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>🌱 Preorder Now</span>
                      <span className="bg-white/20 backdrop-blur-sm px-2 py-0.5 rounded-full text-sm flex items-center">
                        <FaClock className="mr-1" /> Early Access
                      </span>
                    </motion.button>
                  </div>
                </div>
              </div>

              {/* Enhanced social proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-6 grid grid-cols-2 gap-3"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                  <div className="flex items-center gap-2 mb-2">
                    {purchases.slice(0, 3).map((purchase, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-lg ${
                          index === 0
                            ? "bg-gradient-to-br from-emerald-400 to-teal-500"
                            : index === 1
                            ? "bg-gradient-to-br from-purple-400 to-pink-500"
                            : "bg-gradient-to-br from-blue-400 to-cyan-500"
                        } text-white`}
                      >
                        {purchase.avatar}
                      </motion.div>
                    ))}
                  </div>
                  <p className="font-medium">1,247 preorders</p>
                  <p className="text-xs text-gray-500">since launch</p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
                  <div className="flex items-center gap-2 mb-2">
                    <FaAward className="text-2xl text-yellow-400" />
                    <span className="font-bold text-yellow-600">#1</span>
                  </div>
                  <p className="font-medium">Top Innovation</p>
                  <p className="text-xs text-gray-500">
                    2025 Green Tech Awards
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Technical specs with modern data visualization */}
        <section className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
              Technical Excellence
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Engineering meets artistry in every component
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(mockProduct.specs).map(([key, value], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/80 backdrop-blur-xl rounded-2xl p-6 border border-gray-200/50 hover:border-emerald-300 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center mb-4">
                  <span className="text-lg font-bold text-white">
                    {key === "power" ? (
                      <FaBolt />
                    ) : key === "dimensions" ? (
                      <FaRulerCombined />
                    ) : key === "weight" ? (
                      <FaWeightHanging />
                    ) : (
                      <MdOutlineWaterDrop />
                    )}
                  </span>
                </div>
                <h4 className="text-lg font-semibold mb-1 capitalize">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </h4>
                <p className="text-gray-700 font-medium">{value}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Beta tester section with modern form design */}
        <section className="relative rounded-3xl overflow-hidden mb-24">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-600/10" />
          <div className="relative z-10 p-8 md:p-12 bg-gradient-to-br from-white/90 to-gray-50/90 backdrop-blur-xl border border-gray-200/50 rounded-3xl">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-emerald-50 text-emerald-700 mb-4"
              >
                <IoMdMail className="inline-block mr-1" /> Exclusive Early
                Access
              </motion.div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                Shape the Future of Smart Gardening
              </h2>
              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Join our AI-assisted beta program and help us build the perfect
                hydroponic system for your needs.
              </p>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setShowBeta(true)}
                className="group relative inline-flex items-center px-8 py-4 text-lg font-bold rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span>Apply for Beta Access</span>
                  <FaArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-teal-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>

              <div className="mt-8 flex justify-center gap-8 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">94%</div>
                  <p className="text-gray-600 flex items-center justify-center">
                    <FaSmile className="mr-1" /> Satisfaction Rate
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">68%</div>
                  <p className="text-gray-600 flex items-center justify-center">
                    <FaChartLine className="mr-1" /> Higher Yield
                  </p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-emerald-600">
                    24/7
                  </div>
                  <p className="text-gray-600 flex items-center justify-center">
                    <FaRobot className="mr-1" /> AI Support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA with enhanced design */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden mb-24"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-600 to-teal-700 opacity-90" />
          <div className="absolute inset-0 bg-grid-pattern opacity-20" />

          <div className="relative z-10 p-8 md:p-12 text-center">
            <div className="max-w-4xl mx-auto">
              <motion.span
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="inline-block px-4 py-1 rounded-full text-sm font-medium bg-white/20 backdrop-blur-sm text-white mb-4"
              >
                <FaGift className="inline-block mr-1" /> Limited Early Access
                Offer
              </motion.span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Transform Your Growing Experience?
              </h2>
              <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
                Join thousands of forward-thinking growers who are already
                harvesting more with less effort.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 text-white">
                  <span className="text-2xl font-bold">
                    ₹{mockProduct.price}
                  </span>
                  <span className="text-emerald-200 line-through">₹499</span>
                  <span className="bg-white/20 px-2 py-0.5 rounded-full text-sm font-medium flex items-center">
                    <FaPercentage className="mr-1" /> 50% OFF Early Bird
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="number"
                  min={1}
                  max={10}
                  value={qty}
                  onChange={(e) =>
                    setQty(
                      Math.max(1, Math.min(10, Number(e.target.value || 1)))
                    )
                  }
                  className="flex-1 rounded-xl px-4 py-3 text-lg font-medium text-center bg-white/90 text-gray-900 focus:ring-2 focus:ring-white focus:border-transparent"
                  placeholder="Quantity"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={addToPreorder}
                  className="rounded-xl px-8 py-3 text-lg font-bold bg-white text-emerald-700 hover:bg-gray-100 transition-all duration-300 shadow-lg flex items-center justify-center"
                >
                  <BiLeaf className="mr-2 text-xl" /> Preorder Now
                </motion.button>
              </div>

              <p className="mt-4 text-emerald-100/80 text-sm max-w-md mx-auto flex flex-wrap justify-center gap-2">
                <FaShieldAlt className="text-emerald-200" /> 30-day money-back
                guarantee •
                <FaShippingFast className="text-emerald-200" /> Free shipping •
                <FaSyncAlt className="text-emerald-200" /> Lifetime app updates
              </p>
            </div>
          </div>
        </motion.section>
      </main>

      <footer className="py-12 bg-gradient-to-t from-gray-50 to-white/50 border-t border-gray-200/50">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center text-gray-600 text-sm">
          <p>
            © {new Date().getFullYear()} AeroMint — Redefining home agriculture
            with AI and sustainable design
          </p>
          <p className="mt-2 text-xs opacity-75">
            This is a conceptual demonstration. All images and data are
            simulated for design purposes.
          </p>
        </div>
      </footer>

      {/* Modern beta modal with enhanced UX */}
      <AnimatePresence>
        {showBeta && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
              onClick={() => setShowBeta(false)}
            />

            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative z-10 w-full max-w-md rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-teal-600/5" />

              <div className="relative z-10 p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-600 bg-clip-text text-transparent">
                        <BiAtom />
                      </span>
                      Beta Tester Application
                    </h3>
                    <p className="text-gray-600 mt-1">
                      Help shape the future of smart hydroponics
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowBeta(false)}
                    className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <IoMdClose className="h-6 w-6" />
                  </motion.button>
                </div>

                <form onSubmit={joinBeta} className="space-y-4">
                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Email Address
                      <span className="text-emerald-500 ml-1">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        value={betaEmail}
                        onChange={(e) => setBetaEmail(e.target.value)}
                        placeholder="your.email@example.com"
                        className="w-full rounded-xl px-4 py-3 border border-gray-300 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300"
                        required
                      />
                      <div className="absolute right-3 top-3 text-gray-400">
                        <IoMdMail className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Growing Experience
                    </label>
                    <select className="w-full rounded-xl px-4 py-3 border border-gray-300 bg-white/80 backdrop-blur-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-300">
                      <option value="">Select your experience level</option>
                      <option value="beginner">
                        🌱 Beginner - Just starting out
                      </option>
                      <option value="intermediate">
                        🌿 Intermediate - Some gardening experience
                      </option>
                      <option value="advanced">
                        🌲 Advanced - Seasoned grower
                      </option>
                      <option value="professional">
                        🔬 Professional - Commercial/Expert level
                      </option>
                    </select>
                  </div>

                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-200">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <BiAtom className="text-white font-bold text-sm" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-800">
                          Smart Matching
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Our AI will match you with the perfect beta group
                          based on your experience and goals.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-end gap-3 pt-2">
                    <motion.button
                      whileHover={{ x: -2 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      onClick={() => setShowBeta(false)}
                      className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-xl transition-colors"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="px-6 py-2 text-sm font-bold bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl shadow-lg hover:shadow-emerald-500/25 transition-all duration-300 flex items-center"
                    >
                      Apply for Beta Access{" "}
                      <FaArrowRight className="ml-1 h-4 w-4" />
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
