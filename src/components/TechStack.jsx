import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const technologies = [
  {
    title: "React",
    subtitle: "Frontend Framework",
    description:
      "Builds a fast, responsive and component-based user interface.",
  },
  {
    title: "Tailwind CSS",
    subtitle: "Styling",
    description:
      "Creates a modern, responsive design with utility-first CSS.",
  },
  {
    title: "Framer Motion",
    subtitle: "Animations",
    description:
      "Provides smooth transitions and engaging user interactions.",
  },
  {
    title: "Node.js",
    subtitle: "Backend",
    description:
      "Handles APIs, business logic and communication between services.",
  },
  {
    title: "AI / Computer Vision",
    subtitle: "Smart Analysis",
    description:
      "Analyses uploaded waste images to classify waste and estimate quantity.",
  },
  {
    title: "Google Forms & Spreadsheets",
    subtitle: "Database",
    description:
      "Stores vendor information, pickup requests and processing records.",
  },
  {
    title: "ChatGPT (OpenAI)",
    subtitle: "Assistance",
    description:
      "Frontend development, UI/UX suggestions, content refinement, and debugging",
  },
];

export default function TechStack() {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-green-50/40">

      <div className="max-w-7xl mx-auto px-8">

        <AnimatedSection>

          <div className="text-center max-w-3xl mx-auto">

            <span className="inline-block rounded-full border border-green-200 bg-green-50 px-5 py-2 text-sm font-semibold tracking-wide text-green-700">

              TECHNOLOGY

            </span>

            <h2 className="mt-6 text-5xl font-black">

              Built With Modern Technologies

            </h2>

            <p className="mt-6 text-lg leading-9 text-gray-600">

              Compost Connect combines modern web technologies with
              Artificial Intelligence concepts to deliver a scalable and
              user-friendly waste management platform.

            </p>

          </div>

        </AnimatedSection>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {technologies.map((tech, index) => (

            <AnimatedSection
              key={index}
              delay={index * 0.08}
            >

              <motion.div

                whileHover={{
                  y: -10,
                  scale: 1.03,
                }}

                transition={{
                  duration: 0.3,
                }}

                className="group h-full rounded-[32px] border border-gray-200 bg-white p-8 shadow-lg hover:shadow-2xl"

              >

                <div className="flex items-center justify-between">

                  <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-bold tracking-wider text-green-700">

                    {tech.subtitle}

                  </span>

                  <span className="text-green-700 font-bold">

                    {String(index + 1).padStart(2, "0")}

                  </span>

                </div>

                <h3 className="mt-8 text-3xl font-bold text-gray-900">

                  {tech.title}

                </h3>

                <p className="mt-6 leading-8 text-gray-600">

                  {tech.description}

                </p>

                <div className="mt-8 h-1 w-0 rounded-full bg-green-600 transition-all duration-500 group-hover:w-full"></div>

              </motion.div>

            </AnimatedSection>

          ))}

        </div>

      </div>

    </section>
  );
}
