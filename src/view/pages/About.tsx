import React from "react";

import '../../App.css';
import {Header} from '../../components/shared/header'; // Import the Header 
import {HomePage} from '../../components/shared/homePage'; // Import the HomePage 
import {Footer} from '../../components/shared/footer'; // Import the Footer 
import {Container} from '../../components/shared/container';

import People from "../../assets/images/people.png"; // Import the People image

export const About = (): JSX.Element => {
    return (
        <div className="App">
            <Header /> {/* Render the Header component */}
            <HomePage imgSrc={People} /> {/* Render the HomePage component with the 'imgSrc' prop set to the imported 'People' image */}
            <Container>

            </Container>
            <Container>
                
            </Container>
            <Container>
                
            </Container>
            <Container>
                
            </Container>
            <Container>
                
            </Container>
            <Container>
                
            </Container>
                      
                        
            <Footer /> {/* Render the Footer component */}
        </div>
    );
};
