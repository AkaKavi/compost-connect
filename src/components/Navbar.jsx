import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";

function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Compost Connect"
            className="w-16 h-16 object-contain"
          />

          <div>
            <h1 className="text-3xl font-bold text-green-700">
              Compost Connect
            </h1>

            <p className="text-gray-500 text-sm">
              Connecting Waste to a Better Future
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <div className="hidden lg:flex gap-8 font-medium">

          <Link
            to="/"
            className="hover:text-green-700 transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-green-700 transition"
          >
            About
          </Link>

          <Link
            to="/solution"
            className="hover:text-green-700 transition"
          >
            Our Solution
          </Link>

          <Link
            to="/ai-demo"
            className="hover:text-green-700 transition"
          >
            AI Demo
          </Link>

          <Link
            to="/register"
            className="hover:text-green-700 transition"
          >
            Become a Vendor
          </Link>

        </div>

        {/* Buttons */}
        <div className="flex gap-3">

          <Link
            to="/login"
            className="border-2 border-green-700 px-5 py-2 rounded-xl font-semibold hover:bg-green-700 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="bg-green-700 text-white px-5 py-2 rounded-xl font-semibold hover:bg-green-800 transition"
          >
            Sign Up
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;