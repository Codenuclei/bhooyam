import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  // small SVG noise texture encoded for use as a background image
  const noiseSvg = encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/><feColorMatrix type='saturate' values='0'/></filter><rect width='100%' height='100%' filter='url(#n)' opacity='0.06' fill='#000'/></svg>`
  );

  return (
    <div className="relative">
      {/* Fixed light background (white theme only) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.98) 0%, rgba(250,255,244,0.95) 60%, rgba(245,255,238,0.9) 100%), url("data:image/svg+xml;utf8,${noiseSvg}")`,
          backgroundSize: "cover, 220px 220px",
          backgroundRepeat: "no-repeat, repeat",
        }}
      />

      <div className="flex flex-col md:flex-row w-full min-h-screen items-center justify-evenly gap-8 px-6 py-12">
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-2xl">
            <Image
              src={"/hero.jpg"}
              width={520}
              height={520}
              alt="Bhooyam product"
              className="w-full h-full object-cover mix-blend-overlay"
            />
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none bg-gradient-to-br from-emerald-50/70 via-lime-100/30 to-cyan-100/60 mix-blend-multiply"
            />
          </div>
        </div>

        <div className="flex-1 flex font-sans flex-col  gap-6 justify-center items-start">
          <div className="max-w-2xl">
            <h1 className="text-3xl sm:text-4xl font-semibold font-sans bg-slate-900 bg-clip-text text-transparent">
              Revolutionizing Hydroponics with AI-Powered Automation
            </h1>

            <p className="mt-3 text-lg text-neutral-800">
              Bhooyam builds fully autonomous hydroponic systems that make
              sustainable, high-yield farming completely hands-free.
            </p>

            <p className="mt-4 text-neutral-700 ">
              At Bhooyam, we’re transforming the way India grows food. Our
              AI-driven hydroponic systems automate nutrient dosing, climate
              control, and anomaly detection—enabling optimized, pesticide-free
              farming using 90% less water. Designed for home growers,
              institutions, and commercial farms, Bhooyam makes smart,
              sustainable agriculture accessible to everyone.
            </p>

            <ul className="mt-4 list-inside text-neutral-700 space-y-1">
              <li>• AI-driven dosing & climate control</li>
              <li>• 90% less water, pesticide-free produce</li>
              <li>• Scalable solutions for home to commercial farms</li>
            </ul>
          </div>

          <div className="flex flex-wrap gap-3 mt-6">
            <Link
              href="#solutions"
              aria-label="Explore Our Solutions"
              className="px-5 py-2 rounded-full text-gray-600 bg-gradient-to-bl from-emerald-100 via-neutral-100 to-lime-100 shadow-md shadow-[#F87171]/20 hover:shadow-[0_12px_40px_rgba(100,116,139,0.12)] hover:scale-[1.02] transition-transform duration-150"
            >
              Explore Our Solutions
            </Link>
            <Link
              href="#waitlist"
              aria-label="Join Waitlist"
              className="px-6 py-2 rounded-full text-slate-700/80 bg-gradient-to-br from-amber-200/50 via-lime-100/10 to-cyan-100/90 border border-slate-200/40 backdrop-blur-sm shadow-md shadow-cyan-700/20 ring-1 ring-slate-100/30 transition-transform duration-150 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(100,116,139,0.12)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-slate-300/40 flex items-center justify-center"
            >
              Join Waitlist
            </Link>
            <Link
              href="#waitlist"
              aria-label="Join Waitlist"
              className="px-6 py-2 rounded-full text-neutral-800/70 bg-gradient-to-br from-yellow-200/90 via-slate-50/60 to-green-100/90 border border-slate-200/40 backdrop-blur-sm shadow-md ring-1 ring-red-200/30 transition-transform duration-150 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(239,68,68,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-red-300/40 flex items-center justify-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
