import React from "react";

import '../../App.css';
import {Header} from '../../components/shared/header'; // Import the Header 
import {HomePage} from '../../components/shared/homePage'; // Import the HomePage 
import {Footer} from '../../components/shared/footer'; // Import the Footer 


import Chain from '../../assets/images/Chain.png'; // Import the Chain image
import {Container} from '../../components/shared/container';

export const SocialImpact = (): JSX.Element => {
    return (
        <div className="App">
            <Header /> {/* Render the Header component */}
            <HomePage imgSrc={Chain} /> {/* Render the HomePage component with the 'imgSrc' prop set to the imported 'Chain' image */} 
            
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
