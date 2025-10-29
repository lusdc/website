import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import clubLogo from "/assets/icons/crab.gif";
import luLogo from "/assets/icons/luLogo.png";
import confusedCrab from "/assets/icons/404Crab.png";
import "./App.css";

// Importing the pages
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Events from "./pages/Events";
import Hackathon from "./pages/Hackathon";
import Tutorials from "./pages/Tutorials";
import Tutorial from "./pages/Tutorial";

function App() {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  return (
    <Router>
      <div className="overflow-x-hidden bg-gray-100 dark:bg-gray-800">

        {/* Navbar */}
        <header className="w-full glass-nav">
          <div className="flex max-w-[80rem] mx-auto px-4 md:px-6 lg:px-16 justify-between items-center py-3 md:py-4">
            <Link to="/" onClick={() => {
              setActiveLink("/")
              window.scrollTo({
                top: 0,
                behavior: 'smooth'
              })
            }}>
              <div className="flex items-center text-white">
                <div className="relative w-12 sm:w-16 md:w-20">
                  <img
                    className="absolute z-10 w-[25%] top-[55%] left-[40%]"
                    src={luLogo}
                    alt="LU Logo"
                  />
                  <img
                    className="relative"
                    src={clubLogo}
                    alt="Software Development Club Logo"
                  />
                </div>
                <h1 className="ml-2 text-lg font-bold sm:ml-3 sm:text-2xl md:text-3xl">
                  SDC
                </h1>
              </div>
            </Link>
            <nav className="flex text-white -space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-10">
              <Link
                to="/"
                className={`text-xs sm:text-sm md:text-base px-2 py-1 rounded transition-all hover:scale-110 ${
                  activeLink === "/" ? "font-bold underline" : ""
                }`}
                onClick={() => {
                  setActiveLink("/")
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  })
                }}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={`text-xs sm:text-sm md:text-base px-2 py-1 rounded transition-all hover:scale-110 ${
                  activeLink === "/about" ? "font-bold underline" : ""
                }`}
                onClick={() => {
                  setActiveLink("/about")
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  })
              }}
              >
                About
              </Link>
              <Link
                to="/events"
                className={`text-xs sm:text-sm md:text-base px-2 py-1 rounded transition-all hover:scale-110 ${
                  activeLink === "/events" ? "font-bold underline" : ""
                }`}
                onClick={() => {
                  setActiveLink("/events")
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  })
              }}
              >
                Events
              </Link>
              <Link
                to="/projects"
                className={`text-xs sm:text-sm md:text-base px-2 py-1 rounded transition-all hover:scale-110 ${
                  activeLink === "/projects" ? "font-bold underline" : ""
                }`}
                onClick={() => {
                  setActiveLink("/projects")
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  })
              }}
              >
                Projects
              </Link>
              <Link
                to="/tutorials"
                className={`text-xs sm:text-sm md:text-base px-2 py-1 rounded transition-all hover:scale-110 ${
                  activeLink === "/tutorials" ? "font-bold underline" : ""
                }`}
                onClick={() => {
                  setActiveLink("/tutorials")
                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                  })
              }}
              >
                Tutorials
              </Link>
            </nav>
          </div>
        </header>

        {/* Render the page content here */}
        <div className="flex flex-col min-h-screen max-w-[60rem] lg:max-w-[80rem] mx-auto px-4 md:px-6 lg:px-16 py-28 sm:py-36 md:py-40 dark:text-gray-200 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<Home setActiveLinkCallback={setActiveLink} />} /> {/* Passing setActiveLink for clickable CardWithGraphics to call */}
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="/tutorials/:filename" element={<Tutorial />} /> The :filename parameter creates a dynamic route that captures the requested blog post name.
            <Route path="/tutorials" element={<Tutorials />} /> {/* The :filename parameter creates a dynamic route that captures the requested blog post name.*/}
            <Route
              path="*"
              element={
                <div>
                  <img
                    className="mx-auto w-96 h-96"
                    src={confusedCrab}
                    alt="Confused Crab"
                  />
                  <h2 className="text-5xl font-extrabold text-center">404</h2>
                  <h2 className="mt-2 text-3xl font-bold text-center">
                    Page Not Found
                  </h2>
                </div>
              }
            />
          </Routes>
        </div>

        <footer className="py-4 text-gray-200 bg-custom-black">
          <div className="flex items-center justify-between max-w-[80rem] mx-auto px-4">
            <p className="text-xs">Made with ❤️ by Jeffrey and Loc</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
