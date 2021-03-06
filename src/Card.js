import React from "react";

const Card = ({ title = "NA", buttonText = "My Button", imageUrl }) => (
  <div className="col-4">
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={imageUrl}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-success">
          {buttonText}
        </a>
      </div>
    </div>
  </div>
);
export default Card;
