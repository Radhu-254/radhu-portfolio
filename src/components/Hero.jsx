import React from 'react'
import { UilFacebook, UilTwitter,UilLinkedin,UilArrowDown,UilInstagram} from "@iconscout/react-unicons";
import avatar from "../assets/avatar.webp"


const Hero = () => {

    const SOCIAL =[
        {
            id:1,
            link:"https://facebook.com",
            icon: <UilFacebook/>,
        },
        {
            id:2,
            link: "https://twitter.com",
            icon: <UilTwitter/>
        },
        {
            id:3,
            link:"https://linkedin.com",
            icon: <UilLinkedin/>
        },
        {
            id:4,
            link:"https://instagram.com",
            icon: <UilInstagram/>
        }  

    ];
 
  return (
    <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
        <h2 className="text-5xl text-rose-500 uppercase font-bold">Radhu Patel</h2>
        <h3 className="py-3 text-2xl">Full Stack Developer</h3>
        <p className=" max-w-xl font-light text-gray-500">
            Hello<span className='animate-pulse text-4xl'>👋</span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n
        </p>
   
        {/*Social Media Icons*/}
        <div className='flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3'>
        {SOCIAL.map(({id,link,icon})=>(
            <a 
                href={link} 
                key={id}
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-pointer duration-300 hover:text-teal-300"
                >
                {icon}
            </a>
            ))}
        </div>


            {/*Avatar and Resume */}
            <div>
                <img 
                    src={avatar}
                    alt="avatar"
                    className="w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b  from-rose-500 to-rose-300 rounded-full pt-5"
                />
                <a 
                    href="/radhu-resume.pdf"
                    download={true}
                    className="flex items-center justify-center mt-10 bg-gradient-to-r  from-rose-500 to-rose-300 text-white py-2 rounded-lg ">
                Resume
                </a>
            </div>

            <div className='mt-10'>
                <UilArrowDown
                    className="text-gray-400 text-xl animate-bounce"
                />
            </div>

        
    </section>
  )
}

export default Hero