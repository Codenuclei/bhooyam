"use client";import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { Droplets, Leaf, Bot, Zap, Twitter, Linkedin, Users, Award, Lightbulb, Heart } from "lucide-react";

// Team data with cleaned URLs and unique IDs
const teamMembers = [
  {
    id: "meera-rao",
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
    id: "ravi-kumar",
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
    id: "anjali-sharma",
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
  { id: "water", icon: Droplets, text: "90% less water usage than soil farming", color: "emerald" },
  { id: "pesticides", icon: Leaf, text: "Zero pesticides, pure nutrition", color: "green" },
  { id: "automation", icon: Bot, text: "Autonomous climate and nutrient control", color: "cyan" },
  { id: "accessibility", icon: Zap, text: "Plug-and-play for homes, schools, and businesses", color: "emerald" },
];

const values = [
  { id: "sustainability", icon: Leaf, title: "Sustainability First", description: "We design systems that minimize environmental impact while maximizing yield." },
  { id: "innovation", icon: Lightbulb, title: "Continuous Innovation", description: "Our R&D team constantly improves our technology for better results." },
  { id: "community", icon: Users, title: "Community Focus", description: "We believe in empowering communities to grow their own food sustainably." },
  { id: "quality", icon: Award, title: "Quality Assurance", description: "Every system undergoes rigorous testing to ensure reliability and performance." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover">
      <Navbar />

      {/* Hero Section - Simplified */}
      <section className="py-8 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 border border-emerald-200 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="text-xs font-medium text-emerald-700">Our Story</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
            Organic Innovation,
            <br />
            <span className="bg-gradient-to-r from-emerald-500 to-cyan-400 bg-clip-text text-transparent">
              Human Ingenuity
            </span>
          </h1>

          <p className="text-gray-600 mb-5 max-w-2xl mx-auto">
            Autonomous hydroponics for effortless, sustainable, high-yield farming. Our team blends AI, engineering, and a love for nature to help you grow fresh, organic produce anywhere.
          </p>

          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/products"
              className="px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-medium shadow-sm hover:shadow transition-all"
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 font-medium hover:border-emerald-500 hover:bg-emerald-50 transition-all"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Our Story - More Content */}
      <section className="py-8 px-4 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1606788075761-1b4ebf7c5b9b?auto=format&fit=crop&w=1200&q=80"
                alt="Bhooyam founders working on hydroponic system"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Growing a Better Future</h2>
            <p className="text-gray-600 mb-3">
              Bhooyam was born from a simple question: Why can't growing food be as easy as pressing a button? Our founders combined expertise in AI, engineering, and agriculture to make organic produce effortless.
            </p>
            <p className="text-gray-600 mb-3">
              In 2020, we started with a small prototype in a garage. Today, our systems are used in over 500 homes, schools, and restaurants across the country, helping people grow fresh produce year-round with minimal effort.
            </p>
            <p className="text-gray-600">
              We believe that everyone deserves access to fresh, nutritious food, and technology should make this possible - not complicate it.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Enhanced */}
      <section className="py-8 px-4 bg-gradient-to-br from-emerald-50/30 to-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission & Vision</h2>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-emerald-700 mb-1">Mission</h3>
                <p className="text-gray-600">
                  To enable intelligent, resource-efficient agriculture through automation and innovation, making fresh produce accessible to everyone.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-emerald-700 mb-1">Vision</h3>
                <p className="text-gray-600">
                  A world where anyone can grow healthy, sustainable produce anywhere, with minimal effort and maximum impact.
                </p>
              </div>
              
              <div className="mt-2">
                <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                  Founded in 2020
                </span>
                <span className="inline-block px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium ml-2">
                  500+ installations
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <Image
                src="https://images.unsplash.com/photo-1599058917212-d750089bc07c?auto=format&fit=crop&w=1200&q=80"
                alt="Hydroponic farming system in modern setting"
                width={600}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Core Values - New Section */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Core Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These principles guide everything we do at Bhooyam, from product development to customer relationships.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {values.map((value) => (
              <div 
                key={value.id} 
                className="p-4 rounded-lg border border-gray-200 hover:border-emerald-300 transition-all bg-white"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center mb-3">
                  <value.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Improved Spacing */}
      <section className="py-8 px-4 bg-emerald-50/20">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Passionate experts dedicated to revolutionizing how the world grows food.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {teamMembers.map((member) => (
              <div 
                key={member.id} 
                className="bg-white rounded-lg border border-gray-200 p-5 hover:shadow-md transition-all"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white shadow-md">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={96}
                      height={96}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="text-center">
                  <h3 className="font-bold text-lg text-gray-900">{member.name}</h3>
                  <p className="text-emerald-600 text-sm mt-1">{member.role}</p>
                  <p className="text-gray-600 text-sm mt-2 line-clamp-2">{member.bio}</p>
                  
                  <div className="flex justify-center gap-3 mt-3">
                    <a 
                      href={member.social.twitter} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-emerald-600 transition-colors"
                      aria-label={`${member.name}'s Twitter profile`}
                    >
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a 
                      href={member.social.linkedin} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-emerald-600 transition-colors"
                      aria-label={`${member.name}'s LinkedIn profile`}
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid - Compact */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Why Choose Bhooyam</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our technology makes sustainable farming accessible, efficient, and rewarding.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((feature) => (
              <div 
                key={feature.id} 
                className="p-4 rounded-lg border border-gray-200 bg-white text-center"
              >
                <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center mx-auto mb-3">
                  <feature.icon className={`w-5 h-5 text-${feature.color}-500`} />
                </div>
                <p className="text-gray-700 text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Simple */}
      <section className="py-8 px-4 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Ready to Start Your Growing Journey?</h2>
          <p className="text-white/90 mb-5 max-w-2xl mx-auto">
            Join our community of home growers, educators, and businesses revolutionizing food production.
          </p>
          <Link
            href="/contact"
            className="px-6 py-2.5 bg-white text-emerald-700 font-medium rounded-lg hover:bg-gray-100 transition-all"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}