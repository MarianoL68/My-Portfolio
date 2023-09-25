import React from 'react'

const AboutMe = () => {
  return (
  <div name="about me" 
       className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'
     >
        <div className='pb-8'
        >
            <p className='text-4xl font-bold inline  border-b-4 border-gray-500' >About Me</p>
        </div>

        <p className='text-xl mt-20'>
        I am 23 years old and originally from Córdoba, Argentina. Previously, I studied sports journalism for three years, an experience that I value for its focus on communication and passion for telling stories. However, I felt the need to explore new horizons and venture into the exciting world of programming. That's when I decided to enroll in the Full Stack development bootcamp at SoyHenry. During my time at the bootcamp, I have gained a solid foundation of technical skills and have worked on projects that have challenged and motivated me. My current goal is to continue learning and contribute to the development of innovative applications. I am excited by the opportunities that programming offers and the possibility of merging my passion for technology with my communication skills.
        </p>

        <br />

        <p className='text-xl'>
        I am an empathetic and sociable person, I enjoy working in a team, especially in the field of programming. I consider that enriching myself through the support and experiences of others is one of the best ways to continually learn and advance my professional development. I accept challenges with determination and perseverance; in fact, I tend to perform better under pressure than in less demanding situations.
        </p>
     </div>
  </div>
  )
}

export default AboutMe