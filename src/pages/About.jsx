import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import AnimatedSection from "../components/AnimatedSection";
import FeatureCard from "../components/FeatureCard";
import StatCard from "../components/StatCard";

export default function About() {
  return (
    <div className="bg-gradient-to-b from-white via-green-50/30 to-white overflow-hidden">

      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden">

        {/* Background Blur */}

        <div className="absolute -top-40 -left-32 w-[500px] h-[500px] bg-green-100 rounded-full blur-3xl opacity-40"></div>

        <div className="absolute -bottom-40 right-0 w-[500px] h-[500px] bg-emerald-100 rounded-full blur-3xl opacity-40"></div>

        <div className="relative max-w-7xl mx-auto px-8 py-28">

          <div className="grid lg:grid-cols-2 gap-20 items-center">

            {/* Left Side */}

            <AnimatedSection>

              <span className="inline-flex items-center rounded-full border border-green-200 bg-white px-5 py-2 text-sm font-semibold tracking-wide text-green-700 shadow-sm">

                AI Powered Waste Management

              </span>

              <h1 className="mt-8 text-6xl lg:text-7xl font-black leading-tight tracking-tight text-gray-900">

                Transforming

                <span className="block text-green-700">

                  Food Waste

                </span>

                Into Opportunity

              </h1>

              <p className="mt-8 text-xl leading-9 text-gray-600 max-w-xl">

                Compost Connect is an AI-powered platform that connects
                grocery stores, vegetable vendors, and biodegradable waste
                generators with waste processing companies.

                <br /><br />

                Our platform helps reduce landfill waste, optimise waste
                collection, and support a cleaner, more sustainable future.

              </p>

              <div className="mt-12 flex flex-wrap gap-5">

                <Link
                  to="/solution"
                  className="rounded-xl bg-green-700 px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-green-800"
                >
                  Explore Solution
                </Link>

                <Link
                  to="/register"
                  className="rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold text-gray-800 transition-all duration-300 hover:border-green-700 hover:text-green-700"
                >
                  Become a Vendor
                </Link>

              </div>

            </AnimatedSection>

            {/* Workflow */}

            <AnimatedSection delay={0.2}>

              <motion.div

                animate={{
                  y: [0, -8, 0],
                }}

                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}

                className="relative rounded-[36px] border border-white/40 bg-white/70 backdrop-blur-xl shadow-2xl overflow-hidden"

              >

                <div className="absolute inset-0 bg-gradient-to-br from-green-50/70 to-white"></div>

                <div className="relative p-10">

                  <h2 className="text-3xl font-bold text-gray-900 text-center">

                    How Compost Connect Works

                  </h2>

                  <p className="text-center text-gray-500 mt-3">

                    AI-powered waste management in four simple steps

                  </p>

                  <div className="mt-12 space-y-5">

                    {/* STEP 1 */}

                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        x: 5,
                      }}
                      className="rounded-2xl border border-green-100 bg-white p-6 shadow-md"
                    >

                      <div className="flex items-center gap-5">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-2xl">

                          🏪

                        </div>

                        <div>

                          <h3 className="text-xl font-bold">

                            Vendor Registers

                          </h3>

                          <p className="mt-1 text-gray-500">

                            Vendors join the Compost Connect platform and
                            schedule biodegradable waste collection.

                          </p>

                        </div>

                      </div>

                    </motion.div>

                    <div className="flex justify-center">

                      <div className="h-10 w-[2px] rounded-full bg-gradient-to-b from-green-500 to-green-200"></div>

                    </div>
                                        {/* STEP 2 */}

                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        x: 5,
                      }}
                      className="rounded-2xl border border-blue-100 bg-white p-6 shadow-md"
                    >

                      <div className="flex items-center gap-5">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-2xl">

                          🤖

                        </div>

                        <div>

                          <h3 className="text-xl font-bold">
                            AI Detects Waste
                          </h3>

                          <p className="mt-1 text-gray-500">
                            Artificial Intelligence identifies biodegradable
                            waste and estimates its quantity for efficient
                            collection.
                          </p>

                        </div>

                      </div>

                    </motion.div>

                    <div className="flex justify-center">

                      <div className="h-10 w-[2px] rounded-full bg-gradient-to-b from-green-500 to-green-200"></div>

                    </div>

                    {/* STEP 3 */}

                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        x: 5,
                      }}
                      className="rounded-2xl border border-amber-100 bg-white p-6 shadow-md"
                    >

                      <div className="flex items-center gap-5">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-amber-100 text-2xl">

                          🚚

                        </div>

                        <div>

                          <h3 className="text-xl font-bold">
                            Smart Pickup
                          </h3>

                          <p className="mt-1 text-gray-500">
                            Nearby waste processing companies receive pickup
                            requests and schedule the fastest collection.
                          </p>

                        </div>

                      </div>

                    </motion.div>

                    <div className="flex justify-center">

                      <div className="h-10 w-[2px] rounded-full bg-gradient-to-b from-green-500 to-green-200"></div>

                    </div>

                    {/* STEP 4 */}

                    <motion.div
                      whileHover={{
                        scale: 1.02,
                        x: 5,
                      }}
                      className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-md"
                    >

                      <div className="flex items-center gap-5">

                        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-100 text-2xl">

                          🏭

                        </div>

                        <div>

                          <h3 className="text-xl font-bold">
                            Compost Processing
                          </h3>

                          <p className="mt-1 text-gray-500">
                            Organic waste is processed into compost and other
                            sustainable products instead of ending up in
                            landfills.
                          </p>

                        </div>

                      </div>

                    </motion.div>

                  </div>

                </div>

              </motion.div>

            </AnimatedSection>

          </div>

        </div>

      </section>

      {/* ================= WHY COMPOST CONNECT ================= */}
            <section className="py-28 bg-gradient-to-b from-green-50/40 to-white">

        <div className="max-w-7xl mx-auto px-8">

          <AnimatedSection>

            <div className="text-center max-w-3xl mx-auto">

              <span className="inline-block rounded-full border border-green-200 bg-white px-5 py-2 text-sm font-semibold tracking-wide text-green-700">

                WHY WE EXIST

              </span>

              <h2 className="mt-6 text-5xl font-black tracking-tight text-gray-900">

                Solving A Growing Waste Problem

              </h2>

              <p className="mt-6 text-lg leading-9 text-gray-600">

                Every day, grocery stores and vegetable vendors generate
                biodegradable waste that often ends up in landfills. At the
                same time, waste processing companies struggle to find
                consistent sources of organic waste.

                <br /><br />

                Compost Connect bridges this gap using AI, making waste
                collection smarter, faster and more sustainable.

              </p>

            </div>

          </AnimatedSection>

          <div className="mt-20 grid gap-8 md:grid-cols-3">

            <AnimatedSection delay={0.1}>

              <motion.div
                whileHover={{
                  y: -10,
                }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg"
              >

                <div className="text-sm font-semibold tracking-wider text-green-700">

                  01

                </div>

                <h3 className="mt-5 text-2xl font-bold">

                  Reduce Food Waste

                </h3>

                <p className="mt-5 leading-8 text-gray-600">

                  Redirect biodegradable waste away from landfills and
                  towards facilities that can convert it into valuable
                  compost and sustainable resources.

                </p>

              </motion.div>

            </AnimatedSection>

            <AnimatedSection delay={0.2}>

              <motion.div
                whileHover={{
                  y: -10,
                }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg"
              >

                <div className="text-sm font-semibold tracking-wider text-green-700">

                  02

                </div>

                <h3 className="mt-5 text-2xl font-bold">

                  Connect Stakeholders

                </h3>

                <p className="mt-5 leading-8 text-gray-600">

                  Build a seamless network between vendors and waste
                  processing companies, reducing manual effort and improving
                  collection efficiency.

                </p>

              </motion.div>

            </AnimatedSection>

            <AnimatedSection delay={0.3}>

              <motion.div
                whileHover={{
                  y: -10,
                }}
                transition={{ duration: 0.3 }}
                className="rounded-3xl border border-gray-200 bg-white p-8 shadow-lg"
              >

                <div className="text-sm font-semibold tracking-wider text-green-700">

                  03

                </div>

                <h3 className="mt-5 text-2xl font-bold">

                  Build A Greener Future

                </h3>

                <p className="mt-5 leading-8 text-gray-600">

                  Promote responsible waste management practices that
                  support cleaner cities, healthier communities and a more
                  sustainable environment.

                </p>

              </motion.div>

            </AnimatedSection>

          </div>

        </div>

      </section>

      {/* ================= MISSION & VISION ================= */}

      <section className="py-28">

        <div className="max-w-7xl mx-auto px-8">

          <div className="grid gap-10 lg:grid-cols-2">

            <AnimatedSection>

              <motion.div
                whileHover={{
                  y: -8,
                }}
                className="h-full rounded-[36px] bg-gradient-to-br from-green-700 to-green-600 p-12 text-white shadow-2xl"
              >

                <span className="text-sm font-semibold tracking-[0.25em] opacity-80">

                  OUR MISSION

                </span>

                <h2 className="mt-6 text-4xl font-black">

                  Creating Smarter Waste Management

                </h2>

                <p className="mt-8 text-lg leading-9 opacity-95">

                  Our mission is to simplify biodegradable waste
                  management through AI-powered technology that connects
                  vendors with waste processing companies, helping reduce
                  landfill waste while encouraging sustainable practices.

                </p>

              </motion.div>

            </AnimatedSection>

            <AnimatedSection delay={0.2}>

              <motion.div
                whileHover={{
                  y: -8,
                }}
                className="h-full rounded-[36px] border border-gray-200 bg-white p-12 shadow-xl"
              >

                <span className="text-sm font-semibold tracking-[0.25em] text-green-700">

                  OUR VISION

                </span>

                <h2 className="mt-6 text-4xl font-black text-gray-900">

                  A Circular Waste Economy

                </h2>

                <p className="mt-8 text-lg leading-9 text-gray-600">

                  We envision a future where biodegradable waste is no
                  longer discarded as garbage but recognised as a valuable
                  resource that can be transformed into compost and other
                  sustainable products.

                </p>

              </motion.div>

            </AnimatedSection>

          </div>

        </div>

      </section>

      {/* ================= IMPACT ================= */}

      <section className="bg-gray-900 py-28">

        <div className="max-w-7xl mx-auto px-8">

          <AnimatedSection>

            <div className="text-center">

              <span className="text-green-400 font-semibold tracking-widest">

                EXPECTED IMPACT

              </span>

              <h2 className="mt-5 text-5xl font-black text-white">

                Building Measurable Change

              </h2>

            </div>

          </AnimatedSection>

          <div className="mt-20 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">

            <AnimatedSection delay={0.1}>

              <StatCard
                number="500+"
                title="Registered Vendors"
              />

            </AnimatedSection>

            <AnimatedSection delay={0.2}>

              <StatCard
                number="20 Tons"
                title="Monthly Waste Collected"
              />

            </AnimatedSection>

            <AnimatedSection delay={0.3}>

              <StatCard
                number="15+"
                title="Processing Companies"
              />

            </AnimatedSection>

            <AnimatedSection delay={0.4}>

              <StatCard
                number="100%"
                title="Commitment To Sustainability"
              />

            </AnimatedSection>

          </div>

        </div>

      </section>
            {/* ================= FOUNDERS ================= */}

      <section className="py-28 bg-white">

        <div className="max-w-7xl mx-auto px-8">

          <AnimatedSection>

            <div className="text-center max-w-3xl mx-auto">

              <span className="inline-block rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-semibold tracking-wide text-green-700">
                OUR TEAM
              </span>

              <h2 className="mt-6 text-5xl font-black tracking-tight text-gray-900">
                Meet The Founders
              </h2>

              <p className="mt-6 text-lg leading-9 text-gray-600">
                Compost Connect is developed by two students passionate
                about combining technology with sustainability to solve
                real-world environmental challenges.
              </p>

            </div>

          </AnimatedSection>

          <div className="mt-20 grid gap-10 md:grid-cols-2 max-w-5xl mx-auto">

            {/* Founder 1 */}

            <AnimatedSection delay={0.1}>

              <motion.div

                whileHover={{
                  y: -10,
                }}

                transition={{ duration: 0.3 }}

                className="rounded-[36px] border border-gray-200 bg-white p-10 shadow-xl"

              >

                <div className="flex items-center gap-6">

                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100">

                    <span className="text-3xl font-black text-green-700">

                      K

                    </span>

                  </div>

                  <div>

                    <h3 className="text-3xl font-bold">

                      Kavyansh 

                    </h3>

                    <p className="mt-2 text-green-700 font-semibold">

                      Co-Founder

                    </p>

                  </div>

                </div>

                <div className="mt-8 border-t border-gray-100 pt-8">

                  <p className="leading-8 text-gray-600">

                    Passionate about Artificial Intelligence,
                    software development and sustainable innovation.
                    Responsible for designing the AI workflow,
                    product vision and technical development of
                    Compost Connect.

                  </p>

                </div>

              </motion.div>

            </AnimatedSection>

            {/* Founder 2 */}

            <AnimatedSection delay={0.2}>

              <motion.div

                whileHover={{
                  y: -10,
                }}

                transition={{ duration: 0.3 }}

                className="rounded-[36px] border border-gray-200 bg-white p-10 shadow-xl"

              >

                <div className="flex items-center gap-6">

                  <div className="flex h-24 w-24 items-center justify-center rounded-full bg-green-100">

                    <span className="text-3xl font-black text-green-700">

                      K

                    </span>

                  </div>

                  <div>

                    <h3 className="text-3xl font-bold">

                      Krish

                    </h3>

                    <p className="mt-2 text-green-700 font-semibold">

                      Co-Founder

                    </p>

                  </div>

                </div>

                <div className="mt-8 border-t border-gray-100 pt-8">

                  <p className="leading-8 text-gray-600">

                    Focused on operations, research and strategic
                    planning. Works on connecting vendors,
                    processing companies and ensuring Compost
                    Connect provides a practical solution for
                    biodegradable waste management.

                  </p>

                </div>

              </motion.div>

            </AnimatedSection>

          </div>

        </div>

      </section>

      {/* ================= OUR STORY ================= */}

      <section className="py-28 bg-gradient-to-b from-green-50/40 to-white">

        <div className="max-w-5xl mx-auto px-8">

          <AnimatedSection>

            <div className="rounded-[40px] border border-green-100 bg-white p-14 shadow-xl">

              <span className="text-sm font-semibold tracking-[0.3em] text-green-700">

                OUR STORY

              </span>

              <h2 className="mt-6 text-5xl font-black text-gray-900">

                Why We Started Compost Connect

              </h2>

              <p className="mt-8 text-lg leading-10 text-gray-600">

                While researching sustainable waste management, we realised
                that thousands of kilograms of biodegradable waste generated
                by local vendors never reach composting facilities and end up
                in landfills or roadside causing pollution and consistent bad odour.

                <br /><br />

                At the same time, waste processing companies struggle to
                find reliable suppliers of organic waste.

                <br /><br />

                Compost Connect was created to bridge this gap through
                Artificial Intelligence, enabling smarter waste
                identification, efficient collection and a cleaner,
                greener future.

              </p>

            </div>

          </AnimatedSection>

        </div>

      </section>

      {/* ================= CALL TO ACTION ================= */}

      <section className="relative overflow-hidden py-28 bg-gradient-to-r from-green-700 via-green-600 to-emerald-700">

        <div className="absolute -top-32 right-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

        <div className="absolute -bottom-32 left-0 h-96 w-96 rounded-full bg-white/10 blur-3xl"></div>

        <AnimatedSection>

          <div className="relative max-w-4xl mx-auto px-8 text-center">

            <h2 className="text-5xl font-black text-white">

              Join The Green Revolution

            </h2>

            <p className="mt-8 text-xl leading-9 text-green-100">

              Together we can reduce food waste, improve compost
              production and build a more sustainable future for our
              communities.

            </p>

            <div className="mt-14 flex flex-wrap justify-center gap-6">

              <Link
                to="/register"
                className="rounded-xl bg-white px-10 py-4 font-bold text-green-700 shadow-lg transition-all duration-300 hover:-translate-y-1"
              >

                Become a Vendor

              </Link>

              <Link
                to="/solution"
                className="rounded-xl border-2 border-white px-10 py-4 font-bold text-white transition-all duration-300 hover:bg-white hover:text-green-700"
              >

                Explore Our Solution

              </Link>

            </div>

          </div>

        </AnimatedSection>

      </section>

    </div>
  );
}
