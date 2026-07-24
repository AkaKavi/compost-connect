import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const steps = [
  {
    title: "Vendor Generates Waste",
    description:
      "Grocery stores and vegetable vendors produce biodegradable waste during their daily operations.",
  },
  {
    title: "Waste Details Submitted",
    description:
      "The vendor uploads an image and basic details of the waste through Compost Connect.",
  },
  {
    title: "AI Analysis",
    description:
      "Artificial Intelligence identifies the waste type and estimates its quantity for efficient collection.",
  },
  {
    title: "Nearest Processor Matched",
    description:
      "The platform finds the most suitable nearby waste processing company based on location and availability.",
  },
  {
    title: "Smart Pickup Scheduled",
    description:
      "A pickup request is created, reducing delays and unnecessary transportation.",
  },
  {
    title: "Compost Production",
    description:
      "Collected organic waste is converted into compost and other environmentally useful products.",
  },
];

export default function SolutionTimeline() {
  return (
    <section className="py-32 bg-white">

      <div className="max-w-6xl mx-auto px-8">

        <AnimatedSection>

          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-block rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-semibold tracking-wide text-green-700">

              HOW IT WORKS

            </span>

            <h2 className="mt-6 text-5xl font-black">

              From Waste To Value

            </h2>

            <p className="mt-6 text-lg text-gray-600 leading-9">

              Compost Connect follows a simple AI-assisted workflow that
              makes biodegradable waste collection faster, smarter and
              more efficient.

            </p>

          </div>

        </AnimatedSection>

        <div className="relative mt-24">

          {/* Vertical Line */}

          <div className="absolute left-1/2 top-0 hidden h-full w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-green-500 via-green-300 to-green-500 lg:block"></div>

          <div className="space-y-16">

            {steps.map((step, index) => {

              const left = index % 2 === 0;

              return (

                <AnimatedSection
                  key={index}
                  delay={index * 0.08}
                >

                  <div
                    className={`grid lg:grid-cols-2 gap-12 items-center ${
                      left ? "" : "lg:[&>*:first-child]:order-2"
                    }`}
                  >

                    <motion.div

                      whileHover={{
                        y: -8,
                        scale: 1.02,
                      }}

                      transition={{
                        duration: 0.3,
                      }}

                      className="rounded-[32px] border border-gray-200 bg-white p-8 shadow-xl"

                    >

                      <div className="text-green-700 text-sm font-bold tracking-widest">

                        STEP {index + 1}

                      </div>

                      <h3 className="mt-4 text-3xl font-bold">

                        {step.title}

                      </h3>

                      <p className="mt-5 text-gray-600 leading-8">

                        {step.description}

                      </p>

                    </motion.div>

                    <div className="hidden lg:flex justify-center">

                      <motion.div

                        whileInView={{
                          scale: [0.8, 1.15, 1],
                        }}

                        transition={{
                          duration: 0.6,
                        }}

                        className="flex h-16 w-16 items-center justify-center rounded-full bg-green-600 text-xl font-bold text-white shadow-2xl"

                      >

                        {index + 1}

                      </motion.div>

                    </div>

                  </div>

                </AnimatedSection>

              );

            })}

          </div>

        </div>

      </div>

    </section>
  );
}