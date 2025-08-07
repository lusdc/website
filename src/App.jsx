import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { useState } from 'react'
import clubLogo from './assets/logo.svg'
import confusedCrab from './assets/404Crab.png'
import './App.css'

// Importing the pages
import Home from './pages/Home'
import Projects from './pages/Projects'
import About from './pages/About'
import Events from './pages/Events'

function App() {
  const [activeLink, setActiveLink] = useState(window.location.pathname);

  return (
    <Router>
      <div className='bg-gray-100 dark:bg-gray-800'>
        <header className='w-full bg-custom-black'>
          <div className='flex max-w-[90rem] mx-auto px-4
          md:justify-between items-center md:mb-[4rem]'>
            <Link to="/" onClick={() => setActiveLink('/')}>
              <div className='flex items-center text-white'>
                <img className="inline-flex w-20" src={clubLogo} alt="Software Development Club Logo" />
                <h1 className="hidden mx-3 text-3xl font-bold sm:inline-flex">SDC</h1>
              </div>
            </Link>
            <nav className="flex px-4 space-x-10 text-white bg-custom-black md:px-10">
              <Link
                to="/"
                className={activeLink === '/' ? 'font-bold' : ''}
                onClick={() => setActiveLink('/')}
              >
                Home
              </Link>
              <Link
                to="/about"
                className={activeLink === '/about' ? 'font-bold' : ''}
                onClick={() => setActiveLink('/about')}
              >
                About
              </Link>
              <Link
                to="/events"
                className={activeLink === '/events' ? 'font-bold' : ''}
                onClick={() => setActiveLink('/events')}
              >
                Events
              </Link>
              <Link
                to="/projects"
                className={activeLink === '/projects' ? 'font-bold' : ''}
                onClick={() => setActiveLink('/projects')}
              >
                Projects
              </Link>
            </nav>
          </div>
        </header>

        {/* Render the page content here */}
        <div className= "flex flex-col min-h-screen max-w-[90rem] mx-auto px-4 dark:text-gray-200">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/events" element={<Events />} />
            <Route path="*" element=
              {
                <div>
                  <img className='mx-auto w-96 h-96' src={confusedCrab} alt="Confused Crab" />
                  <h2 className='text-5xl font-extrabold text-center'>404</h2>
                  <h2 className='mt-2 text-3xl font-bold text-center'>Page Not Found</h2>
                </div>
              } 
            />
          </Routes>
        </div>

        <footer className="py-4 text-gray-200 bg-custom-black">
          <div className="flex items-center justify-between max-w-[90rem] mx-auto px-4">
            <p className='text-xs'>Made with ❤️ by Jeffrey</p>
          </div>
        </footer>
      </div>
    </Router>
  )
}

export default App
