import { motion } from "framer-motion";

export default function FeatureCard({
  emoji,
  title,
  description,
}) {
  return (
    <motion.div
      whileHover={{
        y: -10,
        scale: 1.03,
      }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl shadow-lg p-8"
    >
      <div className="text-5xl mb-6">
        {emoji}
      </div>

      <h3 className="text-2xl font-bold mb-4">
        {title}
      </h3>

      <p className="text-gray-600 leading-8">
        {description}
      </p>
    </motion.div>
  );
}