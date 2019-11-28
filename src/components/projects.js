import React, { Component } from "react";
import TV from "../images/80sTV.png";
import Modal from "./modal";
import Planet from "../images/planet.png"

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
          <div className='demo-title'>
          <img className="img-project my-notes" src={TV} alt="tv" onClick={Modal}></img>
            <a href="https://26erika.github.io/my-notes/">
              <p className="title-project"><img className="planet" src={Planet}></img>My Notes</p>
            </a>
            <p className="title-description">My Notes is a notes app designed for any device in which through authentication you can create, edit and delete notes.</p>
            <p className="title-description">Technology used:</p>
            <p className="title-description">React, CSS, Firebase</p>
          </div>
          <div className='demo-title'>
          <img className="img-project md-links" src={TV} alt="tv"></img>
            <a href="https://26erika.github.io">
              <p className="title-project"><img className="planet" src={Planet}></img>Md Links</p>
            </a>
            <p className="title-description">Library developed with Node.Js to analyze Markdown files and be able to show a statistical count of the status and total links.</p>
            <p className="title-description">Technology used:</p>
            <p className="title-description">Node.js, Npm, Git, JavaScript, Jest</p>
          </div>
          <div className='demo-title'>
          <img className="img-project churrolatte" src={TV} alt="tv"></img>
            <a href="https://26erika.github.io/churrolatte/">
              <p className="title-project"><img className="planet" src={Planet}></img>Churrolatte</p>
            </a>
            <p className="title-description">Churrolatte is a tablet app designed as a restaurant order system, through this, the waiter can take the order, send to the kitchen and collect; And in the kitchen, view the orders in order of seniority and when finished send the order status to the waiter.</p>
            <p className="title-description">Technology used:</p>
            <p className="title-description">React, CSS, Mongo Db, Express, Node.Js, Heroku</p>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Projects;
