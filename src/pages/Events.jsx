import { events } from "../assets/Events"; // Events are soft-coded here

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
    <div className="h-auto w-72 bg-gray-200 shadow-sm rounded-xl overflow-hidden hover:shadow-xl dark:bg-gray-700">
      <div className="relative w-full h-48">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover"
        ></img>
        <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-gray-200 dark:from-gray-700 to-transparent"></div>
      </div>
      <div className="relative px-4 pb-4 -mt-8 z-20">
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
      <div className="w-full">
        <div className="sm:text-center">
          <div className="whitespace-nowrap">
            <h1 className="text-6xl font-bold text-gray-700 -ml-4 sm:ml-0">Upcoming Events</h1>
          </div>
          <h1 className="text-3xl font-bold -mt-6">Upcoming Events</h1>
        </div>

        <div className="mt-16 flex flex-row flex-wrap gap-6 sm:gap-8 justify-center">
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
