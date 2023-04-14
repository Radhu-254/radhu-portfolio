import React from 'react'
import Section from './common/Section'

import {UilGithub,UilExternalLinkAlt} from "@iconscout/react-unicons";

import p1 from "../assets/p1.jpeg";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import p4 from "../assets/p4.png";
import p5 from "../assets/p5.png";
import p6 from "../assets/p6.png";



const Portfolio = () => {

    const projects=[
        {
            id:1,
            image:p1,
            title:"Weather App",
            github:"https://google.com",
            demo:"https://weather-tailwind-react-radhukalathiya1-gmailcom.vercel.app/"

        },
        {
            id:2,
            image:p2,
            title:"Odan Infotech Website",
            github:"https://google.com",
            demo:"https://odan-dark-mode-app-radhukalathiya1-gmailcom.vercel.app/"

        },
        {
            id:3,
            image:p3,
            title:"Harry Potter Website",
            github:"https://google.com",
            demo:"https://harry-potter-xyz-radhukalathiya1-gmailcom.vercel.app/"

        },
        {
            id:4,
            image:p4,
            title:"Japanese Restaurant Website ",
            github:"https://google.com",
            demo:"https://adachi-restaurant-radhukalathiya1-gmailcom.vercel.app/"

        },
        {
            id:5,
            image:p5,
            title:"An Artist's Portfolio",
            github:"https://google.com",
            demo:"https://artist-portfolio-radhukalathiya1-gmailcom.vercel.app"

        },
           {
            id:6,
            image:p6,
            title:"Broc N Roll ",
            github:"https://google.com",
            demo:"https://food-blog-git-main-radhukalathiya1-gmailcom.vercel.app"

        }
    ]


  return (
    <Section
        title="Portfolio 📜"
        subtitle= "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.">

     <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">

       {projects.map(({id,image,title,github,demo})=>(

            <div
                key={id}
                className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden"
            >
                <img src={image} alt={title} className="w-2/3"/>

                <div
                    className='w-1/3 flex flex-col items-center justify-evenly p-1'
                    >
                    <h2>{title}</h2>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl cursor-pointer duration-150 hover:scale-110"
                        >
                        <UilGithub/>
                    </a>
                    <a href={demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-2xl cursor-pointer duration-150 hover:scale-110"
                        >
                        <UilExternalLinkAlt/>
                    </a>
                </div>


            </div>

       ))}


     </div>
    </Section>
  )
}

export default Portfolio