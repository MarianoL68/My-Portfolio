import React from 'react'
import DreamLodge from "../assets/proyects/DreamLodge.png"
import PerriPedia from "../assets/proyects/PerriPedia.png"

const Proyects = () => {

    const proyects = [
        {
            id: 1,
            src: DreamLodge,
            demo: "https://dreamlodgeprueba.web.app/",
            code: "https://github.com/MarianoL68/DreamLodge-Project"
        },
        {
            id: 2,
            src: PerriPedia,
            demo: "",
            code: "https://github.com/MarianoL68/Proyecto-Individual-Dogs"
        }
    ]

  return (
  <div name="proyects" 
       className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>

    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Proyects</p>
            <p className='py-6'>Check out some of my work right here</p>
        </div>

        <div className='grid sm:grid-cols-2 gap-8 px-12 sm:px-0'>
        {
            proyects.map(({id, src, demo, code}) => (
            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                <img src={src} 
                     alt="" 
                     className='rounded-md duration-200 hover:scale-105'/>
                <div className='flex items-center justify-center'>
                    <button onClick={() => window.open(demo, '_blank')} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Demo</button>
                    <button onClick={() => window.open(code, '_blank')} className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-110'>Code</button>
                </div>
            </div>
            ))
        }
        </div>     

    </div>

  </div>
  )
}

export default Proyects