import Link from "next/link";

export default function Footer() {
  return (
    <section className="bg-white  border-t border-gray-200  py-12 px-6">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left">
        {/* Brand Section */}
        <div>
            <div className="flex items-center justify-center md:justify-start mb-4">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white font-bold text-lg">
              B
            </div>
            <span className="ml-2 text-xl font-semibold text-gray-800">
              Bhooyam Hydroponics
            </span>
            </div>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
            Innovative hydroponic solutions for sustainable agriculture and fresh produce cultivation.
            </p>
          <div className="flex justify-center md:justify-start space-x-4 text-gray-500">
            <a
              href="#"
              className="hover:text-sky-600 transition-colors duration-200"
            >
              <i className="fab fa-twitter text-xl"></i>
            </a>
            <a
              href="#"
              className="hover:text-sky-600 transition-colors duration-200"
            >
              <i className="fab fa-facebook-f text-xl"></i>
            </a>
            <a
              href="#"
              className="hover:text-sky-600 transition-colors duration-200"
            >
              <i className="fab fa-instagram text-xl"></i>
            </a>
            <a
              href="#"
              className="hover:text-sky-600 transition-colors duration-200"
            >
              <i className="fab fa-github text-xl"></i>
            </a>
          </div>
        </div>

        {/* Company Section */}
        <div>
          <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
            Company
          </h4>
          <ul className="space-y-2 text-gray-700 ">
            <li>
              <a href="#" className="hover:text-sky-600">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-600">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-600">
                Works
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-600">
                Career
              </a>
            </li>
          </ul>
        </div>

        {/* Help Section */}
        <div>
          <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
            Help
          </h4>
          <ul className="space-y-2 text-gray-700 ">
            <li>
              <a href="#" className="hover:text-sky-600">
                Customer Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-600">
                Delivery Details
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-600">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-sky-600">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>

        {/* Popular Posts */}
        <div>
          <h4 className="text-sm font-semibold text-gray-400 tracking-wider uppercase mb-4">
            Recent Updates
          </h4>
          <ul className="space-y-4">
            <li>
              <a
          href="#"
          className="font-semibold text-gray-800  hover:text-sky-600 block"
              >
          New Hydroponic System Launch for Home Growers
              </a>
              <span className="text-sm text-gray-500">March 15, 2025</span>
            </li>
            <li>
              <a
          href="#"
          className="font-semibold text-gray-800  hover:text-sky-600 block"
              >
          Sustainable Agriculture: Our Impact on Local Communities
              </a>
              <span className="text-sm text-gray-500">February 28, 2025</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Line */}
      <div className="border-t border-gray-200  mt-12 pt-6 text-center text-gray-500 text-sm">
        © 2025 ClarityUI. All rights reserved.
      </div>
    </section>
  );
}
