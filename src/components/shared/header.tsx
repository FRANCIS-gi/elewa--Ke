import React from "react";
import '../../App.css';
import { ElewaLogo } from "./elewaLogo";
import { NavBar } from "./navBar";

// Header component to display the header of your website
export const Header = (): JSX.Element => {
    return (
        <div className="header">
            <div className= "header-container">
                <nav className= "nav" >
                    <div className="header-border">
                        {/* Logo section */}
                        <div className="header-logo">    
                            <ElewaLogo />
                        </div>
                        {/* Navigation bar section */}
                        <NavBar />
                    </div>
                    <div className="rectangle" />
                </nav>
            </div>     
        </div>
    );
};