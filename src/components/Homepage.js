import React from 'react';
import '../css/Homepage.css';
import bull from "../assets/bull_tif.png";
import CarouselImg1 from '../assets/carousel-items/canteen.jpg';
import CarouselImg2 from '../assets/carousel-items/fund.jpg';
import CarouselImg3 from '../assets/carousel-items/intro.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Homepage(props) {
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
        <div className='container text-center my-5 justify-content-center'>
            <div className='row'>
                <div className='col-lg-4 col-md-12 bull'>
                    <img src={bull} alt="" className="Homepage-bull" />
                </div>
                <div className='col-lg-6 col-md-12 Homepage-content'>
                    <h2 className='Homepage-title'>Goals</h2>
                    <h3 className='Homepage-subtitle'>The Investment Forum</h3>
                    <p className="Homepage-description">
                        Your Premier Destination for Investment and Finance Insights at VIT
                        Pune. Discover a wealth of curated content encompassing stocks, real
                        estate, cryptocurrencies, mutual funds, and more. Unleash the power
                        of knowledge to supercharge your financial growth, because at TIF,
                        we're here to help you multiply your bank account digits. Join us
                        today and embark on your journey to financial success!

                        hello this is edit by chinmay.

                        this is my
                    </p>
                    <button className="btn btn-outline-success my-2 my-sm-0 Homepage-member-btn" id="login">
                        <span>Be a member</span>
                    </button>
                </div>
            </div>

            {/* carousel */}
            <div className='my-10 Homepage-carousel'>
                <Carousel responsive={responsive} showDots={true} partialVisible={true}>
                    <div>
                        <img src={bull} alt="" className="Homepage-carousel-image" />
                    </div>
                    <div>
                        <img src={CarouselImg1} alt="" className="Homepage-carousel-image" /> 
                    </div>
                    <div>
                        <img src={CarouselImg2} alt="" className="Homepage-carousel-image" />
                    </div>
                    <div>
                        <img src={CarouselImg3} alt="" className="Homepage-carousel-image" />
                    </div>
                </Carousel>
            </div>

        </div>
    );
}

export default Homepage;