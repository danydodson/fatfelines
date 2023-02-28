import React from 'react'
import Welcome from './welcome'
import hero from '../assets/banner.png'
import vhs from '../assets/vhs.svg'

const Hero = () => {
  return (
    <header className='relative w-screen h-[300px] md:h-[600px] overflow-hidden -mx-4'>
      <div className='absolute w-full h-full z-10 grid items-center px-4 md:px-40'>
        <Welcome />
        <div className='absolute pl-4 bottom-0 left-0 md:left-auto md:right-0 py-4 mr-5'>
          <img className='h-4 md:h-10 mr-auto md:mr-3 md:ml-auto' src={vhs} alt='vhs' />
          <p className='text-white mt-3 text-xs'>Search the Vanderburgh Humane Society.</p>
        </div>
      </div>
      <img className='h-full object-cover w-full bg-bottom brightness-[0.2]' src={hero} alt='hero' />
    </header>
  )
}

export default Hero
