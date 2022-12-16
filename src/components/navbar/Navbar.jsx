import React, { useState } from 'react';
import './navbar.css';
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.svg';

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const Menu = () => (
        <>
            <p><a href="/">Home</a></p>
            <p><a href="https://enrise.com/" target="_blank" rel="noreferrer">Enrise</a></p>
        </>
    )

    return (
    <div className="kanye__navbar">
        <div className="kanye__navbar-links">
            <div className="kanye__navbar-links_logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="kanye__navbar-links_container">
                <Menu />
            </div>
        </div>
        <div className="kanye__navbar-other">
            <a href="https://github.com/Chocotunda/enrise-kanye-quote-challenge" target="_blank" rel="noreferrer">Github</a>
        </div>
        <div className="kanye__navbar-menu">
            {toggleMenu ?
            <RiCloseLine color="white" size={27} onClick={() => setToggleMenu(false)}/> :
            <RiMenu3Line color="white" size={27} onClick={() => setToggleMenu(true)}/>}
            {toggleMenu && (
                <div className="kanye__navbar-menu_container scale-up-center">
                    <div className="kanye__navbar-menu_container-links">
                        <Menu />
                        <div className="kanye__navbar-menu_container-links-other">
                            <a href="https://github.com/Chocotunda/enrise-kanye-quote-challenge" target="_blank" rel="noreferrer">Github</a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    </div>
    )
};

export default Navbar;
