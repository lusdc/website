import { projects } from "../data/Projects"; // Events are soft-coded here

function ProjectCard({ imageUrl, title, description, hashtags, projectLeaders, projectMembers }) {
  const getHastagColor = (hashtag) => {
    switch(hashtag?.toLowerCase()) {
      case 'beginner': return 'from-emerald-400 to-teal-400';
      case 'intermediate': return 'from-blue-400 to-cyan-400';
      case 'advanced': return 'from-purple-400 to-pink-400';
      default: return 'from-gray-400 to-slate-400';
    }
  };

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

        {/* Hashtags */}            
        <div className="flex flex-wrap gap-1 mt-4">
            {hashtags.map((hashtag) => 
              <div key={hashtag}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                              bg-white/20 dark:bg-gray-800/30
                              backdrop-blur-md
                              border border-white/30 dark:border-gray-600/30
                              shadow-lg">
                <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getHastagColor(hashtag)} 
                                shadow-lg shadow-current animate-pulse`} />
                <span className="text-sm font-semibold tracking-wider text-gray-800 dark:text-gray-200">
                  {hashtag}
                </span>
              </div>
            )}
          </div>
        
        {/* Leaders/Members */}
        {projectLeaders.length > 1 && <p className="mt-4">Leaders: {projectLeaders.join(", ")}</p>}
        {projectLeaders.length == 1 && <p className="mt-4">Leader: {projectLeaders.join(", ")}</p>}
        {projectMembers.length > 0 && <p className="">Members: {projectMembers.join(", ")}</p>}
      </div>

      {/* Bottom shine effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
    </div>
  );
}

function Projects() {
  return (
    <>
      {/* Glowing blobs */}
      <div className="w-10/12 -translate-x-1/2 glow h-80 -top-20 left-1/2"></div>

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
