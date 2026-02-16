import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import {  WaveSeparator } from "../WaterElemets";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <section className="relative pt-16 overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0">
       <Image
            src="/hero-water.jpg"
            alt="Community water station in Kenya"
            fill
            priority
            className="object-cover scale-105"
            />

        <div className="absolute inset-0 bg-black opacity-75" />
      </div>

      {/* Floating abstract shapes */}
      

      <div className="relative container mx-auto px-4 py-16 md:py-44 text-center z-10">
       

        <h1
          className="font-display text-4xl sm:text-5xl md:text-7xl font-extrabold text-primary-foreground leading-[1.1] max-w-5xl mx-auto animate-fade-up"
          style={{ animationDelay: "0.1s" }}
        >
          Clean Water.{" "}
          <span className="relative inline-block">
            Zero Plastic.
            <svg
              className="absolute -bottom-2 left-0 w-full"
              viewBox="0 0 200 12"
              fill="none"
            >
              <path
                d="M2 8 C50 2 150 2 198 8"
                stroke="hsl(152, 56%, 42%)"
                strokeWidth="3"
                strokeLinecap="round"
                opacity="0.6"
              />
            </svg>
          </span>
          <br />
          <span className="text-accent">Real Impact.</span>
        </h1>

        <p
          className="mt-8 text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto animate-fade-up font-sans"
          style={{ animationDelay: "0.25s" }}
        >
          We provide affordable, clean drinking water to rural and informal settlement communities in Mombasa and across Kenya 
          while reducing plastic waste through refill and glass bottle systems.
        </p>

       <div
  className="mt-16 flex flex-col sm:flex-row gap-4 justify-center animate-fade-up"
  style={{ animationDelay: "0.4s" }}
>
  {/* Primary CTA */}
  <Link href="/invest" className="group">
    <Button
      className="
        inline-flex items-center justify-center gap-2
        rounded-md
        bg-linear-to-r from-primary to-emerald-500
        px-8 py-6
        text-base font-bold text-white
        shadow-lg shadow-emerald-500/20
        transition-all duration-300
        hover:scale-105 hover:shadow-xl hover:shadow-emerald-500/40
        active:scale-95
      "
    >
      Become an Investor
      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
    </Button>
  </Link>

  {/* Secondary CTA */}
  <a href="#problem">
    <Button
      className="
        inline-flex items-center justify-center
        rounded-md
        border border-white/30
        bg-white/10 backdrop-blur-md
        px-8 py-6
        text-base font-semibold text-white
        transition-all duration-300
        hover:bg-white/20 hover:scale-105
        active:scale-95
      "
    >
      Learn More
    </Button>
  </a>
</div>

      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <WaveSeparator color="hsl(200, 20%, 98%)" />
      </div>
    </section>
  );
};

export default Hero;
