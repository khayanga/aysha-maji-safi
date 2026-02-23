"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Droplets, Menu, X } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <Link
          href="/"
          className="flex items-center gap-2 font-display font-bold text-lg text-primary"
        >
          <Image
            src="/logo.jpg"
            alt="Ayshah Kiu Maji Safi Logo"
            width={70}
            height={70}
            className="mx-auto md:mx-0 cursor-pointer rounded-full"
          />
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            href="/#impact"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Impact
          </Link>
          <Link
            href="/#solution"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Solution
          </Link>
          <Link
            href="/invest"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Contact Us
          </Link>

          <Link
            href="/invest"
            className="
                inline-flex items-center justify-center
                rounded-md
                px-6 py-2
                text-sm font-semibold
                text-white
                bg-linear-to-r from-primary to-emerald-500
                shadow-lg shadow-emerald-500/20
                transition-all duration-300
                hover:scale-105
                hover:shadow-xl hover:shadow-emerald-500/40
                active:scale-95
            "
          >
            Invest Now
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-primary"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-background/95 backdrop-blurborder-b border-border px-4 pb-4 animate-fade-in">
          <Link
            href="/"
            onClick={() => setOpen(false)}
            className={` block py-2 text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>

          <Link
            href="/invest"
            onClick={() => setOpen(false)}
            className="
                items-center justify-center
                rounded-md
                px-6 py-2
                text-sm font-semibold
                text-white
                bg-linear-to-r from-primary  to-emerald-500
                shadow-lg shadow-emerald-500/20
                transition-all duration-300
                hover:scale-105
                hover:shadow-xl hover:shadow-emerald-500/40
                active:scale-95
                block mt-2 w-32
            "
          >
            Invest Now
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
