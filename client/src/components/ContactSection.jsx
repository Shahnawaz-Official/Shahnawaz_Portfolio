import React from "react";

const ContactSection = () => {

  const contactData = [
    {
      title: "Email",
      value: "mdshahnawaz.420bca@gmail.com",
      icon: <i className="ri-mail-send-line text-4xl"></i>,
    },
    {
      title: "Phone",
      value: "+91 8603114665", // apna number daal dena
      icon: <i className="ri-phone-fill text-4xl"></i>,
    },
    {
      title: "Github",
      value: "Shahnawaz-Official", // apna number daal dena
      icon: <i className="ri-github-fill"></i>,
    },
    {
      title: "LinkedIn",
      value: "Md Shahnawaz", // apna number daal dena
      icon: <i className="ri-linkedin-box-fill"></i>,
    },
  ];

  return (
    <section className="py-16 bg-[#0F1117] text-white">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <h2 className="text-transparent bg-clip-text text-4xl bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] mb-8 font-bold">
          Contact me via email or phone.
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">

          {contactData.map((item, index) => (
            <div
              key={index}
              className="bg-[#020613] p-6 cursor-pointer rounded-2xl flex flex-col 
              hover:shadow-[0_0_25px_rgba(110,229,69,0.4)]
              hover:scale-105 transition-all duration-300 shadow-lg"
            >
              
              <div className="mb-4 text-[#6EE545]">
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-400  break-all">
                {item.value}
              </p>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default ContactSection;