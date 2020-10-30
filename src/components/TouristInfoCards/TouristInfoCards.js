import React from "react";
import styles from "./touristInfoCards.css";

const TouristInfoCards = () => {
  return (
    <>
      <div className="card-container">
        <div className="card">
          <img src="https://picsum.photos/200/300" className="card-img-top" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="https://peoplemakeglasgow.com"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Glasgow
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://picsum.photos/200/300?grayscale"
            className="card-img-top"
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="https://picsum.photos/200/300/?blur"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Manchester
            </a>
          </div>
        </div>
        <div className="card">
          <img
            src="https://picsum.photos/seed/picsum/200/300"
            className="card-img-top"
          />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="https://visitlondon.com"
              className="btn btn-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              London
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TouristInfoCards;
