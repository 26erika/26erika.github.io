import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="title-home">
          <h1 className="title-name">Erika Sánchez</h1>
          <h3 className="title-ocupation">Front-end Developer</h3>
        </div>
        <div className="meImage">
          <img src="https://i.ibb.co/7SY7hSK/Whats-App-Image-2019-09-29-at-7-54-30-PM.jpg" />
        </div>
        <div class="media">
          <a
            href="https://mx.linkedin.com/in/erika-sanchez-murguia"
            target="_blank"
          >
            <img class="icon" src="https://i.ibb.co/dfTM8Bf/My-Post.png" />
          </a>
          <a href="https://github.com/26erika" target="_blank">
            <img class="icon" src="https://i.ibb.co/8KjHJRM/My-Post-2.png" />
          </a>
          <a href="mailto:develop.erika@gmail.com">
            <img class="icon" src="https://i.ibb.co/HT3v137/My-Post-1.png" />
          </a>
        </div>
      </div>
    );
  }
}

export default Home;
