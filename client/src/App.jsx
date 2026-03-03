import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Skills from "./pages/Skills";
function App() {
  return (
    <div className="h-full w-full text-zinc-400 max-w-7xl mx-auto">
       <Navbar />

      {/* Content ko navbar ke neeche lane ke liye */}
      <div className="pt-20 ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </div>

    </div>
  );
}

export default App;