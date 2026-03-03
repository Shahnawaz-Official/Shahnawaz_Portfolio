import React from "react";
import Tools from "../components/Tools";
import Footer from "../components/Footer";
const Skills = () => {
    document.title = " Shahnawaz | Skills"
 const skillsData = [
  { title: "HTML", image: "/images/html.png" },
  { title: "CSS", image: "/images/css.png" },
  { title: "JavaScript", image: "/images/js.png" },
  { title: "React", image: "/images/react.png" },
  { title: "Node.js", image: "/images/nodejs.png" },
  { title: "MongoDB", image: "/images/mongodb.png" },
  { title: "C/C++", image: "/images/c.png" },
  { title: "GitHub", image: "/images/github.png" },
  { title: "Python", image: "/images/python.png" },
  { title: "AWS", image: "/images/aws.png" },
  { title: "Java", image: "/images/java.png" },
];

  return (
    <section className="py-16 bg-[#0F1117]  text-white">
      <div className="max-w-6xl mx-auto px-6 ">

        {/* Heading */}
        <h2 className=" text-center  text-transparent bg-clip-text text-4xl bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] mb-8 font-bold">
           Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

          {skillsData.map((skill, index) => (
            <div
              key={index}
              className="bg-[#020613] p-6 cursor-pointer rounded-2xl flex flex-col items-center 
              hover:shadow-[0_0_25px_rgba(110,229,69,0.4)]
              hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <img
                src={skill.image}
                alt={skill.title}
                className="w-16 h-16 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold">
                {skill.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
      <Tools />
      <Footer />
    </section>
  );
};

export default Skills;