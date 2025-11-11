import {
  UsersIcon,
  FireIcon,
  CheckCircleIcon,
  SparklesIcon,
  BoltIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

// Stats and Features data
const stats = [
  {
    icon: UsersIcon,
    number: "7,800+",
    label: "Active Creators",
    highlight: "Global Community",
  },
  {
    icon: FireIcon,
    number: "5M+",
    label: "Ideas Ignited",
    highlight: "Real Impact",
  },
  {
    icon: CheckCircleIcon,
    number: "99.7%",
    label: "Satisfaction",
    highlight: "Top Rated",
  },
];

const features = [
  { icon: BoltIcon, title: "Effortless", desc: "Automated flows, zero hassle" },
  {
    icon: ChartBarIcon,
    title: "Live Metrics",
    desc: "Track progress instantly",
  },
  { icon: ShieldCheckIcon, title: "Verified", desc: "Safe and secure" },
  { icon: HeartIcon, title: "Expert Support", desc: "24/7 help desk" },
];

export default function ModernSection() {
  return (
    <section
      className="relative py-32 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1693088640/photo/aquaponics-system.jpg?s=2048x2048&w=is&k=20&c=6YZDHuG6II-hGQj2QLRo3e87TCMGzmgXcBtIubw7ykM=')",
      }}
    >
      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/30"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-3 mb-8 bg-white/40 backdrop-blur-lg border border-white/30 rounded-full px-8 py-3 shadow-inner">
            <span className="w-3 h-3 bg-white rounded-full animate-pulse"></span>
            <span className="text-sm font-semibold text-white tracking-wide uppercase">
              Welcome Aboard
            </span>
          </div>

          <h2 className="text-5xl lg:text-6xl font-extrabold text-white mb-8 leading-tight drop-shadow-[0_0_25px_rgba(0,0,0,0.3)]">
            Unlock Your <span className="text-white">Best Work</span> Today
          </h2>

          <p className="text-lg text-white max-w-2xl mx-auto mb-12 font-light opacity-95">
            Join an ever-growing community of makers and thinkers. Bring ideas
            to life in minutes—no friction, full control, and beautiful results
            every time.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {stats.map((stat, idx) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={idx}
                className="group relative bg-white/40 backdrop-blur-xl rounded-2xl p-8 border border-white/30 hover:border-white/50 shadow-xl transition duration-300 overflow-hidden"
                style={{
                  boxShadow:
                    "12px 12px 28px 0px rgba(255,255,255,0.3), -6px -6px 15px 0px rgba(255,255,255,0.4), inset 0 1px 7px rgba(255,255,255,0.5)",
                }}
              >
                {/* Oil-paint grain texture */}
                <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJncmFpbiI+PGZlUGVybGluTm9pc2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjciIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjIiLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwLjEiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsdGVyPSJ1cmwoI2dyYWluKSIvPjwvc3ZnPg==')] pointer-events-none rounded-2xl"></div>
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500"></div>
                <div className="relative z-10 flex flex-col items-center">
                  <IconComponent className="w-10 h-10 text-white mb-4 opacity-90" />
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <p className="text-white/80 font-medium mb-2">{stat.label}</p>
                  <div className="inline-block bg-white/30 border border-white/40 rounded-full px-4 py-1 text-xs font-semibold text-white">
                    {stat.highlight}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Feature Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {features.map((feature, idx) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={idx}
                className="relative bg-white/40 backdrop-blur-md border border-white/30 rounded-xl p-6 text-center shadow-lg hover:border-white/50 hover:bg-white/50 transition overflow-hidden"
              >
                {/* Oil-paint texture */}
                <div className="absolute inset-0 opacity-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJncmFpbiI+PGZlUGVybGluTm9pc2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjciIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjIiLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwLjEiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsdGVyPSJ1cmwoI2dyYWluKSIvPjwvc3ZnPg==')] pointer-events-none rounded-xl"></div>
                <div className="relative z-10">
                  <IconComponent className="w-8 h-8 text-white mx-auto mb-3 opacity-90" />
                  <h4 className="text-white font-semibold">{feature.title}</h4>
                  <p className="text-white/80 text-xs mt-1">{feature.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Box */}
        <div
          className="mx-auto max-w-lg rounded-2xl bg-white/40 backdrop-blur-xl border border-white/30 shadow-xl p-10 flex flex-col items-center overflow-hidden"
          style={{
            boxShadow:
              "14px 14px 32px 0px rgba(255,255,255,0.2), -7px -7px 22px 0px rgba(255,255,255,0.3), inset 0 1px 8px rgba(255,255,255,0.4)",
            border: "1.5px solid rgba(255,255,255,0.4)",
          }}
        >
          {/* Oil texture */}
          <div className="absolute inset-0 opacity-8 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZmlsdGVyIGlkPSJncmFpbiI+PGZlUGVybGluTm9pc2UgdHlwZT0iZnJhY3RhbE5vaXNlIiBiYXNlRnJlcXVlbmN5PSIwLjciIG51bU9jdGF2ZXM9IjQiIHNlZWQ9IjIiLz48ZmVDb2xvck1hdHJpeCB0eXBlPSJzYXR1cmF0ZSIgdmFsdWVzPSIwLjEiLz48L2ZpbHRlcj48cmVjdCB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgZmlsdGVyPSJ1cmwoI2dyYWluKSIvPjwvc3ZnPg==')] pointer-events-none rounded-2xl"></div>
          <div className="relative z-10">
            <SparklesIcon className="w-14 h-14 text-white mb-4" />
            <h3 className="text-2xl font-bold text-white mb-2 tracking-tight">
              Ready to Make Magic?
            </h3>
            <p className="text-white/90 text-center mb-6">
              Start your journey with exclusive features, beautiful tools, and a
              vibrant community cheering you on.
            </p>
            <button className="w-full py-3 rounded-xl bg-white text-gray-900 font-bold shadow-lg hover:scale-105 active:scale-95 transition">
              Get Started Free
            </button>
            <span className="text-xs text-white/80 mt-2 block">
              No card required • Cancel anytime
            </span>
          </div>
        </div>

        {/* Bottom Message */}
        <div className="text-center mt-14">
          <p className="text-white text-lg font-medium">
            <span className="font-bold text-white">Promo:</span> Unlock extra
            credits on your first project!
          </p>
          <p className="text-white/90 text-sm mt-2">
            Real-time support • Powerful integrations • Forever free plan
          </p>
        </div>
      </div>
    </section>
  );
}
