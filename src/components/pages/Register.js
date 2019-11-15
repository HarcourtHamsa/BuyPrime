import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Footer from '../layout/Footer'


export default class Register extends Component {
    render() {
        return (
            <div className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 col-xl-9 mx-auto">
                            <div className="card card-signin flex-row my-5" >
                                <div className="card-body" style={{ borderStyle: "dashed" }}>
                                    <p className="h2 text-center mt-2"><b><span style={logoStyle}>Buy</span>Prime &trade;</b></p>

                                    <h6 className="card-title text-center">Register</h6>
                                    <form className="form-signin">
                                        <label htmlFor="inputUserame">Username</label>
                                        <div className="form-label-group">
                                            <input type="text" id="inputUserame" className="form-control" placeholder="Username" required autofocus />

                                        </div>
                                        <label htmlFor="inputEmail">Email address</label>
                                        <div className="form-label-group">
                                            <input type="email" id="inputEmail" className="form-control" required />

                                        </div>

                                        <hr />
                                        <label htmlFor="inputPassword">Password</label>
                                        <div className="form-label-group">
                                            <input type="password" id="inputPassword" className="form-control" required />

                                        </div>
                                        <label htmlFor="inputConfirmPassword">Confirm password</label>
                                        <div className="form-label-group">
                                            <input type="password" id="inputConfirmPassword" className="form-control" required />

                                        </div>

                                        <button className="btn btn-warning rounded-0 btn-block text-uppercase" type="submit">Register</button>
                                        <Link className="d-block text-center mt-2 small" to="/login">Sign In</Link>

                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

const logoStyle = {
    color: 'orangeRed',
    fontWeight: 'bolder'
}
