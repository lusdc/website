import { projects } from "../data/Projects"; // Events are soft-coded here

function ProjectCard({ imageUrl, title, description, hashtags, startTime, endTime, location, projectLeaders, projectMembers }) {
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
        <p className="mt-4 flex flex-wrap gap-x-1">{hashtags.map((hashtag) => <p className="font-bold text-sky-500">#{hashtag}</p>)}</p>
        <p className="mt-4">📅 {day}, {month}. {date}</p>
        <p className="">🕑 {_startTime} - {_endTime}</p>
        <p className="">📍 {location}</p>
        <p className="mt-4">{projectLeaders.join(", ")}</p> {/* Will be upgraded to people cards*/}
        <p className="">{projectMembers.join(", ")}</p>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <>
      {/* Glowing blobs */}
      <div class="glow w-10/12 h-80 -top-20 left-1/2 -translate-x-1/2"></div>

      {/* Page content */}
      <div className="w-full">
        <div className="sm:text-center">
          <div className="whitespace-nowrap">
            <h1 className="text-6xl font-bold text-gray-700 -ml-4 sm:ml-0">Projects</h1>
          </div>
          <h1 className="text-3xl font-bold -mt-6 relative">Projects</h1>
        </div>

        <div className="mt-16 flex flex-row flex-wrap gap-6 sm:gap-8 justify-center">
          {projects
            .sort((project) => Date(project.startTime))
            .map((project) => (
              <ProjectCard
                key={project.title}
                imageUrl={project.imageUrl}
                title={project.title}
                description={project.description}
                hashtags={project.hashtags}
                startTime={project.startTime}
                endTime={project.endTime}
                location={project.location}
                projectLeaders={project.projectLeaders}
                projectMembers={project.projectMembers}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default Projects;
