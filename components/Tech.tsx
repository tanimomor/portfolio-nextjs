"use client"

import {BallCanvas} from "./canvas";
import {SectionWrapper} from "@/hoc";
import {technologies} from "@/constants";

const Tech = () => {
    const technologies = [
        {
            name: "Django",
            src: "assets/tech/Django.svg",
        },
        {
            name: "React",
            src: "assets/tech/React.svg",
        },
        {
            name: "Redux",
            src: "assets/tech/Redux.svg",
        },
        {
            name: "TypeScript",
            src: "assets/tech/TypeScript.svg",
        },
        {
            name: "Postman",
            src: "assets/tech/Postman.svg",
        },
        {
            name: "Python",
            src: "assets/tech/Python.svg",
        },
        {
            name: "Pandas",
            src: "assets/tech/Pandas.svg",
        },
        {
            name: "AWS",
            src: "assets/tech/AWS.svg",
        },
        {
            name: "Docker",
            src: "assets/tech/Docker.svg",
        },
        {
            name: "Kubernetes",
            src: "assets/tech/Kubernetes.svg",
        },
        {
            name: "Jira",
            src: "assets/tech/Jira.svg",
        },
        {
            name: "MongoDB",
            src: "assets/tech/MongoDB.svg",
        },
        {
            name: "NGINX",
            src: "assets/tech/NGINX.svg",
        },
        {
            name: "TensorFlow",
            src: "assets/tech/TensorFlow.svg",
        },
        // {
        //     name: "C++",
        //     src: "assets/tech/C++.svg",
        // },

        // {
        //     name: "Django REST",
        //     src: "assets/tech/Django REST.svg",
        // },

        // {
        //     name: "Git",
        //     src: "assets/tech/Git.svg",
        // },
        // {
        //     name: "HTML5",
        //     src: "assets/tech/HTML5.svg",
        // },
        // {
        //     name: "JavaScript",
        //     src: "assets/tech/JavaScript.svg",
        // },

        // {
        //     name: "JQuery",
        //     src: "assets/tech/jQuery.svg",
        // },
        // {
        //     name: "Jupyter",
        //     src: "assets/tech/Jupyter.svg",
        // },

        // {
        //     name: "Latex",
        //     src: "assets/tech/LaTeX.svg",
        // },
        // {
        //     name: "Microsoft SQL Server",
        //     src: "assets/tech/Microsoft SQL Server.svg",
        // },


// {
//             name: "Node.js",
//             src: "assets/tech/Node.js.svg",
//         },

// {
//             name: "PostgreSQL",
//             src: "assets/tech/PostgresSQL.svg",
//         },



    ]
    return (
        <div className='flex flex-row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
                <div className='w-28 h-28' key={technology.name}>
                    <BallCanvas icon={technology.src}/>
                </div>
            ))}
        </div>
    );
};

export default SectionWrapper(Tech, "");
