import React from 'react'
import img from '../assets/assets/home.png'
import img1 from '../assets/assets/search.png'
import img2 from '../assets/assets/stack.png'
import img3 from '../assets/assets/arrow.png'
import img4 from '../assets/assets/plus.png'

const Sidebar = () => {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img className='w-6' src={img} alt="" />
             <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
            <img className='w-6' src={img1} alt="" />
             <p className='font-bold'>Search</p>
        </div>
      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
            <div className='flex items-center gap-3'>
                <img className='w-8' src={img2} alt="" />
                <p className='font-semibold'>Your library</p>
            </div>
            <div className='flex items-center gap-3 '>
               <img className='w-5' src={img3} alt="" />
               <img className='w-5' src={img4} alt="" />
            </div>

        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
            <h1>Create your first playlist</h1>
            <p className='font-light'>It's easy we will help you </p>
            <button className='px-4 py1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist </button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
            <h1>Let's findsome podcasts to follow</h1>
            <p className='font-light'>we'll keep you update on new episodes </p>
            <button className='px-4 py1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcast</button>
        </div>
      </div>
    </div>
  )
}

export default Sidebar 
