import { useState } from 'react'

function SpecialEvent({ title, description, date, time, location }) {
  return (
    <div className='p-4 mt-3 bg-gray-200 shadow-sm rounded-xl hover:shadow-xl dark:bg-gray-700'> 
        <h2 className='text-xl font-bold text-center dark:text-gray-200'>{title}</h2>
        <div className='grid grid-cols-3 gap-4 mt-2 font-mono italic text-center'>
          <p className="w-full">When: {date}</p>
          <p className="w-full">{time}</p>
          <p className="w-full">@ {location}</p>
        </div>
        <p className='mt-2'>{description}</p>
    </div>
  )
}

function Events() {
  return (
    <>
        <h3 className='text-2xl font-bold'>Our Events</h3>
        <SpecialEvent
            title="Weekly Meetings"
            description="Join us for our weekly meetings where we discuss club activities, projects, and more!"
            date="Every Tuesday"
            time="TBD"
            location="SoBusi 2810"
        />

    </>
  )
}

export default Events
