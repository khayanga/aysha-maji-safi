"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const team = [
  {
    name: "Aysha Sadi Rashid",
    role: "Founder",
    image: "/aysha.jpeg",
    description:
      "Founder of Ayshah Kiu Maji Safi, driving the vision of sustainable and equitable water access across communities.",
  },
  {
    name: "Swalha Sharif Hassan",
    role: "Co-Founder",
    image: "/swalha.jpeg",
    description:
      "Supports strategic development, growth initiatives, and operational planning for long-term impact.",
  },
  {
    name: "Muhammed Khamisi",
    role: "Program Officer (Management)",
    image: "/hamisi.jpeg",
    description:
      "Oversees program implementation and ensures smooth coordination and delivery of organizational objectives.",
  },
  {
    name: "Mariam Karama",
    role: "Finance Officer",
    image: "/mariam.jpeg",
    description:
      "Manages budgeting, financial reporting, and ensures transparency and accountability in all financial operations.",
  },
];

export default function Team() {
  return (
    <section id="team" className="py-24 bg-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-100 blur-3xl rounded-full opacity-40" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm uppercase tracking-[0.25em] text-emerald-600 font-semibold mb-4">
            Leadership Team
          </h2>

          <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            The People Driving{" "}
            <span className="text-emerald-500">Impact</span>
          </h3>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Our leadership team brings together expertise in community
            development, operations, finance, and program management to ensure
            sustainable access to clean water across Kenya.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
            >
              {/* Image */}
              <div className="relative aspect-3/4  w-full">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-3">
                  <span className="inline-block px-3 py-1 text-xs font-semibold bg-emerald-50 text-emerald-600 rounded-full">
                    {member.role}
                  </span>
                </div>

                <h4 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h4>

                <p className="mt-3 text-gray-600 text-md leading-relaxed">
                  {member.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}