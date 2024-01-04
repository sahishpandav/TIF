import React from 'react';
import '../css/MyCarousel.css';
import CarouselImg1 from '../assets/carousel-items/canteen.jpg';
import CarouselImg2 from '../assets/carousel-items/fund.jpg';
import CarouselImg3 from '../assets/carousel-items/intro.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Card, Stack, Heading, Text, CardBody, Image} from '@chakra-ui/react'

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
                <Carousel responsive={responsive}
                 showDots={true} 
                 partialVisible={true}
                 autoPlay={true}
                swipeable={true}
                draggable={true}
                infinite={true} >
                    <div>
                        <Card maxW='sm'> 
                            <CardBody>
                                <Image
                                    src={CarouselImg3}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Living room Sofa</Heading>
                                    <Text>
                                        This sofa is perfect for modern tropical spaces, baroque inspired
                                        spaces, earthy toned spaces and for people who love a chic design with a
                                        sprinkle of vintage design.
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                    <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src={CarouselImg1}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>The Canteen Talks</Heading>
                                    <Text>
                                        This sofa is perfect for modern tropical spaces, baroque inspired
                                        spaces, earthy toned spaces and for people who love a chic design with a
                                        sprinkle of vintage design.
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                    <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src={CarouselImg3}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Stock Analyse Workshop</Heading>
                                    <Text>
                                        This sofa is perfect for modern tropical spaces, baroque inspired
                                        spaces, earthy toned spaces and for people who love a chic design with a
                                        sprinkle of vintage design.
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    </div>
                    <div>
                    <Card maxW='sm'>
                            <CardBody>
                                <Image
                                    src={CarouselImg2}
                                    alt='Green double couch with wooden legs'
                                    borderRadius='lg'
                                />
                                <Stack mt='6' spacing='3'>
                                    <Heading size='md'>Market Cap Discussion</Heading>
                                    <Text>
                                        This sofa is perfect for modern tropical spaces, baroque inspired
                                        spaces, earthy toned spaces and for people who love a chic design with a
                                        sprinkle of vintage design.
                                    </Text>
                                </Stack>
                            </CardBody>
                        </Card>
                    </div>
                </Carousel>
            </div>
        </>
    );
}

export default MyCarousel;