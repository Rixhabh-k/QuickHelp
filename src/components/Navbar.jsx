import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.png'
import User from '../assets/user.png'
import Setting from '../assets/setting.png';
import Guide from "../pages/Guide";

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-2 sm:px-3 md:px-4 py-2.5'>
      <Link to='/' className='flex items-center gap-2 font-medium text-2xl '><img className='h-[30px] ' src={Logo}/>QuickHelp</Link>
      <div className='flex items-center gap-3'>
        <Link className='bg-[#ff2525] text-white px-2 py-1.5 font-bold rounded' to='/guide'>Guide</Link>
        <Link to='/settings' ><img className='h-[27px] ' src={Setting} alt="" /> </Link>
        <Link to='/user-profile'><img className='h-[30px] ' src={User} alt="" /></Link>
        
      </div>
    </nav>
  )
}

export default Navbar

