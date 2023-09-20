import React from 'react'
import heroImage from "../assets/heroImage.jpeg"
import {BsArrowRightCircleFill} from "react-icons/bs"

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b
     from-black via-black to-gray-800'
     >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center 
        justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm a Full Stack Developer
                 </h2>
                <p className='text-gray-500 py-4 '>
                As a Full Stack developer with a specialized focus on the back end, 
                my relentless pursuit of challenges drives me to continue growing in the world of programming. 
                My passion lies in crafting robust and efficient solutions, 
                and I'm eager to take on projects that push my skills to the limit and allow me to make a difference in application development.
                </p>

                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center 
                    rounded-md bg-gradient-to-r from-cyan-500 to-blue-500
                    cursor-pointer'>
                        Proyects
                        <span className='group-hover:rotate-90 duration-300'>
                        <BsArrowRightCircleFill size={20} className='ml-2'/>
                        </span>
                    </button>
                </div>
            </div>

            <div>
                <img src={heroImage} alt="my profile"
                className='rounded-2xl mx-auto w-2/3 md:w-full' 
                />
            </div>
        </div>
    </div>
  )
}

export default Home