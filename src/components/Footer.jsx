import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Brand */}

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              🌿 Compost Connect
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Turning biodegradable waste into valuable resources through AI,
              smart pickups, and sustainable partnerships.
            </p>
          </div>

          {/* Quick Links */}

          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link
                  to="/"
                  className="hover:text-green-400 transition"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-green-400 transition"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/solution"
                  className="hover:text-green-400 transition"
                >
                  Our Solution
                </Link>
              </li>

              <li>
                <Link
                  to="/ai-demo"
                  className="hover:text-green-400 transition"
                >
                  AI Demo
                </Link>
              </li>

              <li>
                <Link
                  to="/"
                  className="hover:text-green-400 transition"
                >
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Contact */}

          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Contact
            </h3>

            <p className="mb-3">
              📧 compost.connect.web@gmail.com
            </p>

            <p className="mb-3">
              📞 +91 9953994486
            </p>

            <p>
              📍 Gurugram, India
            </p>
          </div>

        </div>

        {/* Copyright */}

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          © {new Date().getFullYear()} Compost Connect
        </div>

      </div>
    </footer>
  );
}
