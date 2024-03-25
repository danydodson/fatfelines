import React from 'react'

const PlusIcon = () => (
    <span className='p-3 bg-slate-50 rounded-md cursor-pointer shadow-md group'>
        <svg id='plus_icon'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className='w-4 h-4 text-neutral-500 group-hover:text-neutral-800'
            alt=''
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
        >
            <title>Plus Icon</title>
            <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M12 4.5v15m7.5-7.5h-15'
            />
        </svg>
    </span>
)

export default PlusIcon
