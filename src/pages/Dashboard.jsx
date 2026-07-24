import { useEffect, useState } from "react";

import DashboardHero from "../components/Dashboard/DashboardHero";
import StatsGrid from "../components/Dashboard/StatsGrid";
import EarningsOverview from "../components/Dashboard/EarningsOverview";
import QuickActions from "../components/Dashboard/QuickActions";
import GreenRewards from "../components/Dashboard/GreenRewards";
import PickupHistory from "../components/Dashboard/PickupHistory";
import ImpactCard from "../components/Dashboard/ImpactCard";
import AIInsights from "../components/Dashboard/AIInsights";
import FloatingTip from "../components/Dashboard/FloatingTip";

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