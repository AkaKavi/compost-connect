import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const vendorBenefits = [
  "Simple vendor registration",
  "Quick waste pickup requests",
  "Cleaner and more hygienic shops",
  "Reduced manual effort",
  "Support sustainable practices",
];

const processorBenefits = [
  "Reliable organic waste supply",
  "Optimised collection routes",
  "Reduced transportation costs",
  "Improved operational efficiency",
  "AI-powered pickup recommendations",
];

export default function BenefitsGrid() {
  return (
    <section className="py-32 bg-white">

      <div className="max-w-7xl mx-auto px-8">

        <AnimatedSection>

          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-block rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-semibold tracking-wide text-green-700">
              BENEFITS
            </span>

            <h2 className="mt-6 text-5xl font-black">
              Creating Value For Everyone
            </h2>

            <p className="mt-6 text-lg leading-9 text-gray-600">
              Compost Connect benefits every participant in the waste
              management ecosystem by making collection smarter,
              faster and more sustainable.
            </p>

          </div>

        </AnimatedSection>

        <div className="mt-20 grid lg:grid-cols-2 gap-10">

          {/* Vendors */}

          <AnimatedSection delay={0.1}>

            <motion.div

              whileHover={{
                y: -8,
              }}

              transition={{
                duration: 0.3,
              }}

              className="rounded-[36px] border border-gray-200 bg-white p-10 shadow-xl"

            >

              <div className="flex items-center justify-between">

                <h3 className="text-3xl font-bold">
                  For Vendors
                </h3>

                <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                  Grocery Stores
                </span>

              </div>

              <div className="mt-10 space-y-6">

                {vendorBenefits.map((benefit, index) => (

                  <motion.div

                    key={index}

                    initial={{ opacity: 0, x: -20 }}

                    whileInView={{ opacity: 1, x: 0 }}

                    transition={{
                      delay: index * 0.08,
                    }}

                    viewport={{ once: true }}

                    className="flex items-center gap-4"

                  >

                    <div className="h-3 w-3 rounded-full bg-green-600"></div>

                    <p className="text-lg text-gray-700">

                      {benefit}

                    </p>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </AnimatedSection>

          {/* Processors */}

          <AnimatedSection delay={0.2}>

            <motion.div

              whileHover={{
                y: -8,
              }}

              transition={{
                duration: 0.3,
              }}

              className="rounded-[36px] border border-gray-200 bg-white p-10 shadow-xl"

            >

              <div className="flex items-center justify-between">

                <h3 className="text-3xl font-bold">
                  For Processing Companies
                </h3>

                <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
                  Compost Plants
                </span>

              </div>

              <div className="mt-10 space-y-6">

                {processorBenefits.map((benefit, index) => (

                  <motion.div

                    key={index}

                    initial={{ opacity: 0, x: -20 }}

                    whileInView={{ opacity: 1, x: 0 }}

                    transition={{
                      delay: index * 0.08,
                    }}

                    viewport={{ once: true }}

                    className="flex items-center gap-4"

                  >

                    <div className="h-3 w-3 rounded-full bg-green-600"></div>

                    <p className="text-lg text-gray-700">

                      {benefit}

                    </p>

                  </motion.div>

                ))}

              </div>

            </motion.div>

          </AnimatedSection>

        </div>

      </div>

    </section>
  );
}