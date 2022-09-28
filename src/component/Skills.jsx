import React from 'react'
import html from '../assets/html.jpg'
import css from '../assets/css.jpg'
import tailwind from '../assets/tail.jpg'
import javascript from '../assets/javascript.jpg'
import typescript from '../assets/typesc.png'
import react from '../assets/react.jpg'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#18191b] text-[#f4f4f4] w-full h-screen'>

{/* container */}
        <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-[#f1b007]'>Skills</p>
                <p className='py-4 '> These are the technologies I've worked with</p>
            </div>
            <div className='grid grid-cols-2 w-full sm:grid-cols-3 gap-4 text-center py-8 '>
                <div className='shadow-md shadow-[#001] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={html} alt='/' />
                    <p className='my-4'>HTML</p>
                </div>

                <div className='shadow-md shadow-[#001] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={css} alt='/' />
                    <p className='my-4'>CSS</p>
                </div>

                <div className='shadow-md shadow-[#001] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={tailwind} alt='/' />
                    <p className='my-4'>Tailwind</p>
                </div>

                <div className='shadow-md shadow-[#001] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={javascript} alt='/' />
                    <p className='my-4'>Javascript</p>
                </div>

                <div className='shadow-md shadow-[#001] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={typescript} alt='/' />
                    <p className='my-4'>Typescript</p>
                </div>

                <div className='shadow-md shadow-[#001] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto ' src={react} alt='/' />
                    <p className='my-4'>React</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills