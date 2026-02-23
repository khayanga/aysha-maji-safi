import {
  Droplets,
  Factory,
  Database,
  Truck,
  Recycle,
  ShieldCheck,
} from "lucide-react";
import { WaveSeparator, WaveSeparatorTop } from "../WaterElemets";
import Video from "./Video";

const fundingItems = [
  {
    title: "Borehole Construction",
    icon: Droplets,
    desc: "Drilling and equipping boreholes to ensure independent water sourcing.",
  },
  {
    title: "Water Treatment Plant",
    icon: Factory,
    desc: "Modern purification systems to guarantee safe drinking water.",
  },
  {
    title: "Storage Tanks & Pumps",
    icon: Database,
    desc: "High-capacity tanks and pumping systems for reliable distribution.",
  },
  {
    title: "Water Bowser",
    icon: Truck,
    desc: "Bulk transportation infrastructure for regional supply.",
  },
  {
    title: "Glass Bottle System",
    icon: Recycle,
    desc: "Transitioning to sustainable glass packaging ecosystem.",
  },
  {
    title: "Regulatory Licensing",
    icon: ShieldCheck,
    desc: "Compliance with Public Health, KEBS, NEMA & KRA standards.",
  },
];
const Funding = () => {
  return (
    <section className="py-28 bg-white relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-3xl text-primary md:text-4xl font-bold ">
            Funding Breakdown
          </h2>
          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            Strategic investment will enable infrastructure expansion,
            regulatory compliance, and sustainable growth across Kenya,Every
            shilling is allocated to build infrastructure that delivers lasting
            impact..
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {fundingItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group relative rounded-3xl p-px 
              bg-linear-to-br from-primary/40 via-emerald-400/40 to-transparent
              hover:from-primary hover:via-emerald-500 transition-all duration-500"
              >
                <div
                  className="relative bg-white rounded-3xl p-10 h-full shadow-md 
              hover:shadow-xl transition-all duration-500 overflow-hidden"
                >
                  {/* Decorative Glow */}
                  <div
                    className="absolute -top-16 -right-16 w-40 h-40 bg-primary/10 
                rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500"
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className="mb-6 inline-flex items-center justify-center 
                  w-14 h-14 rounded-2xl 
                  bg-linear-to-br from-primary to-emerald-600 
                  text-white shadow-lg group-hover:scale-110 transition-transform duration-500"
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>

                    {/* Underline Accent */}
                    <div
                      className="mt-6 h-1 w-0 bg-linear-to-r from-primary to-emerald-500 
                  rounded-full group-hover:w-16 transition-all duration-500"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Video/>
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <WaveSeparator color="hsl(200, 20%, 98%)" />
      </div>
    </section>
  );
};

export default Funding;
