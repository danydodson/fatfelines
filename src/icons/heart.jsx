import React from 'react'

const HeartIcon = () => (
    <span className='p-3 bg-slate-50 rounded-md cursor-pointer shadow-md group'>
        <svg id='heart_icon'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            className='w-4 h-4 text-neutral-500 group-hover:text-[#ee3b3b]'
            alt=''
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            version='1.1'
        >
            <title>Heart Icon</title>
            <path
                fill='currentColor'
                d='M12.2,6.18c0,0,1.45-1.79,4.04-1.79s5.17,1.72,5.17,5.17c0,4.33-9.22,10.05-9.22,10.05S2.58,13.97,2.58,9.59 c0-3.49,2.4-5.2,5.16-5.2C10.42,4.39,12.2,6.18,12.2,6.18z' />
        </svg>
    </span>
)

export default HeartIcon

