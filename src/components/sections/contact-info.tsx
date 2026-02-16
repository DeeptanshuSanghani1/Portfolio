"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { config } from "@/data/config";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";
import { Button } from "../ui/button";

const ContactInfoSection = () => {
  const contactDetails = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: config.email,
      href: `mailto:${config.email}`,
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+1 (437) 997-7196",
      href: "tel:+14379977196",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      label: "LinkedIn",
      value: "linkedin.com/in/deeptanshusanghani/",
      href: config.social.linkedin,
    },
    {
      icon: <Github className="w-6 h-6" />,
      label: "GitHub",
      value: "https://github.com/DeeptanshuSanghani1",
      href: config.social.github,
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Ontario, Canada",
      href: null,
    },
  ];

  return (
    <section id="contact" className="min-h-screen max-w-7xl mx-auto px-4">
      <Link href={"#contact"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          GET IN TOUCH
        </h2>
      </Link>
      
      <div className="flex justify-center mt-10 md:mt-20">
        <Card className="w-full max-w-3xl bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl md:text-4xl">Contact Information</CardTitle>
            <CardDescription className="text-base md:text-lg mt-4">
              Feel free to reach out through any of the following channels. I&apos;m always open to discussing new opportunities, collaborations, or just having a chat!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 p-6 md:p-8">
            {contactDetails.map((detail, index) => (
              <div
                key={index}
                className={cn(
                  "flex items-center gap-4 p-4 rounded-lg transition-all",
                  "bg-white/50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700",
                  detail.href && "hover:bg-white/80 dark:hover:bg-zinc-800/80 hover:scale-[1.02]"
                )}
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                  {detail.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    {detail.label}
                  </p>
                  {detail.href ? (
                    <a
                      href={detail.href}
                      target={detail.href.startsWith("http") ? "_blank" : undefined}
                      rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-base md:text-lg font-semibold text-zinc-900 dark:text-zinc-100 hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
                    >
                      {detail.value}
                    </a>
                  ) : (
                    <p className="text-base md:text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      {detail.value}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default ContactInfoSection;
