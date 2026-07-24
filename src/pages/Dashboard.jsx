import { useEffect, useState } from "react";

import DashboardHero from "../components/dashboard/DashboardHero";
import StatsGrid from "../components/dashboard/StatsGrid";
import EarningsOverview from "../components/dashboard/EarningsOverview";
import QuickActions from "../components/dashboard/QuickActions";
import GreenRewards from "../components/dashboard/GreenRewards";
import PickupHistory from "../components/dashboard/PickupHistory";
import ImpactCard from "../components/dashboard/ImpactCard";
import AIInsights from "../components/dashboard/AIInsights";
import FloatingTip from "../components/dashboard/FloatingTip";

export default function Dashboard() {
  const [userName, setUserName] = useState("Vendor");
  const [greeting, setGreeting] = useState("Welcome");

  useEffect(() => {
    const storedUser = JSON.parse(
      localStorage.getItem("compostUser")
    );

    if (storedUser?.fullName) {
      const firstName = storedUser.fullName.split(" ")[0];
      setUserName(firstName);
    }

    const hour = new Date().getHours();

    if (hour >= 5 && hour < 12) {
      setGreeting("Good Morning");
    } else if (hour >= 12 && hour < 17) {
      setGreeting("Good Afternoon");
    } else if (hour >= 17 && hour < 21) {
      setGreeting("Good Evening");
    } else {
      setGreeting("Good Night");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <DashboardHero
          greeting={greeting}
          userName={userName}
        />

        <div className="mt-10">
          <StatsGrid />
        </div>

        <div className="mt-10">
          <EarningsOverview />
        </div>

        <div className="mt-10">
          <QuickActions />
        </div>

        <div className="mt-10">
          <GreenRewards />
        </div>

        <div className="mt-10">
          <PickupHistory />
        </div>

        <div className="mt-10">
          <ImpactCard />
        </div>

        <div className="mt-10">
          <AIInsights />
        </div>
      </div>

      <FloatingTip />
    </div>
  );
}