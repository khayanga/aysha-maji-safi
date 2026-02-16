
import { AlertTriangle, Droplets, Trash2, CloudRain } from "lucide-react";

export const problems = [
  {
    title: "Unsafe Water Causes Preventable Diseases",
    description:
      "Contaminated water spreads cholera, typhoid, and diarrheal diseases illnesses that are entirely preventable. Children are the most vulnerable, and many miss school or suffer long-term health consequences because safe water is out of reach.",
    icon: AlertTriangle,
    iconBg: "bg-red-100",
    iconColor: "text-red-600",
  },
  {
    title: "Bottled Water Is Expensive",
    description:
      "Families often pay significantly more per liter for bottled water than wealthier households connected to municipal systems. The poorest communities end up paying the highest price for a basic human need.",
    icon: Droplets,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    title: "Plastic Waste Pollutes Communities",
    description:
      "Single-use plastic bottles accumulate in streets, drainage systems, and open spaces. This waste clogs infrastructure, worsens flooding, and creates long-term environmental damage in already vulnerable neighborhoods.",
    icon: Trash2,
    iconBg: "bg-green-100",
    iconColor: "text-green-600",
  },
  {
    title: "Climate Impact Is Increasing",
    description:
      "Irregular rainfall, droughts, and extreme weather events are making water access even more unpredictable. Climate change is not a distant threat  it is already deepening inequality in access to safe water.",
    icon: CloudRain,
    iconBg: "bg-indigo-100",
    iconColor: "text-indigo-600",
  },
];


const ProblemSection = () => {
  return (
    <section
      id="problem"
      className="relative py-24 bg-gray-50 text-gray-900"
    >
      
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-extrabold leading-tight text-primary">
            The Water Challenge in Informal Settlements
          </h2>
          <p className="mt-6 text-lg text-gray-600">
            For millions of families living in informal settlements, access to
            clean water is not guaranteed. It is uncertain, expensive, and
            often unsafe.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="mt-16 grid md:grid-cols-2 gap-10">
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <div key={idx} className="flex gap-5  p-4 border-primary/20 border rounded-md">
                <div
                  className={`shrink-0 w-12 h-12 rounded-xl  flex items-center justify-center ${problem.iconBg}`}
                >
                  <Icon className={`${problem.iconColor} w-6 h-6`} />
                </div>
                <div>
                  <h3 className="text-xl text-gray-700 font-bold">{problem.title}</h3>
                  <p className="mt-3 text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing emotional statement */}
        <div className="mt-20 text-center max-w-3xl mx-auto">
          <p className="text-xl font-semibold text-gray-800">
            Clean water should not be a privilege.
          </p>
          <p className="mt-4 text-gray-600">
            It is a fundamental human right  yet for many communities, it
            remains a daily struggle.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
