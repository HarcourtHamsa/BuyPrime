import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import error from "./error.png"
import DashboardNav from '../layout/DashboardNav'
import card from "./card.png"

class Dashboard extends Component {
    render() {
        return (
            <div>
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
                                    <div className="row">

                                        <div class="col col-md-4 mb-4">
                                            <div class="card  shadow h-100 py-2">
                                                <div className="card-header" style={{ backgroundImage: `url("data:image/jpeg;base64,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")` }}></div>
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col mr-2">
                                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                                <Link to="/dashboard/topup" className="text-warning">Data & Airtime Subscribtion</Link></div>

                                                        </div>
                                                        <div class="col-auto">
                                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col col-md-4 mb-4">
                                            <div class="card  shadow h-100 py-2">
                                                <div className="card-header" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuf0-SksIvsP2dcCFML4WkwARh8eYcE6Izf7TmQEXuOHLTeael&s")` }}></div>
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col mr-2">
                                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                                <Link to="/dashboard/topup" className="text-warning">Airtime2Cash</Link></div>

                                                        </div>
                                                        <div class="col-auto">
                                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="col col-md-4 mb-4">
                                            <div class="card  shadow h-100 py-2">
                                                <div className="card-header" style={{ backgroundImage: `url("data:image/jpeg;base64,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")` }}></div>
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col mr-2">
                                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                                <Link to="/dashboard/bills" className="text-warning">Bills Payment</Link></div>

                                                        </div>
                                                        <div class="col-auto">
                                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col col-md-4 mb-4">
                                            <div class="card  shadow h-100 py-2">
                                                <div className="card-header" style={{ backgroundImage: `url("data:image/jpeg;base64,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")` }}></div>
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col mr-2">
                                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                                <Link to="/dashboard/bills" className="text-warning">Bitoin</Link></div>

                                                        </div>
                                                        <div class="col-auto">
                                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col col-md-4 mb-4">
                                            <div class="card  shadow h-100 py-2">
                                                <div className="card-header" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsSgEcwKRhBWOlqsHv4vwCOSEv8Hs_OfAbsN23fcJjD39kAx5ZHw&s")` }}></div>
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col mr-2">
                                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                                <Link to="/dashboard/bills" className="text-warning">Gift cards</Link></div>

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
                            <div class="card mb-4 shadow py-2">
                                <div className="card-header" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI4_yKMajsmCsUN8TaDQa_IndPEquG_VvMO2ULUU6qC6oGUgXuQQ&s")` }}></div>
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                <Link to="/dashboard/wallet" className="text-warning">Fund Wallet</Link></div>

                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
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

export default Dashboard