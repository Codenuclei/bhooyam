import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
import Image from "next/image";
import Link from "next/link";
import { 
  Droplet, 
  Sprout, 
  CircuitBoard, 
  Zap, 
  Twitter, 
  Linkedin,
  ThermometerSun,
  Cloudy,
  Activity,
  Wifi,
  TrendingUp,
  Target,
  Sparkles
} from "lucide-react";

const teamMembers = [
  {
    name: "Dr. Meera Rao",
    role: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
    bio: "Visionary leader with 15+ years in agritech, passionate about sustainable innovation.",
    social: {
      twitter: "https://twitter.com/meera",
      linkedin: "https://linkedin.com/in/meera",
    },
  },
  {
    name: "Ravi Kumar",
    role: "CTO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
    bio: "AI and IoT expert, architect of Bhooyam's autonomous hydroponic system.",
    social: {
      twitter: "https://twitter.com/ravi",
      linkedin: "https://linkedin.com/in/ravi",
    },
  },
  {
    name: "Anjali Sharma",
    role: "Head of Operations",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
    bio: "Operations strategist ensuring seamless deployments and customer success.",
    social: {
      twitter: "https://twitter.com/anjali",
      linkedin: "https://linkedin.com/in/anjali",
    },
  },
];

const keyFeatures = [
  { 
    icon: Droplet, 
    text: "90% water reduction",
    stat: "90%",
    color: "from-blue-400 to-cyan-500" 
  },
  { 
    icon: Sprout, 
    text: "Zero pesticides used",
    stat: "0%",
    color: "from-emerald-400 to-green-500" 
  },
  { 
    icon: CircuitBoard, 
    text: "AI-powered control",
    stat: "24/7",
    color: "from-purple-400 to-indigo-500" 
  },
  { 
    icon: Zap, 
    text: "5-minute setup",
    stat: "5min",
    color: "from-amber-400 to-orange-500" 
  },
];

