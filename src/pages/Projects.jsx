import { useState } from 'react'

function Project({title, description, link, leader, members}) {
  return (
    <div className='p-4 mt-3 bg-gray-200 shadow-sm rounded-xl hover:shadow-xl dark:bg-gray-700'> 
        <h2 className='text-lg font-bold dark:text-gray-100'>{title}</h2>
        <p className='text-gray-700 dark:text-gray-400'>{description}</p>
        {link ? <p className='text-gray-700 dark:text-gray-400'>Project Link: {link}</p> : <p className='text-gray-700 dark:text-gray-400'>Project Link: Not available</p>}
        <p className='text-gray-700 dark:text-gray-400'>Project Leader: {leader}</p>
        <p className='text-gray-700 dark:text-gray-400'>Project Members: {members.join(', ')}</p>
    </div>
  )
}

function Projects() {
  return (
    <>
        <h3 className='text-2xl font-bold'>Our Projects</h3>

        <div className="p-4 mt-4 bg-gray-200 rounded-xl dark:bg-gray-700">
          <p className='font-mono italic'>Project Announcements Coming Soon!</p>
        </div>
        
    </>
  )
}

export default Projects
