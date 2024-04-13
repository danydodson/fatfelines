import { useEffect, useState } from 'react'
import { Icon } from '../icons'

const Search = ({ variant }) => {
  const [focused, setFocused] = useState(false)
  const [style, setStyle] = useState('')

  useEffect(() => {
    if (variant === 'navbar') {
      setStyle('rounded-full py-2 bg-neutral-200')
      if (focused) {
        setStyle((value) => `${value} bg-neutral-50 ring-1 ring-neutral-400`)
      } else {
        setStyle('rounded-full py-2 bg-neutral-200')
      }
    } else if (variant === 'hero') {
      setStyle('rounded-md py-4 bg-neutral-200')
    }
  }, [variant, focused])

  return (
    <div
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      className={` flex flex-1 items-center gap-2 px-4 ${style}`}>
      <Icon name='Search' className='w-5 h-5 text-neutral-600 hover:text-neutral-800 cursor-pointer' />
      <input type='text' placeholder='Search by name' className='w-full bg-transparent focus:outline-none' />
    </div>
  )
}

export default Search
