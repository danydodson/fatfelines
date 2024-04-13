import Navbar from './Navbar.jsx'

const Header = () => {
  return (
    <div className='sticky top-0 z-20 bg-white shadow-md'>
      <div className='px-4 text-neutral-500'>
        <Navbar />
      </div>
    </div>
  )
}

export default Header
