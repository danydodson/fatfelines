import React from 'react'
// import Modal from './modal'

const Profile = ({ post }) => {
  // const [isOpen, setIsOpen] = useState(false)
  return (
    <div className='flex gap-4 items-center'>
      <div className='rounded-full w-8 h-8 overflow-hidden'>
        <img className='bg-cover w-full' src={post.photo} alt='' />
      </div>
      {/* <button onClick={() => setIsOpen(true)}>
        Click to Open Modal
      </button>
      <Modal handleClose={() => setIsOpen(false)} isOpen={isOpen}>
        This is Modal Content!
      </Modal> */}
      <h2 className='text-white'>{post.name}</h2>
    </div>
  )
}

export default Profile
