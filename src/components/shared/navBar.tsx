import React from "react";
import '../../App.css';

export const NavBar = (): JSX.Element => {
    return (
        <div>
            {/* Navigation bar container */}
            <div className="navbar">
                <ul>
                    {/* List items for navigation links */}
                    <li className="nav-item" ><a href="/Home" target="_blank" rel="noopener noreferrer">Home</a></li>
                    <li><a href="/About us" target="_blank" rel="noopener noreferrer">About us</a></li>
                    <li><a href="/Social impact" target="_blank" rel="noopener noreferrer">Social impact</a></li>
                    <li><a href="/Invest" target="_blank" rel="noopener noreferrer">Invest</a></li>
                    <li><a href="https://elewa.ke/venture-labs" target="_blank" rel="noopener noreferrer">Venture labs</a></li>
                    <li><a href="/Brand" target="_blank" rel="noopener noreferrer">Brand</a></li>
                    <li><a href="/Careers" target="_blank" rel="noopener noreferrer">Careers</a></li>
                    <li><a href="/Contacts" target="_blank" rel="noopener noreferrer">Contact</a></li>
                </ul>
            </div>
        </div>
    );
};
