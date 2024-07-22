import React, { useEffect, useRef, useState } from 'react';
import './nav.css';
import logo from '../../assets/cognifyz-1.png';
import { Link } from 'react-router-dom';

const Nav = ({ setIsContactVisible }) => {
  const [menuOpen, setMenuOpen] = useState(true);
  const [activeLink, setActiveLink] = useState("home");

  const menuRef = useRef();

  const handleClick = (path) => {
    setActiveLink(path);
    setMenuOpen(true); 
  };

  const handleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handler = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(true);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const openContactForm = () => {
    setIsContactVisible(true);
  };

  return (
    <nav className='p-3 bg-transparent flex justify-between items-center px-5'>
      <div className="title">
        <img width={120} src={logo} alt="Logo" />
      </div>

      <ul ref={menuRef}  className={ menuOpen ? "list flex gap-9 text-[18px] font-[500] items-center" : "active"}>
            <a href="#home"  onClick={() => handleClick('home')}><li  className={` nav-link ${activeLink === 'home' ? 'active' : ""}`}>Home</li> </a>
            <a href="#about" onClick={() => handleClick('about')}><li className={` nav-link ${activeLink === 'about' ? 'active' : ""}`}>About</li> </a>
            <a href="#program" onClick={() => handleClick('program')}><li className={ `nav-link ${activeLink === 'program' ? 'active' : ""}`}>Programs</li> </a>
            <button onClick={openContactForm} className=' hidden'>Contact<i className='bx bx-right-arrow-alt px-1'></i></button>
        </ul>

      <button onClick={openContactForm} className='contact btn'>Contact<i className='bx bx-right-arrow-alt px-1'></i></button>

      <div onClick={handleMenu} className="menu-bar text-3xl cursor-pointer">
        {menuOpen ? <i className='bx bx-menu'></i> : <i className='bx bx-x'></i>}
      </div>
    </nav>
  );
};

export default Nav;
