import React from "react";

import '../../App.css';
import {Header} from '../../components/shared/header'; // Import the Header 
import {HomePage} from '../../components/shared/homePage'; // Import the HomePage 
import {Footer} from '../../components/shared/footer'; // Import the Footer 
import {Container} from '../../components/shared/container';

import People from "../../assets/images/people.png"; // Import the People image
import PeopleIcon from "../../assets/images/people icon.png";
import Loop from "../../assets/images/loop.png";
import Globe from "../../assets/images/globe.png"


export const About = (): JSX.Element => {
    return (
        <div id="black" className="App ">
            <Header /> {/* Render the Header component */}
            <HomePage >
                
                <img className="background-img" alt="People" src={People} /> {/* Render an image with the provided 'imgSrc' prop */}
                <div >    
                    <div className="homepage-group"> {/* Render a div with the class name 'homepage-group' */}
                        <h2 className="subtitle">HOW TO RECOGNIZE AN ELEWA MEMBER</h2> {/* Render a subtitle */}
                        <h1 className="title">Dependable, Creative, Supportive, Open Minded and Fun*</h1> {/* Render a title */}
                        <p className="bottom"> *SERIOUS WHEN IT MATTERS</p>
                    </div>
                </div>
            
            </HomePage> {/* Render the HomePage component with the 'imgSrc' prop set to the imported 'People' image */}
            <Container id="grey">
                <div >
                    <h2>We Care! </h2>
                    <div className="paragraphs">
                        <p className="paragraphs">Elewa is a mission-driven organization. We make use of our cooperative and shared culture to drive the needle for the development of people and environment. We care about our growth, but also care deeply about the context surrounding us.</p>
                        <p className="paragraphs">Our investments are therefore not limited to internal ones, but contribute heavily to our community and environment. From training the next scout leaders on sustainable practices, to bridging the employment gap for junior software developers.</p>
                    </div>                  
                    
                    <div className="icons">
                        <div  >
                            <img className="about-icons" alt="Loop" src={Loop}/>
                            <h3 className="about-h">Holistic solutions </h3>
                            <p className="about-p">We go beyond a simple patch-up but develop lasting solutions through holistic design.</p>
                        </div>
                        <div>
                            <img className="about-icons" alt="PeopleIcon" src={PeopleIcon}/>
                            <h3 className="about-h" > Impact</h3>
                            <p className="about-p" >Impact as a direct, or indirect, result. All our respective organizations have underlying theories of change.</p>
                        </div>
                        <div>
                            <img className="about-icons" alt="Globe" src={Globe} />
                            <h3 className="about-h">Open data </h3>
                            <p className="about-p">Sharing is caring. We share what we learn. As proof, we've open-sourced all our internal projects.</p>
                        </div>
                    </div>
                </div>

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
