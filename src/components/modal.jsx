import React, { useEffect, useState, useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import ReactPortal from './portal'

function Modal({ children, isOpen, handleClose }) {
    const nodeRef = useRef(null)

    useEffect(() => {
        const closeOnEscapeKey = (e) => (e.key === 'Escape' ? handleClose() : null)
        document.body.addEventListener('keydown', closeOnEscapeKey)
        return () => document.body.removeEventListener('keydown', closeOnEscapeKey)
    }, [handleClose])

    return (
        <ReactPortal wrapperId='portal'>
            <CSSTransition
                in={isOpen}
                timeout={{ entry: 0, exit: 300 }}
                unmountOnExit
                classNames='modal'
                nodeRef={nodeRef}
            >
                <div className='fixed inset-0 bg-black/5 flex flex-col items-center justify-center overflow-hidden z-[999] pt-10 pr-5 pb-5 opacity-0 pointer-events-none transform scale-[0.4]' ref={nodeRef}>
                    <button type='button' onClick={handleClose} className='close-btn bg-white'>
                        Close
                    </button>
                    <div className='w-[90%] h-[90%] bg-[#ffffff] text-[#333333] flex items-center justify-center text-xs font-medium'>
                        {children}
                    </div>
                </div>
            </CSSTransition>
        </ReactPortal>
    )
}
export default Modal
