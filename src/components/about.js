import React, { Component } from "react";
import photo from "../images/polaroid+me.png";

class About extends Component {
  render() {
    return (
      <div className="content">
        <div className="header">
          <h1 className="title-name">Erika Sánchez</h1>
          <h3 className="title-ocupation">Front-end Developer</h3>
        </div>
        <div className="about">
          <h4 className="description"><img className="meImage" src={photo} alt="me"/></h4>
        </div>
        <div className="about">
          <h4 className="description">I combine my talents as a self-taught artist with my knowledge in developer to create interactive web apps.</h4>
          <h4 className="description">I live in Jalisco, I studied interior design and a frontend developer bootcamp. I love the technologie and the things that made with it.</h4>
          <h4 className="description">I have experience working with JavaScript, HTML5, CSS3, React.js, Firebase, Node.js. and Unity with C#</h4>
          <h4 className="description">When I didn't work, i like study, draw and i fan of riddles.</h4>
        </div>
        
      </div>
    );
  }
}

export default About;
