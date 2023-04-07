import React from 'react'
import Section from './common/Section'
import { UilFacebook, UilTwitter,UilLinkedin} from "@iconscout/react-unicons";
import contact from "../assets/mobile.svg"
const Contact = () => {

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
        }

    ];


  return (


    <Section
        title="Contact 📞"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
    >
    <div className='flex flex-col items-center justify-center gap-8 text-center'>
        <div>
            <img src={contact} alt="" className='w-32 h-40'/>
        </div>
        <div>
            <p className='max-w-xs md:max-w-lg font-extra pt-3'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
        </div>
        <div className='flex w-full items-center justify-evenly text-3xl pt-3'>
            {SOCIAL.map(({id,link,icon})=>(
                <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="duration-200 ease-in-out hover:text-teal-300"
                >
                    {icon}
                </a>
            ))}
        </div>

        {/* Form */}
        <div className='p-8 text-left w-full flex items-center justify-center'>
            <form action="https://getform.io/f/2706633e-5d59-457c-a853-10106ebeccc4 " method="POST">
                <div className='gap-4 w-full'>

                    <div className='flex flex-col my-2'>
                       <label className="capitalize text-sm py-2 font-extralight">
                          name
                        </label>
                        <input
                           type="text"
                           name="name"
                           className='border-2 rounded-lg p-3 flex focus:outline-none
                            border-gray-400 dark:bg-gray-900 dark:text-white'
                        />
                    </div>

                    <div className='flex flex-col my-2'>
                       <label className="capitalize text-sm py-2 font-extralight">
                          phone
                        </label>
                        <input
                           type="text"
                           name="phone"
                           className='border-2 rounded-lg p-3 flex focus:outline-none
                            border-gray-400 dark:bg-gray-900 dark:text-white'
                        />
                    </div>

                    <div className='flex flex-col my-2'>
                       <label className="capitalize text-sm py-2 font-extralight">
                          email
                        </label>
                        <input
                           type="text"
                           name="email"
                           className='border-2 rounded-lg p-3 flex focus:outline-none
                            border-gray-400 dark:bg-gray-900 dark:text-white'
                        />
                    </div>

                    <div className='flex flex-col my-2'>
                       <label className="capitalize text-sm py-2 font-extralight">
                          message
                        </label>
                        <textarea
                          name="message"
                          rows="10"
                          className='border-2 rounded-lg p-3 flex focus:outline-none
                            border-gray-400 dark:bg-gray-900 dark:text-white resize-none'
                        ></textarea>


                    </div>

                </div>
                <div className='flex items-center justify-center'>
                    <button className="my-8 bg-gradient-to-r  from-rose-500 to-rose-300 text-white
                    px-6 py-3  uppercase rounded-md tracking-wider cursor-pointer
                    hover:scale-105 duration-200">
                    send message
                    </button>

                </div>


            </form>

        </div>
    </div>


    </Section>
  )
}

export default Contact