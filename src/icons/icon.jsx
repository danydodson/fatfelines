import React from 'react'
import {
  BarsIcon,
  ChatIcon,
  DownIcon,
  EllipsisIcon,
  HeartIcon,
  LogoIcon,
  PlusIcon,
  SearchIcon
} from '.'

const Icon = ({ name }) => {
  switch (name) {
    case 'Bars':
      return <BarsIcon />
    case 'Chat':
      return <ChatIcon />
    case 'Down':
      return <DownIcon />
    case 'Ellipsis':
      return <EllipsisIcon />
    case 'Heart':
      return <HeartIcon />
    case 'Plus':
      return <PlusIcon />
    case 'Search':
      return <SearchIcon />
    default:
      return <LogoIcon />
  }
}

export default Icon
