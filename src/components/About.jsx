import React from 'react'

const About = () => {
  return (
  <div name="about" 
       className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
     <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'
     >
        <div className='pb-8'
        >
            <p className='text-4xl font-bold inline  border-b-4 border-gray-500' >About</p>
        </div>

        <p className='text-xl mt-20'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur corrupti maiores ea deserunt commodi libero tempora illum labore voluptate dolorum odit dignissimos iure incidunt magni officiis, eveniet, ab saepe, suscipit fuga quod inventore. Repudiandae, blanditiis reprehenderit expedita quis aperiam ab recusandae eligendi dignissimos. Ab facilis minus laborum aperiam qui. Voluptas!
        </p>

        <br />

        <p className='text-xl'>
         Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa quo deleniti quia voluptas adipisci cupiditate, officiis soluta non exercitationem dicta ducimus harum consectetur iure sit tempore, praesentium est, fugiat ex repudiandae impedit omnis perspiciatis corrupti. Perspiciatis sapiente voluptate, velit qui saepe obcaecati laboriosam itaque odio blanditiis temporibus numquam magnam neque?
        </p>
     </div>
  </div>
  )
}

export default About