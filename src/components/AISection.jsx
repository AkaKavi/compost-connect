import { motion } from "framer-motion";
import {
  Camera,
  BrainCircuit,
  Weight,
  Truck,
  Leaf,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: BrainCircuit,
    title: "Waste Detection",
    value: "Organic Waste",
  },
  {
    icon: Weight,
    title: "Estimated Weight",
    value: "18.4 kg",
  },
  {
    icon: Truck,
    title: "Nearest Pickup",
    value: "2.1 km Away",
  },
  {
    icon: Leaf,
    title: "CO₂ Saved",
    value: "5.8 kg",
  },
];

export default function AISection() {
  return (
    <section className="py-24 bg-gradient-to-b from-green-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-widest text-green-600 font-semibold">
            AI Powered
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Smart Waste Analysis
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto">
            Our AI identifies biodegradable waste, estimates quantity,
            prioritizes pickups and helps optimize collection routes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Upload Card */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10"
          >
            <div className="border-2 border-dashed border-green-300 rounded-2xl p-12 text-center">

              <Camera
                className="mx-auto text-green-600"
                size={70}
              />

              <h3 className="text-2xl font-bold mt-6">
                Upload Waste Photo
              </h3>

              <p className="text-gray-600 mt-3">
                Vendors upload a photo of their biodegradable waste.
                AI instantly analyzes it.
              </p>

              <button className="mt-8 px-8 py-3 rounded-xl bg-green-600 text-white hover:bg-green-700 transition">
                Choose Image
              </button>

            </div>
          </motion.div>

          {/* AI Results */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl p-10"
          >

            <div className="flex items-center gap-3 mb-8">

              <CheckCircle2
                className="text-green-600"
                size={34}
              />

              <h3 className="text-2xl font-bold">
                AI Analysis
              </h3>

            </div>

            <div className="space-y-5">

              {features.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={index}
                    className="flex justify-between items-center bg-green-50 rounded-xl p-5"
                  >
                    <div className="flex items-center gap-4">

                      <Icon
                        className="text-green-600"
                        size={28}
                      />

                      <span className="font-semibold">
                        {item.title}
                      </span>

                    </div>

                    <span className="font-bold text-green-700">
                      {item.value}
                    </span>

                  </div>
                );
              })}

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}