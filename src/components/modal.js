import React, { Component } from "react";
import TV from "../images/80sTV.png";

class Modal extends Component {
  render() {
    return (
      <div className="container-2">
        <div className="demo-projects-2">
          <img className="img-project-2 my-notes-2" src={TV} alt="tv"></img>
          <div className='demo-title-2'>
            <p>This is a project created with React.js and Firebase</p>
          </div>
          <img className="img-project-2 md-links-2" src={TV} alt="tv"></img>
          <div className='demo-title-2'>
            <p>This is a project created with React.js and Firebase</p>
          </div>
          <img className="img-project-2 churrolatte-2" src={TV} alt="tv"></img>
          <div className='demo-title-2'>
            <p>This is a project created with React.js and Firebase</p>
          </div>
        </div>
        
      </div>
    );
  }
}

export default Modal;
