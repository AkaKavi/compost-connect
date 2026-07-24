import { motion } from "framer-motion";
import { Leaf, Store, Recycle } from "lucide-react";
import missionIllustration from "../assets/images/mission-illustration.png";

const cards = [
  {
    icon: Leaf,
    title: "Reduce Food Waste",
    description:
      "We prevent biodegradable waste from ending up in landfills by connecting it with certified processing facilities.",
  },
  {
    icon: Store,
    title: "Empower Local Vendors",
    description:
      "Fruit sellers, vegetable markets and grocery stores can dispose of waste responsibly while contributing to a cleaner city.",
  },
  {
    icon: Recycle,
    title: "Build a Circular Economy",
    description:
      "Collected waste is transformed into compost, biogas and other valuable resources that benefit agriculture and the environment.",
  },
];

export default function Mission() {
  return (
    <section className="bg-green-50 py-24">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-green-700 font-semibold uppercase tracking-widest">
            Our Mission
          </p>

          <h2 className="text-5xl font-bold text-gray-900 mt-3">
            Turning Waste Into Opportunity
          </h2>

          <p className="text-gray-600 mt-6 max-w-3xl mx-auto text-lg leading-8">
            Compost Connect bridges the gap between businesses generating
            biodegradable waste and organizations that transform it into useful
            products, creating cleaner cities and a more sustainable future.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Illustration */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <img
              src={missionIllustration}
              alt="Compost Connect Mission"
              className="w-full max-w-2xl mx-auto object-contain transition-all duration-500 hover:scale-105"
            />
          </motion.div>

          {/* Cards */}

          <div className="space-y-6">

            {cards.map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.15,
                  duration: 0.6,
                }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-7 hover:-translate-y-2 transition"
              >
                <div className="flex gap-5">

                  <div className="bg-green-100 p-4 rounded-xl">
                    <card.icon
                      size={34}
                      className="text-green-700"
                    />
                  </div>

                  <div>

                    <h3 className="text-2xl font-semibold text-gray-900">
                      {card.title}
                    </h3>

                    <p className="text-gray-600 mt-2 leading-7">
                      {card.description}
                    </p>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}