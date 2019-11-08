import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import './App.css';
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
                  <li><NavLink to = '/' >Projects</NavLink></li>
                  <li><NavLink to = '/about' >About me</NavLink></li>
                  <li><NavLink to = '/contact' ><div className="media">
          <a href="https://mx.linkedin.com/in/erika-sanchez-murguia"
            target="_blank"><i class="material-icons">public</i></a>
            <a href="https://github.com/26erika"
            target="_blank"><i class="material-icons">device_hub</i></a>
            <a href="mailto:develop.erika@gmail.com"
            target="_blank"><i class="material-icons">mail_outline</i></a>
          </div></NavLink></li>
              </ul>
            </div>
      </header>
      <body>
          <Route exact path='/' component={Projects}/>
          <Route exact path='/about' component={About}/>
          <Route exact path='/contact' component={Skills}/>
      </body>
      </Router>
    </div>
  );
}

export default App;
