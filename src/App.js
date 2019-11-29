import React from 'react';
import { BrowserRouter as HashRouter, Route, NavLink } from "react-router-dom";
import './App.css';
import About from './components/about';
import Projects from './components/projects';
import Modal from './components/modal';
import GitHub from "./images/github.png";
import Linkedin from "./images/linkedin.png"
import Mail from "./images/mail.png"

function App() {
  return (
    <div className="App">
      <HashRouter basename='/portfolio'>
      <header className="App-header">
      <div>
              <ul className= 'navRouter'>
                  <li><NavLink to = '/' >Projects</NavLink></li>
                  <li><NavLink to = '/about' >About me</NavLink></li>
                  <li className="media">
            <a href="https://mx.linkedin.com/in/erika-sanchez-murguia"
            target="_blank" rel="noopener noreferrer" ><img className="icon" alt="linkedin" src={Linkedin}></img></a>
            <a href="https://github.com/26erika"
            target="_blank" rel="noopener noreferrer" ><img className="icon" alt="github" src={GitHub}></img></a>
            <a href="mailto:develop.erika@gmail.com"
            target="_blank" rel="noopener noreferrer" ><img className="icon" alt="email" src={Mail}></img></a>
                  </li>
              </ul>
            </div>
      </header>
      <body>
          <Route exact path='/' component={Projects}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Modal}/>
      </body>
      </HashRouter>
    </div>
  );
}

export default App;
