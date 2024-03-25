import React from 'react'
import spinner from '../assets/spinner.gif'

function Spinner() {
    return (
        <img src={spinner}
            className='block w-52 m-auto'
            alt='Loading...'
        />
    )
}

export default Spinner