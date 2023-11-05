import React from "react";

import '../../App.css';
import {Header} from '../../components/shared/header'; // Import the Header 
import {HomePage} from '../../components/shared/homePage'; // Import the HomePage 
import {Footer} from '../../components/shared/footer'; // Import the Footer
import {Container} from '../../components/shared/container'; 


import Field from "../../assets/images/Field.png"; // Import the People image

export const Invest = (): JSX.Element => {
    return (
        <div className="App">
            <Header /> {/* Render the Header component */}
            <HomePage imgSrc={Field} /> {/* Render the HomePage component with the 'imgSrc' prop set to the imported 'People' image */}
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
