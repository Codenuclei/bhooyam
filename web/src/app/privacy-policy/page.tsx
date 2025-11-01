export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[url('/bg.png')] bg-no-repeat bg-center bg-cover px-6 py-16">
      <div className="w-full max-w-3xl bg-white/90 backdrop-blur-md border border-gray-200/60 rounded-2xl p-8 shadow-lg">
        <header className="mb-6">
          <h1 className="text-2xl font-extrabold text-gray-900">
            Privacy Policy
          </h1>
        </header>

        <main className="space-y-4 text-gray-700 text-sm">
          <p>
            Bhooyam Agritech values your privacy. We collect only essential
            personal and payment information required to process your orders or
            subscriptions. Your data is securely stored and never shared with
            third parties, except when required by law.
          </p>

          <p>
            All transactions are processed securely via Razorpay’s encrypted
            payment gateway. For questions, contact us at{" "}
            <strong>support@bhooyam.in</strong>.
          </p>
        </main>
      </div>
    </div>
  );
}
