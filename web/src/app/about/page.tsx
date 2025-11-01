import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { Droplets, Leaf, Bot, Zap, Twitter, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Meera Rao",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1595152772835-219674b2a8a6?auto=format&fit=crop&w=400&q=80",
    bio: "Visionary leader with 15+ years in agritech, passionate about sustainable innovation.",
    social: {
      twitter: "https://twitter.com/meera",
      linkedin: "https://linkedin.com/in/meera",
    },
  },
  {
    name: "Ravi Kumar",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?auto=format&fit=crop&w=400&q=80",
    bio: "AI and IoT expert, architect of Bhooyam's autonomous hydroponic system.",
    social: {
      twitter: "https://twitter.com/ravi",
      linkedin: "https://linkedin.com/in/ravi",
    },
  },
  {
    name: "Anjali Sharma",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1595152772835-cdb5a26b3d13?auto=format&fit=crop&w=400&q=80",
    bio: "Operations strategist ensuring seamless deployments and customer success.",
    social: {
      twitter: "https://twitter.com/anjali",
      linkedin: "https://linkedin.com/in/anjali",
    },
  },
];

const features = [
  { icon: Droplets, text: "90% less water usage than soil farming", color: "emerald" },
  { icon: Leaf, text: "Zero pesticides, pure nutrition", color: "green" },
  { icon: Bot, text: "Autonomous climate and nutrient control", color: "cyan" },
  { icon: Zap, text: "Plug-and-play for homes, schools, and businesses", color: "emerald" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-6 md:py-8">
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 mb-3 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-sm font-semibold text-emerald-700">Meet Bhooyam</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight mb-3">
            Organic Innovation,
            <br />
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent">
              Human Ingenuity
            </span>
          </h1>

          <p className="text-base text-gray-600 leading-snug mb-5 max-w-2xl mx-auto">
            Autonomous hydroponics for effortless, sustainable, high-yield
            farming. Our team blends AI, engineering, and a love for nature to
            help you grow fresh, organic produce anywhere.
          </p>

          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/products"
              className="group px-6 py-3 rounded-full bg-gradient-to-r from-white via-gray-200 to-emerald-200 hover:from-emerald-100 hover:to-emerald-300 text-gray-700 font-semibold shadow-md hover:scale-105 transition-all"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 font-semibold hover:border-emerald-400 hover:bg-emerald-50 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div className="order-2 lg:order-1 relative">
            <Image
              src="https://images.unsplash.com/photo-1606788075761-1b4ebf7c5b9b?auto=format&fit=crop&w=1200&q=80"
              alt="Bhooyam Story"
              width={520}
              height={340}
              className="relative rounded-2xl shadow-md border-2 border-white"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Growing a Better Future</h2>
            <p className="text-sm text-gray-600 leading-snug mb-4">
              Bhooyam was born from a simple question: Why can't growing food
              be as easy as pressing a button? Our founders combined expertise
              in AI, engineering, and agriculture to make organic produce effortless.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-6 px-4 bg-gradient-to-br from-white via-emerald-50/30 to-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Intelligent Agriculture for Everyone</h2>
            <p className="text-sm text-gray-600 leading-snug mb-4">
              To enable intelligent, resource-efficient agriculture through
              automation and innovation. We envision a future where anyone can
              grow healthy, sustainable produce—anywhere, with minimal effort.
            </p>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07c?auto=format&fit=crop&w=1200&q=80"
              alt="Mission"
              width={520}
              height={340}
              className="relative rounded-2xl shadow-md border-2 border-white"
            />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-6 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {teamMembers.map((member, idx) => (
            <div key={idx} className="p-5 rounded-xl border border-emerald-100 bg-white shadow-sm hover:shadow-md transition-all">
              <Image
                src={member.image}
                alt={member.name}
                width={100}
                height={100}
                className="rounded-full mx-auto mb-3 border-2 border-white shadow"
              />
              <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
              <p className="text-emerald-600 text-sm mb-2">{member.role}</p>
              <p className="text-gray-600 text-sm leading-snug mb-3">{member.bio}</p>
              <div className="flex justify-center gap-2">
                <a href={member.social.twitter} target="_blank" className="text-gray-500 hover:text-emerald-600">
                  <Twitter className="w-4 h-4" />
                </a>
                <a href={member.social.linkedin} target="_blank" className="text-gray-500 hover:text-emerald-600">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
