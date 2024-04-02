import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import { CSSTransition } from 'react-transition-group'
import { createPortal } from 'react-dom'

function Modal({ isOpen, onClose, children, wrapperId = 'portal' }) {
	const modalRef = useRef(null)
	const [wrapperElement, setWrapperElement] = useState(null)

	function createWrapperAndAppendToBody(wrapperId) {
		const wrapperElement = document.createElement('div')
		wrapperElement.setAttribute('id', wrapperId)
		document.body.appendChild(wrapperElement)
		return wrapperElement
	}

	const toggleModal = () => {
		setModalOpen(!modalOpen)
	}

	// using 'useLayoutEffect' to make sure the element is 
	// created before rendering the children
	useLayoutEffect(() => {
		let element = document.getElementById(wrapperId)
		let systemCreated = false
		// if element is not found with wrapperId or wrapperId is not provided,
		// create and append to body
		if (!element) {
			element = createWrapperAndAppendToBody(wrapperId)
			systemCreated = true
		}
		setWrapperElement(element)

		return () => {
			// delete the programatically created element
			if (systemCreated && element.parentNode) {
				element.parentNode.removeChild(element)
			}
		}
	}, [wrapperId])

	// handle click outside the modal
	useEffect(() => {
		const handleClickOutside = (event) => {
			if (modalRef.current && !modalRef.current.contains(event.target)) {
				onClose()
			}
		}

		if (isOpen) {
			document.addEventListener('mousedown', handleClickOutside)
		} else {
			document.removeEventListener('mousedown', handleClickOutside)
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside)
		}
	}, [isOpen, onClose])

	// wrapperElement state will be null on very first render.
	if (wrapperElement === null) return null

	return createPortal(
		<CSSTransition
			in={isOpen}
			timeout={{ entry: 0, exit: 300 }}
			unmountOnExit
			classNames='modal'
		// modalRef={modalRef}
		>


			<div className='fixed inset-0 bg-black/5 flex flex-col items-center justify-center overflow-hidden z-[999] pt-10 pr-5 pb-5 opacity-0 pointer-events-none transform scale-[0.4]'
				ref={modalRef}
			>
				{/* <button type='button' onClick={onClose} className='close-btn bg-white'>
					Close
				</button> */}
				<div className='w-[90%] h-[90%] bg-[#ffffff] text-[#333333] flex items-center justify-center text-xs font-medium'>
					{children}
				</div>

			</div>
		</CSSTransition>,
		wrapperElement
	)
}

export default Modal
