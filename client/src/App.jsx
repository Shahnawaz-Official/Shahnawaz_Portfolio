import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import Tool from "./pages/Tool";
import Project from "./pages/Project";
import AdminLogin from "./pages/AdminLogin";
import Certificate from "./pages/Certificate";

//  New Imports
import UploadProject from "./pages/UploadProject";
import UploadCertificate from "./pages/UploadCertificate";
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminNav from "./components/AdminNav";

function App() {
  return (
    <div className="h-full w-full text-zinc-400 max-w-7xl mx-auto">
      
      {/* Normal Website Navbar */}
      <Navbar />

      <div className="pt-20">
        <Routes>

          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tools" element={<Tool />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/login" element={<AdminLogin />} />
          <Route path="/certificates" element={<Certificate />} />

          {/*  Protected Admin Routes */}
          <Route
            path="/upload"
            element={
              <ProtectedRoute>
                <>
                  <AdminNav />
                  <UploadProject />
                </>
              </ProtectedRoute>
            }
          />

          <Route
            path="/upload/certificate"
            element={
              <ProtectedRoute>
                <>
                  <AdminNav />
                  <UploadCertificate />
                </>
              </ProtectedRoute>
            }
          />

        </Routes>
      </div>
    </div>
  );
}

export default App;