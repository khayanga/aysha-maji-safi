import React from "react";
import { Target, Rocket, ShieldCheck, Droplets, Waves, Truck, Factory } from "lucide-react";
import { FloatingBubbles } from "../WaterElemets";

const Vision = () => {
  const growthTags = [
    { label: "Boreholes", icon: Waves },
    { label: "Treatment Systems", icon: Droplets },
    { label: "Water Bowsers", icon: Truck },
    { label: "Glass Bottling", icon: Factory },
  ];

  return (
    <div className="relative bg-linear-to-br from-primary to-emerald-800 rounded-[2rem] p-8 md:p-16 text-white overflow-hidden shadow-2xl">
        <FloatingBubbles />
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-20 -mt-20 blur-3xl" />
      
      <div className="relative z-10 grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
        
        
        <div className="lg:col-span-3 space-y-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-emerald-300 text-xs font-bold uppercase tracking-widest mb-4">
              <Target size={14} /> Our Vision
            </div>
            <h3 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Clean water access <span className="text-emerald-400">for all</span> at an affordable price.
            </h3>
            <p className="mt-6 text-xl text-white/80 leading-relaxed max-w-2xl">
              We are empowering healthy, environmentally conscious individuals in 
              Kenya's rural and informal settlements through sustainable infrastructure.
            </p>
          </div>

          {/* Tangible Growth Tags */}
          <div className="flex flex-wrap gap-3">
            {growthTags.map((tag) => (
              <span 
                key={tag.label} 
                className="flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-2xl text-sm border border-white/10 hover:bg-white/20 transition-colors"
              >
                <tag.icon size={16} className="text-emerald-300" />
                {tag.label}
              </span>
            ))}
          </div>
        </div>

        
        <div className="lg:col-span-2 space-y-6">
          
          {/* Mission Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all group">
            <div className="flex items-center gap-4 mb-4 text-emerald-300">
              <div className="p-2 bg-emerald-500/20 rounded-lg group-hover:scale-110 transition-transform">
                <Rocket size={24} />
              </div>
              <span className="font-bold uppercase tracking-widest text-sm text-white">Our Mission</span>
            </div>
            <p className="text-white/90 leading-snug">
              To create access to clean, safe, and affordable drinking water specifically 
              tailored for Kenya's rural and informal settlement areas.
            </p>
          </div>

          {/* Core Values Card */}
          <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20 hover:border-white/40 transition-all group">
            <div className="flex items-center gap-4 mb-4 text-emerald-300">
              <div className="p-2 bg-emerald-500/20 rounded-lg group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <span className="font-bold uppercase tracking-widest text-sm text-white">Core Values</span>
            </div>
            <ul className="space-y-3">
              {[
                "Safe & High Quality Water",
                "Environmental Sustainability",
                "Building Customer Trust"
              ].map((value, i) => (
                <li key={i} className="flex items-center gap-3 text-white/80 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  {value}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Vision;