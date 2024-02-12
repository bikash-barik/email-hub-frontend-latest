// import React from 'react';
// import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
// import 'pure-react-carousel/dist/react-carousel.es.css';

// const Carousel = () => {
//   return (
//     <CarouselProvider
//      naturalSlideWidth={100}
//      naturalSlideHeight={120}
//      totalSlides={3}
//     >

//     <Slider>
//       <Slide index={0}>Slide 1</Slide>
//       <Slide index={1}>Slide 2</Slide>
//       <Slide index={2}>Slide 3</Slide>
//     </Slider>

//     <ButtonBack>Back</ButtonBack>
//     <ButtonNext>Next</ButtonNext>
//    </CarouselProvider>
//   );
// };
// export default Carousel;

import React from "react";
import ReactDOM from "react-dom";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Art1 from "../image/artboard (1).webp";
import Art2 from "../image/artboard (2).webp";
import Art3 from "../image/artboard (3).webp";
import Art4 from "../image/artboard (4).webp";
import Art5 from "../image/artboard (5).webp";
import Art6 from "../image/artboard (6).webp";
import Art7 from "../image/artboard (7).webp";

import "./../../common/service.css";

const CarouselPage = () => {
  return (
    <ScrollingCarousel
      className="ScrollingCarousel"
      show={3.5}
      slide={2}
      transition={0.5}
      autoplay={true}
      infinite={true}
    >
      <img src={Art7} className="" />
      <img src={Art6} className="" />
      <img src={Art5} className="" />
      <img src={Art4} className="" />
      <img src={Art3} className="" />
      <img src={Art2} className="" />
      <img src={Art1} className="" />
    </ScrollingCarousel>
  );
};
export default CarouselPage;
