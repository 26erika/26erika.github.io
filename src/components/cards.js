import React from "react";

const Card = ({ project }) => {
  const {
    index,
    picture,
    name,
    description,
    url,
    repository,
    technologies
  } = project;
  return (
    <div id={`card-${index}`} className="container">
      <div className="card-column column-0">
        <div className="card card-color">
          <div className="border"></div>
          <img src={picture} />
          <div className="details">
            <span className="index">{index + 1}</span>
            <h1>{name}</h1>
            <h3>{description}</h3>
            <button><i className="material-icons button-icon">add_circle_outline</i></button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
