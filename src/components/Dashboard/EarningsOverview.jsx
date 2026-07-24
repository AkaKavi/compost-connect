import { motion } from "framer-motion";
import {
  IndianRupee,
  TrendingUp,
  Wallet,
  CalendarDays,
} from "lucide-react";

export default function EarningsOverview() {
  return (
    <section>

      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Earnings Overview
        </h2>

        <p className="mt-2 text-gray-500">
          Keep track of your earnings and upcoming payouts.
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">

        {/* Total Earnings */}

        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="rounded-3xl bg-gradient-to-r from-green-600 to-emerald-500 p-8 text-white shadow-xl"
        >
          <div className="flex items-center justify-between">

            <div>

              <p className="text-green-100">
                Total Earnings
              </p>

              <h2 className="mt-2 text-5xl font-bold">
                ₹4,860
              </h2>

              <div className="mt-5 flex items-center gap-2 text-green-100">

                <TrendingUp size={18} />

                <span>
                  18% higher than last month
                </span>

              </div>

            </div>

            <div className="rounded-full bg-white/20 p-5">

              <IndianRupee size={42} />

            </div>

          </div>
        </motion.div>

        {/* Payment Details */}

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="rounded-3xl bg-white p-8 shadow-xl border border-green-100"
        >

          <h3 className="text-2xl font-bold text-gray-800">
            Payment Summary
          </h3>

          <div className="mt-8 space-y-6">

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <Wallet
                  className="text-green-600"
                  size={24}
                />

                <div>

                  <p className="font-semibold">
                    Last Payment
                  </p>

                  <p className="text-sm text-gray-500">
                    23 July 2026
                  </p>

                </div>

              </div>

              <span className="font-bold text-green-700">
                ₹1,280
              </span>

            </div>

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-3">

                <CalendarDays
                  className="text-green-600"
                  size={24}
                />

                <div>

                  <p className="font-semibold">
                    Estimated Next Payout
                  </p>

                  <p className="text-sm text-gray-500">
                    Expected on 31 July
                  </p>

                </div>

              </div>

              <span className="font-bold text-green-700">
                ₹1,650
              </span>

            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}