import React, { useState } from "react";
import axios from "axios";

const UploadCertificate = () => {

  const [formData, setFormData] = useState({
    name: "",
    title: "",
    shortDescription: "",
    description: "",
  });

  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const data = new FormData();

      data.append("name", formData.name);
      data.append("title", formData.title);
      data.append("shortDescription", formData.shortDescription);
      data.append("description", formData.description);
      data.append("image", image);

      await axios.post(
        "https://potfolio-backend-pq7q.onrender.com/api/admin/certificate/upload",
        data,
        {
          withCredentials: true, // ✅ cookie send karega
        }
      );

      alert("Certificate Uploaded Successfully ✅");

    } catch (error) {
      console.log(error.response?.data);
      alert("Upload Failed ❌");
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1117] text-white p-6">
      <div className="max-w-2xl mx-auto bg-[#020613] p-8 rounded-2xl shadow-lg">

        <h2 className="text-transparent bg-clip-text text-4xl bg-linear-to-r from-[#9FF934] via-[#6EE545] to-[#30CB59] mb-8 font-bold text-center">
          Upload Certificate
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            type="text"
            name="name"
            placeholder="Certificate Name"
            className="w-full p-3 rounded bg-[#0F1117] border border-gray-700"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="title"
            placeholder="Certificate Title"
            className="w-full p-3 rounded bg-[#0F1117] border border-gray-700"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="shortDescription"
            placeholder="Short Description"
            className="w-full p-3 rounded bg-[#0F1117] border border-gray-700"
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Full Description"
            className="w-full p-3 rounded bg-[#0F1117] border border-gray-700"
            onChange={handleChange}
            required
          />

          <input
            type="file"
            accept="image/*"
            className="w-full p-3 rounded bg-[#0F1117] border border-gray-700"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-green-500 hover:bg-green-600 transition"
          >
            Upload Certificate
          </button>

        </form>
      </div>
    </div>
  );
};

export default UploadCertificate;