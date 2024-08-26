"use client";
import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import MostqelIcon from "../../../public/مستقل.png"; // Import the Mostaql icon
import CvPreviewImage from "../../../public/Taha-Mohamed-.Net- CV.png"; // Replace with the actual image path
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m currently looking for new opportunities, my inbox is always
          open. Whether you have a question or just want to say hi, I&apos;ll
          try my best to get back to you!
        </p>
        <div className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl socials flex flex-row gap-2">
          <Link href="https://github.com/taha991" target="_blank">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/taha-mohamed-7b7ab3254/" target="_blank">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
          <Link href="https://mostaql.com/u/tahamohamed991" target="_blank">
            <Image src={MostqelIcon} alt="Mostaql Icon" width={48} height={48} className="rounded-full mt-[5px]" />
          </Link>
          <a
            href="https://drive.google.com/uc?export=download&id=14TufCnCv5dzg7xfqV900RacJETIy_y2n"
            download="Taha-Mohamed-.Net-CV.pdf"
            className="relative inline-block"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <span className="hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg">
              Preview CV
            </span>

            {/* CV Preview */}
            {isHovered && (
              <div className="absolute top-[-420px] left-0 w-[300px] h-[400px] bg-white shadow-lg border rounded-lg overflow-hidden transition-opacity duration-300 z-50">
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
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Taha@google.com"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
