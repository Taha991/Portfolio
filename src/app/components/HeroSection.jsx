"use client";
import React, { useState } from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Mostqel from "../../../public/مستقل.png";
import CvPreviewImage from "../../../public/Taha-Mohamed-.Net- CV.png"; // Replace with the actual image path

const HeroSection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <span style={{ fontSize: "55px" }}>
              <TypeAnimation
                sequence={[
                  "Taha Mohamed",
                  1500,
                  "Software Developer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </span>
          </h1>

          <div className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl socials flex flex-row gap-2">
            <Link href="https://github.com/taha991" target="_blank">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/taha-mohamed-7b7ab3254/"
              target="_blank"
            >
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
            <Link
              href="https://mostaql.com/u/tahamohamed991"
              target="_blank"
            >
              <Image
                src={Mostqel}
                alt="Mostaql Icon"
                width={48}
                height={48}
                className="rounded-full mt-[5px]" // This applies the circular border
              />
            </Link>
          </div>

          <div>
            <Link
              href="/#contact"
              className="px-6 inline-block py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-200 text-white"
            >
              Hire Me
            </Link>
            <a
              href="https://drive.google.com/uc?export=download&id=14TufCnCv5dzg7xfqV900RacJETIy_y2n"
              download="Taha-Mohamed-.Net-CV.pdf" // Specify the filename to be used when downloaded
              className="relative px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
                Download CV
              </span>

              {/* CV Preview */}
              {isHovered && (
                <div className="absolute top-[50px] left-0 w-[500px] h-[700px] bg-white shadow-lg border rounded-lg overflow-hidden transition-opacity duration-300 z-50">
                  <Image
                    src={CvPreviewImage}
                    alt="CV Preview"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-[#181818] w-[150px] h-[150px] lg:w-[450px] lg:h-[450px] relative flex items-center justify-center overflow-hidden">
            <Image
              src="/images/hero-image.png"
              alt="hero image"
              className="object-cover rounded-full"
              width={430}
              height={400}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
