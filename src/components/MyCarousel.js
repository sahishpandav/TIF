import React from 'react';
import '../css/MyCarousel.css';
import bull from "../assets/bull_tif.png";
import CarouselImg1 from '../assets/carousel-items/canteen.jpg';
import CarouselImg2 from '../assets/carousel-items/fund.jpg';
import CarouselImg3 from '../assets/carousel-items/intro.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function MyCarousel(props) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
            partialVisibilityGutter: 30
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            partialVisibilityGutter: 30
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            partialVisibilityGutter: 30
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            partialVisibilityGutter: 30
        }
    };
    return (
        <>
            <div className='my-10 MyCarousel-carousel'>
            <Carousel responsive={responsive} showDots={true} partialVisible={true}>
                    <div>
                        <img src={bull} alt="" className="MyCarousel-carousel-image" />
                    </div>
                    <div>
                        <img src={CarouselImg1} alt="" className="MyCarousel-carousel-image" /> 
                    </div>
                    <div>
                        <img src={CarouselImg2} alt="" className="MyCarousel-carousel-image" />
                    </div>
                    <div>
                        <img src={CarouselImg3} alt="" className="MyCarousel-carousel-image" />
                    </div>
                </Carousel>
                </div>
        </>
    );
}

export default MyCarousel;