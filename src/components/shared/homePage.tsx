import React, { ReactNode } from 'react'; // Import React library
import '../../App.css'; // Import the CSS file for styling

// Define the type for the props that HomePage component will receive


interface HomePageProps {
  children: ReactNode; // Props should include 'children' of type ReactNode, representing the content within the Content component.
  className?: string; // An optional 'className' prop for custom CSS classes.
}

// Define a functional component called 'HomePage' which takes 'imgSrc' as a prop
export const HomePage = ({ children, className  }: HomePageProps): JSX.Element => {
    return (
        <div className="homepage"> {/* Render a div with the class name 'homepage' */}
            
            <div className="homepage-box"> {/* Render a nested div with the class name 'homepage-box' */}
                {children}      {/* Allow children */}          
                
            </div>
        </div>
    );
};
