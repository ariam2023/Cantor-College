
'use client'
import React, { useState } from "react";
import Link from 'next/link';
import './Navbar.css';
import Image from "next/image";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); 
  };

  return (
    <header className="header">
      <nav>
        <div className="logo">
          <Link href="/"><Image src="/logo.png"
            layout="intrinsic"
            width={200}
            height={100}
            quality={75}
            alt='Cantor College Location address'></Image>
          </Link>
        </div>
        <button className='burger' onClick={toggleMenu}>&#9776;</button>
        <menu className={menuOpen ? "active" : ""} id="nav-links">
          
            <li><Link className="link" href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
            <li><Link className="link" href="/students" onClick={() => setMenuOpen(false)}>Students</Link></li>
            <li><Link className="link" href="/staff" onClick={() => setMenuOpen(false)}>Staff</Link></li>
            <li><Link className="link" href="/courses" onClick={() => setMenuOpen(false)}>Courses</Link></li>
            <li><Link className="link" href="/aboutus" onClick={() => setMenuOpen(false)}>About Us</Link></li>
          
        </menu>
      </nav>
    </header>
  );
};

export default Navbar;
