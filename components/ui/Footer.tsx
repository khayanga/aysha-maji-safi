import { Droplets, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";

const Footer = () => (
  <footer className="bg-gray-900 text-primary-foreground py-12">
    <div className="container mx-auto px-4 ">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6 ">
        <div >
          <Image
                  src="/logo.jpg"
                  alt="Ayshah Kiu Maji Safi Logo"
                  width={150}
                  height={150}
                  className="mx-auto md:mx-0 cursor-pointer rounded-full"
                />

           
        </div>

        <div className="flex flex-col gap-2  items-center">
          <h2>Follow us on our socials</h2>
          <div className="flex gap-4">
              {[
                
                { icon: Facebook, href: "https://www.facebook.com/profile.php?id=100082498684548" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/asha-saad-4a7ab2182?trk=contact-info" },
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center transition-all hover:scale-110 hover:bg-linear-to-tr hover:from-primary hover:to-emerald-500"
                >
                  <social.icon className="w-5 h-5 text-white" />
                </a>
              ))}
            </div>
        </div>

        
        <p className="text-sm opacity-70">
          © {new Date().getFullYear()} Ayshah Kiu Maji Safi. Clean water for all.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
