import { GiHamburgerMenu } from 'react-icons/gi'
import logo from '../../../img/Logo.svg'
import { navLink } from "./navLinkData"
import { useState } from 'react'
import { IoMdClose } from 'react-icons/io'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  const [isBurger, setIsBurger] = useState(false)

  return (
    <header className="flex w-full justify-between items-center mx-auto xxs:pt-6 md:pt-0 lg:pt-10 xxs:pl-6 md:pl-10 lg:pl-16 xxs:px-6 md:px-0">

      <div>
        <img src={logo} alt="Logo" className="xxs:size-10 md:size-12" />
      </div>

      <button onClick={() => {setIsBurger(!isBurger);
      }} className="xxs:block md:hidden text-white">
        <GiHamburgerMenu className='size-6' />
      </button>

      <nav className={`${isBurger ? 'block' : 'hidden'} xxs:fixed xxs:right-0 xxs:top-0 xxs:h-full md:line md:block md:relative z-10 xxs:px-6 md:px-0 xxs:pt-8 md:pt-0 xxs:w-64 md:w-auto bg-white/5 backdrop-blur-[0.9rem]`}>

        <button 
        onClick={() => setIsBurger(!isBurger)}
        className="md:hidden block ml-auto">
          <IoMdClose className='size-6 text-white' />
        </button>

        <ul className="md:flex xxs:mt-12 md:mt-auto gap-12 md:pl-[88px] lg:pl-40 md:pr-10 lg:pr-16 font-barlowCondensed text-base font-normal text-white ">
          {navLink.map((link) => (
            <NavLink key={link.id} className={`${({isActive}) => isActive ? 'active' : ''} relative`} onClick={() => setIsBurger(!isBurger)} to={link.pathName}>
              <li className="flex gap-3 xxs:mb-8 md:mb-auto md:py-9"><span className="">{'0' + (link.id - 1)}</span>{link.name}</li>
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  )
}