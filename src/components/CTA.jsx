import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-gradient-to-r from-green-700 via-green-600 to-green-500 text-white">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <div className="bg-white/20 p-5 rounded-full">
              <Leaf size={42} />
            </div>
          </div>

          <h2 className="text-5xl font-bold">
            Ready to Turn Waste into Value?
          </h2>

          <p className="mt-6 text-lg max-w-3xl mx-auto text-green-100 leading-relaxed">
            Join Compost Connect today and start earning money, collecting Green
            Points, and making your business more sustainable. Every kilogram of
            waste you contribute creates value for you and for the environment.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

            <button className="bg-white text-green-700 px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-lg flex items-center justify-center gap-2">
              Get Started
              <ArrowRight size={20} />
            </button>

            <button className="border-2 border-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-green-700 transition duration-300">
              Contact Us
            </button>

          </div>

        </motion.div>

      </div>
    </section>
  );
}