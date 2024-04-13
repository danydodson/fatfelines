import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Link } from 'react-router-dom'
import { Icon } from '../icons'
import Button from './Button.jsx'
import Divider from './Divider.jsx'
import Search from './Search.jsx'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  return (
    <Disclosure as='nav' className='flex items-center gap-4 py-3'>
      <Link to='/' className='w-11 h-11' preventScrollReset={true}>
        <Icon name='Logo' />
      </Link>
      <Search variant='navbar' />
      <Divider />
      <div className='hidden md:flex gap-4 items-center'>
        <menu className='flex items-center'>
          <Link to='/' preventScrollReset={true}>
            <Button variant='clean'>About</Button>
          </Link>
          <Link to='/' preventScrollReset={true}>
            <Button variant='clean'>Details</Button>
          </Link>
          <Link to='/' preventScrollReset={true}>
            <Button variant='normal'>Donate</Button>
          </Link>
        </menu>
      </div>
      <Menu as='div' className='relative sm:ml-3'>
        <Menu.Button className='flex text-sm pr-2 focus:outline-none sm:pr-0 md:hidden'>
          <span className='sr-only'>Open user menu</span>
          <Icon name='Bars' className='w-6 h-6 cursor-pointer hover:text-neutral-800' />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items as='menu' className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <Menu.Item>
              {({ active }) => (
                <Link to='/' className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                  About
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to='/' className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                  Details
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link to='/' className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                  Donate
                </Link>
              )}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    </Disclosure>
  )
}

export default Navbar
