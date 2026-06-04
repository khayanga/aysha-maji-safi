import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FloatingBubbles } from "../WaterElemets";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      <div
        className="relative py-24 md:py-32 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/pic1.jpg')" }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-primary/70 via-primary/70 to-emerald-600/70" />

        <FloatingBubbles />

        <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
          <div className="reveal">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Ayshah Kiu Maji Safi{" "}
              <span className="text-cyan-300">Initiative</span>
            </h2>

            <p className="text-white text-lg md:text-xl mb-10">
              Ayshah Kiu Maji Safi Initiative is an eco-friendly water refilling
              ATM station committed to providing clean, safe, and sustainable
              drinking water solutions to communities across Kenya. The
              initiative focuses on serving rural and informal settlement areas
              where access to reliable and affordable clean water remains a
              significant challenge.
            </p>

            <Link href="#contact">
              <Button
                variant="outline"
                className="group inline-flex items-center justify-center gap-2 rounded-md border-white text-primary py-6 px-8 transition-all hover:scale-105 hover:bg-white hover:text-primary"
              >
                Express Interest
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
