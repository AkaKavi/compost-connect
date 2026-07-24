import { motion } from "framer-motion";
import {
  Recycle,
  Trees,
  Cloud,
  Sprout,
} from "lucide-react";

export default function ImpactCard() {
  const impact = [
    {
      title: "Organic Waste Diverted",
      value: "248 kg",
      icon: <Recycle size={30} />,
      color: "bg-green-100 text-green-700",
    },
    {
      title: "Trees Equivalent",
      value: "6 Trees",
      icon: <Trees size={30} />,
      color: "bg-emerald-100 text-emerald-700",
    },
    {
      title: "CO₂ Prevented",
      value: "92 kg",
      icon: <Cloud size={30} />,
      color: "bg-sky-100 text-sky-700",
    },
    {
      title: "Compost Produced",
      value: "185 kg",
      icon: <Sprout size={30} />,
      color: "bg-lime-100 text-lime-700",
    },
  ];

  return (
    <section>

      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Environmental Impact
        </h2>

        <p className="mt-2 text-gray-500">
          Every kilogram of biodegradable waste collected contributes to a
          cleaner and more sustainable future.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="rounded-3xl bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 p-8 text-white shadow-2xl"
      >
        <div className="text-center">

          <h3 className="text-4xl font-bold">
            🌍 Your Contribution Matters
          </h3>

          <p className="mt-4 text-green-100 max-w-3xl mx-auto leading-relaxed">
            Thanks to your participation in Compost Connect,
            biodegradable waste has been diverted from landfills and
            transformed into useful resources like compost,
            reducing harmful greenhouse gas emissions.
          </p>

        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

          {impact.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                scale: 1.05,
                y: -6,
              }}
              className="rounded-3xl bg-white p-6 text-center shadow-xl"
            >

              <div
                className={`mx-auto flex h-16 w-16 items-center justify-center rounded-2xl ${item.color}`}
              >
                {item.icon}
              </div>

              <h4 className="mt-5 text-lg font-semibold text-gray-800">
                {item.title}
              </h4>

              <p className="mt-3 text-3xl font-bold text-green-700">
                {item.value}
              </p>

            </motion.div>

          ))}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 rounded-3xl bg-white/15 p-6 backdrop-blur-md"
        >

          <h3 className="text-2xl font-bold">
            🌱 Sustainability Insight
          </h3>

          <p className="mt-4 leading-relaxed text-green-50">
            Organic waste dumped in landfills releases methane,
            a greenhouse gas significantly more potent than carbon dioxide.
            By ensuring proper composting, you're helping reduce emissions,
            enrich soil quality and support a circular economy.
          </p>

        </motion.div>

      </motion.div>

    </section>
  );
}
