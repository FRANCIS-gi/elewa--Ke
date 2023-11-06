// Importing necessary modules and assets
import React from "react";
import '../../App.css'; // Importing CSS for the component
import arrow from "../../assets/arrow.svg"; // Importing the arrow image

// Defining the Button component
export const Button: React.FC = (): JSX.Element => {
    return (
        // Button element for better semantics and accessibility
        <button className="button">
            {/* Frame for the button content*/}
            <div className="frame">
                {/* Group for the image */}
                <div className="group">
                    {/* Arrow image with alt text for accessibility*/}
                    <img className="img" alt="Arrow" src={arrow} />
                </div>
            {/* Text wrapper for the button text */}
                <div className="text-wrapper">Join the waiting list</div>
            </div>
        </button>
    );
};
