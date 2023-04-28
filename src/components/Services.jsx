import React from 'react'
import Section from './common/Section'

import react from "../assets/service1.svg"
import framer from "../assets/service2.webp"
import mongodb from "../assets/service3.png"
import tailwind from "../assets/service4.png"


const Services = () => {

    const services=[
        {
            id: 1,
            image:react,
            title:"React JS",
            link:"https://reactjs.org/"
        },
        {
            id: 2,
            image:tailwind,
            title:"Tailwind CSS",
            link:"https://tailwindcss.com/"
        },
        {
            id: 3,
            image:mongodb,
            title:"Mongo DB",
            link:"https://www.mongodb.com/"
        },
        {
            id: 4,
            image:framer,
            title:"Framer motion",
            link:"https://www.framer.com/motion/"
        },
    ];

  return (
    <Section
        title="Skills 🛠️"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
    >

        <div className="grid gap-10 lg:grid-cols-2">
        {
            services.map(({id,image,title,link}) =>(
                <div
                    key={id}
                    className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl
                    duration-300 ease-in-out hover:scale-110">

                    <a
                      href={link}
                      target="_blank"
                       rel="noopener noreferrer">
                            <img
                                src={image}
                                alt={title}
                                className="w-36 h-36 md:w-44 md:h-44"
                            />
                    </a>

                    <h3 className='mt-5 text-base'>{title}</h3>


                </div>
            )

            )


        }

        </div>

    </Section>
  )
}

export default Services