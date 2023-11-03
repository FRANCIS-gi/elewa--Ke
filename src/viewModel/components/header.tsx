import React from "react";
import '../../App.css';
import { ElewaLogo } from "./elewaLogo";
import { NavBar} from "./navBar"

export const Header = (): JSX.Element => {
    return (
        <div className="header">
            <div className="header-border">
                <div className="header-logo">    
                    <ElewaLogo />
                </div>
                <NavBar/>
            </div>
            <div className="rectangle" /> 
        </div>
        );
};