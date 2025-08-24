import groupPicture from "/assets/groupPicture.jpg";
import redUpArrowIcon from "/assets/redUpArrow.png";
import rocketIcon from "/assets/rocket.png";
import communityIcon from "/assets/community.jpg";
import CardWithGraphic from "../components/CardWithGraphic";

import blob0 from "/assets/blobs/blob-haikei.png";
import blob1 from "/assets/blobs/blob-haikei (1).png";
import blob2 from "/assets/blobs/blob-haikei (2).png";
import blob3 from "/assets/blobs/blob-haikei (3).png";
import blob4 from "/assets/blobs/blob-haikei (4).png";
import blob5 from "/assets/blobs/blob-haikei (5).png";
import blob6 from "/assets/blobs/blob-haikei (6).png";
import blob7 from "/assets/blobs/blob-haikei (7).png";

function Home({ setActiveLinkCallback }) {
  return (
    <>
      {/* Blobs container */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Blob 1 */}
        <img className="absolute -left-10 top-[32rem] rotate-[30deg] h-[15rem] blur-2xl opacity-20" src={blob1}></img>

        {/* Blob 2 */}
        <img className="absolute right-0 top-[64rem] rotate-[30deg] h-[15rem] blur-3xl opacity-30" src={blob2}></img>
      </div>

      {/* Page content */}
      <div className="flex items-center justify-between w-full mb-16 space-x-4">
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
          </div>
        </div>
        <div className="relative">
          <img
            className="relative hidden w-auto mx-30 h-52 rounded-xl md:inline-flex lg:h-60 2xl:h-80 shadow-lg hover:shadow-xl z-10"
            src={groupPicture}
            alt="Software Development Club Group Picture"
          />
          <img
            className="absolute right-0 -top-10 h-80 w-[40rem] opacity-30 blur-2xl z-0"
            src={blob0}
          ></img>
        </div>
      </div>

      <div className="mt-16 relative items-stretch md:justify-between md:flex md:space-x-3 space-y-3 md:space-y-0">
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

      <div className="my-48 flex flex-col text-center items-center">
        <h2 className="text-2xl">
          We meet every Monday at 6 PM in SoBusi 2810. All are welcome!
        </h2>

        <button class="mt-6 button w-36 mx-auto">
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
      </div>

      <div className="sm:text-center">
        <div className="whitespace-nowrap">
          <h3 className="text-6xl font-bold text-gray-700 -ml-4 sm:ml-0">
            Event Calendar
          </h3>
        </div>
        <h3 className="text-3xl font-bold -mt-6">Event Calendar</h3>
      </div>

      <div className="flex flex-col sm:items-center aspect-square">
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
