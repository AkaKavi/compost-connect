import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Who can use Compost Connect?",
    answer:
      "Compost Connect is designed for grocery stores, fruit and vegetable vendors, restaurants, and other businesses that generate biodegradable waste regularly.",
  },
  {
    question: "What type of waste is accepted?",
    answer:
      "We currently accept biodegradable organic waste such as vegetable peels, fruit waste, leftover food, and other compostable materials.",
  },
  {
    question: "How do I earn money?",
    answer:
      "After your waste is collected and verified, you receive payment based on the weight of biodegradable waste you provided.",
  },
  {
    question: "What are Green Points?",
    answer:
      "Green Points are reward points earned for every kilogram of waste you contribute. They can be redeemed for gift cards, vouchers, and other exciting rewards.",
  },
  {
    question: "How does the AI Waste Scanner work?",
    answer:
      "Simply upload a photo of your waste. Our AI estimates the waste type and approximate quantity before you request a pickup.",
  },
  {
    question: "How do I schedule a pickup?",
    answer:
      "Log into your account, request a pickup, upload your waste photo if needed, and choose a convenient pickup time.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="uppercase tracking-widest text-green-600 font-semibold">
            FAQ
          </p>

          <h2 className="text-5xl font-bold mt-3">
            Frequently Asked Questions
          </h2>

          <p className="text-gray-600 mt-5">
            Everything you need to know about Compost Connect.
          </p>
        </motion.div>

        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="bg-green-50 rounded-2xl shadow"
            >
              <button
                onClick={() =>
                  setActive(active === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <span className="font-semibold text-lg">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform duration-300 ${
                    active === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence>
                {active === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-6 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}