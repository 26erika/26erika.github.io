import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';
import Home from './components/home';
import About from './components/about';
import Projects from './components/projects';
import Skills from './components/skills';

function App() {
  return (
    <div className="App">
      <Router>
      <header className="App-header">
      <div>
              <ul className= 'navRouter'>
                  <li><NavLink to = '/' >Home</NavLink></li>
                  <li><NavLink to = '/about-me' >About me</NavLink></li>
                  <li><NavLink to = '/projects' >Projects</NavLink></li>
                  <li><NavLink to = '/skills' >Skills</NavLink></li>
              </ul>
            </div>
      </header>
      <body>
          <Route exact path='/' component={Home}/>
          <Route exact path='/about-me' component={About}/>
          <Route exact path='/projects' component={Projects}/>
          <Route exact path='/skills' component={Skills}/>
      </body>
      </Router>
    </div>
  );
}

export default App;
