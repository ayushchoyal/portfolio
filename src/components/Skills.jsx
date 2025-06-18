import React from 'react';
import skill from '../assets/skill.jpg';

const Skills = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Skills</h1>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Skills List */}
        <ul className="ml-10 text-left list-disc pl-5">
          <li>Languages & DSA: C++, Java, Data Structures & Algorithms</li>
          <li>Web Technologies: HTML, CSS, React</li>
          <li>Databases: MySQL</li>
          <li>Soft Skills: Leadership, Problem Solving</li>
        </ul>

        {/* Skill Image */}
        <div>
          <img src={skill} alt="Skill Visual" className="ml-40 w-64 h-auto rounded shadow" />
        </div>
      </div>
    </div>
  );
};

export default Skills;
