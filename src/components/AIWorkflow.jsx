import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const workflow = [
  {
    step: "01",
    title: "Image Upload",
    description:
      "The vendor uploads a photo of biodegradable waste using the Compost Connect platform.",
  },
  {
    step: "02",
    title: "Computer Vision",
    description:
      "The AI analyses the uploaded image to identify visible waste items.",
  },
  {
    step: "03",
    title: "Waste Classification",
    description:
      "Organic waste is classified into categories such as vegetable scraps, fruit peels or mixed biodegradable waste.",
  },
  {
    step: "04",
    title: "Quantity Estimation",
    description:
      "The system estimates the approximate quantity of waste using image analysis and vendor inputs.",
  },
  {
    step: "05",
    title: "Smart Recommendation",
    description:
      "Nearby processing companies are identified and the best pickup option is recommended.",
  },
];

export default function AIWorkflow() {
  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white">

      <div className="max-w-7xl mx-auto px-8">

        <AnimatedSection>

          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-block rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-semibold tracking-wide text-green-700">

              AI ENGINE

            </span>

            <h2 className="mt-6 text-5xl font-black">

              How Our AI Makes Decisions

            </h2>

            <p className="mt-6 text-lg leading-9 text-gray-600">

              Compost Connect uses Artificial Intelligence to simplify
              waste management by analysing uploaded images and helping
              vendors connect with the most suitable waste processing
              companies.

            </p>

          </div>

        </AnimatedSection>

        <div className="mt-24 grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}

          <div className="space-y-6">

            {workflow.map((item, index) => (

              <AnimatedSection
                key={index}
                delay={index * 0.08}
              >

                <motion.div

                  whileHover={{
                    x: 10,
                  }}

                  transition={{
                    duration: 0.3,
                  }}

                  className="flex gap-6 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg"

                >

                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-green-600 text-xl font-bold text-white">

                    {item.step}

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">

                      {item.title}

                    </h3>

                    <p className="mt-3 leading-8 text-gray-600">

                      {item.description}

                    </p>

                  </div>

                </motion.div>

              </AnimatedSection>

            ))}

          </div>

          {/* Right */}

          <AnimatedSection delay={0.3}>

            <motion.div

              animate={{
                y: [0, -8, 0],
              }}

              transition={{
                repeat: Infinity,
                duration: 5,
              }}

              className="rounded-[36px] border border-gray-200 bg-white p-10 shadow-2xl"

            >

              <h3 className="text-3xl font-bold text-center">

                AI Decision Flow

              </h3>

              <div className="mt-12 flex flex-col items-center">

                <div className="rounded-2xl bg-green-100 px-8 py-4 font-semibold">

                  Waste Image

                </div>

                <div className="my-4 h-10 w-1 bg-green-500 rounded-full"></div>

                <div className="rounded-2xl bg-blue-100 px-8 py-4 font-semibold">

                  Computer Vision

                </div>

                <div className="my-4 h-10 w-1 bg-green-500 rounded-full"></div>

                <div className="rounded-2xl bg-yellow-100 px-8 py-4 font-semibold">

                  AI Classification

                </div>

                <div className="my-4 h-10 w-1 bg-green-500 rounded-full"></div>

                <div className="rounded-2xl bg-purple-100 px-8 py-4 font-semibold">

                  Quantity Prediction

                </div>

                <div className="my-4 h-10 w-1 bg-green-500 rounded-full"></div>

                <div className="rounded-2xl bg-emerald-100 px-8 py-4 font-semibold">

                  Pickup Recommendation

                </div>

              </div>

            </motion.div>

          </AnimatedSection>

        </div>

      </div>

    </section>
  );
}