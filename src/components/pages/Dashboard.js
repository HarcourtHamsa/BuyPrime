import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import error from "./error.png"
import DashboardNav from '../layout/DashboardNav'

class Dashboard extends Component {
    render() {
        return (
            <div>
                <DashboardNav />
                <div className="jumbotron">
                    <div className="container">
                        <p className="text-primary small mt-5">WELCOME BACK</p>
                        <p className="h4 font-weight-bold text-muted">Harcourt Hamsa</p>

                        <div className="text-right">
                            <Link to="/dashboard/topup" className="btn btn-outline-primary btn-rounded mt-3">Data & Airtime Subscribtion</Link>
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
                                            <div class="h5 mb-0 font-weight-bold text-muted">$40,000</div>
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
                        <div class="col-lg-8 mb-4">

                            {/* <!-- Project Card Example --> */}
                            <div class="card shadow mb-4">
                                <div class="card-header py-3">
                                    <h6 class="m-0 font-weight-bold text-primary">Services</h6>
                                </div>
                                <div class="card-body">
                                    <div className="row">

                                        <div class="col col-md-6 mb-4">
                                            <div class="card  shadow h-100 py-2">
                                            <div className="card-header"></div>
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col mr-2">
                                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                                <Link to="/dashboard/topup">Data & Airtime Subscribtion</Link></div>

                                                        </div>
                                                        <div class="col-auto">
                                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col col-md-6 mb-4">
                                            <div class="card  shadow h-100 py-2">
                                            <div className="card-header"></div>
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col mr-2">
                                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                                <Link to="/dashboard/wallet">Wallet</Link></div>

                                                        </div>
                                                        <div class="col-auto">
                                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col col-md-6 mb-4">
                                            <div class="card  shadow h-100 py-2">
                                            <div className="card-header"></div>
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col mr-2">
                                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                                <Link to="/dashboard/bills">Pay Bills</Link></div>

                                                        </div>
                                                        <div class="col-auto">
                                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="col col-md-6 mb-4">
                                            <div class="card  shadow h-100 py-2">
                                            <div className="card-header"></div>
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col mr-2">
                                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                                <Link to="/dashboard/history">Transactions</Link></div>

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
                        </div>

                        <div className="col-lg-4">
                            <div class="card  shadow py-2 mb-4">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary mb-1">Recent Transactions</div>
                                            <img src="https://image.freepik.com/free-vector/cardboard-icon-mockup-carton-box-3d-isometric_100053-2414.jpg" width="100px" height="100px" alt="" />
                                            <div class="h5 mt-5 font-weight-bold text-gray-800">No Transactions</div>
                                            <small>Your transactions will appear hear.<a href="/">Start Transactions</a></small>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="card shadow py-2 mb-3">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary mb-1">Complete your profile </div>

                                            <div class="h5 mt-5 font-weight-bold text-gray-800">
                                                <img src={error} width="30px" height="30px" alt="" className="mr-2" />Confirm your email
                                           </div>
                                            <small>Your transactions will appear hear.<a href="/">Start Transactions</a></small>
                                            <div class="h5 mt-5 font-weight-bold text-gray-800">
                                                <img src={error} width="30px" height="30px" alt="" className="mr-2" />Add bank account
                                           </div><small>Your transactions will appear hear.<a href="/">Start Transactions</a></small>
                                            <div class="h5 mt-5 font-weight-bold text-gray-800">
                                                <img src={error} width="30px" height="30px" alt="" className="mr-2" />Add BVN
                                           </div>
                                            <small>Your transactions will appear hear.<a href="/">Start Transactions</a></small>
                                            <div class="h5 mt-5 font-weight-bold text-gray-800">
                                                <img src={error} width="30px" height="30px" alt="" className="mr-2" />Confirm phone number
                                           </div>
                                            <small>Your transactions will appear hear.<a href="/">Start Transactions</a></small>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fasss fa-dollar-sign fa-2x text-gray-300"></i>
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

export default Dashboard