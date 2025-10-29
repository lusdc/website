import { Link } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { tutorials } from "../data/Tutorials"; // Events are soft-coded here

function TutorialCard({ filename, iconUrl, title, difficulty, backlitColor }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    };

    card.addEventListener('mousemove', handleMouseMove);
    return () => card.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getDifficultyColor = (level) => {
    switch(level?.toLowerCase()) {
      case 'beginner': return 'from-emerald-400 to-teal-400';
      case 'intermediate': return 'from-blue-400 to-cyan-400';
      case 'advanced': return 'from-purple-400 to-pink-400';
      default: return 'from-gray-400 to-slate-400';
    }
  };

  return (
    <Link 
      to={`/tutorials/${filename}`}
      ref={cardRef}
      className="group relative block w-80 h-96"
    >
      {/* Animated gradient border glow */}
      {/* <div className="absolute -inset-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-all duration-700 group-hover:duration-300 animate-gradient-xy" /> */}
      
      {/* Main glass card */}
      <div className="tutorial-card-gradient
                relative h-full overflow-hidden rounded-2xl 
                bg-white/10 dark:bg-gray-900/20
                backdrop-blur-xl backdrop-saturate-150
                border border-white/20 dark:border-gray-700/30
                shadow-2xl shadow-black/10 dark:shadow-black/50
                transition-all duration-500 ease-out
                group-hover:scale-[1.02] group-hover:shadow-3xl
                group-hover:border-white/40 dark:group-hover:border-gray-600/50"
        style={{ ["--tutorial-backlit-color"]: backlitColor }}
      >
        {/* Spotlight effect following mouse */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), var(--tutorial-backlit-color), transparent 40%)'
          }}
        />
        
        {/* Inner glow effect */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden -z-1">
          <div className="absolute inset-[-50%] 
                          bg-gradient-to-br from-transparent via-white/5 to-transparent
                          opacity-50 group-hover:opacity-100
                          transition-opacity duration-700
                          animate-spin-slow" />
        </div>

        {/* Icon section with enhanced glass effect */}
        <div className="relative h-48 overflow-hidden">
          
          <div className="absolute inset-0 flex items-center justify-center p-8">
            <div className="relative w-48 h-48 rounded-2xl
                            flex items-center justify-center
                            transition-all duration-300
                            group-hover:scale-110 group-hover:rotate-45">
              {iconUrl ? (
                <img 
                  src={iconUrl} 
                  alt={title}
                  className="w-20 h-20 object-contain"
                />
              ) : (
                <div className="w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-500 rounded-xl opacity-80" />
              )}
              
            </div>
          </div>
        </div>

        {/* Content section with frosted glass */}
        <div className="relative px-8 py-6">
          
          {/* Difficulty badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full
                          bg-white/20 dark:bg-gray-800/30
                          backdrop-blur-md
                          border border-white/30 dark:border-gray-600/30
                          shadow-lg">
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${getDifficultyColor(difficulty)} 
                             shadow-lg shadow-current animate-pulse`} />
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-200 uppercase tracking-wider">
              {difficulty || 'Tutorial'}
            </span>
          </div>

          {/* Title */}
          <h3 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white
                         line-clamp-2 leading-tight
                         group-hover:text-orange-300
                         transition-all duration-300">
            {title}
          </h3>

          {/* Read more indicator with arrow */}
          <div className="mt-2 flex items-center gap-2 text-sm font-medium
                          text-gray-600 dark:text-gray-400
                          group-hover:text-orange-400
                          transition-colors duration-300">
            <span>Start Learning</span>
            <svg 
              className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>

        {/* Bottom shine effect */}
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
      </div>
    </Link>
  );
}

function Tutorials() {
  return (
    <>
      {/* Glowing blobs */}
      <div className="glow w-10/12 h-80 -top-20 left-1/2 -translate-x-1/2"></div>

      {/* Page content */}
      <div className="w-full">
        <div className="sm:text-center">
          <div className="whitespace-nowrap">
            <h1 className="-ml-4 text-6xl font-bold text-shadow sm:ml-0">Tutorials</h1>
          </div>
          <h1 className="relative -mt-6 text-3xl font-bold">Tutorials</h1>
        </div>

        <div className="flex space-y-4 mt-16 justify-center">
          {tutorials.map(tutorial => (
            <TutorialCard
              key={tutorial.filename}
              filename={tutorial.filename}
              iconUrl={tutorial.iconUrl}
              title={tutorial.filename}
              difficulty={tutorial.difficulty}
              backlitColor={tutorial.backlitColor}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Tutorials;