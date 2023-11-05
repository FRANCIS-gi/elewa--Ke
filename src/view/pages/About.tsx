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
            <HomePage >
                
                <img className="background-img" alt="People" src={People} /> {/* Render an image with the provided 'imgSrc' prop */}
                <div >    
                    <div className="homepage-group"> {/* Render a div with the class name 'homepage-group' */}
                        <h2 className="subtitle">Trade, not aid</h2> {/* Render a subtitle */}
                        <h1 className="title">Southern innovations addressing global problems</h1> {/* Render a title */}
                    </div>
                </div>
            
            </HomePage> {/* Render the HomePage component with the 'imgSrc' prop set to the imported 'People' image */}
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
