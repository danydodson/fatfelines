import React from 'react'

const DownIcon = () => (
    <span className='p-3 bg-slate-50 rounded-md cursor-pointer shadow-md group'>
        <svg id='down_icon'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className='w-4 h-4 text-neutral-500 group-hover:text-neutral-800'
            alt=''
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
        >
            <title>Down Icon</title>
            <path
                fill='none'
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='1.5'
                d='M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3'
            />
        </svg>
    </span>
)

export default DownIcon
