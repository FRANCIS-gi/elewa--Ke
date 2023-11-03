// Importing necessary libraries, styles, and components
import React from "react";
import '../../App.css';
import { ElewaLogo } from "./elewaLogo";
import { SocialMedia } from "./socialMedia";

// Footer component for displaying footer information and links
export const Footer = (): JSX.Element => {
    return (
        <div className="Footer">
            <div className="rectangle" />        
            <img className="vector" alt="Vector" src="vector-2.svg" />

            <div className="label">
                <div className="text-wrapper">
                    {/* Displaying the title 'Headquarters' */}
                    Headquarters
                    {/* Displaying the address with a link to Google Maps */}
                    <p className="the-promenade">
                        <a href="https://www.google.com/maps/place/The+Promenade/@-1.2564152,36.8048433,17z/data=!3m1!4b1!4m6!3m5!1s0x182f171ef5b4adf7:0x6a631a5a40e1cfee!8m2!3d-1.2564152!4d36.8048433!16s%2Fg%2F11j7q78jh8?entry=ttu" target="_blank" rel="noopener noreferrer">
                            The Promenade, 19 General Mathenge Rd
                            <br />
                            Nairobi, Kenya
                        </a>
                    </p>
                </div>

                <div className="text-wrapper">Contact
                    <p className="t-e">
                        T +254 78 92 27 755
                        <br />
                        <br />E info@elewa.ke
                    </p>
                </div>    

                <div className="text-wrapper">
                    {/* Navigation section */}
                    Navigation
                    <div className="about-us-social">
                        {/* Each item is a placeholder link that will be replaced with the actual link */}
                        <a href="/About us" target="_blank" rel="noopener noreferrer">About us</a>
                        <br/>
                        <br />
                        <a href="/Social impact" target="_blank" rel="noopener noreferrer">Social impact</a>
                        <br />
                        <br />
                        <a href="/invest" target="_blank" rel="noopener noreferrer">Invest</a>
                        <br />
                        <br />
                        <a href="/News" target="_blank" rel="noopener noreferrer">News</a>
                        <br />
                        <br />
                        <a href="/contacts" target="_blank" rel="noopener noreferrer">Contact</a>
                    </div>
                </div>

                <div className="text-wrapper">
                    {/* Brands section */}
                    Brands
                    <div className="elewa-italanta">
                        {/* Each item is a clickable link that will open the corresponding page in a new tab */}
                        <a href="https://elewa.education/home" target="_blank" rel="noopener noreferrer">Elewa</a>
                        <br />
                        <br />
                        <a href="https://italanta.net/" target="_blank" rel="noopener noreferrer">Italanta</a>
                        <br />
                        <br />
                        <a href="https://elewa.ke/venture-labs" target="_blank" rel="noopener noreferrer">Venture labs</a>
                    </div>
                </div>


                <div className="text-wrapper">Privacy
                    <div className="terms-and-conditions">
                        Terms and conditions
                        <br />
                        <br />
                        Cookie preferences
                    </div>
                </div>

                {/* Displaying the Elewa logo and social media icons */}
                <div>
                    <ElewaLogo/>
                    <SocialMedia/>
                </div>
            </div>
        </div>        
    );
};
