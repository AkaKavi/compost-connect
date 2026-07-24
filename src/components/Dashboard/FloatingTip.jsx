import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb } from "lucide-react";

export default function FloatingTip() {
  const tips = [
    "🌱 Composting organic waste helps reduce methane emissions from landfills.",
    "♻️ Separate wet and dry waste to improve recycling efficiency.",
    "🥬 Fresh biodegradable waste produces higher-quality compost.",
    "🚲 Delivering waste promptly helps preserve its compost value.",
    "🌍 Every kilogram of compost reduces the need for chemical fertilizers.",
  ];

  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed bottom-6 right-6 z-50 hidden w-80 rounded-3xl border border-green-200 bg-white p-5 shadow-2xl lg:block"
    >
      <div className="flex items-start gap-4">
        <div className="rounded-2xl bg-green-100 p-3">
          <Lightbulb
            className="text-green-600"
            size={26}
          />
        </div>

        <div className="flex-1">

          <h3 className="text-lg font-bold text-gray-800">
            Sustainability Tip
          </h3>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentTip}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="mt-2 text-sm leading-relaxed text-gray-600"
            >
              {tips[currentTip]}
            </motion.p>
          </AnimatePresence>

        </div>
      </div>
    </motion.div>
  );
}