import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const problems = [
  {
    number: "40%",
    title: "Food Goes To Waste",
    description:
      "A significant portion of food produced is discarded before it can be consumed or reused effectively.",
  },
  {
    number: "Landfills",
    title: "Environmental Impact",
    description:
      "Organic waste dumped in landfills decomposes anaerobically and contributes to greenhouse gas emissions.",
  },
  {
    number: "Vendors",
    title: "No Easy Disposal",
    description:
      "Small grocery stores and vegetable vendors often lack an organised system for disposing biodegradable waste.",
  },
  {
    number: "Processors",
    title: "Supply Gap",
    description:
      "Waste processing companies struggle to find a consistent and reliable source of organic waste.",
  },
];

export default function ProblemCards() {
  return (
    <section className="py-28 bg-gradient-to-b from-green-50/40 to-white">

      <div className="max-w-7xl mx-auto px-8">

        <AnimatedSection>

          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-block rounded-full border border-red-200 bg-red-50 px-5 py-2 text-sm font-semibold tracking-wide text-red-600">

              THE PROBLEM

            </span>

            <h2 className="mt-6 text-5xl font-black tracking-tight text-gray-900">

              Why Current Waste Management Falls Short

            </h2>

            <p className="mt-6 text-lg leading-9 text-gray-600">

              Millions of kilograms of biodegradable waste are generated
              every day. Unfortunately, much of it never reaches composting
              facilities because vendors and processing companies remain
              disconnected.

            </p>

          </div>

        </AnimatedSection>

        <div className="grid gap-8 mt-20 md:grid-cols-2 lg:grid-cols-4">

          {problems.map((problem, index) => (

            <AnimatedSection
              key={index}
              delay={index * 0.1}
            >

              <motion.div

                whileHover={{
                  y: -12,
                  scale: 1.02,
                }}

                transition={{
                  duration: 0.3,
                }}

                className="group h-full rounded-[30px] border border-gray-200 bg-white p-8 shadow-lg hover:shadow-2xl"

              >

                <div className="text-4xl font-black text-green-700">

                  {problem.number}

                </div>

                <div className="mt-8 h-px bg-gray-200 group-hover:bg-green-500 transition-all"></div>

                <h3 className="mt-8 text-2xl font-bold">

                  {problem.title}

                </h3>

                <p className="mt-5 leading-8 text-gray-600">

                  {problem.description}

                </p>

              </motion.div>

            </AnimatedSection>

          ))}

        </div>

      </div>

    </section>
  );
}