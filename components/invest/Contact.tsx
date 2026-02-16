"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
  Building2,
} from "lucide-react";
// import { useToast } from "@/hooks/use-toast";

interface FormData {
  name: string;
  organization: string;
  email: string;
  type: string;
  message: string;
}

export default function Contact() {
//   const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    name: "",
    organization: "",
    email: "",
    type: "Investor",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.organization ||
      !formData.email ||
      !formData.message
    ) {
        // toast({
        //     title: "Missing information",
        //     description: "Please complete all required fields.",
        //     variant: "destructive",
        // });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "text/plain;charset=utf-8",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) throw new Error("Request failed");

    //   toast({
    //     title: "Inquiry submitted",
    //     description:
    //       "Thank you for your interest. Our team will respond within 24 hours.",
    //   });

      setFormData({
        name: "",
        organization: "",
        email: "",
        type: "Investor",
        message: "",
      });
    } catch (err) {
    //   toast({
    //     title: "Submission failed",
    //     description: "Please try again later.",
    //     variant: "destructive",
    //   });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 px-6 bg-gray-50"
    >
      <div className="mx-auto max-w-6xl space-y-14">

        {/* Header */}
        <div className="space-y-4 text-center">
          <h2 className="text-3xl md:text-4xl  text-primary font-bold tracking-tight">
            Partnership & Investment Inquiry
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We welcome strategic investors and partners aligned with
            sustainable clean water infrastructure in Kenya.
          </p>
          <div className="h-1 w-24 bg-linear-to-r from-primary to-emerald-500 rounded-full mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Form */}
          <div className="bg-card border rounded-2xl p-8 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">

              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="organization" className="text-sm font-medium">
                    Organization
                  </label>
                  <Input
                    id="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    placeholder="Fund / Company Name"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="type" className="text-sm font-medium">
                  Inquiry Type
                </label>
                <select
                  id="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="w-full border rounded-md px-3 py-2 bg-background"
                >
                  <option>Investor</option>
                  <option>Strategic Partner</option>
                  <option>Donor</option>
                  <option>Supplier</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your interest in partnering or investing..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                disabled={loading}
                className="w-full"
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Submit Inquiry <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">
                Direct Contact
              </h3>
              <p className="text-muted-foreground">
                Reach our leadership team directly for serious investment discussions.
              </p>
            </div>

            {[
              {
                icon: Mail,
                text: "invest@companyname.co.ke",
                href: "mailto:invest@companyname.co.ke",
              },
              {
                icon: Phone,
                text: "+254 712 345 678",
                href: "tel:+254712345678",
              },
              {
                icon: MapPin,
                text: "Mombasa, Kenya",
                href: "#",
              },
              
            ].map((item, i) => {
              const Icon = item.icon;
              return (
                <a
                  key={i}
                  href={item.href}
                  className="flex items-center gap-4 p-5 rounded-xl border bg-card hover:shadow-md transition"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-linear-to-br from-primary to-emerald-500 text-white">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </a>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
