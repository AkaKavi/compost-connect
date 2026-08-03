import { Link } from "react-router-dom";

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
            <span className="text-green-700"> Better Future</span>
          </h1>

          <p className="text-gray-600 mt-8 text-lg leading-9">
            Compost Connect bridges vegetable vendors, grocery stores and food
            businesses with composting and biogas companies.

            Our intelligent pickup system reduces waste, saves transportation
            costs, and helps create a greener future.
          </p>

          <div className="mt-10">
            <Link
              to="/login"
              className="inline-block bg-green-700 text-white px-8 py-4 rounded-xl text-lg font-semibold hover:bg-green-800 transition"
            >
              Request Pickup
            </Link>
          </div>
        </div>

        {/* Right */}
        <div>
          <img
            src="<img src="https://img.sanishtech.com/u/6832511f3f3386191c233927b0f0f232.png" alt="ChatGPT Image Aug 3, 2026, 09_53_54 PM" width="1536" height="1024" loading="lazy" style="max-width:100%;height:auto;">"
            alt="Hero"
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}

export default Hero;
