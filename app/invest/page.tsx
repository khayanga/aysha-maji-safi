"use client";

import Banner from "@/components/invest/Banner";
import Contact from "@/components/invest/Contact";
import Funding from "@/components/invest/Funding";
import { ArrowRight, CheckCircle } from "lucide-react";

export default function page() {
  return (
    <main className="relative min-h-screen overflow-hidden">

      <Banner/>
      <Funding/>
      <Contact/>
     

    </main>
  );
}
