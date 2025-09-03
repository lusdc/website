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
            <div className="mb-6 bg-white rounded-lg shadow-md dark:bg-gray-700">
                <button
                    onClick={() => toggleSection(id)}
                    className="flex items-center justify-between w-full p-6 text-left"
                >
                    <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">{title}</h2>
                    <span className="text-2xl text-gray-500 dark:text-gray-400">
                        {isExpanded ? '−' : '+'}
                    </span>
                </button>
                {isExpanded && (
                    <div className="px-6 pb-6">
                        {children}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="min-h-screen px-4 py-8 bg-gray-100 dark:bg-gray-800">
            <div className="max-w-6xl mx-auto">
                <header className="mb-12 text-center">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 md:text-5xl">
                        Software Development Club Hackathon
                    </h1>
                    <h2 className='mb-4 text-3xl font-semibold'>12 Hour Hackathon</h2>
                    <p className="text-xl font-medium text-gray-600 dark:text-gray-400">Code. Create. Compete.</p>
                </header>

                <ExpandableSection id="info" title="Event Information" defaultExpanded={true}>
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
                        <div className="p-4 border rounded-lg dark:border-gray-600">
                            <h3 className="mb-2 text-lg font-semibold dark:text-gray-100">📅 When</h3>
                            <p className="text-gray-700 dark:text-gray-300">Saturday, September 13<br />9 AM – 9 PM</p>
                        </div>
                        <div className="p-4 border rounded-lg dark:border-gray-600">
                            <h3 className="mb-2 text-lg font-semibold dark:text-gray-100">📍 Where</h3>
                            <p className="text-gray-700 dark:text-gray-300">Meet in Room 2830<br />for opening and closing ceremonies</p>
                        </div>
                        <div className="p-4 border rounded-lg dark:border-gray-600">
                            <h3 className="mb-2 text-lg font-semibold dark:text-gray-100">👥 Format</h3>
                            <p className="text-gray-700 dark:text-gray-300">Teams of 3</p>
                        </div>
                        <div className="p-4 border rounded-lg dark:border-gray-600">
                            <h3 className="mb-2 text-lg font-semibold dark:text-gray-100">🍕 Food</h3>
                            <p className="text-gray-700 dark:text-gray-300">Lunch & Dinner Provided</p>
                            <p className="text-gray-600 dark:text-gray-400">(Jersey Mikes & Chick-fil-A)</p>
                        </div>
                    </div>
                    <a 
                        href="https://docs.google.com/forms/d/e/1FAIpQLSd-d9oLzninUANzxWkBiV62fHX38ftfq4SsKdm54YHKeh5CqA/viewform" 
                        className="inline-block px-8 py-3 mt-4 font-bold text-center text-purple-600 transition-colors duration-200 transform bg-white rounded-lg shadow-lg hover:bg-gray-100 hover:shadow-xl hover:scale-105 bg-gradient-to-r from-purple-200 via-pink-200 to-red-200"
                    >
                        Register →
                    </a>
                </ExpandableSection>

                <ExpandableSection id="schedule" title="Schedule">
                    <div className="space-y-3">
                        {[
                            { time: "8:45 AM", event: "Opening Ceremony & Team Formation" },
                            { time: "9:00 AM", event: "Hacking Begins!" },
                            { time: "12:00 PM", event: "Lunch Break" },
                            { time: "6:00 PM", event: "Dinner Break" },
                            { time: "9:00 PM", event: "Final Submissions Due & Closing" }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col pb-3 border-b border-gray-200 last:border-b-0 dark:border-gray-600 sm:flex-row sm:items-center">
                                <span className="w-20 mb-1 font-semibold text-blue-600 dark:text-blue-400 sm:mb-0">{item.time}</span>
                                <span className="text-gray-700 dark:text-gray-300">{item.event}</span>
                            </div>
                        ))}
                    </div>
                </ExpandableSection>

                <ExpandableSection id="prizes" title="Prizes">
                    <div className="grid grid-cols-1 gap-6 mb-6 md:grid-cols-2">
                        <div className="p-6 border-2 border-yellow-300 rounded-lg bg-gradient-to-br from-yellow-100 to-yellow-200 dark:from-yellow-200 dark:to-yellow-300">
                            <h3 className="mb-4 text-xl font-bold text-gray-900">🥇 1st Place</h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-800">
                                <li>• WYZE Noise Cancelling Headphones</li>
                                <li>• 100hz Monitor</li>
                                <li>• Owalla Water Bottle</li>
                            </ul>
                        </div>
                        <div className="p-6 border-2 border-gray-300 rounded-lg dark:border-gray-500 bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-200 dark:to-gray-300">
                            <h3 className="mb-4 text-xl font-bold text-gray-900">🥈 2nd Place</h3>
                            <ul className="space-y-2 text-gray-700 dark:text-gray-800">
                                <li>• Amazfit Bip 6 Smart Watch</li>
                            </ul>
                        </div>
                    </div>
                    <p className="p-4 text-center text-gray-700 rounded-lg dark:text-gray-200 bg-blue-50 dark:bg-blue-900">
                        <strong>Judged by CloudFit</strong> - A top software company here in Lynchburg
                    </p>
                </ExpandableSection>

                <ExpandableSection id="rules" title="Rules & Guidelines">
                    <ol className="mb-6 space-y-3 text-gray-700 dark:text-gray-300">
                        {[
                            "All submissions must be school appropriate",
                            "All projects must fit with the theme of the hackathon",
                            "Generative AI tools are allowed, however obvious overuse of these tools found in submissions will result in disqualification",
                            "Using existing repositories outside of provided resources is strictly prohibited (no cloning or forking other repos)",
                            "Only club officers may provide assistance if you encounter major issues",
                            "Club officers will not complete your project for you - they're only available to help you get unstuck",
                            "All code must be written during the hackathon timeframe",
                            "Teams must consist of exactly 3 members",
                            "Projects must be functional and demonstrable",
                            "Plagiarism or copying code from external sources (outside of provided resources) may result in disqualification"
                        ].map((rule, index) => (
                            <li key={index} className="flex">
                                <span className="mr-2 font-semibold">{index + 1}.</span>
                                <span>{rule}</span>
                            </li>
                        ))}
                    </ol>
                    <div className="p-4 text-red-800 border border-red-200 rounded-lg dark:text-red-200 dark:border-red-700 bg-red-50 dark:bg-red-900">
                        ⚠️ <strong>Any rule violation may result in disqualification</strong>
                    </div>
                </ExpandableSection>

                <ExpandableSection id="submission" title="How to Submit">
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                        {[
                            { title: "Step 1: Prepare Your Project", desc: "Ensure your project is complete and functional by 9:00 PM." },
                            { title: "Step 2: Submit Your Code", desc: "Push your final code to the designated repository created at the event and ensure all changes are committed by the deadline. Any changes introduced after the deadline will not be considered for judging." },
                            { title: "Step 3: Email it to jlvandever@liberty.edu", desc: "Email a link to your GitHub repository containing the project code. Make sure the repository is public." },
                            { title: "Step 4: Create a Presentation", desc: "Tomorrow before 3 PM, prepare a 3-5 minute demo showcasing your project's features and functionality, please do not speak in this recording (recording sent to judges will be muted)." }
                        ].map((step, index) => (
                            <div key={index} className="p-4 border rounded-lg dark:border-gray-600">
                                <h3 className="mb-3 text-lg font-semibold dark:text-gray-100">{step.title}</h3>
                                <p className="text-gray-700 dark:text-gray-300">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </ExpandableSection>

                <section className="text-center">
                    <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-gray-100">Questions?</h2>
                    <p className="p-6 text-gray-700 bg-white rounded-lg shadow-md dark:text-gray-300 dark:bg-gray-700">
                        Contact any club officer during the event or reach out to us beforehand if you have any concerns.
                    </p>
                </section>
            </div>
        </div>
    );
};

export default Hackathon;