import React from 'react';
import '../css/Homepage.css';
// import bull from "../assets/bull_tif.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-multi-carousel/lib/styles.css";
import MyCarousel from './MyCarousel';
import { Button, ButtonGroup, Stack, Box } from '@chakra-ui/react'

function Homepage(props) {

    return (
        <div className='container text-center my-5 justify-content-center'>
            <div className='row'>
                {/* <div className='col-lg-4 col-md-12 bull'>
                    <img src={bull} alt="" className="Homepage-bull" />
                </div> */}
                <div className='col-lg-12 col-md-12 Homepage-content'>
                    <h2 className='Homepage-title Homepage-shadows'>Learn Analyse Invest</h2>
                    <Stack direction='column'>
                            <Box
                                display='flex'
                                alignItems='center'
                                justifyContent='center'
                                width='100%'
                                py={20}
                                bgPosition='center'
                                bgRepeat='no-repeat'
                                mb={15}
                            >
                                <ButtonGroup gap='4' size="lg">
                                    <Button colorScheme='blackAlpha'>Explore</Button>
                                </ButtonGroup>
                            </Box>
                    </Stack>
                    <h3 className='Homepage-subtitle Homepage-change_content'>- </h3>     
                </div>
            </div>
            {/* carousel */}
            <MyCarousel />
        </div>


    );
}

export default Homepage;