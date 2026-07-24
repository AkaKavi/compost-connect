import { motion } from "framer-motion";
import {
  Brain,
  Camera,
  BadgeCheck,
  Clock3,
  Lightbulb,
  Leaf,
} from "lucide-react";

export default function AIInsights() {
  return (
    <section>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          AI Insights
        </h2>

        <p className="mt-2 text-gray-500">
          AI-powered analysis of your latest biodegradable waste scan.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="grid gap-8 lg:grid-cols-2"
      >

        {/* Image Preview */}

        <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-xl">

          <div className="flex items-center gap-3 mb-6">

            <Camera
              className="text-green-600"
              size={30}
            />

            <div>

              <h3 className="text-2xl font-bold text-gray-800">
                Latest Scan
              </h3>

              <p className="text-gray-500">
                Preview of your last uploaded image
              </p>

            </div>

          </div>

          <div className="h-72 rounded-2xl border-2 border-dashed border-green-300 bg-green-50 flex flex-col items-center justify-center">

            <Camera
              size={70}
              className="text-green-400"
            />

            <p className="mt-5 text-gray-500">
              Waste Image Preview
            </p>

            <p className="text-sm text-gray-400 mt-2">
              (Will display uploaded image)
            </p>

          </div>

        </div>

        {/* AI Result */}

        <div className="rounded-3xl bg-white p-6 shadow-xl border border-green-100">

          <div className="flex items-center gap-3 mb-6">

            <Brain
              className="text-green-600"
              size={30}
            />

            <div>

              <h3 className="text-2xl font-bold text-gray-800">
                AI Analysis
              </h3>

              <p className="text-gray-500">
                Generated from your latest scan
              </p>

            </div>

          </div>

          <div className="space-y-5">

            <div className="flex justify-between items-center">

              <span className="font-medium text-gray-600">
                Waste Category
              </span>

              <span className="font-bold text-green-700">
                Vegetable Waste
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span className="font-medium text-gray-600">
                AI Confidence
              </span>

              <div className="flex items-center gap-2 text-green-700 font-bold">

                <BadgeCheck size={20} />

                98%

              </div>

            </div>

            <div className="flex justify-between items-center">

              <span className="font-medium text-gray-600">
                Freshness
              </span>

              <span className="font-bold text-green-700">
                94%
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span className="font-medium text-gray-600">
                Estimated Weight
              </span>

              <span className="font-bold text-green-700">
                18 kg
              </span>

            </div>

            <div className="flex justify-between items-center">

              <span className="font-medium text-gray-600">
                Compost Quality
              </span>

              <span className="font-bold text-green-700">
                Excellent
              </span>

            </div>

          </div>

          <div className="mt-8 rounded-2xl bg-green-50 p-5">

            <div className="flex items-start gap-3">

              <Lightbulb
                className="text-yellow-500 mt-1"
                size={24}
              />

              <div>

                <h4 className="font-bold text-gray-800">
                  AI Recommendation
                </h4>

                <p className="mt-2 text-gray-600 leading-relaxed">
                  This waste is highly suitable for composting.
                  Schedule a pickup within the next 12 hours
                  to preserve its quality and maximise its value.
                </p>

              </div>

            </div>

          </div>

          <div className="mt-5 flex items-center justify-between rounded-2xl bg-emerald-100 p-4">

            <div className="flex items-center gap-3">

              <Clock3
                className="text-green-700"
                size={22}
              />

              <span className="font-semibold">
                Best Pickup Window
              </span>

            </div>

            <span className="font-bold text-green-700">
              Today • 4 PM - 7 PM
            </span>

          </div>

        </div>

      </motion.div>

    </section>
  );
}