const techSpecs = [
  {
    icon: Activity,
    title: "pH Monitoring",
    description: "Real-time pH balancing with automatic solution injection"
  },
  {
    icon: Droplet,
    title: "EC/TDS Control",
    description: "Precise nutrient dosing maintaining optimal levels"
  },
  {
    icon: ThermometerSun,
    title: "Climate Control",
    description: "Automated temperature and humidity management"
  },
  {
    icon: Wifi,
    title: "IoT Dashboard",
    description: "Remote monitoring and control via smartphone"
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen  bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover">
      
<div className="flex w-full  justify-center items-center"><Navbar /></div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 md:py-20">
        {/* Background Image */}
        <div className="absolute inset-0 top-0">
          <Image
            src="https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=1920&h=1080&fit=crop"
            alt="Hydroponic farming"
            fill
            className="object-cover opacity-10"
            priority
          />
        </div>

        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-emerald-200/40 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-cyan-200/30 blur-3xl" />
        </div>

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md border border-emerald-200 shadow-lg shadow-emerald-100/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-bold text-emerald-700">
              Intelligent Hydroponics • Automated Future
            </span>
          </div>

          {/* Headline */}
        {/* Small headline (hoda chota) */}
<h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold font-sans text-gray-900 tracking-tight mb-3">
  Where Nature Meets
  <br />
  <span className="bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-600 bg-clip-text text-transparent font-bold">
    Artificial Intelligence
  </span>
</h1>


          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
            Bhooyam's autonomous hydroponic systems combine cutting-edge IoT sensors, 
            AI-powered monitoring, and precision automation to revolutionize sustainable agriculture.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3 justify-center mb-10">
            <Link
              href="/products"
              className="group relative overflow-hidden px-6 py-2.5 rounded-full bg-gradient-to-r from-white via-gray-200 to-emerald-200 hover:from-emerald-100 hover:via-emerald-200 hover:to-emerald-300 text-gray-700 font-semibold shadow-[0_4px_14px_rgba(154,229,182,0.5)] hover:shadow-[0_6px_20px_rgba(154,229,182,0.6)] transform hover:scale-105 transition-all duration-300"
            >
              <span className="relative z-10">Explore Products</span>
            </Link>
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full border-2 border-gray-300 text-gray-700 font-semibold hover:border-emerald-400 hover:bg-emerald-50 backdrop-blur-sm bg-white/80 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl mx-auto">
            {keyFeatures.map((feature, idx) => (
              <div
                key={idx}
                className="p-3 rounded-2xl bg-white/80 backdrop-blur-md border border-emerald-100/50 shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300"
              >
                <div className={`w-10 h-10 mx-auto mb-2 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                  <feature.icon className="w-5 h-5 text-white" />
                </div>
                <div className="text-xl font-bold text-gray-900 mb-0.5">{feature.stat}</div>
                <p className="text-xs text-gray-600">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="order-2 lg:order-1 relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-300/30 to-cyan-300/30 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-200/50 border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop"
                  alt="Hydroponic system with fresh greens"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-emerald-200 shadow-xl">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-emerald-500 flex items-center justify-center flex-shrink-0">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-gray-600">Growth Rate</div>
                      <div className="text-lg font-bold text-emerald-600">25-30% Faster</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 mb-5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-xs font-semibold text-emerald-700">Our Story</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                From Question to Revolution
              </h2>

              <p className="text-base text-gray-600 leading-relaxed mb-5">
                Bhooyam was born from a simple question: <span className="font-semibold text-gray-800">"Why can't growing food be as easy as pressing a button?"</span> Our founders combined expertise in AI, IoT engineering, and agricultural science to create an intelligent system that makes organic farming effortless, sustainable, and scalable.
              </p>

              <p className="text-base text-gray-600 leading-relaxed mb-6">
                Inspired by systems like <span className="font-semibold text-emerald-600">Ankuran</span>, we've integrated advanced automation, real-time monitoring, and machine learning to deliver a truly autonomous hydroponic experience.
              </p>

              {/* Feature Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {keyFeatures.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3 p-3 rounded-2xl bg-white border border-emerald-100/50 shadow-sm hover:shadow-md hover:scale-[1.02] transition-all duration-300"
                  >
                    <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center flex-shrink-0 shadow-md`}>
                      <item.icon className="w-4.5 h-4.5 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">{item.stat}</div>
                      <p className="text-xs text-gray-600">{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Specs Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-white via-emerald-50/30 to-cyan-50/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-emerald-200 mb-5 shadow-sm">
              <CircuitBoard className="w-3.5 h-3.5 text-emerald-600" />
              <span className="text-xs font-semibold text-emerald-700">Advanced Technology</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Intelligent Automation at Work
            </h2>
            <p className="text-base text-gray-600 max-w-3xl mx-auto">
              Our systems monitor and control critical parameters 24/7, ensuring optimal growing conditions with zero manual intervention
            </p>
          </div>

          {/* Tech Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {techSpecs.map((spec, idx) => (
              <div
                key={idx}
                className="group relative p-5 rounded-3xl bg-white border border-emerald-100/50 shadow-md hover:shadow-xl hover:scale-[1.03] transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 via-emerald-400/5 to-emerald-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />
                
                <div className="relative">
                  <div className="w-11 h-11 mb-3 rounded-2xl bg-gradient-to-br from-emerald-100 to-emerald-200 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <spec.icon className="w-5.5 h-5.5 text-emerald-600" />
                  </div>
                  <h3 className="text-base font-bold text-gray-900 mb-1.5">{spec.title}</h3>
                  <p className="text-xs text-gray-600 leading-relaxed">{spec.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&h=600&fit=crop"
              alt="Advanced hydroponic technology"
              width={1600}
              height={600}
              className="w-full h-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/80 via-emerald-900/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <div className="max-w-3xl">
                <h3 className="text-xl md:text-3xl font-bold text-white mb-3">
                  IoT-Powered Precision Agriculture
                </h3>
                <p className="text-sm md:text-base text-emerald-50 leading-relaxed">
                  Monitor EC/TDS, pH, temperature, humidity, and nutrient levels in real-time through our intelligent dashboard. Automated dosing pumps maintain perfect balance while AI algorithms optimize growth conditions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 mb-5 shadow-sm">
                <Target className="w-3.5 h-3.5 text-emerald-600" />
                <span className="text-xs font-semibold text-emerald-700">Mission & Vision</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                Democratizing Smart Agriculture
              </h2>

              <p className="text-base text-gray-600 leading-relaxed mb-4">
                Our mission is to enable intelligent, resource-efficient agriculture through automation and innovation. We envision a future where anyone can grow healthy, sustainable produce—anywhere, with minimal effort.
              </p>

              <p className="text-base text-gray-600 leading-relaxed mb-6">
                By leveraging machine learning, IoT sensors, and automated control systems, we're making professional-grade hydroponics accessible to homes, schools, and businesses worldwide.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-3xl bg-gradient-to-br from-white via-emerald-50 to-emerald-100 border border-emerald-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Droplet className="w-6 h-6 text-emerald-600 mb-2" />
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-emerald-500 to-emerald-600 bg-clip-text text-transparent mb-1">
                    90%
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-0.5">Water Saved</div>
                  <p className="text-xs text-gray-600">vs traditional farming</p>
                </div>

                <div className="p-4 rounded-3xl bg-gradient-to-br from-white via-cyan-50 to-cyan-100 border border-cyan-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Activity className="w-6 h-6 text-cyan-600 mb-2" />
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent mb-1">
                    99%
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-0.5">Uptime</div>
                  <p className="text-xs text-gray-600">24/7 operation</p>
                </div>

                <div className="p-4 rounded-3xl bg-gradient-to-br from-white via-purple-50 to-purple-100 border border-purple-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <TrendingUp className="w-6 h-6 text-purple-600 mb-2" />
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent mb-1">
                    30%
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-0.5">Yield Boost</div>
                  <p className="text-xs text-gray-600">optimized growth</p>
                </div>

                <div className="p-4 rounded-3xl bg-gradient-to-br from-white via-amber-50 to-amber-100 border border-amber-200/50 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <Sprout className="w-6 h-6 text-amber-600 mb-2" />
                  <div className="text-3xl font-extrabold bg-gradient-to-r from-amber-500 to-amber-600 bg-clip-text text-transparent mb-1">
                    0%
                  </div>
                  <div className="text-sm font-semibold text-gray-700 mb-0.5">Pesticides</div>
                  <p className="text-xs text-gray-600">100% organic</p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-br from-cyan-300/30 to-emerald-300/30 rounded-3xl blur-3xl group-hover:blur-2xl transition-all duration-500" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-200/50 border-4 border-white">
                <Image
                  src="https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=800&h=600&fit=crop"
                  alt="Smart agriculture mission"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-6 bg-gradient-to-br from-gray-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-emerald-200 mb-5 shadow-sm">
              <span className="text-xs font-semibold text-emerald-700">Our Team</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
              Meet the Innovators
            </h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              Passionate experts driving the future of sustainable agriculture through AI and automation
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="group relative p-6 rounded-3xl border border-emerald-100/50 bg-gradient-to-br from-white via-gray-50 to-emerald-50 shadow-md hover:shadow-2xl hover:shadow-emerald-100/50 backdrop-blur-md transform hover:scale-[1.03] transition-all duration-500"
              >
                {/* Animated gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/0 via-emerald-400/5 to-cyan-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Avatar */}
                  <div className="relative mb-4">
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/40 to-cyan-400/40 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500" />
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={120}
                      height={120}
                      className="relative rounded-full shadow-xl group-hover:scale-105 transition-transform duration-500 border-4 border-white"
                    />
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-lg font-bold text-gray-900 mb-1">
                    {member.name}
                  </h3>
                  <p className="text-emerald-600 font-semibold mb-3 text-sm">
                    {member.role}
                  </p>

                  {/* Bio */}
                  <p className="text-sm text-gray-600 leading-relaxed mb-4">
                    {member.bio}
                  </p>

                  {/* Social Links */}
                  <div className="flex gap-2 mt-auto">
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white border border-gray-200 hover:border-emerald-400 hover:bg-emerald-50 flex items-center justify-center text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
                        aria-label="Twitter"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 rounded-full bg-white border border-gray-200 hover:border-emerald-400 hover:bg-emerald-50 flex items-center justify-center text-gray-600 hover:text-emerald-600 transition-all duration-300 hover:scale-110 shadow-sm hover:shadow-md"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="p-10 md:p-12 rounded-3xl bg-gradient-to-br from-emerald-500 via-emerald-400 to-cyan-400 shadow-2xl shadow-emerald-300/50 relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300/20 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Grow Smarter?
              </h2>
              <p className="text-base text-emerald-50 mb-8 max-w-2xl mx-auto">
                Join the future of sustainable agriculture. Start growing fresh, organic produce with zero effort.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/products"
                  className="px-6 py-2.5 rounded-full bg-white text-emerald-600 font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  View Our Systems
                </Link>
                <Link
                  href="/contact"
                  className="px-6 py-2.5 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-emerald-600 transition-all duration-300"
                >
                  Schedule Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
    </div>
  );
}