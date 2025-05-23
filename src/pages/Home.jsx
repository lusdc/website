import { useState } from 'react'
import groupPicture from '../assets/groupPicture.jpg'

function Home() {
  return (
    <>
       <div className='flex items-center justify-between w-full'>
        <div className=''>
          <h2 className='text-3xl font-bold text-custom-light-orange xl:text-5xl dark:text-custom-light-orange'>Software Development Club</h2>
          <h3 className='text-2xl font-thin text-gray-700 dark:text-gray-400 xl:text-4xl'>at Liberty University</h3>
          <div className='flex mt-2 space-x-4'>
            {/* Icons cortesy of https://icons.getbootstrap.com/ */}

            {/* LinkedIn Logo */}
            <a href='https://www.linkedin.com/company/lusdc/' target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-linkedin fill-black dark:fill-white hover:scale-110" viewBox="0 0 16 16">
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
            </a>
            {/* GitHub Logo */}
            <a href='https://github.com/lusdc' target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-linkedin fill-black dark:fill-white hover:scale-110" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
            </a>
          </div>
        </div>
        <img className="hidden w-auto mx-30 h-52 rounded-xl md:inline-flex lg:h-60 2xl:h-96 hover:shadow-xl" src={groupPicture} alt="Software Development Club Group Picture" />
       </div>

       <div className='items-center md:justify-between md:flex md:space-x-2'>
        <div className='p-4 mt-3 bg-gray-200 shadow-sm rounded-xl hover:shadow-xl dark:bg-gray-700'> 
            <h2 className='text-lg font-bold dark:text-gray-100'>Peer‑Led Workshops</h2>
            <p className='text-gray-700 dark:text-gray-400'>
              Weekly sessions dive into languages, frameworks, and best practices—taught by members, for members—so everyone levels up together.
            </p>
        </div>
        <div className='p-4 mt-3 bg-gray-200 shadow-sm rounded-xl hover:shadow-xl dark:bg-gray-700'> 
            <h2 className='text-lg font-bold dark:text-gray-100'>Industry-like Projects</h2>
            <p className='text-gray-700 dark:text-gray-400'>
              Our project teams tackle real-world problems, following professional workflows so you gain hands‑on experience shipping production‑ready code.
            </p>
        </div>
        <div className='p-4 mt-3 bg-gray-200 shadow-sm rounded-xl hover:shadow-xl dark:bg-gray-700'> 
            <h2 className='text-lg font-bold dark:text-gray-100'>
              Career-Ready Community
            </h2>
            <p className='text-gray-700 dark:text-gray-400'>
              Hackathons, mentorship, and networking events connect you with alumni and recruiters, turning club experience into standout internships and jobs.
            </p>
        </div>
       </div>
       <h3 className='mt-5 text-xl font-bold'>Join Us!</h3>
       <p>We meet every Tuesday at 5:30 PM in SoBusi 2810. All are welcome!</p>
       
       <h4 className='my-5 text-lg font-bold'>Event Calendar</h4>
       {/* Add Google event calendar here */}
       <div className="p-4 bg-gray-200 rounded-xl">
        <p className='font-mono italic'>Coming Soon!</p>
       </div>
    </>
  )
}

export default Home
