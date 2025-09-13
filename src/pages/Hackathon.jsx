import { useState } from 'react';

const Hackathon = () => {
    const [expandedSections, setExpandedSections] = useState({});

    const toggleSection = (sectionId) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionId]: !prev[sectionId]
        }));
    };

    const ExpandableSection = ({ id, title, children, defaultExpanded = false }) => {
        const isExpanded = expandedSections[id] ?? defaultExpanded;
        
        return (
            <div className="mb-8 transition-shadow duration-300 bg-gray-200 shadow-lg rounded-xl dark:bg-gray-700 hover:shadow-xl">
                <button
                    onClick={() => toggleSection(id)}
                    className="flex items-center justify-between w-full p-6 text-left transition-colors duration-200 rounded-t-xl hover:bg-gray-300 dark:hover:bg-gray-600"
                >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
                    <span className="text-3xl font-bold text-gray-500 transition-transform duration-200 dark:text-gray-400" style={{ transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                        +
                    </span>
                </button>
                {isExpanded && (
                    <div className="p-6 border-t border-gray-300 dark:border-gray-600">
                        {children}
                    </div>
                )}
            </div>
        );
    };

    return (
        <>
            {/* Glowing blobs */}
            <div className="w-10/12 glow h-80 -top-20 -left-1/4"></div>
            <div className="glow-from-right w-4/6 h-80 top-[30rem] right-0 opacity-80"></div>
            <div className="glow w-1/3 h-80 top-[70rem] left-[10%] opacity-100"></div>

            {/* Page content */}
            <div className="relative z-10 min-h-screen">
                <header className="mb-16 text-center">
                    <div className="whitespace-nowrap">
                        <h1 className="-ml-4 text-6xl font-bold text-shadow sm:ml-0 md:text-7xl">
                            SDC Hackathon
                        </h1>
                    </div>
                    <h1 className="relative -mt-6 text-4xl font-bold text-gray-900 dark:text-gray-100 md:text-5xl">
                        SDC Hackathon
                    </h1>
                    <h2 className='mb-4 text-2xl font-semibold text-gray-700 dark:text-gray-400'>12 Hour Hackathon</h2>
                    <p className="text-xl font-medium text-gray-600 dark:text-gray-400">Code. Create. Compete.</p>
                </header>

                <div className="relative mt-16 mb-16 overflow-hidden rounded-lg shadow-2xl">
                    <div className="p-8 shadow-2xl bg-gradient-to-r from-blue-600 to-yellow-300">
                    <div className="text-center text-white">
                        <h2 className="text-4xl font-bold">🏝️ Hackathon Theme 🗺️</h2>
                        <h3 className="mb-4 text-3xl font-semibold">Travel</h3>
                        <a 
                        href="https://libertyuniv-my.sharepoint.com/:w:/g/personal/jlvandever_liberty_edu/EZQKFgf7GSlOnARczTwEqYEBGrrJ2xUB18PWN9dyvHmpEg?e=dnIL2t" 
                        target="_blank" 
                        className="inline-block px-8 py-3 font-bold text-purple-600 transition-colors duration-200 transform bg-white rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105"
                        >
                        Learn More about the Theme →
                        </a>
                    </div>
                    </div>
                </div>

                <ExpandableSection id="info" title="Event Information" defaultExpanded={true}>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <div className="p-6 transition-shadow duration-200 bg-gray-100 border rounded-xl dark:bg-gray-800 dark:border-gray-600 hover:shadow-lg">
                            <h3 className="mb-3 text-lg font-semibold dark:text-gray-100">📅 When</h3>
                            <p className="text-gray-700 dark:text-gray-300">Saturday, September 13<br />9 AM – 9 PM</p>
                        </div>
                        <div className="p-6 transition-shadow duration-200 bg-gray-100 border rounded-xl dark:bg-gray-800 dark:border-gray-600 hover:shadow-lg">
                            <h3 className="mb-3 text-lg font-semibold dark:text-gray-100">📍 Where</h3>
                            <p className="text-gray-700 dark:text-gray-300">Meet in Room 2830<br />for opening and closing ceremonies</p>
                        </div>
                        <div className="p-6 transition-shadow duration-200 bg-gray-100 border rounded-xl dark:bg-gray-800 dark:border-gray-600 hover:shadow-lg">
                            <h3 className="mb-3 text-lg font-semibold dark:text-gray-100">👥 Format</h3>
                            <p className="text-gray-700 dark:text-gray-300">Teams of 3</p>
                        </div>
                        <div className="p-6 transition-shadow duration-200 bg-gray-100 border rounded-xl dark:bg-gray-800 dark:border-gray-600 hover:shadow-lg">
                            <h3 className="mb-3 text-lg font-semibold dark:text-gray-100">🍕 Food</h3>
                            <p className="text-gray-700 dark:text-gray-300">Lunch & Dinner Provided</p>
                            <p className="text-sm text-gray-600 dark:text-gray-400">(Jersey Mikes & Domino's)</p>
                        </div>
                    </div>
                </ExpandableSection>

                <ExpandableSection id="schedule" title="Schedule">
                    <div className="space-y-4">
                        {[
                            { time: "8:45 AM", event: "Opening Ceremony & Team Formation" },
                            { time: "9:00 AM", event: "Hacking Begins!" },
                            { time: "12:00 PM", event: "Lunch Served" },
                            { time: "6:00 PM", event: "Dinner Served" },
                            { time: "9:00 PM", event: "Final Submissions Due & Closing" }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col p-3 pb-4 transition-colors duration-200 border-b border-gray-300 rounded-lg last:border-b-0 dark:border-gray-600 sm:flex-row sm:items-center hover:bg-gray-100 dark:hover:bg-gray-800">
                                <span className="w-24 mb-1 font-bold text-custom-light-orange dark:text-custom-light-orange sm:mb-0">{item.time}</span>
                                <span className="text-gray-700 dark:text-gray-300">{item.event}</span>
                            </div>
                        ))}
                    </div>
                </ExpandableSection>

                <ExpandableSection id="prizes" title="Prizes">
                    <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2">
                        <div className="p-6 transition-shadow duration-300 border-2 border-yellow-400 shadow-lg rounded-xl bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-200 dark:to-yellow-300 hover:shadow-xl">
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">🥇 1st Place</h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-800">
                                <li>• Noise Cancelling Headphones</li>
                                <li>• Full HD 100hz Monitor</li>
                                <li>• Owalla Water Bottle</li>
                            </ul>
                        </div>
                        <div className="p-6 transition-shadow duration-300 border-2 border-gray-400 shadow-lg rounded-xl dark:border-gray-500 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-200 dark:to-gray-300 hover:shadow-xl">
                            <h3 className="mb-4 text-2xl font-bold text-gray-900">🥈 2nd Place</h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-800">
                                <li>• Raspberry Pi 5 8 GB</li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-6 text-center text-gray-700 bg-blue-100 border border-blue-200 shadow-lg rounded-xl dark:text-gray-200 dark:bg-blue-900 dark:border-blue-700">
                        <strong className="text-lg">Judged by CloudFit</strong><br />
                        <span className="text-sm">A top software company here in Lynchburg</span>
                    </div>
                </ExpandableSection>

                <ExpandableSection id="resources" title="Provided Resources">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {[
                            {title: "Starter Code Repository", desc: "A GitHub repository with everything you need to get started.", link: "https://github.com/HappyHackingSpace/Awesome-Hackathon?tab=readme-ov-file"},
                            {title: "Hackathon Theme Document", desc: "A document outlining the theme and guidelines for the hackathon.", link: "https://libertyuniv-my.sharepoint.com/:w:/g/personal/jlvandever_liberty_edu/EZQKFgf7GSlOnARczTwEqYEBGrrJ2xUB18PWN9dyvHmpEg?e=dnIL2t"}
                        ].map((resource, index) => (
                            <div key={index} className="p-6 transition-shadow duration-200 bg-gray-100 border rounded-xl dark:bg-gray-800 dark:border-gray-600 hover:shadow-lg">
                                <h3 className="mb-3 text-lg font-bold text-custom-light-orange dark:text-custom-light-orange">{resource.title}</h3>
                                <p className="mb-4 text-gray-700 dark:text-gray-300">{resource.desc}</p>
                                <a 
                                    href={resource.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-white transition-colors duration-200 bg-gray-600 rounded-lg hover:bg-gray-700"
                                >
                                    <svg
                                        className="w-4 h-4"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                                        />
                                    </svg>
                                    Access Resource
                                </a>
                            </div>
                        ))}
                    </div>
                </ExpandableSection>

                <ExpandableSection id="rules" title="Rules & Guidelines">
                    <ol className="mb-6 space-y-4 text-gray-700 dark:text-gray-300">
                        {[
                            "All submissions must be school appropriate",
                            "All projects must fit with the theme of the hackathon",
                            "Generative AI tools are allowed, however obvious overuse of these tools found in submissions will result in points lost",
                            "Using existing repositories outside of provided resources is strictly prohibited (no cloning or forking other repos)",
                            "Only club officers may provide assistance if you encounter major issues",
                            "Club officers will not complete your project for you - they're only available to help you get unstuck",
                            "All code must be written during the hackathon timeframe",
                            "Teams must consist of exactly 3 members",
                            "Projects must be functional and demonstrable",
                            "Plagiarism or copying code from external sources (outside of provided resources) may result in disqualification"
                        ].map((rule, index) => (
                            <li key={index} className="flex p-3 transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800">
                                <span className="mr-3 font-bold text-custom-light-orange dark:text-custom-light-orange">{index + 1}.</span>
                                <span>{rule}</span>
                            </li>
                        ))}
                    </ol>
                    <div className="p-6 text-red-800 border-2 border-red-300 shadow-lg rounded-xl dark:text-red-200 dark:border-red-600 bg-red-50 dark:bg-red-900">
                        <div className="flex items-center gap-2">
                            <span className="text-2xl">⚠️</span>
                            <strong className="text-lg">Any rule violation may result in disqualification</strong>
                        </div>
                    </div>
                </ExpandableSection>

                <ExpandableSection id="judging" title="Judging Criteria">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {[
                            { title: "Design & User Experience", desc: "Is the project functional, visually appealing, and easy to use?" },
                            { title: "Creativity with Theme", desc: "How innovative and original is the project? How well does it fit with the chosen theme?" },
                            { title: "Practical Use", desc: "Can this project be used to solve a real world problem or address a specific need?" },
                            { title: "Technical Complexity", desc: "How challenging was the implementation of the project?" }
                        ].map((criteria, index) => (
                            <div key={index} className="p-6 transition-shadow duration-200 bg-gray-100 border rounded-xl dark:bg-gray-800 dark:border-gray-600 hover:shadow-lg">
                                <h3 className="mb-3 text-lg font-bold text-custom-light-orange dark:text-custom-light-orange">{criteria.title}</h3>
                                <p className="text-gray -700 dark:text-gray-300">{criteria.desc}</p>
                            </div>
                        ))}
                    </div>
                </ExpandableSection>

                <ExpandableSection id="submission" title="How to Submit">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {[
                            { title: "Step 1: Prepare Your Project", desc: "Ensure your project is complete and functional by 9:00 PM." },
                            { title: "Step 2: Submit Your Code", desc: "Push your final code to the designated repository created at the event and ensure all changes are committed by the deadline. Any changes introduced after the deadline will not be considered for judging." },
                            { title: "Step 3: Email it to jlvandever@liberty.edu", desc: "Email a link to your GitHub repository containing the project code. Make sure the repository is public." },
                            { title: "Step 4: Create a Presentation", desc: "Tomorrow (09/14) by 11:59 PM, prepare a 2 minute max demo showcasing your project's features and functionality, please do not speak in this recording (recording sent to judges will be muted). Email this as well to jlvandever@liberty.edu." }
                        ].map((step, index) => (
                            <div key={index} className="p-6 transition-shadow duration-200 bg-gray-100 border rounded-xl dark:bg-gray-800 dark:border-gray-600 hover:shadow-lg">
                                <h3 className="mb-3 text-lg font-bold text-custom-light-orange dark:text-custom-light-orange">{step.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </ExpandableSection>

                <div className="mt-16 text-center">
                    <div className="whitespace-nowrap">
                        <h2 className="-ml-4 text-5xl font-bold text-shadow sm:ml-0">Questions?</h2>
                    </div>
                    <h2 className="relative mb-6 -mt-4 text-3xl font-bold text-gray-900 dark:text-gray-100">Questions?</h2>
                    <div className="p-8 text-gray-700 transition-shadow duration-300 bg-gray-200 shadow-lg rounded-xl dark:text-gray-300 dark:bg-gray-700 hover:shadow-xl">
                        <p className="text-lg">
                            Contact any club officer during the event or reach out to us beforehand if you have any concerns.
                        </p>
                        <div className="mt-6">
                            <a 
                                href="https://discord.gg/YNGmUVba2Q" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2 button"
                            >
                                <svg  
                                    xmlns="http://www.w3.org/2000/svg"  
                                    width="20"  
                                    height="20"  
                                    viewBox="0 0 24 24"  
                                    fill="currentColor"  
                                    className="icon icon-tabler icons-tabler-filled icon-tabler-brand-discord"
                                >
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14.983 3l.123 .006c2.014 .214 3.527 .672 4.966 1.673a1 1 0 0 1 .371 .488c1.876 5.315 2.373 9.987 1.451 12.28c-1.003 2.005 -2.606 3.553 -4.394 3.553c-.732 0 -1.693 -.968 -2.328 -2.045a21.512 21.512 0 0 0 2.103 -.493a1 1 0 1 0 -.55 -1.924c-3.32 .95 -6.13 .95 -9.45 0a1 1 0 0 0 -.55 1.924c.717 .204 1.416 .37 2.103 .494c-.635 1.075 -1.596 2.044 -2.328 2.044c-1.788 0 -3.391 -1.548 -4.428 -3.629c-.888 -2.217 -.39 -6.89 1.485 -12.204a1 1 0 0 1 .371 -.488c1.439 -1.001 2.952 -1.459 4.966 -1.673a1 1 0 0 1 .935 .435l.063 .107l.651 1.285l.137 -.016a12.97 12.97 0 0 1 2.643 0l.134 .016l.65 -1.284a1 1 0 0 1 .754 -.54l.122 -.009zm-5.983 7a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15zm6 0a2 2 0 0 0 -1.977 1.697l-.018 .154l-.005 .149l.005 .15a2 2 0 1 0 1.995 -2.15z" />
                                </svg>
                                Join Discord
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hackathon;