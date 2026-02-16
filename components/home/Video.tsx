"use client";

import React from "react";
import Image from "next/image";
import { Play } from "lucide-react";

const Video = () => {
  return (
    <section className="py-20 md:py-28 relative bg-white">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-gray-700 mb-3">
            See Our Work
          </p>

          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Impact in{" "}
            <span className="bg-linear-to-r from-primary to-emerald-500 bg-clip-text text-transparent">
              Action
            </span>
          </h2>
        </div>

        {/* Video Preview Card */}
        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl group cursor-pointer">
            

          {/* Background Image */}
          <Image
            src="/hero-water.jpg"
            alt="Community water station in Mombasa Kenya"
            fill
            priority
            className="object-cover scale-105 group-hover:scale-110 transition-transform duration-700"
          />

          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-linear-to-br from-black/50 via-black/40 to-black/60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">

            {/* Play Button */}
            <div className="relative">
              <button className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center 
                hover:scale-110 transition-transform duration-300 shadow-lg">

                <Play
                  className="h-8 w-8 text-white ml-1"
                  fill="currentColor"
                />
              </button>

              {/* Ripple Effect */}
              <span className="absolute inset-0 rounded-full border-2 border-white/40 animate-ping" />
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-3">
              Watch Our Story
            </h3>

            <p className="text-white/80 max-w-md">
              See how clean water is transforming communities
              across the Mombasa region in Kenya.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Video;
