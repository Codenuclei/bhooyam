import Faq from "@/components/faq";
import Footer from "@/components/footer";
import Hero from "@/components/hero";
import Landing from "@/components/landing";
// import Navbar from "@/components/navbar";
// import Pricing from "@/components/pricing";
// import Testimonials from "@/components/testimonials";

export default function Page() {
  return (
    <div className="w-full h-full min-h-screen flex flex-col items-center justify-start">
      <Landing />
      <Hero />
      {/* <Pricing /> */}

      {/* <div className="w-full mx-auto bg-[url('/bg.png')]">
        <Testimonials />
      </div> */}

      {/* Features */}
      <section className="font-display bg-gray-50  min-h-screen flex items-center justify-center p-4 sm:p-6 lg:p-8 relative overflow-hidden">
        {/* Background Gradient Orbs */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 bg-rose-400/50 dark:bg-rose-600/30 rounded-full filter blur-3xl opacity-50 animate-[spin_20s_linear_infinite]" />
          <div className="absolute -bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-sky-400/50 dark:bg-sky-600/30 rounded-full filter blur-3xl opacity-50 animate-[spin_25s_linear_infinite_reverse]" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-1/3 h-1/3 bg-teal-300/50 dark:bg-teal-500/30 rounded-full filter blur-3xl opacity-40 animate-[spin_15s_linear_infinite]" />
        </div>

        {/* Features Section */}
        <div className="container mx-auto px-4 relative z-20">
          <h2 className="text-center text-5xl font-bold text-slate-800 mb-48 -mt-36">
            Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="glassmorphism rounded-xl p-8 text-center md:text-left transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
               Smart Monitoring
              </h3>
              <p className="text-slate-600  leading-relaxed">
                Experience a seamless interface that keeps you connected to your plants in real time. Bhooyam’s dashboard displays temperature, humidity, pH, and nutrient data in an intuitive, easy-to-understand format — so you can focus on growing, not guessing.
              </p>
            </div>

            {/* Card 2 */}
            <div className="glassmorphism rounded-xl p-8 text-center md:text-left transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800  mb-4">
                  AI-Powered Insights
              </h3>
              <p className="text-slate-600 leading-relaxed">
               Unlock intelligent analytics driven by AI and sensor fusion. From detecting early signs of nutrient deficiency to optimizing water and light usage, Bhooyam helps you make data-driven decisions that boost plant health and yield.
              </p>
            </div>

            {/* Card 3 */}
            <div className="glassmorphism rounded-xl p-8 text-center md:text-left transition-transform duration-300 hover:scale-105">
              <h3 className="text-2xl sm:text-3xl font-bold text-slate-800  mb-4">
             Effortless Automation
              </h3>
              <p className="text-slate-600  leading-relaxed">
            Integrate all essential hydroponic functions — from water circulation to nutrient dosing — into one connected ecosystem. Bhooyam’s automation system streamlines your growing process, reducing manual effort while ensuring consistent, high-quality growth.
              </p>
            </div>
          </div>
        </div>

        {/* Inline Glassmorphism Style */}
      </section>

      {/* FAQ */}

      <div className="bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover w-full">
        <Faq />
      </div>

      {/* Call to Action */}
      {/* <section className="w-full bg-[url('/landscape.png')] bg-no-repeat bg-center bg-cover flex justify-center items-center  mx-auto px-6 py-20">
        <div className="bg-gradient-to-b max-w-3xl from-stone-300/45 to-neutral-50  backdrop-blur-sm rounded-3xl p-12 text-center shadow-2xl shadow-gray-200/60">
          <h3 className="text-4xl font-bold mb-4 text-gray-900 tracking-tight">
            Ready to Elevate Your Business?
          </h3>

          <p className="mb-10 text-xl text-gray-600 max-w-xl mx-auto">
            Join thousands of professionals and discover our powerful tools. Get
            started in minutes.
          </p>

          <a
            href="/free-trial-signup"
            className="
      font-sans
        inline-block 
        text-md 
        font-semibold 
        px-10 
        py-2
        rounded-full 
        text-white 
        bg-gradient-to-r from-emerald-500 to-teal-500 
        shadow-xl shadow-emerald-500/50 
        hover:shadow-2xl hover:shadow-emerald-500/70 
        hover:scale-[1.01] 
        transition 
        duration-300 
        ease-in-out
      "
          >
            Start Your Free Trial
          </a>
        </div>
      </section> */}

      {/* Footer */}
      <Footer />
    </div>
  );
}
