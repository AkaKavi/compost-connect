import { motion } from "framer-motion";
import {
  Store,
  Camera,
  Truck,
  Factory,
  Sprout,
  Globe,
} from "lucide-react";

const steps = [
  {
    icon: Store,
    title: "Waste Generated",
    text: "Vegetable vendors and grocery stores generate biodegradable waste.",
  },
  {
    icon: Camera,
    title: "AI Analysis",
    text: "Our AI identifies the waste type, estimates weight and schedules pickup.",
  },
  {
    icon: Truck,
    title: "Pickup",
    text: "The nearest Compost Connect vehicle collects the waste efficiently.",
  },
  {
    icon: Factory,
    title: "Processing",
    text: "Certified facilities convert waste into compost and biogas.",
  },
  {
    icon: Sprout,
    title: "Useful Products",
    text: "Organic compost and renewable energy are produced.",
  },
  {
    icon: Globe,
    title: "Cleaner Planet",
    text: "Less landfill waste, lower emissions and healthier cities.",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-green-600 font-semibold uppercase tracking-widest">
            Process
          </p>

          <h2 className="text-5xl font-bold mt-3">
            How Compost Connect Works
          </h2>

          <p className="text-gray-600 mt-5 max-w-2xl mx-auto">
            A smart, AI-powered system connecting waste generators with
            processing companies in just a few simple steps.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-6 md:grid-cols-3 sm:grid-cols-2 gap-8">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.5,
                }}
                className="relative text-center group"
              >

                <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center shadow-md group-hover:bg-green-600 transition-all duration-300">

                  <Icon
                    size={36}
                    className="text-green-700 group-hover:text-white transition"
                  />

                </div>

                <div className="mt-6">

                  <h3 className="font-bold text-lg">
                    {step.title}
                  </h3>

                  <p className="text-gray-600 text-sm mt-3 leading-6">
                    {step.text}
                  </p>

                </div>

                {index !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[75%] w-full border-t-2 border-dashed border-green-300"></div>
                )}

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}