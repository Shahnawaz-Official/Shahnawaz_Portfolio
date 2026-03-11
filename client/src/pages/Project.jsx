import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNav from "../components/AdminNav";
import Footer from "../components/Footer"

function Project() {
  const [projects, setProjects] = useState([]);
  const isAdmin = localStorage.getItem("isAdminLoggedIn");

  const fetchProjects = async () => {
    try {
      const res = await axios.get("https://potfolio-backend-pq7q.onrender.com/api/project/");
      setProjects(res.data.project); //  FIXED HERE
    } catch (error) {
      console.log(error);
      setProjects([]);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://potfolio-backend-pq7q.onrender.com/api/admin/project/delete/${id}`,
        { withCredentials: true }
      );

      alert("Project Deleted Successfully ");

      setProjects((prev) => prev.filter((p) => p._id !== id));

    } catch (error) {
      console.log(error.response?.data);
      alert("Delete Failed ");
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1117] text-white">
      <AdminNav />
      <h1 className='text-center mt-4  text-transparent bg-clip-text text-4xl bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] mb-12 font-bold'>All Projects </h1>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {projects.length === 0 ? (
          <p className="text-gray-400 col-span-full text-center text-lg">
            No Projects Found
          </p>
        ) : (
          projects.map((project) => (
            <div
              key={project._id}
              className="bg-[#0F1117] rounded-3xl shadow-2xl 
                   overflow-hidden border border-gray-800
                   hover:border-[#9FF934] hover:shadow-[0_0_25px_#9FF93430]
                   transition-all duration-300"
            >

              {/* IMAGE */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-72 object-cover"
              />

              <div className="p-8 flex flex-col gap-4">

                {/* TITLE */}
                <h2 className="text-2xl md:text-3xl font-bold">
                  {project.title}
                </h2>

                {/* CATEGORY BADGE */}
                <span className="w-fit px-4 py-1 text-sm bg-green-500/20 text-green-400 rounded-full">
                  {project.category}
                </span>

                {/* SHORT DESCRIPTION */}
                <p className="text-gray-400 text-base">
                  {project.shortDescription}
                </p>

                {/* FULL DESCRIPTION */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* BUTTONS */}
                <div className="flex flex-wrap gap-4 mt-6">

                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 text-black py-2 rounded-lg bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] hover:bg-green-600 transition font-semibold"
                  >
                    View Code
                  </a>

                  {isAdmin && (
                    <button
                      onClick={() => handleDelete(project._id)}
                      className="px-6 py-2 rounded-lg bg-red-500 hover:bg-red-600 transition font-semibold"
                    >
                      Delete
                    </button>
                  )}

                </div>

              </div>
            </div>
          ))
        )}

      </div>
        <Footer/>
    </div>
  );
}

export default Project;