import { Droplets } from "lucide-react";

const Footer = () => (
  <footer className="bg-gray-900 text-primary-foreground py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 font-display font-bold text-lg">
          <Droplets className="h-5 w-5" />
          Ayshah Kiu Maji Safi
        </div>
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Ayshah Kiu Maji Safi. Clean water for all.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
