import { useState, useEffect } from 'react'

const useIntersection = (element, rootMargin) => {
	const [isVisible, setState] = useState(false)
	const el = element.current

	useEffect(() => {
		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					setState(entry.isIntersecting)
					observer.unobserve(element.current)
				}
			},
			{ rootMargin }
		)

		element.current && observer.observe(element.current)

		return () => {
			observer.unobserve(el)
		}
		// eslint-disable-next-line
	}, [])

	return isVisible
}

export default useIntersection