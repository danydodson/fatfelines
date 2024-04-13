import Search from './Search'

const Welcome = () => {
  return (
    <div className='max-w-4xl relative md:left-1/2 md:-translate-x-1/2 space-y-2 md:space-y-6 mb-14 md:mb-0'>
      <h1 className='text-2xl md:text-5xl font-bold text-white'>Fatcats</h1>
      <div className='text-white text-sm md:text-lg md:font-semibold'>
        <p>
          Your source for finding a{' '}
          <span className='underline font-light cursor-pointer text-neutral-200 hover:text-white'>
            lovable{' '}
          </span>
          new friend.
        </p>
      </div>
      <div className='space-y-4 hidden md:block'>
        <Search variant='hero' />
      </div>
    </div>
  )
}

export default Welcome
