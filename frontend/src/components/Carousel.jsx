import React, { useEffect, useState } from "react";
import { carouselImages } from "../data";
import "./Carousel.css";
const Carousel = () => {
  const [currentstate, setCurrentState] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentstate === 7) {
        setCurrentState(0);
      } else {
        setCurrentState(currentstate + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentstate]);

  const bgImageStyle = {
    backgroundImage: `url(${carouselImages[currentstate].images})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "50vh",
    maxwidth: "100%",
  };

  const goToNext = (currentstate) => {
    setCurrentState(currentstate);
  };

  return (
    <div className="container-style">
      <div style={bgImageStyle}>
        <img src={bgImageStyle.backgroundImage} alt="" />
        <div className="description">
          <h1>{carouselImages[currentstate]?.title}</h1>
          <p>{carouselImages[currentstate]?.body}</p>
        </div>
        <div className="carousel-button">
          {carouselImages.map((imageSlide, currentstate) => {
            return (
              <span
                key={imageSlide.id}
                onClick={() => goToNext(currentstate)}
              ></span>
            );
          })}
        </div>
      </div>
    </div>
    // <div className="carousel-images">
    //    <ul>
    //     {carouselImages.map((item) => {
    //       return (
    //         <li key={item.id}>
    //           <img src={item.images} alt="" />
    //         </li>
    //       );
    //     })}
    //   </ul>
    // </div>
  );
};

export default Carousel;
