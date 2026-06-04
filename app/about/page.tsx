"use client";

import AnimatedSection from "@/components/AnimatedSection";
import Vision from "@/components/home/Vision";
import Banner from "@/components/invest/Banner";
import Contact from "@/components/invest/Contact";
import Funding from "@/components/invest/Funding";
import Team from "@/components/invest/Team";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function page() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <AnimatedSection><Banner/></AnimatedSection>
      <AnimatedSection><Vision/></AnimatedSection>
      <AnimatedSection><Funding/></AnimatedSection>
      <AnimatedSection><Team/></AnimatedSection>
      <AnimatedSection><Contact/></AnimatedSection>
    </main>
  );
}
