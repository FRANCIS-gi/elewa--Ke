import React, { useState } from 'react';
import { NavBar } from "./navBar"; // import your MobileNavbar component

export const HamburgerMenu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>  
      <a href="/#" id="menu-icon" className={isOpen ? 'close' : ''} onClick={() => setIsOpen(!isOpen)}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </a>
      {isOpen && <NavBar />} {/* Conditionally render NavBar */}
    </div>
  );
};
