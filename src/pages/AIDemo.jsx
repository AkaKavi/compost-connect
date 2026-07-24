import AIHero from "../components/AIHero";
import UploadCard from "../components/UploadCard";
import AIAnalysis from "../components/AIAnalysis";

export default function AIDemo() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen">
      <AIHero />
      <UploadCard />
      <AIAnalysis />
    </div>
  );
}