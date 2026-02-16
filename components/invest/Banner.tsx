import { ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import { FloatingBubbles } from "../WaterElemets";
import { Button } from "../ui/button";

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="bg-linear-to-r from-primary to-emerald-500 py-24 md:py-32 relative">
        <FloatingBubbles />
        <div className="container mx-auto px-4 text-center max-w-2xl relative z-10">
          <div className="reveal">
            <h2 className="font-display text-3xl md:text-5xl font-extrabold text-primary-foreground mb-6">
             Invest in Clean Water & <span className="text-cyan-300">Sustainable Growth</span>
            </h2>
            <p className="text-white text-lg mb-10">
              Back a proven social enterprise generating revenue while transforming lives in Kenya's underserved communities.
            </p>

            <Link href="#contact">
              <Button
                variant="outline"
                className="group inline-flex items-center justify-center gap-2 rounded-md border-primary text-primary py-6 transition-all hover:scale-105"
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
