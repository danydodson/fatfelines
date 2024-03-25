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
                        </div>
                    </div>
                    <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
                        <article className="rounded overflow-hidden shadow-lg">
                            <img className="w-full" src={post.photo} alt={post.breed} />
                            <div className="px-6 py-4">
                                <h2 className="font-bold text-xl mb-2">Hi! My name's {post.name}</h2>
                                <ul className="text-gray-700 text-base">
                                    <li>Sex: {post.sex}</li>
                                    <li>Birthday: {post.birthday}</li>
                                    <li>Intake: {post.intake_date}</li>
                                    <li>Breed: {post.breed}</li>
                                    <li>ID: {post.id}</li>
                                </ul>
                            </div>
                            <div className="px-6 pt-4 pb-2">
                                {post.attributes.map((attr, index) => (
                                    <span key={index} className="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 mr-1 rounded dark:bg-blue-900 dark:text-blue-300">{attr}</span>
                                ))}
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
                                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
                            </div>
                        </article>
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
