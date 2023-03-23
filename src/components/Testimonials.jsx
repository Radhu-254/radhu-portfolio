import React from 'react'
import Section from './common/Section'
import test1 from "../assets/test1.png"
import test2 from "../assets/test2.png"
import test3 from "../assets/test3.png"
const Testimonials = () => {

    const TESTIMONIALS =[
        {
            id: 1,
            image :test1,
            name:"Radhu",
            comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        {
            id: 2,
            image :test2,
            name:"Ross",
            comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        {
            id: 3,
            image :test3,
            name:"Joey",
            comment:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
    ];
  return (
    <Section
     title="Testimonials 💬"
     subtitle="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    >

    <div className='max-w-xl flex flex-col gap-8'>
    {TESTIMONIALS.map(({image,name,comment}) =>(
        <div className='flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-300'>
             <div className='w-1/3'>
                <img 
                    src={image} 
                    alt={name} 
                    className="w-22 h-22 object-cover object-top pt-2"/>
             </div>
             <div className='w-2/3 flex flex-col justify-center items-center gap-3 p-2'>
                <h3 className='text-xl font-semibold'>{name}</h3>
                <p className='text-sm font-extralight'>{comment}</p>
             </div>

        </div>

    ))}

    </div>
   
    


    </Section>
  )
}

export default Testimonials