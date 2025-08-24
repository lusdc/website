import groupPicture from "/assets/groupPicture.jpg";
import redUpArrowIcon from "/assets/icons/redUpArrow.png";
import rocketIcon from "/assets/icons/rocket.png";
import communityIcon from "/assets/icons/community.jpg";
import CardWithGraphic from "../components/CardWithGraphic";

function Home({ setActiveLinkCallback }) {
  return (
    <>
      {/* Glowing blobs */}
      <div className="w-10/12 glow h-80 -top-20 -left-1/4"></div>
      <div className="glow-from-right w-4/6 h-80 top-[30rem] -right-20 -rotate-12 opacity-80"></div>
      <div className="glow w-1/3 h-80 top-[70rem] left-[10%] opacity-40"></div>

      {/* Page content */}
      <div className="z-10 flex items-center justify-between w-full mb-16 space-x-4">
        <div className="">
          <h2 className="text-3xl font-bold text-custom-light-orange xl:text-4xl dark:text-custom-light-orange">
            Software Development Club
          </h2>
          <h3 className="text-2xl font-thin text-gray-700 dark:text-gray-400 xl:text-3xl">
            at Liberty University
          </h3>
          <div className="flex mt-4 space-x-4">
            {/* Icons cortesy of https://icons.getbootstrap.com/ */}

            {/* LinkedIn Logo */}
            <a
              href="https://www.linkedin.com/company/lusdc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-linkedin fill-black lg:h-8 lg:w-8 dark:fill-white hover:scale-110"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
            </a>
            {/* GitHub Logo */}
            <a
              href="https://github.com/lusdc"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-linkedin fill-black lg:h-8 lg:w-8 dark:fill-white hover:scale-110"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
              </svg>
            </a>
            {/* Discord Logo */}
            <a
              href="https://discord.gg/YNGmUVba2Q"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg  
                xmlns="http://www.w3.org/2000/svg"  
                width="35"  
                height="35"  
                viewBox="0 0 24 24"  
                fill="currentColor"  
                className="icon icon-tabler icons-tabler-filled icon-tabler-brand-discord fill-black dark:fill-white hover:scale-110"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.983 3l.123 .006c2.014 .214 3.527 .672 4.966 1.673a1 1 0 0 1 .371 .488c1.876 5.315 2.373 9.987 1.451 12.28c-1.003 2.005 -2.606 3.553 -4.394 3.553c-.732 0 -1.693 -.968 -2.328 -2.045a21.512 21.512 0 0 0 2.103 -.493a1 1 0 1 0 -.55 -1.924c-3.32 .95 -6.13 .95 -9.45 0a1 1 0 0 0 -.55 1.924c.717 .204 1.416 .37 2.103 .494c-.635 1.075 -1.596 2.044 -2.328 2.044c-1.788 0 -3.391 -1.548 -4.428 -3.629c-.888 -2.217 -.39 -6.89 1.485 -12.204a1 1 0 0 1 .371 -.488c1.439 -1.001 2.952 -1.459 4.966 -1.673a1 1 0 0 1 .935 .435l.063 .107l.651 1.285l.137 -.016a12.97 12.97 0 0 1 2.643 0l.134 .016l.65 -1.284a1 1 0 0 1 .754 -.54l.122 -.009zm-5.983 7a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15zm6 0a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z" /></svg>
            </a>
          </div>
        </div>
        <img
          className="z-10 hidden w-auto shadow-lg mx-30 h-52 rounded-xl md:inline-flex lg:h-60 2xl:h-80 hover:shadow-xl"
          src={groupPicture}
          alt="Software Development Club Group Picture"
        />
      </div>

      <div className="items-stretch mt-16 space-y-3 md:justify-between md:flex md:space-x-3 md:space-y-0">
        <CardWithGraphic
          title="Peer‑Led Workshops"
          description="Weekly sessions dive into languages, frameworks, and best practices—taught by members, for members—so everyone levels up together."
          imgUrl={redUpArrowIcon}
          glowColor="rgb(255, 92, 27)"
          linkTo="/events"
          setActiveLinkCallback={setActiveLinkCallback}
        />
        <CardWithGraphic
          title="Industry-like Projects"
          description="Our project teams tackle real-world problems, following professional workflows so you gain hands‑on experience shipping production‑ready code."
          imgUrl={rocketIcon}
          glowColor="rgb(254, 193, 27)"
          linkTo="/projects"
          setActiveLinkCallback={setActiveLinkCallback}
        />
        <CardWithGraphic
          title="Career-Ready Community"
          description="Hackathons, mentorship, and networking events connect you with alumni and recruiters, turning club experience into standout internships and jobs."
          imgUrl={communityIcon}
          glowColor="rgb(31, 173, 255)"
          linkTo="/"
          setActiveLinkCallback={setActiveLinkCallback}
        />
      </div>

      <div className="flex flex-col items-center my-48 text-center">
        <h2 className="text-2xl">
          We meet every Monday at 6 PM in SoBusi 2810. All are welcome!
        </h2>

        <a href="https://discord.gg/YNGmUVba2Q" target="_blank" rel="noopener noreferrer">
          <button class="mt-6 button w-auto mx-auto">
            <svg
              viewBox="0 0 16 16"
              class="bi bi-lightning-charge-fill"
              fill="currentColor"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09z"></path>
            </svg>
            Join Us!
          </button>
        </a>
      </div>

      <div className="sm:text-center">
        <div className="whitespace-nowrap">
          <h3 className="-ml-4 text-6xl font-bold text-shadow sm:ml-0">
            Event Calendar
          </h3>
        </div>
        <h3 className="relative z-10 -mt-6 text-3xl font-bold">Event Calendar</h3>
      </div>

      <div className="z-10 flex flex-col sm:items-center aspect-square">
        <iframe
          className="w-full h-full mt-8 rounded-lg shadow-lg hover:shadow-xl"
          src="https://calendar.google.com/calendar/embed?src=fdc76a81bb683abbbbe16c6a626d49064085b3d7f5a762cd86f2fe9926f59d9e%40group.calendar.google.com&ctz=America%2FNew_York"
          style={{ border: 0 }}
          width="800"
          height="600"
        ></iframe>
      </div>
    </>
  );
}

export default Home;
