import React from "react";
import {
  Droplets,
  Users,
  TrendingUp,
  CheckCircle2,
  Target,
  Rocket,
  ShieldCheck,
  Waves,
  Truck,
  Factory,
  Banknote,
} from "lucide-react";

const StatCard = ({
  title,
  label,
  icon: Icon,
}: {
  title: string;
  label: string;
  icon: React.ElementType;
}) => (
  <div className="group relative p-8 bg-white rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-500">
    <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
      <Icon size={64} />
    </div>

    <div className="relative z-10">
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-500">
        <Icon size={24} />
      </div>

      <h3 className="text-3xl font-bold text-gray-900 mb-1">{title}</h3>

      <p className="text-gray-500 font-medium lowercase tracking-wide">
        {label}
      </p>
    </div>
  </div>
);

const ImpactSection = () => {
  const growthTags = [
    { label: "Water ATMs", icon: Droplets },
    { label: "Solar Infrastructure", icon: Waves },
    { label: "Treatment Systems", icon: Factory },
    { label: "Borehole Development", icon: Truck },
  ];

  return (
    <div id="impact" className="min-h-screen bg-gray-50">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-6 max-w-6xl">
          <div className="max-w-3xl mb-16">
            <h2 className="text-primary font-bold tracking-[0.2em] uppercase text-sm mb-4">
              The Impact
            </h2>

            <h3 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              Building sustainable water access across the{" "}
              <span className="text-primary">Mombasa Region.</span>
            </h3>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              Ayshah Kiu Maji Safi Initiative is creating sustainable access to
              clean, affordable drinking water through community-based water
              infrastructure, innovative water ATM technology, and
              environmentally responsible operations. Our work improves public
              health, supports local livelihoods, and helps reduce water
              insecurity in underserved communities.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <StatCard
              title="5+"
              label="Community Water Stations"
              icon={Droplets}
            />

            <StatCard
              title="Ksh 350K+"
              label="Annual Revenue"
              icon={Banknote}
            />

            <StatCard title="Growing" label="Communities Served" icon={Users} />
          </div>

          
        </div>
      </section>
    </div>
  );
};

export default ImpactSection;
