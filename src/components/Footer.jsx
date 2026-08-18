export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

          <div>
            <h2 className="text-2xl font-bold text-white mb-4">
              🌿 Compost Connect
            </h2>

            <p className="text-gray-400 leading-relaxed">
              Turning biodegradable waste into valuable resources through AI,
              smart pickups, and sustainable partnerships.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">
              <li><a href="#" className="hover:text-green-400">Home</a></li>
              <li><a href="#" className="hover:text-green-400">About</a></li>
              <li><a href="#" className="hover:text-green-400">Our Solution</a></li>
              <li><a href="#" className="hover:text-green-400">AI Demo</a></li>
              <li><a href="#" className="hover:text-green-400">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Contact
            </h3>

            <p className="mb-3">📧 compost.connect.web@gmail.com</p>
            <p className="mb-3">📞 +91 99539 94486</p>
            <p>📍 Gurugram, India</p>
          </div>

          <div>
            <h3 className="text-white font-semibold text-lg mb-5">
              Follow Us
            </h3>

            <div className="flex gap-4 text-2xl">
              <span>📷</span>
              <span>💼</span>
              <span>🌐</span>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          {new Date().getFullYear()} Compost Connect
        </div>
      </div>
    </footer>
  );
}
