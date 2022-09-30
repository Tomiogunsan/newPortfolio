import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4 text-[#f4f4f4] '>
        <form method='POST' action='https://getform.io/f/3b6c1127-78a4-40cd-b803-e64c55e59805' className='flex flex-col max-w-[600px] w-full mt-[250px]'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#f1b007]'>Contact</p>
                <p className='py-4'>Submit the form below or shoot me an email - tomiafolayan@gmail.com</p>
            </div>
            <input className='bg-[#0c0d0e] shadow-md shadow-[#f1b007] p-2' placeholder='Name' name='name'/>
            <input className='my-4 p-2 bg-[#0c0d0e] shadow-md shadow-[#f1b007]' placeholder='Email' name='email'/>
            <textarea name='message' placeholder='Message' cols='30' rows='10' 
            className='bg-[#0c0d0e] shadow-md shadow-[#f1b007] p-2'></textarea>
            <div className='text-center '>
            <button className='border-2  m-8 p-3 font-bold bg-yellow-600 text-center hover:bg-[#000]'>Let's Talk</button>
            </div>
        </form>

    </div>
  )
}

export default Contact
