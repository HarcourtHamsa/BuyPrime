import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from "react-redux"
import { firebaseConnect } from 'react-redux-firebase'
import Footer from '../layout/Footer'
import { Redirect, Link } from 'react-router-dom'
import { notifyUser } from '../../actions/notifyAction'
import Alert from "../layout/Alert"

class Login extends Component {
    state = {
        email: "",
        password: "",
        isLoggedIn: false,
    }
    // event handler to handle submit 
    handleSubmit = e => {
        e.preventDefault();

        const { firebase, notifyUser } = this.props;
        const { email, password } = this.state

        firebase.login({
            email,
            password
        })
            .then(() => this.setState({ isLoggedIn: true }))
            .catch(err => notifyUser("Invalid Login credentials", "error"))


    }
    // event handler to handle change
    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }
    // life cycle method
    render() {
        const { message, messageType } = this.props.notify
        const { isLoggedIn } = this.state

        if (isLoggedIn) {
            return <Redirect to="/dashboard" />
        }
        return (
            <div className="bg-light">
                <div className="container mb-5">
                    <div className="container">
                        <div className="row">
                            <p className="text-primary small font-weight-bold mt-5">
                                <Link to="/">&#186; Back to home</Link></p>

                            <div className="col-sm-9 col-md-7 col-lg-5 mx-auto">
                                <div class="card card-signin my-5">
                                    <div className="card-body">
                                        {message ?
                                            <Alert message={message} messageType={messageType} /> :
                                            null}
                                        <p className="h3 text-center mt-2"><b><span style={logoStyle}>Buy</span>Prime &trade;</b></p>
                                        <form className="form-signin" onSubmit={this.handleSubmit}>
                                            <label htmlFor="inputEmail">Email address</label>
                                            <div className="form-label-group">
                                                <input
                                                    type="email"
                                                    id="inputEmail"
                                                    className="form-control"
                                                    name="email"
                                                    onChange={this.handleChange}
                                                    value={this.state.email}
                                                    required />

                                            </div>
                                            <label htmlFor="inputPassword">Password</label>
                                            <div className="form-label-group">
                                                <input
                                                    type="password"
                                                    id="inputPassword"
                                                    class="form-control"
                                                    name="password"
                                                    onChange={this.handleChange}
                                                    value={this.state.password}
                                                    required />

                                            </div>

                                            <div className="custom-control custom-checkbox mb-3">
                                                <input
                                                    type="checkbox"
                                                    className="custom-control-input"
                                                    id="customCheck1" />
                                                <label className="custom-control-label" htmlFor="customCheck1">Remember password</label>
                                            </div>
                                            <button className=" pl-5 pr-5 btn text-white orange-gradient shadow font-weight-bold" type="submit">Sign in &#187;</button>
                                        </form>
                                        <small>Don't have an account? <Link to="/register">Register</Link></small>
                                    </div>
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
// default prop type
Login.propTypes = {
    firebase: PropTypes.object.isRequired
}
const logoStyle = {
    color: 'orangeRed',
    fontWeight: 'bolder'
}

export default compose(
    firebaseConnect(),
    connect((state, props) => ({
        notify: state.notify
    }), { notifyUser })
)(Login)

