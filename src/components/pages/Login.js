import React, { Component } from 'react'

class Login extends Component {
    render() {
        return (
            <div className="bg-light">
                <div className="container mb-5">
                    <div class="container">
                        <div class="row">
                            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                                <div class="card card-signin my-5">
                                    <div className="card-body">
                                        <h5 className="card-title text-center">Sign In</h5>
                                        <form className="form-signin">
                                            <div className="form-label-group">
                                                <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                                                <label htmlFor="inputEmail">Email address</label>
                                            </div>

                                            <div className="form-label-group">
                                                <input type="password" id="inputPassword" class="form-control" placeholder="Password" required />
                                                <label htmlFor="inputPassword">Password</label>
                                            </div>

                                            <div className="custom-control custom-checkbox mb-3">
                                                <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                                <label class="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                            </div>
                                            <button className="btn btn-lg btn-warning btn-block text-uppercase" type="submit">Sign in</button>
                                            <hr className="my-4" />
                                            <button className="btn btn-lg btn-google btn-block text-uppercase" type="submit"><i class="fab fa-google mr-2"></i> Sign in with Google</button>
                                            <button className="btn btn-lg btn-facebook btn-block text-uppercase" type="submit"><i class="fab fa-facebook-f mr-2"></i> Sign in with Facebook</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}

export default Login