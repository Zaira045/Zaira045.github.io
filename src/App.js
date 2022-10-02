// import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './CssFiles/about.css';
import './CssFiles/navBar.css';
import './CssFiles/projects.css';
import './CssFiles/contactMe.css';
import ProjectContainer from './Sections/projects';
import NavBarContainer from './Sections/navbar';
import AboutContainer from './Sections/about';
import ContactMe from './Sections/contactMe';

function App() {
  return (
    <div>
      {/* <div>
        <button onClick={}>
          Hello
        </button>
        
        </div> */}
      <NavBarContainer></NavBarContainer>
      <AboutContainer></AboutContainer>
      <ProjectContainer></ProjectContainer>
      <ContactMe></ContactMe>
    </div>
  );


}

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
