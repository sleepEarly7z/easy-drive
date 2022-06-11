import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Slider.css";

const Slider = ({ data }) => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <section className="slider-section">
      <div className="slider-title">
        <h2 className="slider-heading-text">top recommended</h2>
      </div>
      <div className="section-center">
        {people.map((item, indexPeople) => {
          const { id, image, name, title, rating, description } = item;
          let position = "nextSlide";
          if (indexPeople === index) {
            position = "activeSlide";
          }
          if (
            indexPeople === index - 1 ||
            (index === 0 && indexPeople === people.length - 1)
          ) {
            position = "lastSlide";
          }
          return (
            <article className={position} key={id}>
              <NavLink to='/profile-ratereview'>
                <img src={image} alt={name} className="person-slider-img" />
              </NavLink>
              <h4 className="slider-heading-text">{name}</h4>
              <p className="slider-title">
                {title}
                <br />
                Rating: {rating.toFixed(1)}/5.0
              </p>
              <p className="slider-text">{description}</p>
            </article>
          );
        })}
        <button className="slider-prev" onClick={() => setIndex(index - 1)}>
          <i className="fa-solid fa-chevron-left" />
        </button>
        <button className="slider-next" onClick={() => setIndex(index + 1)}>
          <i className="fa-solid fa-chevron-right" />
        </button>
      </div>
    </section>
  );
};

export default Slider;
