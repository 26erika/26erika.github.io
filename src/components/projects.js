import React, { Component } from "react";
import TV from "../images/80sTV.png";
import Modal from "./modal";

class Projects extends Component {
  render() {
    return (
      <div className="container">
        <section className="title-projects">
          <h1 className="projects-title">Projects</h1>
        </section>
        <section>
          <h2 className="line function">
            Hello, I'm Erika and these are my projects.
          </h2>
        </section>
        <div className="demo-projects">
          <img className="img-project my-notes" src={TV} alt="tv" onClick={Modal}></img>
          <div className='demo-title'>
            <a href="https://26erika.github.io/my-notes/">
              <p className="title-project">My Notes</p>
            </a>
          </div>
          <img className="img-project md-links" src={TV} alt="tv"></img>
          <div className='demo-title'>
            <a href="https://26erika.github.io">
              <p className="title-project">Md Links</p>
            </a>
          </div>
          <img className="img-project churrolatte" src={TV} alt="tv"></img>
          <div className='demo-title'>
            <a href="https://26erika.github.io/churrolatte/">
              <p className="title-project">Churro latte</p>
            </a>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Projects;
