import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';
import { About } from './view/pages/About';
// import { SocialImpact } from './view/pages/SocialImpact';
// import { Invest } from './view/pages/Invest';

function App() {
  return (
    <div className="App">
      <About/>
      {/*<SocialImpact/>  */}
      {/*<Invest/>  */}


    </div>
    /*
    
      <Router>
        <div className="App">
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/social-impact">Social Impact</Link>
            </li>
            <li>
              <Link to="/invest">Invest</Link>
            </li>
          </ul>

          <Route path="/about" element={<About />} />
          <Route path="/social-impact" element={<SocialImpact />} />
          <Route path="/invest" element={<Invest />} />
        </div>
      </Router>
    */  
  );
}

export default App;
