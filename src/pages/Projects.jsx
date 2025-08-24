import { projects } from "../data/Projects"; // Events are soft-coded here

function ProjectCard({ imageUrl, title, description, hashtags, projectLeaders, projectMembers }) {
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
        <p className="flex flex-wrap mt-4 gap-x-1">{hashtags.map((hashtag) => <p className="font-bold text-sky-500">#{hashtag}</p>)}</p>
        {projectLeaders.length > 0 && <p className="mt-4">Leaders: {projectLeaders.join(", ")}</p>}
        {projectMembers.length > 0 && <p className="">Members: {projectMembers.join(", ")}</p>}
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
            <h1 className="-ml-4 text-6xl font-bold text-shadow sm:ml-0">Projects</h1>
          </div>
          <h1 className="relative -mt-6 text-3xl font-bold">Projects</h1>
        </div>

        <div className="flex flex-row flex-wrap justify-center gap-6 mt-16 sm:gap-8">
          {projects
            .sort((project) => Date(project.startTime))
            .map((project) => (
              <ProjectCard
                key={project.title}
                imageUrl={project.imageUrl}
                title={project.title}
                description={project.description}
                hashtags={project.hashtags}
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
