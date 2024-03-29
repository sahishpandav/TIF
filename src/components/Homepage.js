import React from 'react';
import '../css/Homepage.css';
import bull from "../assets/bull_tif.png"
import 'bootstrap/dist/css/bootstrap.min.css';

function Homepage(props) {
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
                    </p>
                    <button className="btn btn-outline-success my-2 my-sm-0 Homepage-member-btn" id="login">
                        <span>Be a member</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Homepage;