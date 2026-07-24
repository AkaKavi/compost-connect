import AnimatedSection from "./AnimatedSection";

export default function AIHero() {
  return (
    <section className="max-w-7xl mx-auto px-8 py-24">

      <AnimatedSection>

        <div className="text-center">

          <span className="inline-block px-5 py-2 rounded-full border border-green-300 bg-white text-green-700 font-semibold">

            AI DEMONSTRATION

          </span>

          <h1 className="mt-8 text-6xl lg:text-7xl font-black">

            Experience

            <span className="block text-green-700">

              AI Waste Detection

            </span>

          </h1>

          <p className="mt-8 max-w-3xl mx-auto text-xl text-gray-600 leading-9">

            Upload a waste image and let Compost Connect
            identify the waste type, estimate quantity and
            recommend the nearest compost processing company.

          </p>

        </div>

      </AnimatedSection>

    </section>
  );
}