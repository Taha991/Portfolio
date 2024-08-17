"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Experience",
    id: "experience",
    content: (
      <ul className="list-disc pl-2">
        <li key="1">
          Full Stack .Net Developer at InfoPeak <br />
          - Full-Time March 2024 - Present, Maadi
        </li>
        <li key="2">
          .Net Developer at EmaxIT International <br />
          - Full-Time August 2023 - February 2024, Al Jizah
        </li>
        <li key="3">
          Full Stack .Net Developer at Ebdaa <br />
          - Intern July 2023 - May 2023, Cairo
        </li>
        <li key="4">
          <a
            href="https://drive.google.com/uc?export=download&id=14TufCnCv5dzg7xfqV900RacJETIy_y2n"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV for more details
          </a>
        </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experience");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/cpu.png" alt="About image" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a full stack web developer with a passion for creating interactive and responsive web applications. My skills and experience are focused on developing and delivering high-quality web applications with performance and security.
          </p>
          <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
            <Image
              src="/LockTop.png"
              alt="Lock top"
              width={30}
              height={30}
              className="w-[50px] translate-y-5 transition-all duration-200 group-hover:translate-y-11"
            />
            <Image
              src="/LockMain.png"
              alt="Lock Main"
              width={50}
              height={50}
              className="z-10"
            />
          </div>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
