import StatCard from "./StatCard";

import {
  Recycle,
  IndianRupee,
  Truck,
  Gift,
  Leaf,
  Trophy,
} from "lucide-react";

export default function StatsGrid() {
  const stats = [
    {
      title: "Waste Sent",
      value: "248 kg",
      subtitle: "+18 kg this week",
      icon: <Recycle size={28} className="text-white" />,
      color: "bg-green-600",
    },
    {
      title: "Money Earned",
      value: "₹4,860",
      subtitle: "+₹620 this week",
      icon: <IndianRupee size={28} className="text-white" />,
      color: "bg-emerald-600",
    },
    {
      title: "Pickups",
      value: "18",
      subtitle: "Next pickup tomorrow",
      icon: <Truck size={28} className="text-white" />,
      color: "bg-blue-600",
    },
    {
      title: "Green Rewards",
      value: "620 GR",
      subtitle: "Gold Vendor",
      icon: <Gift size={28} className="text-white" />,
      color: "bg-lime-600",
    },
    {
      title: "CO₂ Saved",
      value: "92 kg",
      subtitle: "Equivalent to 6 trees",
      icon: <Leaf size={28} className="text-white" />,
      color: "bg-teal-600",
    },
    {
      title: "Vendor Rank",
      value: "Top 12%",
      subtitle: "Delhi NCR",
      icon: <Trophy size={28} className="text-white" />,
      color: "bg-amber-500",
    },
  ];

  return (
    <section>
      <div className="mb-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Dashboard Overview
        </h2>

        <p className="mt-2 text-gray-500">
          Track your waste collection, earnings and environmental
          impact at a glance.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            title={stat.title}
            value={stat.value}
            subtitle={stat.subtitle}
            icon={stat.icon}
            color={stat.color}
          />
        ))}
      </div>
    </section>
  );
}