import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#18191b] text-[#f4f4f4]'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full  grid grid-cols-2 gap-8 '>
                <div className='sm:text-right pb-8 pl-4 '>
                    <p className='text-4xl font-bold inline border-b-4  border-[#f1b007]'>About</p>
                </div>
                <div>

                </div>
                </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 '>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>Hi. I'm Tomi, nice to meet you. Please take a look around</p>
                </div>
                <div>
                    <p> I'm a versatile front-end developer passionate about technology. I've been developing and working on projects with my skills in Javascript programming using framework such as React. I'm curious about technology, passionate about solving problems and enjoy learning new skills. When i'm not coding, i'm probably hanging out with my husband, being entertained by our amazing 1 year old little boy.</p>
                </div>
                </div>
            

        </div>
    </div>
  )
}

export default About