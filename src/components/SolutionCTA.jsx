import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedSection from "./AnimatedSection";

export default function SolutionCTA() {
  return (
    <section className="relative overflow-hidden py-32">

      {/* Background Blur */}

      <div className="absolute -top-32 left-0 h-96 w-96 rounded-full bg-green-200 blur-3xl opacity-30"></div>

      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-emerald-200 blur-3xl opacity-30"></div>

      <div className="relative max-w-6xl mx-auto px-8">

        <AnimatedSection>

          <motion.div

            whileHover={{
              scale: 1.01,
            }}

            transition={{
              duration: 0.3,
            }}

            className="rounded-[40px] border border-green-200 bg-gradient-to-r from-green-700 to-emerald-600 px-10 py-20 text-center text-white shadow-2xl"

          >

            <span className="rounded-full bg-white/20 px-5 py-2 text-sm font-semibold tracking-wider">

              START THE CHANGE

            </span>

            <h2 className="mt-8 text-5xl lg:text-6xl font-black leading-tight">

              Ready to Transform
              <br />
              Waste Management?

            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-green-50">

              Compost Connect connects vendors, Artificial Intelligence,
              and waste processing companies into one seamless platform,
              making biodegradable waste collection smarter, faster,
              and more sustainable.

            </p>

            <div className="mt-12 flex flex-col justify-center gap-6 sm:flex-row">

              <Link
                to="/register"
                className="rounded-2xl bg-white px-8 py-4 text-lg font-bold text-green-700 transition hover:scale-105 hover:shadow-xl"
              >
                Become a Vendor
              </Link>

              <Link
                to="/aidemo"
                className="rounded-2xl border border-white bg-transparent px-8 py-4 text-lg font-bold transition hover:bg-white hover:text-green-700"
              >
                Try AI Demo
              </Link>

            </div>

          </motion.div>

        </AnimatedSection>

      </div>

    </section>
  );
}