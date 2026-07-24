import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  Weight,
  IndianRupee,
  CheckCircle,
  Clock3,
  Truck,
} from "lucide-react";

export default function PickupHistory() {
  const pickups = [
    {
      date: "23 July 2026",
      weight: "42 kg",
      location: "Sector 14 Market, Gurugram",
      earnings: "₹820",
      status: "Completed",
    },
    {
      date: "21 July 2026",
      weight: "35 kg",
      location: "Sector 17 Market, Gurugram",
      earnings: "₹670",
      status: "Completed",
    },
    {
      date: "25 July 2026",
      weight: "50 kg",
      location: "Sector 15 Market, Gurugram",
      earnings: "₹980",
      status: "Scheduled",
    },
  ];

  const getStatus = (status) => {
    switch (status) {
      case "Completed":
        return {
          icon: <CheckCircle size={18} />,
          bg: "bg-green-100",
          text: "text-green-700",
        };

      case "Scheduled":
        return {
          icon: <Clock3 size={18} />,
          bg: "bg-yellow-100",
          text: "text-yellow-700",
        };

      default:
        return {
          icon: <Truck size={18} />,
          bg: "bg-blue-100",
          text: "text-blue-700",
        };
    }
  };

  return (
    <section id="pickup-history">
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Pickup History
        </h2>

        <p className="mt-2 text-gray-500">
          Your recent biodegradable waste collections.
        </p>
      </div>

      <div className="space-y-6">
        {pickups.map((pickup, index) => {
          const status = getStatus(pickup.status);

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{
                y: -4,
                scale: 1.01,
              }}
              className="rounded-3xl border border-green-100 bg-white p-6 shadow-lg transition-all"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

                {/* Left Side */}

                <div className="space-y-4">

                  <div className="flex items-center gap-3">
                    <CalendarDays
                      className="text-green-600"
                      size={20}
                    />

                    <span className="font-semibold">
                      {pickup.date}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Weight
                      className="text-green-600"
                      size={20}
                    />

                    <span>{pickup.weight}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin
                      className="text-green-600"
                      size={20}
                    />

                    <span>{pickup.location}</span>
                  </div>

                </div>

                {/* Right Side */}

                <div className="flex flex-col items-start gap-4 lg:items-end">

                  <div className="flex items-center gap-2 text-2xl font-bold text-green-700">

                    <IndianRupee size={26} />

                    {pickup.earnings.replace("₹", "")}

                  </div>

                  <div
                    className={`flex items-center gap-2 rounded-full px-4 py-2 font-medium ${status.bg} ${status.text}`}
                  >
                    {status.icon}

                    {pickup.status}
                  </div>

                </div>

              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}