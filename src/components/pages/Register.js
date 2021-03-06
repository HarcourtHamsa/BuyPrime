import React, { Component } from 'react'
import { Link } from "react-router-dom"
import Footer from '../layout/Footer'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { connect } from "react-redux"
import { firebaseConnect } from 'react-redux-firebase'
import { notifyUser } from '../../actions/notifyAction'
import Alert from "../layout/Alert"
import { Redirect } from 'react-router-dom'


class Register extends Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirm_password: "",
        isRegistered: false
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();

        const { firebase, notifyUser } = this.props;
        const { email, password } = this.state

        firebase.createUser({
            email,
            password
        })
            .catch(err => notifyUser("User already exists", "error"))
    }

    render() {
        const { isRegistered } = this.state
        const { message, messageType } = this.props.notify

        if (isRegistered) {
            return <Redirect to="/login" />
        }
        return (
            <div className="bg-light">
                <div className="container">
                    <div className="row">
                        <p className="text-primary small font-weight-bold mt-5">
                            <Link to="/">&#186; Back to home</Link></p>

                        <div className="col-lg-10 col-xl-9 mx-auto">
                            <div className="card card-signin flex-row my-5 shadow" >
                                <div className="card-body">
                                    {message ?
                                        <Alert message={message} messageType={messageType} /> :
                                        null}
                                    <p className="h2 text-center mt-2"><b><span style={logoStyle}>Buy</span>Prime &trade;</b></p>
                                    <form className="form-signin" onSubmit={this.handleSubmit}>
                                        <label htmlFor="inputUserame">Username</label>
                                        <div className="form-label-group">
                                            <input
                                                type="text"
                                                id="inputUserame"
                                                className="form-control"
                                                placeholder="Username"
                                                name="username"
                                                value={this.state.username}
                                                onChange={this.handleChange}
                                                required />

                                        </div>
                                        <label htmlFor="inputEmail">Email address</label>
                                        <div className="form-label-group">
                                            <input
                                                type="email"
                                                id="inputEmail"
                                                className="form-control"
                                                name="email"
                                                value={this.state.email}
                                                onChange={this.handleChange}
                                                required />

                                        </div>

                                        <hr />
                                        <label htmlFor="inputPassword">Password</label>
                                        <div className="form-label-group">
                                            <input
                                                type="password"
                                                id="inputPassword"
                                                className="form-control"
                                                name="password"
                                                value={this.state.password}
                                                onChange={this.handleChange}
                                                required />

                                        </div>
                                        <label htmlFor="inputConfirmPassword">Confirm password</label>
                                        <div className="form-label-group">
                                            <input type="password"
                                                id="inputConfirmPassword"
                                                className="form-control"
                                                name="confirm_password"
                                                value={this.state.confirm_password}
                                                onChange={this.handleChange}
                                                required />

                                        </div>

                                        <button className="btn btn-primary font-weight-bold shadow pl-5 pr-5" type="submit">Register</button><br />
                                        <small>Already have an account? <Link to="/login">Sign in</Link></small>

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

// default prop type
Register.propTypes = {
    firebase: PropTypes.object.isRequired
}

export default compose(
    firebaseConnect(),
    connect((state, props) => ({
        notify: state.notify
    }), { notifyUser })
)(Register)
