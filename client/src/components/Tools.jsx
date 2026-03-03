import React from "react";

const Tools = () => {

  const toolsData = [
    { title: "Git", image: "/images/git.png" },
    { title: "GitHub", image: "/images/github.png" },
    { title: "VS Code", image: "/images/vs.png" },
    { title: "Postman", image: "/images/postman.png" },
    { title: "MongoDB Compass", image: "/images/mongodb.png" },
    { title: "Redux", image: "/images/redux.png" },
    
  ];

  return (
    <section className="py-16 bg-[#0F1117] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-transparent bg-clip-text text-4xl bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] mb-8 font-bold">
           Tools
        </h2>

        {/* Tools Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

          {toolsData.map((tool, index) => (
            <div
              key={index}
              className="bg-[#020613] p-6 cursor-pointer rounded-2xl flex flex-col items-center 
              hover:shadow-[0_0_25px_rgba(110,229,69,0.4)]
              hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <img
                src={tool.image}
                alt={tool.title}
                className="w-16 h-16 object-contain mb-4"
              />
              <h3 className="text-lg font-semibold">
                {tool.title}
              </h3>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Tools;