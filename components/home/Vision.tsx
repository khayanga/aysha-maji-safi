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

const Vision = () => {
  const growthTags = [
    { label: "Water ATMs", icon: Droplets },
    { label: "Solar Infrastructure", icon: Waves },
    { label: "Treatment Systems", icon: Factory },
    { label: "Borehole Development", icon: Truck },
  ];

  return (
    <div id="vision" className="min-h-screen bg-gray-50">
      <section className="relative py-24 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />

        <div className="container mx-auto px-6 max-w-7xl">
          

          {/* Vision Section */}
          <div className="relative bg-linear-to-br from-primary via-primary to-emerald-900 rounded-[2.5rem] p-8 md:p-16 text-white overflow-hidden shadow-2xl">
            {/* Background Effects */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />

            <div className="relative z-10 flex flex-col gap-12 items-center w-full">
              {/* Top Content */}
              <div className="space-y-8 w-full max-w-6xl">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-6">
                    <Target size={14} />
                    Our Long-Term Vision
                  </div>

                  <h3 className="text-4xl md:text-6xl font-extrabold leading-[1.1] mb-6">
                    Clean Water{" "}
                    <span className="text-emerald-400">for all</span> at an
                    affordable price, with a sustainable future.
                  </h3>

                  <p className="text-xl text-blue-50/80 leading-relaxed max-w-3xl">
                    We envision a Kenya where every community has equitable
                    access to safe, affordable drinking water through
                    sustainable infrastructure that improves health outcomes,
                    supports economic growth, and strengthens environmental
                    resilience.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3">
                  {growthTags.map((tag) => (
                    <span
                      key={tag.label}
                      className="flex items-center gap-2 px-5 py-2.5 bg-white/5 backdrop-blur-md rounded-2xl text-sm font-medium border border-white/10 hover:bg-white/20 hover:border-white/30 transition-all"
                    >
                      <tag.icon size={18} className="text-emerald-400" />
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Cards */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-6xl">
                {/* Mission */}
                <div className="h-full bg-white/10 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 hover:border-white/25 transition-all group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-emerald-500/20 rounded-2xl text-emerald-400 group-hover:rotate-12 transition-transform">
                      <Rocket size={24} />
                    </div>

                    <span className="font-bold uppercase tracking-widest text-sm">
                      Our Mission
                    </span>
                  </div>

                  <p className="text-blue-50/90 text-lg leading-relaxed">
                    To provide affordable, reliable, and sustainable drinking
                    water through innovative water ATM technology, renewable
                    energy systems, and community-centered infrastructure
                    serving rural and informal settlement communities across
                    Kenya.
                  </p>
                </div>

                {/* Growth Strategy */}
                <div className="h-full bg-white/10 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 hover:border-white/25 transition-all group">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-emerald-500/20 rounded-2xl text-emerald-400 group-hover:scale-110 transition-transform">
                      <TrendingUp size={24} />
                    </div>

                    <span className="font-bold uppercase tracking-widest text-sm">
                      Growth Strategy
                    </span>
                  </div>

                  <p className="text-blue-50/90 leading-relaxed">
                    Our expansion strategy focuses on scaling community water
                    stations, solar-powered treatment systems, borehole
                    development, and reusable container programs to increase
                    clean water access while maintaining a low environmental
                    footprint.
                  </p>
                </div>

                {/* Core Values */}
                <div className="h-full bg-white/10 backdrop-blur-xl rounded-[2rem] p-8 border border-white/10 hover:border-white/25 transition-all group">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-emerald-500/20 rounded-2xl text-emerald-400 group-hover:scale-110 transition-transform">
                      <ShieldCheck size={24} />
                    </div>

                    <span className="font-bold uppercase tracking-widest text-sm">
                      Core Values
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {[
                      "Universal Access to Safe Water",
                      "Environmental Stewardship",
                      "Community Empowerment",
                      "Operational Transparency",
                      "Sustainable Innovation",
                    ].map((value, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 text-blue-50/80 font-medium"
                      >
                        <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                        {value}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Vision;
