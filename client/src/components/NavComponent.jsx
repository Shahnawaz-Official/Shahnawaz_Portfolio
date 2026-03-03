import React from "react";

const ExploreMore = () => {
  const items = [
    {
     
  title: "Skills",
  desc: "Technologies, tools, and expertise I work with regularly.",
  link: "/skills",
},
{
  title: "Projects",
  desc: "A showcase of real-world applications and development work.",
  link: "/projects",
},
{
  title: "About",
  desc: "Learn more about my background, journey, and goals.",
  link: "/about",
},
{
  title: "Certificate",
  desc: "Professional certifications and achievements I’ve earned.",
  link: "/certificates",
},
{
  title: "Contact",
  desc: "Let’s connect for opportunities or collaborations.",
  link: "/contact",
}
    
  ];

  return (
    <section className="w-full py-5 bg-[#101217] 
bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] 
bg-clip-text text-transparent">
      <div className="max-w-6xl mx-auto ">
       <h2
  className="text-3xl md:text-4xl font-bold mb-8
  text-center md:text-left
  text-transparent bg-clip-text 
  bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59]"
>
  Explore More of the Portfolio
</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className={`block rounded-2xl p-6 border transition-all duration-300 cursor-pointer
               hover:border-[#6EE545] hover:shadow-[0_0_25px_rgba(110,229,69,0.4)]`}
            >
              <h3 className="text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {item.desc}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;