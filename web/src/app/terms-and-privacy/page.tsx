import Navbar from "@/components/navbar";

export default function TermsPage() {
  return (
    <div className="bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover"><Navbar/>
    <div className="min-h-screen flex items-center justify-center  px-6 py-16">
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-2xl p-8 shadow-lg">
        <header className="mb-6">
          <h1 className="text-2xl font-extrabold text-gray-900">Terms &amp; Conditions</h1>
        </header>

        <main className="space-y-4 text-gray-700 text-sm">
          <p>By accessing Bhooyam’s website or purchasing our products, you agree to our terms of service.</p>
          <ul className="list-inside list-disc mt-2">
            <li>All product prices, specifications, and availability are subject to change.</li>
            <li>Payment is securely processed via Razorpay.</li>
            <li>Refunds or replacements are available only for defective or damaged products within 7 days of delivery.</li>
            <li>By using our services, you consent to our data collection and processing practices as described in our Privacy Policy.</li>
          </ul>

          <p className="mt-4">Contact: <strong>support@bhooyam.in</strong></p>
        </main>
      </div>
    </div>
    </div>
        
  );
}
