"use client";
import React, { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import experiences, { Experience } from "@/data/experience";
import { FloatingDock } from "../ui/floating-dock";
import { ChevronLeft, ChevronRight, Briefcase } from "lucide-react";
import { Button } from "../ui/button";

const ExperienceSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % experiences.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  const currentExperience = experiences[currentIndex];

  return (
    <section id="experience" className="max-w-7xl mx-auto min-h-screen py-16">
      <Link href={"#experience"}>
        <h2
          className={cn(
            "bg-clip-text text-4xl text-center text-transparent md:text-7xl pt-16 mb-16",
            "bg-gradient-to-b from-black/80 to-black/50",
            "dark:bg-gradient-to-b dark:from-white/80 dark:to-white/20 dark:bg-opacity-50"
          )}
        >
          Work Experience
        </h2>
      </Link>

      <div className="flex items-center justify-center px-4">
        <div className="relative w-full max-w-4xl">
          {/* Navigation Buttons */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10">
            <Button
              onClick={handlePrev}
              variant="outline"
              size="icon"
              className="rounded-full h-12 w-12 bg-white/70 dark:bg-black/70 backdrop-blur-sm"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
          </div>
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10">
            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="rounded-full h-12 w-12 bg-white/70 dark:bg-black/70 backdrop-blur-sm"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Experience Card */}
          <div className="bg-white/70 dark:bg-black/70 backdrop-blur-sm rounded-xl border border-zinc-300 dark:border-zinc-700 p-8 md:p-12 min-h-[500px]">
            <div className="flex flex-col md:flex-row items-start gap-6 mb-6">
              <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                  {currentExperience.role}
                </h3>
                <p className="text-lg text-zinc-700 dark:text-zinc-300 mb-1">
                  {currentExperience.company}
                </p>
                <div className="flex flex-wrap gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <span>{currentExperience.duration}</span>
                  <span>•</span>
                  <span>{currentExperience.location}</span>
                </div>
              </div>
            </div>

            <p className="text-zinc-700 dark:text-zinc-300 mb-6">
              {currentExperience.description}
            </p>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-3">
                Key Responsibilities:
              </h4>
              <ul className="space-y-2">
                {currentExperience.responsibilities.map((resp, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-2 text-zinc-700 dark:text-zinc-300"
                  >
                    <span className="text-blue-500 mt-1">•</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-4 text-center">
                Technologies Used
              </h4>
              <div className="flex justify-center items-center w-full">
                <FloatingDock items={currentExperience.skills} desktopClassName="mx-auto" />
              </div>
            </div>

            {/* Progress Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {experiences.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={cn(
                    "h-2 rounded-full transition-all",
                    idx === currentIndex
                      ? "w-8 bg-blue-500"
                      : "w-2 bg-zinc-400 dark:bg-zinc-600"
                  )}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
