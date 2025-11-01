import Navbar from "@/components/navbar";
export default function RefundPolicyPage() {
  return (
    <div className="bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover"><Navbar/> <div className="min-h-screen flex items-center justify-center bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover px-6 py-16">
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-2xl p-8 shadow-lg">
        <header className="mb-6">
          <h1 className="text-2xl font-extrabold text-gray-900">
            Refund &amp; Cancellation Policy
          </h1>
        </header>

        <main className="space-y-4 text-gray-700 text-sm">
          <p>We strive for complete customer satisfaction.</p>
          <ul className="list-inside list-disc mt-2">
            <li>
              Orders can be canceled within 24 hours of placement before
              dispatch.
            </li>
            <li>
              Refunds are processed within 7 business days of cancellation
              approval.
            </li>
            <li>
              In case of a damaged or defective unit, we offer replacement or
              full refund after verification.
            </li>
            <li>
              Subscription services can be canceled anytime, with access
              continuing until the billing period ends.
            </li>
          </ul>

          <p className="mt-4">
            For support, email: <strong>refunds@bhooyam.in</strong>
          </p>
        </main>
      </div>
    </div></div>
   
  );
}
