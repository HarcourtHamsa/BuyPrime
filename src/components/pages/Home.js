import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom'
import Footer from '../layout/Footer';
import Header from "../layout/Header"

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
                <Header />
                {/* jumbotron section */}
                <Fade left>
                    <div className="jumbotron jumbotron-fluid header" style={{ height: "600px" }}>
                        <div className="container mt-5 text-center">
                            <p className="h1 font-weight-bold">Online Transactions</p>
                            <p>Buy prime gurantees safe , fast and secure online transactions.</p>
                            <Link to="/login" className="btn orange-gradient btn-rounded pl-5 pr-5 shadow font-weight-bold p-3 mr-3">Get started &#187;</Link>

                        </div>
                    </div>
                </Fade>

                {/* Timer Section */}
                <div className="container text-center mt-5 mb-5">
                    <h3 className=" font-weight-bold">Trusted By Over 1000+ Nigerians</h3>
                    <p className="">Buy Prime is trusted by many nigerians in handling online transations</p>
                </div>

                {/* About Section */}
                <div className="orange-gradient p-5">
                    <div className="container mb-5">
                        <div className="row mb-5">
                            <div className="col-sm">
                                <img src="https://assets.paystack.com/assets/img/content/masonry/_768x512_crop_center-center_60_line/171021PSW119-compressor.jpg"
                                    alt="buyprime event"
                                    className="img-fluid thumbnail rounded-lg" />
                            </div>
                            <div className="col-sm">
                                <h3 className="wavy">Who are we?</h3>
                                <p>BuyPrime , owned by Pxpress Enterprise Nigeria, is a Nigerian
                                    owned business whose aim is to bring you an effortless way to
                                    pay bills and help you out when you are in need of urgent online
                                    transactions.
                            </p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm">
                                <h3 className="wavy">What we do?</h3>
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
                <h3 className="text-center mt-5 mb-5 text-muted wavy">OUR PRODUCTS</h3>
                <div className="container">
                    <div className="row text-center mb-3">
                        <div className="col-sm">
                            <div className="card border-0 shadow">
                                <div className="card-body">
                                    <h3>Data plans</h3>
                                    <p>
                                        Buy data plans for all service providers in Nigeria without
                                            stress. Did I forget to mention that we have the best rates available!
                                </p>
                                    <Link to="/login" className="btn yellow-gradient">Buy now</Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm">
                            <div className="card border-0 shadow">
                                <div className="card-header" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8q3MGHJDU4Omt0wsRztaTXbUrUvB03xbuP5C2S_q9pZSSuAW3&s')" }}></div>
                                <div className="card-body">
                                    <h3>Airtime VTU</h3>
                                    <p>
                                        Buy data plans for all service providers in Nigeria without
                                        stress. Did I forget to mention that we have the best rates available!
                                </p>
                                    <Link to="/login" className="btn yellow-gradient">Start now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card border-0 shadow">
                                <div className="card-header" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8q3MGHJDU4Omt0wsRztaTXbUrUvB03xbuP5C2S_q9pZSSuAW3&s')" }}></div>
                                <div className="card-body">
                                    <h3>Bills payment</h3>
                                    <p>
                                        Want to pay for bills but don't have the time? No worries, BuyPrime
                                        handles that for you. With few steps you'll be up and running
                                </p>
                                    <Link to="/login" className="btn yellow-gradient">Start now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row text-center mt-3">
                        <div className="col-sm">
                            <div className="card border-0 shadow">
                                <div className="card-header" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTR_j4cutloOD00dqT_FUTd4gkqU8yTvrApJB8agx6WcAPW6U-R&s')" }}></div>
                                <div className="card-body">
                                    <h3>Airtime2cash</h3>
                                    <p>
                                        Out of cash? BuyPrime got you covered. Convert your
                                        airtime to cash at the best rates
                                </p>
                                    <Link to="/login" className="btn yellow-gradient">Convert now</Link>
                                </div>
                            </div>

                        </div>
                        <div className="col-sm">
                            <div className="card border-0 shadow">
                                <div className="card-header" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8q3MGHJDU4Omt0wsRztaTXbUrUvB03xbuP5C2S_q9pZSSuAW3&s')" }}></div>
                                <div className="card-body">
                                    <h3>Retailer website</h3>
                                    <p>
                                        Want quality websites? we've got the right ones that will
                                        help your business scale
                                </p>
                                    <Link to="/login" className="btn yellow-gradient">Buy now</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm">
                            <div className="card border-0 shadow">
                                <div className="card-header" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8q3MGHJDU4Omt0wsRztaTXbUrUvB03xbuP5C2S_q9pZSSuAW3&s')" }}></div>
                                <div className="card-body">
                                    <h3>Fashion</h3>
                                    <p>
                                        At Buyprime, we follow fashion trends and give you
                                        fashion tips that will make you stand out
                                </p>
                                    <Link to="/login" className="btn yellow-gradient">Start now</Link>
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
                            <div className="col-lg-12">
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
                                <div className="form-group">
                                    <input type="submit" name="btnSubmit" className="btnContact btn btn-warning" value="Send Message" />
                                </div>
                            </div>
                            <div class="col-md-6">

                            </div>
                        </div>
                    </form>
                </div>
                <Footer />
            </div >
        )
    }
}

// const logoStyle = {
//     color: 'orangeRed',
//     fontWeight: 'bolder'
// }


export default Home