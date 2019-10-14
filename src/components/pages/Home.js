import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import Timer from "../layout/Timer"
import { Link } from 'react-router-dom'

class Home extends Component {
    //life cycle method
    constructor() {
        super()
        this.state = {
        }
    }


    // life cycle method
    render() {
        return (
            <div className="bg-light">
                {/* jumbotron section */}
                <Fade left>

                    <header>
                        <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                            <ol className="carousel-indicators">
                                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                            </ol>
                            <div className="carousel-inner" role="listbox">
                                {/* <!-- Slide One - Set the background image for this slide in the line below --> */}
                                <div className="carousel-item active" style={{backgroundImage: "url('https://images.unsplash.com/photo-1546124404-9e7e3cac2ec1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}>
                                    <div className="carousel-caption text-center my-auto">
                                        <h3 className="display-4">Better offers, quick services</h3>
                                        <p className="lead">BuyPrime is the best online platform for bills payments</p>
                                        <a href="/" className="btn btn-outline-light">LOGIN</a>
                                        <a href="/" className="btn btn-outline-light">REGISTER</a>
                                    </div>
                                </div>
                                {/* <!-- Slide Two - Set the background image for this slide in the line below --> */}
                                <div className="carousel-item" style={{backgroundImage: "url('https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}>
                                    <div className="carousel-caption text-center my-auto">
                                        <h3 className="display-4">Safe and Effortless transactions</h3>
                                        <p className="lead">Buyprime offers safe and effortless online transactions</p>
                                        <a href="/" className="btn btn-success">Create free account</a>
                                    </div>
                                </div>
                                {/* <!-- Slide Three - Set the background image for this slide in the line below --> */}
                                <div className="carousel-item" style={{backgroundImage: "url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60')"}}>
                                    <div className="carousel-caption text-center my-auto">
                                        <h3 className="display-4">24/7 Online presence</h3>
                                        <p className="lead">At BuyPrime , we boast of an active online presence</p>
                                        <a href="/" className="btn btn-outline-light">See Documentation</a>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>
                    </header>
                </Fade>

                {/* Timer Section */}
                <div className="container text-center mt-5 mb-5">
                    <div className="row">
                        <div className="col-sm">
                            <Timer
                                title="hours"
                                digits="00" />
                        </div>
                        <div className="col-sm">
                            <Timer
                                title="minnutes"
                                digits="00" />
                        </div>
                        <div className="col-sm">
                            <Timer
                                title="seconds"
                                digits="00" />
                        </div>
                    </div>
                </div>

                {/* About Section */}
                <h3 className="text-center mt-5 mb-5 text-muted">ABOUT US</h3>
                <div className="bg-warning p-5">
                    <div className="container mb-5">
                        <div className="row mb-5">
                            <div className="col-sm">
                                <img src="https://assets.paystack.com/assets/img/content/masonry/_768x512_crop_center-center_60_line/171021PSW119-compressor.jpg"
                                    alt="buyprime event"
                                    className="img-fluid thumbnail rounded-lg" />
                            </div>
                            <div className="col-sm">
                                <h3>Who are we?</h3>
                                <p>BuyPrime , owned by Pxpress Enterprise Nigeria, is a Nigerian
                                    owned business whose aim is to bring you an effortless way to
                                    pay bills and help you out when you are in need of urgent online
                                    transactions.
                            </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <h3>What we do?</h3>
                                <p>BuyPrime , owned by Pxpress Enterprise Nigeria, offers speedy
                                    and best deals for your internet data plans,airtime to cash conversion
                                    all bill payments like EEDC, Gotv, DSTV and Waec scratch pins
                            </p>
                            </div>
                            <div className="col-sm">
                                <img src="https://assets.paystack.com/assets/img/content/masonry/_768x512_crop_center-center_60_line/171021PSW119-compressor.jpg"
                                    alt="buyprime event"
                                    className="img-fluid thumbnail rounded-lg" />
                            </div>
                        </div>
                    </div>
                </div>


                {/* Products Section */}
                <h3 className="text-center mt-5 mb-5 text-muted">OUR PRODUCTS</h3>
                <div className="container">
                    <div className="row text-center mb-3">
                        <div className="col-sm">
                            <div className="card">
                                <div className="card-header" style={{ backgroundImage: "url('data:image/jpeg;base64,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')" }}></div>
                                <div className="card-body">
                                    <h3>Data plans</h3>
                                    <p>
                                        Buy data plans at best rates no matter
                                        your network
                                </p>
                                    <Link to="/login" className="btn btn-warning">Buy now</Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <div className="card-header" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8q3MGHJDU4Omt0wsRztaTXbUrUvB03xbuP5C2S_q9pZSSuAW3&s')" }}></div>
                                <div className="card-body">
                                    <h3>Airtime VTU</h3>
                                    <p>
                                        Buy data plans at best rates no matter
                                        your network
                                </p>
                                    <Link to="/" className="btn btn-warning">Subscribe now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <div className="card-header" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8q3MGHJDU4Omt0wsRztaTXbUrUvB03xbuP5C2S_q9pZSSuAW3&s')" }}></div>
                                <div className="card-body">
                                    <h3>Bills payment</h3>
                                    <p>
                                        Buy data plans at best rates no matter
                                        your network
                                </p>
                                    <Link to="/" className="btn btn-warning">Start now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center mt-3">
                        <div className="col-sm">
                            <div className="card">
                                <div className="card-header" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR_j4cutloOD00dqT_FUTd4gkqU8yTvrApJB8agx6WcAPW6U-R&s')" }}></div>
                                <div className="card-body">
                                    <h3>Airtime2cash</h3>
                                    <p>
                                        Buy data plans at best rates no matter
                                        your network
                                </p>
                                    <Link to="/" className="btn btn-warning">Convert now</Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <div className="card-header" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8q3MGHJDU4Omt0wsRztaTXbUrUvB03xbuP5C2S_q9pZSSuAW3&s')" }}></div>
                                <div className="card-body">
                                    <h3>Retailer website</h3>
                                    <p>
                                        Buy data plans at best rates no matter
                                        your network
                                </p>
                                    <Link to="/" className="btn btn-warning">Buy now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card">
                                <div className="card-header" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8q3MGHJDU4Omt0wsRztaTXbUrUvB03xbuP5C2S_q9pZSSuAW3&s')" }}></div>
                                <div className="card-body">
                                    <h3>Fashion</h3>
                                    <p>
                                        Buy data plans at best rates no matter
                                        your network.
                                </p>
                                    <Link to="/" className="btn btn-warning">Start now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact us section */}
                <div className="container contact-form mt-5">
                    <div className="contact-image">
                        <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                    </div>
                    <form method="">
                        <h3>Drop Us a Message</h3>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="form-group">
                                    <input type="text" name="txtName" className="form-control" placeholder="Your Name *" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="txtEmail" className="form-control" placeholder="Your Email *" />
                                </div>
                                <div className="form-group">
                                    <input type="text" name="txtPhone" className="form-control" placeholder="Your Phone Number *" />
                                </div>
                                <div className="form-group">
                                    <textarea name="txtMsg" className="form-control" placeholder="Your Message *" style={{ width: '100%', height: '150px' }}></textarea>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div className="form-group">
                                    <input type="submit" name="btnSubmit" className="btnContact btn btn-warning" value="Send Message" />
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div >
        )
    }
}

const logoStyle = {
    color: 'orangeRed',
    fontWeight: 'bolder'
}


export default Home