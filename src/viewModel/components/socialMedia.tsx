// Importing necessary libraries and styles
import React from "react";
import '../../App.css'; // Importing App.css for styling

// Importing images for social media icons
import fb from "../../view/images/fb.png";
import ig from "../../view/images/ig.png";
import Linkedin from "../../view/images/LinkedIn.png";

// SocialMedia component for displaying social media icons with links
export const SocialMedia = (): JSX.Element => {
    return (
        <div className="image"> {/* Container for social media icons */}
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
