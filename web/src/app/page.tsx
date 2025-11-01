import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";
import Testimonials from "@/components/testimonials";

export default function Page() {
  return (
    <div className="bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover w-full h-full min-h-screen flex flex-col items-center justify-center">
      <Navbar />
      <Hero />
      <Pricing />
      <div className="w-full max-w-5xl mx-auto px-6 py-12">
        <Testimonials />
      </div>
    </div>
  );
}
