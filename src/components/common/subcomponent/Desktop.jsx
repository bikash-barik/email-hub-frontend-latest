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
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const CarouselPage = () => {
  return (
    <Carousel>
      <div style={{ height: "30rem" }}>
        <img src="https://placehold.co/100x100" />
        <p className="legend">Legend 1</p>
      </div>
      <div style={{ height: "30rem" }}>
        <img src="https://placehold.co/200x200" />
        <p className="legend">Legend 2</p>
      </div>
      <div style={{ height: "30rem" }}>
        <img src="https://placehold.co/300x300" />
        <p className="legend">Legend 3</p>
      </div>
    </Carousel>
  );
};
export default CarouselPage;
