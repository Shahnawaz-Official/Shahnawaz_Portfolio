import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNav from "../components/AdminNav";
import Footer from "../components/Footer";

function Certificate() {
  const [certificates, setCertificates] = useState([]);
  const isAdmin = localStorage.getItem("isAdminLoggedIn");

  const fetchCertificates = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/certificate/");
      setCertificates(res.data.certificate);
    } catch (error) {
      console.log(error);
      setCertificates([]);
    }
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `http://localhost:3000/api/admin/certificate/delete/${id}`,
        { withCredentials: true }
      );

      alert("Certificate Deleted Successfully");

      setCertificates((prev) =>
        prev.filter((c) => c._id !== id)
      );

    } catch (error) {
      console.log(error.response?.data);
      alert("Delete Failed");
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1117] text-white">
      <AdminNav />
        <h1 className='text-center mt-4  text-transparent bg-clip-text text-4xl bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] mb-12 font-bold'> All Certificates </h1>
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {certificates.length === 0 ? (
          <p className="text-gray-400 col-span-full text-center text-lg">
            No Certificates Found
          </p>
        ) : (
          certificates.map((certificate) => (
            <div
              key={certificate._id}
              className="bg-[#0F1117] rounded-3xl shadow-2xl 
              overflow-hidden border border-gray-800
              hover:border-[#9FF934] hover:shadow-[0_0_25px_#9FF93430]
              transition-all duration-300"
            >

              {/* IMAGE */}
              <img
                src={certificate.image}
                alt={certificate.title}
                className="w-full h-64 md:h-72 object-cover"
              />

              <div className="p-8 flex flex-col gap-4">

                {/* TITLE */}
                <h2 className="text-2xl md:text-3xl font-bold">
                  {certificate.title}
                </h2>

                {/* PROVIDER */}
                <span className="w-fit px-4 py-1 text-sm bg-green-500/20 text-green-400 rounded-full">
                  {certificate.provider}
                </span>

                {/* DESCRIPTION */}
                <p className="text-gray-300 text-sm leading-relaxed">
                  {certificate.description}
                </p>

                <div className="flex flex-wrap gap-4 mt-6">

                  {/* View Certificate Button (Optional) */}
                  {certificate.link && (
                    <a
                      href={certificate.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 text-black py-2 rounded-lg bg-linear-to-r 
                      from-[#9FF934] via-[#6EE545] to-[#30CB59] 
                      transition font-semibold"
                    >
                      View Certificate
                    </a>
                  )}

                  {/* Delete Button (Admin Only) */}
                  {isAdmin && (
                    <button
                      onClick={() => handleDelete(certificate._id)}
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

      <Footer />
    </div>
  );
}

export default Certificate;