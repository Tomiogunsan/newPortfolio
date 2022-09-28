import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#18191b]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-yellow-500'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#f4f4f4]'>
          Tomi Ogunsan
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-yellow-600'>
          I'm a FrontEnd Developer.
        </h2>
        <p className='text-[#f4f4f4]'>I design and code beautifully simple things, and i love what i do.</p>
        
        <div>
        <Link  to="work"  smooth={true}  duration={500}>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#f1b007] hover:border-[#f4f4f4]'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Home