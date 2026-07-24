import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

export default function SolutionHero() {
  return (
    <section className="relative overflow-hidden">

      <div className="absolute -top-40 left-0 w-[500px] h-[500px] bg-green-100 blur-3xl rounded-full opacity-40"></div>

      <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-emerald-100 blur-3xl rounded-full opacity-40"></div>

      <div className="relative max-w-7xl mx-auto px-8 py-28">

        <div className="grid lg:grid-cols-2 gap-20 items-center">

          <AnimatedSection>

            <span className="border border-green-200 bg-white px-5 py-2 rounded-full text-green-700 font-semibold">

              OUR SOLUTION

            </span>

            <h1 className="mt-8 text-6xl lg:text-7xl font-black leading-tight">

              AI-Powered

              <span className="block text-green-700">

                Waste Management

              </span>

              Made Simple.

            </h1>

            <p className="mt-8 text-xl text-gray-600 leading-9 max-w-xl">

              Compost Connect uses Artificial Intelligence to identify
              biodegradable waste, estimate its quantity and connect
              vendors with nearby waste processing companies for
              efficient compost production.

            </p>

          </AnimatedSection>

          <AnimatedSection delay={0.2}>

            <motion.div

              animate={{
                y: [0, -8, 0],
              }}

              transition={{
                repeat: Infinity,
                duration: 5,
              }}

              className="rounded-[36px] bg-white border border-gray-200 shadow-2xl p-10"

            >

              <h2 className="text-3xl font-bold text-center">

                Solution Flow

              </h2>

              <div className="mt-10 space-y-5">

                {[
                  ["🏪", "Vendor Generates Waste"],
                  ["🤖", "AI Detects Waste"],
                  ["📍", "Nearest Company Found"],
                  ["🚚", "Pickup Scheduled"],
                  ["🏭", "Compost Processing"],
                ].map(([icon, text], index) => (

                  <div key={index}>

                    <div className="flex items-center gap-5 rounded-2xl border p-5">

                      <div className="text-3xl">

                        {icon}

                      </div>

                      <h3 className="font-semibold text-lg">

                        {text}

                      </h3>

                    </div>

                    {index !== 4 && (

                      <div className="flex justify-center py-2">

                        <div className="w-[2px] h-8 bg-green-500"></div>

                      </div>

                    )}

                  </div>

                ))}

              </div>

            </motion.div>

          </AnimatedSection>

        </div>

      </div>

    </section>
  );
}