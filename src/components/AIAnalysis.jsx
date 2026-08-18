import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function AIAnalysis() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState(false);
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState("");

  const analyseImage = () => {
    setLoading(true);
    setResult(false);
    setProgress(0);

    const steps = [
      { progress: 20, status: "Uploading Image..." },
      { progress: 40, status: "Scanning Waste..." },
      { progress: 60, status: "Detecting Waste Type..." },
      { progress: 80, status: "Estimating Quantity..." },
      { progress: 100, status: "Finding Nearby Processor..." },
    ];

    steps.forEach((step, index) => {
      setTimeout(() => {
        setProgress(step.progress);
        setStatus(step.status);

        if (index === steps.length - 1) {
          setTimeout(() => {
            setLoading(false);
            setResult(true);
          }, 1000);
        }
      }, index * 1200);
    });
  };

  return (
    <section className="max-w-5xl mx-auto px-8 py-20">

      <AnimatedSection>

        <div className="bg-white rounded-[35px] shadow-xl border border-gray-200 p-10">

          <div className="flex flex-col md:flex-row md:justify-between md:items-center">

            <div>

              <h2 className="text-4xl font-black">

                AI Waste Analysis

              </h2>

              <p className="mt-3 text-gray-600">

                Simulate how Compost Connect analyses
                biodegradable waste using Artificial Intelligence.

              </p>

            </div>

            <button

              onClick={analyseImage}

              disabled={loading}

              className="mt-8 md:mt-0 bg-green-600 text-white px-8 py-4 rounded-2xl font-bold hover:bg-green-700 transition disabled:opacity-60"

            >

              {loading ? "Analysing..." : "Analyse Image"}

            </button>

          </div>

          {/* Loading */}

          <AnimatePresence>

            {loading && (

              <motion.div

                initial={{ opacity: 0 }}

                animate={{ opacity: 1 }}

                exit={{ opacity: 0 }}

                className="mt-16"

              >

                <div className="flex justify-between">

                  <span className="font-semibold">

                    {status}

                  </span>

                  <span>

                    {progress}%

                  </span>

                </div>

                <div className="mt-4 h-4 bg-gray-200 rounded-full overflow-hidden">

                  <motion.div

                    initial={{ width: 0 }}

                    animate={{
                      width: `${progress}%`,
                    }}

                    className="h-full bg-green-600"

                  />

                </div>

              </motion.div>

            )}

          </AnimatePresence>

          {/* Results */}

          <AnimatePresence>

            {result && (

              <motion.div

                initial={{ opacity: 0, y: 40 }}

                animate={{ opacity: 1, y: 0 }}

                exit={{ opacity: 0 }}

                transition={{ duration: 0.6 }}

                className="mt-20"

              >

                <div className="grid md:grid-cols-2 gap-8">

                  <div className="rounded-3xl bg-green-50 p-8">

                    <p className="text-gray-500">

                      Waste Type

                    </p>

                    <h3 className="mt-2 text-3xl font-black text-green-700">

                      Vegetable Waste

                    </h3>

                  </div>

                  <div className="rounded-3xl bg-green-50 p-8">

                    <p className="text-gray-500">

                      Confidence

                    </p>

                    <h3 className="mt-2 text-3xl font-black text-green-700">

                      97%

                    </h3>

                  </div>

                  <div className="rounded-3xl bg-green-50 p-8">

                    <p className="text-gray-500">

                      Estimated Quantity

                    </p>

                    <h3 className="mt-2 text-3xl font-black text-green-700">

                      12.4 kg

                    </h3>

                  </div>

                  <div className="rounded-3xl bg-green-50 p-8">

                    <p className="text-gray-500">

                      Nearest Processor

                    </p>

                    <h3 className="mt-2 text-3xl font-black text-green-700">

                      Green Earth Compost

                    </h3>

                  </div>

                </div>

                <div className="grid md:grid-cols-2 gap-8 mt-8">

                  <div className="rounded-3xl bg-white border p-8">

                    <p className="text-gray-500">

                      Distance

                    </p>

                    <h3 className="mt-2 text-3xl font-black">

                      2.3 km

                    </h3>

                  </div>

                  <div className="rounded-3xl bg-white border p-8">

                    <p className="text-gray-500">

                      Estimated Pickup

                    </p>

                    <h3 className="mt-2 text-3xl font-black">

                      18 min

                    </h3>

                  </div>

                </div>

              </motion.div>

            )}

          </AnimatePresence>

        </div>

      </AnimatedSection>

    </section>
  );
}
