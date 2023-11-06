// Importing necessary libraries and styles
import React from "react";
import '../../App.css'; // Importing App.css for styling

// Importing images for social media icons
import fb from "../../assets/images/social/fb.png";
import ig from "../../assets/images/social/ig.png";
import Linkedin from "../../assets/images/social/LinkedIn.png";

// SocialMedia component for displaying social media icons with links
export const SocialMedia = (): JSX.Element => {
    return (
        <div className="social-media"> {/* Container for social media icons */}
            {/* Facebook icon with link to Facebook page */}
            <a href="https://www.facebook.com/elewaKE/" target="_blank" rel="noopener noreferrer">
                <img className="img" alt="Facebook" src={fb} />
            </a>
            {/* Instagram icon with link to Instagram page */}
            <a href="https://www.instagram.com/elewa_education/" target="_blank" rel="noopener noreferrer">
                <img className="img" alt="Instagram" src={ig} />
            </a>
            {/* LinkedIn icon with link to LinkedIn page */}
            <a href="https://www.linkedin.com/company/elewa/" target="_blank" rel="noopener noreferrer">
                <img className="img" alt="LinkedIn" src={Linkedin} />
            </a>
        </div>
    );
};
