import React from 'react'
import {FaInstagram } from 'react-icons/fa'

const Header = () => {
  return (
    <header id='head' className='flex absolute top-0 left-0 w-full justify-between font-anton py-4 items-center header xs:text-base text-sm'>
        <h1 id='title' className='relative inline-block' >David Coast</h1>
        <a id='link' href="https://ogaticket.com" target='_blank' className='text-center text-[rgb(239_121_13)]'>OgaTicket</a>
        <a id='link' href="https://www.instagram.com/coastdavid/" target='_blank'><FaInstagram className='text-2xl ml-auto'/></a>
    </header>
  )
}

export default Header