import Link from "next/link";
import ContactForm from "@/components/contact-form";
import Navbar from "@/components/navbar";

export default function ContactPage() {
  return (
    <div className="bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover"><Navbar/> <div className="min-h-screen flex items-center justify-center bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover px-6 py-16">
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-2xl p-8 shadow-md">
        <header className="mb-6">
          <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900">
            Contact Bhooyam
          </h1>
          <p className="mt-2 text-sm text-gray-700">
            Questions, partnerships, or press — we'd love to hear from you. Use
            the form or reach us at <strong>support@bhooyam.in</strong>.
          </p>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section>
            <ContactForm />
          </section>

          <aside className="flex flex-col gap-4 text-sm text-gray-700">
            <div>
              <h3 className="font-semibold">Address</h3>
              <p className="mt-1">Bhooyam Agritech Pvt. Ltd.</p>
              <p>10, Bhupiyamau Chauraha, Bhupiyamau</p>
              <p>Pratapgarh, Uttar Pradesh, 230131</p>
            </div>

            <div>
              <h3 className="font-semibold">Support</h3>
              <p className="mt-1">support@bhooyam.in</p>
              <p className="mt-1">Phone: +91-9463252156</p>
            </div>

            <div>
              <h3 className="font-semibold">Stay in touch</h3>
              {/* <p className="mt-1">
                Join our waitlist for product updates and launches.
              </p>
              <Link
                href="#waitlist"
                className="inline-block mt-3 px-4 py-2 rounded-full bg-yellow-100 text-sm font-semibold"
              >
                Join Waitlist
              </Link> */}
            </div>
          </aside>
        </main>
      </div>
    </div></div>
   
  );
}
