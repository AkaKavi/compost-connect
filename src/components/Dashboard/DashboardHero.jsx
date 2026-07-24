import { motion } from "framer-motion";
import { CalendarDays, Leaf } from "lucide-react";

export default function DashboardHero({ greeting, userName }) {
  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
  });

  return (
    <motion.section
      initial={{ opacity: 0, y: 35 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-green-600 via-green-500 to-emerald-500 text-white shadow-2xl"
    >
      {/* Decorative Circles */}

      <div className="absolute -top-12 -right-12 h-48 w-48 rounded-full bg-white/10"></div>

      <div className="absolute bottom-0 left-0 h-32 w-32 rounded-full bg-white/10"></div>

      <div className="relative z-10 flex flex-col gap-8 p-8 lg:flex-row lg:items-center lg:justify-between">

        {/* Left Side */}

        <div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold lg:text-5xl"
          >
            {greeting}, {userName} 👋
          </motion.h1>

          <p className="mt-4 max-w-2xl text-lg text-green-50">
            Welcome back to{" "}
            <span className="font-semibold">
              Compost Connect
            </span>
            .
            <br />
            Let's turn today's waste into tomorrow's resource.
          </p>

          <div className="mt-6 flex flex-wrap gap-6">

            <div className="flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 backdrop-blur-md">

              <CalendarDays size={20} />

              <span>{today}</span>

            </div>

            <div className="flex items-center gap-2 rounded-xl bg-white/15 px-4 py-2 backdrop-blur-md">

              <Leaf size={20} />

              <span>Every Pickup Creates Impact</span>

            </div>

          </div>

        </div>

        {/* Right Side */}

        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
          className="flex justify-center"
        >
          <div className="flex h-40 w-40 items-center justify-center rounded-full bg-white/15 backdrop-blur-lg shadow-xl">

            <span className="text-7xl">
              ♻️
            </span>

          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}