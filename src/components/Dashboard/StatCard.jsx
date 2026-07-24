import { motion } from "framer-motion";

export default function StatCard({
  icon,
  title,
  value,
  subtitle,
  color,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.35 }}
      className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 p-6 border border-green-100"
    >
      <div
        className={`w-14 h-14 rounded-2xl flex items-center justify-center ${color}`}
      >
        {icon}
      </div>

      <h3 className="mt-5 text-gray-500 text-sm font-semibold uppercase tracking-wide">
        {title}
      </h3>

      <h2 className="mt-2 text-4xl font-bold text-gray-800">
        {value}
      </h2>

      <p className="mt-3 text-gray-500 text-sm">
        {subtitle}
      </p>
    </motion.div>
  );
}