function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-20">

      <div className="grid lg:grid-cols-2 items-center gap-16">

        {/* Left */}

        <div>

          <div className="inline-block bg-green-100 text-green-700 px-5 py-2 rounded-full font-semibold mb-8">
            🌱 AI Powered Waste Management Platform
          </div>

          <h1 className="text-6xl font-bold leading-tight">

            Connecting Waste

            <br />

            to a

            <span className="text-green-700">

              {" "}Better Future

            </span>

          </h1>

          <p className="text-gray-600 mt-8 text-lg leading-9">

            Compost Connect bridges vegetable vendors,
            grocery stores and food businesses with composting
            and biogas companies.

            Our intelligent pickup system reduces waste,
            saves transportation costs,
            and helps create a greener future.

          </p>

          <div className="mt-10">

            <a
              href="/login"
              className="bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-800 transition"
            >
              Request Pickup
            </a>

          </div>

        </div>

        {/* Right */}

        <div>

          <img
            src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
            alt="Hero"
            className="rounded-3xl shadow-2xl"
          />

        </div>

      </div>

    </section>
  );
}

export default Hero;