import { motion } from "framer-motion";
import {
  IndianRupee,
  Leaf,
  Clock3,
  BrainCircuit,
  Gift,
  Recycle,
  Store,
} from "lucide-react";

const benefits = [
  {
    icon: IndianRupee,
    title: "Earn Money for Your Waste",
    desc: "Get paid for every kilogram of biodegradable waste you contribute through Compost Connect.",
  },
  {
    icon: Gift,
    title: "Green Rewards",
    desc: "Earn Green Points with every pickup and redeem them for gift cards, vouchers, and exciting rewards.",
  },
  {
    icon: BrainCircuit,
    title: "AI Waste Scanner",
    desc: "Upload a photo of your waste and let AI identify its type and estimate its quantity instantly.",
  },
  {
    icon: Clock3,
    title: "Easy Pickup Scheduling",
    desc: "Book pickups anytime through the platform without making phone calls or waiting.",
  },
  {
    icon: Recycle,
    title: "Reduce Environmental Impact",
    desc: "Help divert biodegradable waste from landfills and contribute to sustainable compost production.",
  },
  {
    icon: Store,
    title: "Cleaner Business",
    desc: "Keep your shop clean, hygienic, and free from accumulated organic waste.",
  },
];

export default function Benefits() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-widest text-green-600 font-semibold">
            Why Join Compost Connect?
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Turn Waste into Opportunity
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Join a growing network of vendors who are earning money, collecting
            Green Points, scheduling hassle-free pickups, and helping create a
            cleaner, more sustainable future.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-green-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center shadow mb-6">
                  <Icon className="text-green-600" size={28} />
                </div>

                <h3 className="text-xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}