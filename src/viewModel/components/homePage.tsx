import React from "react"; // Import React library
import '../../App.css'; // Import the CSS file for styling

// Define the type for the props that HomePage component will receive
type HomePageProps = {
    imgSrc: string; // It expects a prop 'imgSrc' which is a string representing an image source
};

// Define a functional component called 'HomePage' which takes 'imgSrc' as a prop
export const HomePage = ({ imgSrc }: HomePageProps): JSX.Element => {
    return (
        <div className="homepage"> {/* Render a div with the class name 'homepage' */}
            
            <div className="homepage-box"> {/* Render a nested div with the class name 'homepage-box' */}
                <img className="background-img" alt="People" src={imgSrc} /> {/* Render an image with the provided 'imgSrc' prop */}
                <div >    
                    <div className="homepage-group"> {/* Render a div with the class name 'homepage-group' */}
                        <h2 className="subtitle">Trade, not aid</h2> {/* Render a subtitle */}
                        <h1 className="title">Southern innovations addressing global problems</h1> {/* Render a title */}
                    </div>
                </div>
            </div>
        </div>
    );
};
