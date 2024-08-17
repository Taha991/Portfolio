"use client";

import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaDocker, FaGit, FaAws, FaDatabase, FaNodeJs, FaPython, FaSass, FaPhp } from 'react-icons/fa';
import { SiCsharp, SiDotnet, SiMongodb, SiMicrosoftsqlserver, SiGraphql, SiAzuredevops, SiLinux, SiJquery, SiGrpc, SiTypescript, SiFirebase, SiJenkins, SiPostgresql, SiKubernetes } from 'react-icons/si';

const skillSet = [
  { skill_name: "C#", Icon: SiCsharp },
  { skill_name: "ASP.Net", Icon: SiDotnet },
  { skill_name: "Angular", Icon: FaAngular },
  { skill_name: "SQL", Icon: SiMicrosoftsqlserver },
  { skill_name: "MongoDB", Icon: SiMongodb },
  { skill_name: "LINQ", Icon: FaDatabase },
  { skill_name: "Dapper", Icon: FaDatabase },
  { skill_name: "Docker", Icon: FaDocker },
  { skill_name: "JavaScript", Icon: FaJs },
  { skill_name: "HTML", Icon: FaHtml5 },
  { skill_name: "CSS", Icon: FaCss3Alt },
  { skill_name: "jQuery", Icon: SiJquery },
  { skill_name: "React", Icon: FaReact },
  { skill_name: "Node.js", Icon: FaNodeJs },
  { skill_name: "Python", Icon: FaPython },
  { skill_name: "Git", Icon: FaGit },
  { skill_name: "Azure", Icon: SiAzuredevops },
  { skill_name: "Linux", Icon: SiLinux },
  { skill_name: "GraphQL", Icon: SiGraphql },
  { skill_name: "AWS", Icon: FaAws },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative w-full min-h-[50vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Header */}
      <h2 className="text-center text-4xl font-bold text-white mt-8 mb-12">
        Skills
      </h2>

      {/* Skill Icons */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 px-4 w-full">
        {skillSet.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center"
          >
            {skill.Icon && <skill.Icon size={60} className="text-white mb-2" />} {/* Icon */}
            <p className="text-white text-center">{skill.skill_name}</p>  {/* Skill Name */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
