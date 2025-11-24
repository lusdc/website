import { events } from "../data/Events"; // Events are soft-coded here

function EventCard({ imageUrl, title, description, startTime, endTime, location, eventLink }) {
  const eventStart = new Date(startTime);
  const eventEnd = new Date(endTime);

  const month = eventStart.toLocaleString("en-US", {
    month: "short",
  });
  const date = eventStart.getDate(); // Day of the month (1-31)
  const day = eventStart.toLocaleDateString('en-US', { weekday: 'long' }); // Day of the week (Monday-Sunday)
  const _startTime = eventStart.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const _endTime = eventEnd.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  return (
    <div className="h-auto overflow-hidden w-80 rounded-2xl
              bg-white/10 dark:bg-gray-900/20
                backdrop-blur-xl backdrop-saturate-150
                border border-white/20 dark:border-gray-700/30
                shadow-2xl shadow-black/10 dark:shadow-black/50
                transition-all duration-500 ease-out
                hover:scale-[1.02] hover:shadow-3xl
                hover:border-white/40 dark:hover:border-gray-600/50">

      {/* Inner glow effect */}
      <div className="absolute inset-0 overflow-hidden rounded-2xl">
        <div className="absolute inset-[-50%] 
                        bg-gradient-to-br from-transparent via-white/5 to-transparent
                        opacity-50" />
      </div>

      <div className="relative w-full h-48">
        {/* Image */}
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        ></img>

        {/* Title */}
        <h2 className="absolute z-10 px-6 text-2xl font-bold text-white bottom-3 dark:text-gray-200">{title}</h2>

        {/* Fade to clarify Title */}
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-white/10 dark:from-gray-900/80 to-transparent"></div>
      </div>

      {/* Description */}
      <div className="relative z-20 px-6 py-4">
        <p>{description}</p>

        {/* Date, Time, Location */}
        <p className="mt-4">📅 {day}, {month}. {date}</p>
        <p className="">🕑 {_startTime} - {_endTime}</p>
        <p className="">📍 {location}</p>
        {eventLink && <p className="">🔗 <a href={eventLink} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">Sign Up</a></p>}
      </div>

      {/* Bottom shine effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
    </div>
  );
}

function Events() {
  return (
    <>
      {/* Glowing blobs */}
      <div className="w-10/12 -translate-x-1/2 glow h-80 -top-20 left-1/2"></div>

      {/* Page content */}
      <div className="w-full">
        <div className="sm:text-center">
          <div className="whitespace-nowrap">
            <h1 className="-ml-4 text-6xl font-bold text-shadow sm:ml-0">Upcoming Events</h1>
          </div>
          <h1 className="relative -mt-6 text-3xl font-bold">Upcoming Events</h1>
        </div>

        <div className="relative flex flex-row flex-wrap justify-center gap-6 mt-16 sm:gap-8">
          {events
            .sort((event) => Date(event.startTime))
            .map((event) => (
              <EventCard
                key={event.title}
                imageUrl={event.imageUrl}
                title={event.title}
                description={event.description}
                startTime={event.startTime}
                endTime={event.endTime}
                location={event.location}
                eventLink={event.eventLink}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Events;
