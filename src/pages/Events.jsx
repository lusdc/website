import { events } from "../data/Events"; // Events are soft-coded here

function EventCard({ imageUrl, title, description, startTime, endTime, location }) {
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
    <div className="h-auto overflow-hidden bg-gray-200 shadow-sm w-72 rounded-xl hover:shadow-xl dark:bg-gray-700">
      <div className="relative w-full h-48">
        <img
          src={imageUrl}
          alt={title}
          className="object-cover w-full h-full"
        ></img>
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-gray-200 dark:from-gray-700 to-transparent"></div>
      </div>
      <div className="relative z-20 px-4 pb-4 -mt-8">
        <h2 className="text-2xl font-bold dark:text-gray-200">{title}</h2>
        <p className="mt-4">{description}</p>
        <p className="mt-4">📅 {day}, {month}. {date}</p>
        <p className="">🕑 {_startTime} - {_endTime}</p>
        <p className="">📍 {location}</p>
      </div>
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
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Events;
