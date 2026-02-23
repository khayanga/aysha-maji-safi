
"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { Play, X } from "lucide-react";

const Video = () => {
  const [play, setPlay] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; 
    }
    setPlay(false);
  };

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

        <div className="relative aspect-video rounded-3xl overflow-hidden shadow-2xl">

          {!play ? (
            <>
              {/* Preview Image */}
              <Image
                src="/pic1.jpg"
                alt="Community water station in Mombasa Kenya"
                fill
                priority
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center px-6">

                <button
                  onClick={() => setPlay(true)}
                  className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center 
                  hover:scale-110 transition-transform duration-300 shadow-lg"
                >
                  <Play className="h-8 w-8 text-white ml-1" fill="currentColor" />
                </button>

                <h3 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-3">
                  Watch Our Story
                </h3>

                <p className="text-white/80 max-w-md">
                  See how clean water is transforming communities
                  across the Mombasa region in Kenya.
                </p>
              </div>
            </>
          ) : (
            <>
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-20 bg-black/60 text-white rounded-full p-2 hover:scale-110 transition"
              >
                <X size={20} />
              </button>

              {/* Video */}
              <video
                ref={videoRef}
                src="/video1.mp4"
                controls
                autoPlay
                // poster="/hero-water.jpg"
                className="w-full h-full object-cover"
              />
            </>
          )}
        </div>

      </div>
    </section>
  );
};

export default Video;