import React from "react";

const educationData = [
    {
      year: "22024 - 2027",
      title: "BCA (Full Stack Development)",
      institute: "Suresh Gyan Vihar University",
      details: "I have learned Web Development, MERN Stack, and worked on real-world projects."
    },
    {
      year: "2019-2021",
      title: "Intermediate of Arts. (BSEB)",
      institute: "Zila School Darbhanga",
      details: "Completed Higher Secondary education with Arts stream."
    },
    {
    year: "2017-2019",
    title: "Matriculation (BSEB)",
    institute: "Rajkiyakrit Basudeo Mishra High School, Simari",
    details: "Completed with strong academic foundation. "
  },
 
];

const Education = () => {
  return (
    <section className="w-full   py-16 px-6">
      <div className="">

        <h2 className="text-transparent bg-clip-text text-4xl bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] mb-8 font-bold">
           Education 
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((item, index) => (
            <div
              key={index}
              className="group relative bg-linear-to-br from-zinc-900/20  to-[#0F1117]] border border-white/10 rounded-2xl p-8 transition duration-500 hover:border-[#9FF934] hover:shadow-[0_0_25px_#9FF93430]"
            >

              {/* Year Badge */}
              <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] text-black font-semibold">
                {item.year}
              </span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {item.title}
              </h3>

              {/* Institute */}
              <p className="text-gray-400 flex items-center gap-2">
                <span className="w-2 h-2 bg-[#9FF934] rounded-full"></span>
                {item.institute}
              </p>

              {/* Hover Details */}
              <p className="mt-4 text-gray-400 text-sm opacity-0 max-h-0 overflow-hidden transition-all duration-500 group-hover:opacity-100 group-hover:max-h-40">
                {item.details}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;