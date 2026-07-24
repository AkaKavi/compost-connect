import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import {
  Camera,
  Truck,
  History,
  UserCircle,
} from "lucide-react";

export default function QuickActions() {
  const navigate = useNavigate();

  const actions = [
    {
      title: "AI Waste Scanner",
      description: "Scan waste and get instant AI analysis.",
      icon: <Camera size={34} />,
      color: "from-green-500 to-emerald-500",
      action: () => navigate("/ai-demo"),
    },
    {
      title: "Schedule Pickup",
      description: "Book your next biodegradable waste pickup.",
      icon: <Truck size={34} />,
      color: "from-blue-500 to-cyan-500",
      action: () => navigate("/register"),
    },
    {
      title: "Pickup History",
      description: "View all your previous waste collections.",
      icon: <History size={34} />,
      color: "from-orange-500 to-amber-500",
      action: () => {
        const historySection = document.getElementById(
          "pickup-history"
        );

        historySection?.scrollIntoView({
          behavior: "smooth",
        });
      },
    },
    {
      title: "My Profile",
      description: "Manage your Compost Connect account.",
      icon: <UserCircle size={34} />,
      color: "from-purple-500 to-pink-500",
      action: () => {
        alert("Profile page coming soon!");
      },
    },
  ];

  return (
    <section>

      <div className="mb-6">

        <h2 className="text-3xl font-bold text-gray-800">
          Quick Actions
        </h2>

        <p className="mt-2 text-gray-500">
          Everything you need is just one click away.
        </p>

      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

        {actions.map((item, index) => (

          <motion.button
            key={index}
            onClick={item.action}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{
              y: -8,
              scale: 1.03,
            }}
            whileTap={{
              scale: 0.97,
            }}
            className={`bg-gradient-to-r ${item.color} rounded-3xl p-6 text-white text-left shadow-xl`}
          >

            <div className="w-16 h-16 rounded-2xl bg-white/20 flex items-center justify-center mb-5">

              {item.icon}

            </div>

            <h3 className="text-2xl font-bold">

              {item.title}

            </h3>

            <p className="mt-3 text-white/90 leading-relaxed">

              {item.description}

            </p>

          </motion.button>

        ))}

      </div>

    </section>
  );
}