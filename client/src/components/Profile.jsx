import React from "react";


const Profile = () => {
  return (
    <section className="w-full min-h-fit bg-[#0F1117] hover:shadow-[0_0_25px_rgba(110,229,69,0.4)]  text-gray-300 px-6 md:px-20 py-16">
      
      {/* Heading */}
      <div className="flex items-center gap-4 mb-6">
        <h1 className="text-transparent bg-clip-text text-4xl bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] mb-8 font-bold">
          Profile
        </h1>
      </div>

      {/* Description */}
      <p className="text-gray-400 max-w-3xl mb-14 text-lg">
        I am a dedicated BCA student who loves web development and creating user-friendly applications. <br/>
I am currently focused on improving my skills in the MERN stack and building real-world projects.
      </p>

      {/* Info Grid */}
      <div className="grid md:grid-cols-2 gap-12 text-lg">
        
        {/* Left Side */}
        <div className="space-y-8">
          <p>
            <span className="text-transparent bg-clip-text text-xl bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] mb-8 font-semibold">Name:</span>{" "}
            Md Shahnawaz
          </p>

          <p>
            <span className="text-transparent bg-clip-text text-xl bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] mb-8 font-semibold">Experience:</span>{" "}
            Fresher | MERN Stack Developer (Project-Based Experience)
          </p>

          <p>
            <span className="text-transparent bg-clip-text text-xl bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] mb-8 font-semibold">Nationality:</span>{" "}
            India
          </p>

          
        </div>

        {/* Right Side */}
        <div className="space-y-8">
          <p>
            <span className="text-transparent bg-clip-text text-xl bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] mb-8 font-semibold">Phone:</span>{" "}
            (+91)8603114665
          </p>

          <p>
            <span className="text-transparent bg-clip-text text-xl bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] mb-8 font-semibold">Age:</span>{" "}
            20 Years
          </p>

          <p>
            <span className="text-transparent bg-clip-text text-xl bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] mb-8 font-semibold">Email:</span>{" "}
            mdshahnawaz.420bca@gmail.com
          </p>

          <p>
            <span className="text-transparent bg-clip-text text-xl bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] mb-8 font-semibold">Languages:</span>{" "}
            English, Hindi
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;