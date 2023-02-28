import { LazyLoadImage } from 'react-lazy-load-image-component'
import 'react-lazy-load-image-component/src/effects/blur.css'
import React, { useState, useEffect } from 'react'
import { Icon } from '../icons'
import Profile from './profile'
import Modal from './modal'

const breakpoint = 640

const Card = ({ post }) => {
  const [width, setWidth] = React.useState(window.innerWidth)
  const [hovered, setHovered] = useState(false)
  const [style, setStyle] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleResizeWindow)
    return () => window.removeEventListener('resize', handleResizeWindow)
  }, [])

  const hoverHandler = (isHovered) => {
    setHovered(isHovered)
    if (!hovered) {
      setStyle('brightness-50')
    } else {
      setStyle('brightness-100')
    }
  }

  return (
    <div className='relative mb-5 w-screen sm:w-auto -ml-4 sm:ml-0'
      onMouseEnter={() => hoverHandler(true)}
      onMouseLeave={() => hoverHandler(false)}
    >
      {width > breakpoint ? (
        hovered && (
          <div className='absolute w-full h-full z-10 flex flex-col justify-between p-6'>
            <div className='flex justify-end gap-4'>
              <Icon name='Heart' />
              <Icon name='Plus' />
            </div>
            <div className='flex justify-between items-center'>
              <Profile post={post} />
              {/* <Icon name='Down' /> */}
            </div>
          </div>
        )
      ) : (
        <>
          <div onClick={() => setIsOpen(true)} className='absolute w-full h-full z-10 flex flex-col justify-between p-6'>
            <div className='flex justify-end gap-4'>
              <Icon name='Heart' />
              <Icon name='Plus' />
            </div>
            <div className='flex justify-between items-center'>
              <Profile post={post} />
              {/* <Icon name='Down' /> */}
            </div>
          </div>
          <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
            This is modal
          </Modal>
        </>
      )}
      <LazyLoadImage src={post.photo}
        className={`w-full ${style}`}
        effect='blur'
        alt='' />
    </div>
  )
}

export default Card
