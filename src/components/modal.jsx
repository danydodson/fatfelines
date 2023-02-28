import React,{ useEffect, useRef } from 'react'
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
          <button onClick={handleClose} className='close-btn bg-white'>
            Close
          </button>
          <div className='w-[70%] h-[70%] bg-[#282c34] text-white flex items-center justify-center text-3xl'>
            {children}
          </div>
        </div>
      </CSSTransition>
    </ReactPortal>
  )
}
export default Modal
