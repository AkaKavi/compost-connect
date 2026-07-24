import { motion } from "framer-motion";

export default function StatCard({ number, title }) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.04,
      }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl shadow-lg p-10 text-center"
    >
      <h2 className="text-5xl font-bold text-green-700">
        {number}
      </h2>

      <p className="mt-4 text-gray-600 text-lg">
        {title}
      </p>
    </motion.div>
  );
}