import React, { ReactNode } from 'react'; // Import React library
import '../../App.css'; // Import the CSS file for styling


// Define the type for the props that Sections component will receive
interface SectionsProps {
  children: ReactNode; // Props should include 'children' of type ReactNode, representing the content within the Sections component.
  className?: string; // An optional 'className' prop for custom CSS classes.
  link?: string; // An optional 'link' prop for hyperlink
  id?:string;
}

// Define a functional component called 'Sections'
export const Sections = ({ children, className, link }: SectionsProps): JSX.Element => {
    return ( 
        <div className={className}>
            <p>
                <a href={link}>{children}</a> {/* Use the 'link' prop as the href attribute for the 'a' tag */}
            </p>
        </div>
    );
};
