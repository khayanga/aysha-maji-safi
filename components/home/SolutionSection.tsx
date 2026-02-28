import { BottleWine, Building, Droplets, Truck } from "lucide-react";
import { WaveSeparator,  WaveSeparatorTop } from "../WaterElemets";

const solutions = [
  {
    title: "Refilling Stations",
    description:
      "Affordable, clean water stations placed within informal settlements to ensure every household has safe drinking water at low cost.",
    icon: Building,
    iconBg: "bg-linear-to-r from-primary to-emerald-500",
    iconColor: "text-white",
  },
  {
    title: "Glass Bottled Water",
    description:
      "Eco-friendly glass bottled water for events, restaurants, and supermarkets, reducing single-use plastic and promoting sustainability.",
    icon: BottleWine,
    iconBg: "bg-linear-to-r from-primary to-emerald-500",

    iconColor: "text-white",
  },
  {
    title: "Water Bowser Supply",
    description:
      "Reliable bulk water delivery via bowsers to support farmers and industries, ensuring operations continue without water shortages.",
    icon: Truck,
    iconBg: "bg-linear-to-r from-primary to-emerald-500",
    iconColor: "text-white",
  },
];

const SolutionSection = () => {
  return (
    <section
      id="solution"
      className="relative py-24 md:py-32 bg-white text-gray-900"
    >
      <div className="container mx-auto px-6 max-w-6xl text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight">
          Our Solution
        </h2>
        <p className="mt-6 text-lg text-gray-700 max-w-3xl mx-auto">
          Introducing{" "}
          <span className="font-semibold ">AYSHAH KIU MAJI SAFI</span>, a
          holistic approach to delivering safe, affordable, and eco-friendly
          water solutions for communities, businesses, and agriculture.
        </p>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 my-24 max-w-6xl mx-auto">
          {solutions.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div
                key={idx}
                className="group relative rounded-3xl p-px
                  bg-linear-to-br from-primary/40 via-emerald-500/40 to-transparent
                  hover:from-primary hover:via-emerald-500 transition-all duration-500 "
              >
                <div className="relative h-full rounded-3xl bg-white p-8 overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-500">
                  {/* Background accent */}
                  <div
                    className="absolute inset-0 bg-linear-to-br from-primary/5 to-emerald-500/5 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                                  />

                  
                  <div className="relative z-10 mb-6 flex justify-start">
                    <div
                      className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl 
                    shadow-lg shadow-primary/30 group-hover:scale-110 transition-transform duration-500
                    ${service.iconBg}`}
                    >
                      <Icon className={`${service.iconColor} w-7 h-7`} />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative z-10 text-left flex flex-col items-start">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {service.title}
                    </h3>

                    <p className="text-md text-gray-600 leading-relaxed mb-6">
                      {service.description}
                    </p>

                    
                    <div
                      className="h-1 w-0 bg-linear-to-r from-primary to-emerald-500 rounded-full
        group-hover:w-16 transition-all duration-500 self-start"
                    />
                  </div>

                  {/* Decorative circle (move to left for balance) */}
                  <div
                    className="absolute -top-16 -left-16 w-40 h-40 bg-primary/10 rounded-full blur-3xl
      group-hover:bg-primary/20 transition-colors duration-500"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 z-10">
        <WaveSeparator color="hsl(200, 20%, 98%)" />
      </div>

      
    </section>
  );


};

export default SolutionSection;
