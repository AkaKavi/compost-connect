import SolutionHero from "../components/SolutionHero";
import ProblemCards from "../components/ProblemCards";
import SolutionTimeline from "../components/SolutionTimeline";
import AIWorkflow from "../components/AIWorkflow";
import BenefitsGrid from "../components/BenefitsGrid";
import TechStack from "../components/TechStack";
import SolutionCTA from "../components/SolutionCTA";

export default function OurSolution() {
  return (
    <div className="bg-white overflow-hidden">

      <SolutionHero />

      <ProblemCards />

      <SolutionTimeline />

      <AIWorkflow />

      <BenefitsGrid />

      <TechStack />

      <SolutionCTA />

    </div>
  );
}