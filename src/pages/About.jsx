import groupPicture from "../assets/groupPicture.jpg";

import jeffrey from "../assets/jeffrey.jpeg";
import ron from "../assets/ron.jpeg";
import loc from "../assets/loc.jpeg";
import gabe from "../assets/gabe.jpeg";
import confusedCrab from "../assets/404Crab.png";

function TeamMember({ name, title, image, github, linkedin }) {
  return (
    <div className="flex flex-col items-center p-4 mt-3 max-w-7xl text-center bg-gray-200 shadow-sm rounded-xl hover:shadow-xl dark:bg-gray-700">
      <img
        src={image}
        alt={name + " photo"}
        className="w-24 h-24 rounded-full"
      />
      <h2 className="text-lg font-bold dark:text-gray-100">{name}</h2>
      <p className="text-gray-700 dark:text-gray-400">{title}</p>
      <div className="flex justify-center space-x-2">
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-linkedin fill-black dark:fill-white"
              viewBox="0 0 16 16"
            >
              <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
            </svg>
          </a>
        )}
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 hover:scale-110"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-linkedin fill-black dark:fill-white"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
}

function About() {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 lg:gap-12 lg:mb-[4rem] justify-start items-center">
        {/* First content block */}
        <div className="order-1 sm:order-1 col-span-1 pr-4">
          <h3 className="text-2xl font-bold my-2">Who We Are</h3>
          <p className="text-gray-700 dark:text-gray-400">
            The Software Development Club is a group of students and faculty at
            Liberty University who are passionate about software development. We
            meet weekly to learn new technologies, work on projects, and network
            with industry professionals.
          </p>
        </div>
        <div className="order-2 sm:order-2 col-span-1 w-auto h-52 rounded-xl lg:h-60 2xl:h-96 hover:shadow-xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={groupPicture}
            alt="Placeholder Picture"
          />
        </div>

        {/* Second content block */}
        <div className="order-3 sm:order-4 col-span-1">
          <h3 className="text-2xl font-bold my-2">Our Mission</h3>
          <p className="text-gray-700 dark:text-gray-400">
            The Software Development Club is a space for Software Engineers and
            others to learn, collaborate, and deploy meaningful software
            projects in an industry-like environment.
          </p>
        </div>
        <div className="order-4 sm:order-3 col-span-1 w-auto h-52 rounded-xl lg:h-60 2xl:h-96 hover:shadow-xl overflow-hidden">
          <img
            className="w-full h-full object-cover"
            src={groupPicture}
            alt="Placeholder Picture"
          />
        </div>
      </div>

      <div className="text-center mt-16 mb-8">
        <h3 className="text-2xl font-bold">Meet The Team</h3>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TeamMember
          name="Jeffrey Vandever"
          title="President"
          image={jeffrey}
          linkedin="https://www.linkedin.com/in/jeffrey-vandever/"
          github="https://github.com/jeffreyv101"
        />

        <TeamMember name="TBD" title="Vice President" image={confusedCrab} />
      </div>
      <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-3">
        <TeamMember
          name="Ron Popov"
          title="Treasurer"
          image={ron}
          linkedin="https://www.linkedin.com/in/ron-popov-59ba47201/"
        />

        <TeamMember
          name="Loc Nguyen"
          title="Director of Marketing"
          image={loc}
          linkedin="https://www.linkedin.com/in/lock-nguyen/"
          github="https://github.com/LockNguyen"
        />

        <TeamMember
          name="Gabe Eaton"
          title="Director of Club Projects"
          image={gabe}
          linkedin="https://www.linkedin.com/in/gabeeaton/"
          github="https://github.com/gabeeaton"
        />
      </div>
    </>
  );
}

export default About;
