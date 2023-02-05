import React from 'react';
import SocialMedia from '../Components/SocialMedia'
import Logo from '../img/Header/bolt.svg'
import Nav from '../Components/Nav'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header className = 'fixed w-full px-[30px] lg:px-[100px] z-30 h-[100px] lg:h-[140px] flex items-center'>
            <div className = 'flex flex-col lg:flex-row lg:items-center w-full justify-between'>
                <Link to={'/'} className='max-w-[200px]'>
                    <img src={Logo} alt='' />
                </Link>
                <nav className ='hidden xl:flex gap-x-12 font-semibold'>
                    <Link to={'/'} className='text-[black] hover:text-primary transition'>
                        Home
                    </Link>
                    <Link to={'/About'} className='text-[black] hover:text-primary transition'>
                        About
                    </Link>
                    <Link to={'/Portfolio'} className='text-[black] hover:text-primary transition'>
                        Portfolio
                    </Link>
                    <Link to={'/Contact'} className='text-[black] hover:text-primary transition'>
                        Contact
                    </Link>
                </nav>
                
            </div>
            <SocialMedia />
            <Nav />
        </header>

    )
}

export default Header