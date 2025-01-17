"use client";

import {FaLocationArrow} from "react-icons/fa6";

import {projects} from "@/data";
import {PinContainer} from "./ui/Pin";
import {useState} from "react";

const RecentProjects = () => {
    const [isViewMoreClicked, setisViewMoreClicked] = useState(false);

    return (
        <section id="projects">
            <div className="w-full py-20">
                <h1 className="heading mb-10">
                    A small selection of{" "}
                    <span className="text-purple">recent projects</span>
                </h1>
                <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-100">
                    {projects.map((item) => (
                        <div
                            // 32.5
                            className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
                            key={item.id}
                        >
                            <PinContainer
                                title={item.title}
                                href={item.link}
                            >
                                <div
                                    // 30vh
                                    className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                                    <div
                                        className="relative w-full h-full overflow-hidden lg:rounded-3xl"
                                        style={{backgroundColor: "#13162D"}}
                                    >
                                        <img src="/bg.png" alt="bgimg"/>
                                    </div>
                                    <img
                                        src={item.img}
                                        alt="cover"
                                        className="z-10 absolute top-0 rotate-3 border-2 border-purple rounded-md"
                                    />
                                    {item.img2 && <img
                                        src={item.img2}
                                        alt="cover"
                                        className="z-5 absolute bottom-2 -rotate-3"
                                    />}
                                    {/*{item.img3 && <img*/}
                                    {/*    src={item.img3}*/}
                                    {/*    alt="cover"*/}
                                    {/*    className="z-5 absolute -bottom-12 -left-4 rotate-3"*/}
                                    {/*/>}*/}
                                </div>

                                <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                                    {item.title}
                                </h1>

                                <p
                                    className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2"
                                    style={{
                                        color: "#BEC1DD",
                                        margin: "1vh 0",
                                    }}
                                >
                                    {item.des}
                                </p>

                                <div className="flex items-center justify-between mt-7 mb-3">
                                    <div className="flex items-center">
                                        {item.iconLists.map((icon, index) => (
                                            <div
                                                key={index}
                                                className="border border-white/[.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                                                style={{
                                                    transform: `translateX(-${5 * index + 2}px)`,
                                                }}
                                            >
                                                <img src={icon} alt="icon5" className="p-2"/>
                                            </div>
                                        ))}
                                    </div>

                                    <div className="flex justify-center items-center">
                                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                                            <a href={item.link} target="_blank"
                                               className="hover:text-emerald-500 transition duration-300 ease-in-out">Check
                                                Live Site</a>
                                            <FaLocationArrow className="ms-3" color="#CBACF9"/>
                                        </p>
                                    </div>
                                </div>
                            </PinContainer>
                        </div>
                    ))}
                </div>
                <div className="flex justify-center mt-10">
                    <button onClick={()=>{setisViewMoreClicked((prevValue)=>!prevValue)}} className="p-[3px] relative mx-auto w-60">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-[#8B5CF6] rounded-lg"/>
                        <div
                            className="w-full px-8 py-2 bg-slate-950 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                            {isViewMoreClicked ? "Show less" : "View more"}
                        </div>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default RecentProjects;
