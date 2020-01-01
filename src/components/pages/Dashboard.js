import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import bitcoin_img from "./bitcoin.jpg"
import giftcard_img from "./gift-cards.png"
import airtime_img from "./airtime.jpeg"
import a2c_img from "./a2c.jpeg"
import paybills_img from "./pay_bills.jpeg"
import wallet_img from "./fund_wallet.png"
import DashboardNav from '../layout/DashboardNav'
import IdleTimer from 'react-idle-timer'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { compose } from "redux"
import { firebaseConnect } from "react-redux-firebase"


class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.idleTimer = null
        this.onAction = this._onAction.bind(this)
        this.onActive = this._onActive.bind(this)
        this.onIdle = this._onIdle.bind(this)
        this.state = {
            isLoggedOut: false,
        }
    }

    _onAction(e) {
        console.log('user did something', e)
    }

    _onActive(e) {
        console.log('user is active', e)
        console.log('time remaining', this.idleTimer.getRemainingTime())
    }

    _onIdle(e) {
        const { firebase } = this.props
        firebase.logout()
        console.log('last active', this.idleTimer.getLastActiveTime())
    }

    render() {
        const { isLoggedOut } = this.state
        if (isLoggedOut) {
            return <Redirect to="/login" />
        }
        return (
            <div>
                {/* Timer component */}
                <IdleTimer
                    ref={ref => { this.idleTimer = ref }}
                    element={document}
                    onActive={this.onActive}
                    onIdle={this.onIdle}
                    onAction={this.onAction}
                    debounce={250}
                    timeout={1000 * 60 * 10} />

                <DashboardNav />
                <div className="jumbotron">
                    <div className="container">
                        <p className=" small mt-5 font-weight-bold">WELCOME BACK</p>
                        <p className="h3 font-weight-bold">Harcourt Hamsa</p>

                        <div className="text-right">
                            <Link to="/dashboard/topup" className="btn btn-outline-warning btn-rounded mt-3">Data & Airtime Subscribtion</Link>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div class="row">

                        {/* <!-- Balance --> */}
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-success shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Available Balance</div>
                                            <div class="h5 mb-0 font-weight-bold text-muted">N40,000</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fa fa-bank fa-2x text-success"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Earnings (Monthly) Card Example --> */}
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Pending Transactions</div>
                                            <div class="h5 mb-0 font-weight-bold text-muted">Nan</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fa fa-repeat fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Earnings (Monthly) Card Example --> */}
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-danger shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">Declined Transactions</div>
                                            <div class="h5 mb-0 font-weight-bold text-muted">Nan</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fa fa-times fa-2x text-danger"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-warning shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-warning  mb-1">Important Notice</div>
                                            <div class="mb-0  small text-gray-800">
                                                BuyPrime has service rates which applies on every transaction made
                                                <a href="/"> still confused about our rates?</a>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        {/* <!-- Content Column --> */}
                        <div class="col-lg-8 mb-4 ">
                            {/* <!-- Project Card Example --> */}
                            <div class="card shadow mb-4">
                                <div class="card-body">
                                    <h6 class="m-0 font-weight-bold text-muted">Services</h6>
                                    <div class="container">
                                        <div class="row">
                                            {/* <!-- Team Member 1 --> */}
                                            <div class="col-xl-6 col-md-6 mb-4">
                                                <div class="card border-0 shadow">
                                                    <img src={airtime_img} class="card-img-top" alt="..." />
                                                    <div class="card-body text-center">
                                                        <Link to="/" class="card-title mb-0 btn btn-primary font-weight-bold">Airtime & Data</Link>

                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Team Member 2 --> */}
                                            <div class="col-xl-6 col-md-6 mb-4">
                                                <div class="card border-0 shadow">
                                                    <img src={giftcard_img} class="card-img-top" alt="..." />
                                                    <div class="card-body text-center">
                                                        <Link to="/" class="card-title mb-0 btn btn-primary font-weight-bold">Mobile Topup</Link>

                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Team Member 3 --> */}
                                            <div class="col-xl-6 col-md-6 mb-4">
                                                <div class="card border-0 shadow">
                                                    <img src={a2c_img} class="card-img-top" alt="..." />
                                                    <div class="card-body text-center">
                                                        <Link to="/" class="card-title mb-0 btn btn-primary font-weight-bold">Airtime2Cash</Link>

                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- Team Member 4 --> */}
                                            <div class="col-xl-6 col-md-6 mb-4">
                                                <div class="card border-0 shadow">
                                                    <img src={paybills_img} class="card-img-top" alt="..." />
                                                    <div class="card-body text-center">
                                                        <Link to="/" class="card-title mb-0 btn btn-primary font-weight-bold">Pay bills</Link>

                                                    </div>
                                                </div>
                                            </div>
                                            {/* Team Member 5 */}
                                            <div class="col-xl-6 col-md-6 mb-4">
                                                <div class="card border-0 shadow">
                                                    <img src={giftcard_img} class="card-img-top" alt="..." />
                                                    <div class="card-body text-center">
                                                        <Link to="/" class="card-title mb-0 btn btn-primary font-weight-bold">Gift cards</Link>

                                                    </div>
                                                </div>
                                            </div>
                                            {/* Team Member 5 */}
                                            <div class="col-xl-6 col-md-6 mb-4">
                                                <div class="card border-0 shadow">
                                                    <img src={bitcoin_img} class="card-img-top" alt="..." />
                                                    <div class="card-body text-center">
                                                        <Link to="/" class="card-title mb-0 btn btn-primary font-weight-bold">Bitcoin</Link>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div class="card border-0 shadow mb-4">
                                <img src={wallet_img} class="card-img-top" alt="..." />
                                <div class="card-body text-center">
                                    <Link to="/" class="card-title mb-0 btn btn-primary font-weight-bold">Fund wallet &#187;</Link>
                                </div>
                            </div>

                            <div class="card  shadow py-2 mb-4">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-muted mb-1">Recent Transactions</div>
                                            <img src="https://image.freepik.com/free-vector/cardboard-icon-mockup-carton-box-3d-isometric_100053-2414.jpg" width="100px" height="100px" alt="" />
                                            <div class="h5 mt-5 font-weight-bold text-muted">No Transactions</div>
                                            <small className="text-muted">Your transactions will appear hear.<a href="/">Start Transactions</a></small>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
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

Dashboard.propTypes = {
    firebase: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

export default compose(
    firebaseConnect(),
    connect((state, props) => ({
        auth: state.firebase.auth
    }))
)(Dashboard)