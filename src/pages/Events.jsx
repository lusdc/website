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
            date="Every Monday"
            time="6 PM - 7:30 PM"
            location="SoBusi 2810"
        />

        <SpecialEvent
            title="12 Hour Hackathon"
            description="Join us for our first 12-hour hackathon ever judged by industry professionals! This is a great opportunity to work on a team to build a project, learn new skills, and network with others."
            date="Saturday, Sept. 13th"
            time="9 AM - 9 PM"
            location="School of Business"
        />

        <SpecialEvent
            title="Chat, are we cooked? (AI Discussion)"
            description="Join us for a special event where we will be discussing the future of AI and its impact on software development. This event will feature many guest speakers from the industry."
            date="Monday, Nov. 3rd"
            time="6 PM - 7:30 PM"
            location="SoBusi 2810"
        />
    </>
  )
}

export default Events
