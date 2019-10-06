import React, { Component } from 'react'
import Fade from 'react-reveal/Fade';

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
                    <div className="jumbotron jumbotron-fluid " id='intro-image'>
                        <b className="lead m-3">Buy<span style={logoStyle}>Prime</span></b>
                        <div className="">
                            <div className="m-5 text-center">
                                <h1>We provide solutions for your business</h1>
                                <p className="">Buyprime is a web app that enables uyprime is a web app </p>
                                <a className="btn btn-outline-light shadow rounded-lg m-2" href="/">Sign up for free</a>
                                <a className="btn btn-outline-light shadow rounded-lg m-2" href="/">Sign in</a>
                            </div>
                            <div className="icons">
                                <i className="fas fa-facebook" />
                                <i className="fas fa-twitter" />
                                <i className="fas fa-instagram" />
                                <i className="fas fa-github" />
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade bottom>
                    {/* icon section */}
                    <div className="mt-5 mb-5 p-5">
                        <div className="container ">
                            <div className="row">
                                <div className="col-sm">
                                    <div className="card p-3 rounded-lg shadow">
                                        <div className="card-body">
                                            <h3>Bank account sync</h3>
                                            <p>From startup to scale-up, we can support
                                     you at every stage of your businesses’ growth</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="card p-3 rounded-lg shadow">
                                        <div className="card-body">
                                            <h3>Multiple wallets</h3>
                                            <p>From startup to scale-up, we can support
                                     you at every stage of your businesses’ growth</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <div className="card p-3 rounded-lg shadow">
                                        <div className="card-body">
                                            <h3>Security</h3>
                                            <p>From startup to scale-up, we can support
                                     you at every stage of your businesses’ growth</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>

                {/* main section */}
                <h3 className="text-center p-5 text-muted">What makes us so unique ?</h3>
                <Fade right>
                    <div className="container mt-5 mb-5 ">
                        <div className="row">
                            <div className="col-sm">
                                <img src="https://assets.paystack.com/assets/img/content/masonry/_768x512_crop_center-center_60_line/171021PSW119-compressor.jpg" alt="buyprime event" className="img-fluid thumbnail rounded-lg" />
                            </div>
                            <div className="col-sm">
                                <h1>Get paid and sent</h1>
                                <p>
                                    Paystack builds technology to help Africa’s best businesses grow - from new startups, to market leaders launching new business models.
                                    We make it easy for businesses to accept secure payments from multiple local and global payment channels, and then we provide tools to
                                    help you retain existing customers, and acquire new ones.
                                   <br />
                                    <a href="/">Learn more</a>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="container mt-5 mb-5 ">
                        <div className="row ">
                            <div className="col-sm">
                                <h1>Transfer funds</h1>
                                <p>
                                    Paystack builds technology to help Africa’s best businesses grow - from new startups, to market leaders launching new business models.
                                    We make it easy for businesses to accept secure payments from multiple local and global payment channels, and then we provide tools to
                                help you retain existing customers, and acquire new ones.<br />
                                    <a href="/">Learn more</a>
                                </p>
                            </div>
                            <div className="col-sm">
                                <div className="col-sm">
                                    <img src="https://assets.paystack.com/assets/img/content/masonry/_768x512_crop_center-center_60_line/171021PSW119-compressor.jpg" alt="buyprime event" className="img-fluid thumbnail rounded-lg" />
                                </div>
                            </div>
                        </div>
                    </div>
                </Fade>


                <div className="bg-light mt-5  p-5">
                    <div className="container ">
                        <h3 className="text-center p-5 text-muted">What we can offer ?</h3>
                        <div className="row">
                            <div className="col-sm">
                                <div className="card p-3 rounded-lg shadow">
                                    <div className="card-body">
                                        <h3>Paystack for Global Brands</h3>
                                        <p>From startup to scale-up, we can support
                                     you at every stage of your businesses’ growth</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm">
                                <div className="card p-3 rounded-lg shadow">
                                    <div className="card-body">
                                        <h3>Paystack for Entrepreneurs</h3>
                                        <p>From startup to scale-up, we can support
                                     you at every stage of your businesses’ growth</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <h3 className="text-center p-5 text-muted">Let's talk</h3>
            </div >
        )
    }
}

const logoStyle = {
    color: 'orangeRed',
    fontWeight: 'bolder'
}


export default Home