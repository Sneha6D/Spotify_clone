import React, { useContext } from 'react'
import { assets } from '../assets/assets/assets'
import img1 from '../assets/assets/shuffle.png'
import img4 from '../assets/assets/next.png'
import img5 from '../assets/assets/loop.png'
import img6 from '../assets/assets/plays.png'
import img7 from '../assets/assets/mic.png'
import img8 from '../assets/assets/queue.png'
import img9 from '../assets/assets/speaker.png'
import img10 from '../assets/assets/volume.png' 
import img11 from '../assets/assets/mini-player.png'
import img12 from '../assets/assets/zoom.png'
import { PlayerContext } from './PlayerContext'

const Player = () => {

  const {track,seekBar, seekBg, playStatus, play, pause, time , previous, next ,seekSong } = useContext(PlayerContext);

  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={track.image} alt="" />
        <div>
            <p>{track.name}</p>
            <p>{track.desc.slice(0,12)}</p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-1 m-auto'>
        <div className='flex gap-4'>
            <img className='w-4 cursor-pointer'src={img1} alt="" />
            <img onClick={previous} className='w-4 cursor-pointer'src={assets.prev_icon} alt="" />
            {playStatus
            ?<img onClick={pause} className='w-4 cursor-pointer'src={assets.pause_icon} alt="" />
            :<img onClick={play} className='w-4 cursor-pointer'src={assets.play_icon} alt="" />
            }
            <img onClick={next} className='w-4 cursor-pointer'src={assets.next_icon} alt="" />
            <img className='w-4 cursor-pointer'src={img5} alt="" />
        </div>
        <div className='flex items-center gap-5'>
           <p>{time.currentTime.minute}:{time.currentTime.second}</p>
           <div ref={seekBg} onClick={seekSong} className='w-[60vw] max-w-[500px] bg-gray-300 rounded-full cursor-pointer]'>
               <hr ref={seekBar} className='h-1 border-none w-0 bg-green-800 rounded-full' />
           </div>
           <p>{time.totalTime.minute}:{time.totalTime.second}</p>
        </div>
      </div>
      <div className='hidden lg:flex items-center gap-2 opacity-75 '>
        <img className='w-4 ' src={img6} alt="" />
        <img className='w-4 ' src={img7} alt="" />
        <img className='w-4 ' src={img8} alt="" />
        <img className='w-4 ' src={img9} alt="" />
        <img className='w-4 ' src={img10} alt="" />
        <div className='w-20 bg-slate-50 h-1 rounded'>
        </div>
        <img className='w-4 ' src={img11} alt="" />
        <img className='w-4 ' src={img12} alt="" />
      </div>
    </div>
  )
}

export default Player
