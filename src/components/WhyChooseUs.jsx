import { motion } from "framer-motion";
import {
  BrainCircuit,
  IndianRupee,
  Gift,
  Truck,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Waste Detection",
    description:
      "Simply upload a photo and let AI identify the waste type and estimate its quantity within seconds.",
  },
  {
    icon: IndianRupee,
    title: "Earn from Organic Waste",
    description:
      "Every kilogram of biodegradable waste contributes to your earnings, turning waste into a valuable resource.",
  },
  {
    icon: Gift,
    title: "Green Rewards System",
    description:
      "Collect Green Points with every successful pickup and redeem them for gift cards and exciting rewards.",
  },
  {
    icon: Truck,
    title: "Hassle-Free Pickups",
    description:
      "Schedule pickups directly through the platform and let our logistics partners handle the rest.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-green-50">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-widest text-green-600 font-semibold">
            Our Advantage
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Why Compost Connect is Different
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            We combine AI, sustainability, and vendor incentives into one
            platform that makes biodegradable waste collection smarter,
            simpler, and more rewarding.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
                  <Icon size={32} className="text-green-600" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}

        </div>
      </div>
    </section>
  );
}