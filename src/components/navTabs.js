import React from 'react';

function navTabs({ currentPage, handlePageChange }){
    return (
        <nav>
            <ul className = "navLinks">
                <li className = "navItem">
                    <a href="#about"
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About' ? 'navItem active' : 'navItem'}>About</a>
                </li>
                <li clasName= "navItems">
                    <a href="#work"
                    onClick={() => handlePageChange('Work')}
                    className={currentPage === 'Work' ? 'navItem active' : 'navItem'}
                    >
                        Work
                    </a>
                </li>
                <li className='navItem'>
                    <a href ="#contact"
                    onClick ={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact' ? 'navItem active': 'navItem'}>Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default navTabs;