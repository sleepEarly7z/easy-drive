import React from "react";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "normalize.css/normalize.css";
import "./slider-animations.css";
import "./styles.css";

import imageOne from '../../../assets/images/jpg/slider-image-one.jpg'
import imageTwo from '../../../assets/images/jpg/slider-image-two.jpg'
import imageThree from '../../../assets/images/jpg/slider-image-three.jpg'

const sliderContent = [
  {
    title: "Welcome to the Easy-Drive platform",
    description:
      "This is a platform for locals and new immigrants in Canada to find, rate, and review certified instructors.",
    button: "Learn More",
    image: imageOne,
    user: "Surex"
  },
  {
    title: "Find you an ideal driving instructor",
    description:
      "We are here with you to find a best matched instructor based on your needs and preferences.",
    button: "Explore",
    image: imageTwo,
    user: "Motorcycle Riding Centers"
  },
  {
    title: "Need help?",
    description:
      "We are a group of ambitious international students working 24/7, if you encounter any technical issues, please feel free to contact us.",
    button: "Contact us",
    image: imageThree,
    user: "Vitalii Stock"
  }
];

const ImageSlider = () => (
    <div className="ImageSlider">
      <Slider className="slider-wrapper" autoplay={3000}>
        {sliderContent.map((item, index) => (
          <div
            key={index}
            className="slider-content"
            style={{ background: `url(${item.image}) no-repeat center center` }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <button className="imageSlider-button">{item.button}</button>
            </div>
            <section>
              <img src={item.image} alt={item.user} />
              <span>
                Posted by <strong>{item.user}</strong>
              </span>
            </section>
          </div>
        ))}
      </Slider>
    </div>
  );

  export default ImageSlider;