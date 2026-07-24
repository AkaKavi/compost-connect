import { motion } from "framer-motion";
import { Gift, Award, Star } from "lucide-react";

export default function GreenRewards() {
  const currentPoints = 620;
  const nextTier = 700;

  const percentage = (currentPoints / nextTier) * 100;

  return (
    <section>

      <div className="mb-6">

        <h2 className="text-3xl font-bold text-gray-800">
          Green Rewards
        </h2>

        <p className="mt-2 text-gray-500">
          Earn Green Rewards every time you recycle biodegradable waste.
        </p>

      </div>

      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ scale: 1.01 }}
        className="rounded-3xl bg-white shadow-xl border border-green-100 p-8"
      >

        <div className="grid gap-8 lg:grid-cols-2">

          {/* Left */}

          <div>

            <div className="flex items-center gap-3">

              <div className="rounded-2xl bg-green-100 p-4">

                <Gift
                  className="text-green-600"
                  size={32}
                />

              </div>

              <div>

                <h3 className="text-2xl font-bold text-gray-800">
                  Current Balance
                </h3>

                <p className="text-gray-500">
                  Your Green Rewards
                </p>

              </div>

            </div>

            <h1 className="mt-8 text-6xl font-bold text-green-700">
              {currentPoints}
              <span className="text-3xl ml-2">
                GR
              </span>
            </h1>

            <p className="mt-4 text-gray-600 leading-relaxed">
              Collect Green Rewards by scheduling pickups
              and responsibly disposing of biodegradable
              waste through Compost Connect.
            </p>

          </div>

          {/* Right */}

          <div>

            <div className="rounded-2xl bg-green-50 p-6">

              <div className="flex items-center gap-3">

                <Award
                  className="text-yellow-500"
                  size={28}
                />

                <div>

                  <h3 className="font-bold text-xl">
                    Gold Vendor
                  </h3>

                  <p className="text-gray-500">
                    Current Tier
                  </p>

                </div>

              </div>

              <div className="mt-8">

                <div className="flex justify-between mb-2">

                  <span className="font-medium">
                    Progress to Platinum
                  </span>

                  <span>
                    {currentPoints}/{nextTier} GR
                  </span>

                </div>

                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">

                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{
                      width: `${percentage}%`,
                    }}
                    transition={{
                      duration: 1.2,
                    }}
                    className="h-full rounded-full bg-gradient-to-r from-green-500 to-emerald-500"
                  />

                </div>

              </div>

              <div className="mt-8 flex items-center gap-3 rounded-xl bg-white p-4">

                <Star
                  className="text-yellow-500"
                  size={24}
                />

                <div>

                  <h4 className="font-semibold">
                    Next Milestone
                  </h4>

                  <p className="text-gray-500 text-sm">
                    Earn 80 more GR to unlock
                    Platinum Vendor status.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </motion.div>

    </section>
  );
}