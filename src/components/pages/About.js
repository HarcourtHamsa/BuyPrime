import React from 'react'
import Fade from 'react-reveal/Fade';

function About() {

    return (
        <div className="bg-light">
            <Fade bottom>
                <div className="jumbotron mb-5 bg-info">
                    <div className="text-center">
                        <h1>About Us</h1>
                        <p className="text-muted">Making online transactions easier</p>
                    </div>
                </div>
            </Fade>

            <div className="container mt-5 mb-5 ">
                <div className="row">
                    <div className="col-sm">
                        <img src="https://assets.paystack.com/assets/img/content/masonry/_768x512_crop_center-center_60_line/171021PSW119-compressor.jpg" alt="buyprime event" className="img-fluid thumbnail rounded-lg" />
                    </div>
                    <div className="col-sm">
                        <h1>Who are we?</h1>
                        <p>
                            BuyPrime , owned by Pxpress Enterprise is a Nigerian owned business
                            whoe aim is to bring it customers an effortless way to pay billsonline and help 
                            customers also ou of the misery of urgent top up. BuyPrime is one one the fastest 
                            growing online platforms for bill payments like EEDC, Gotv, DSTV, Startimes and Waec 
                            scratch pins
                                   <br />
                            <a href="/">Learn more</a>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container mb-5">
                <div className="row">
                    <div className="col-sm">
                        <p className="text-muted">TRY BUYPRIME NOW</p>
                        <h1>Start accepting payments now</h1>
                        <a href="/" className="btn btn-success">Create free account</a>
                    </div>
                    <div className="col-sm"></div>
                </div>
            </div>
        </div >
    )
}

export default About