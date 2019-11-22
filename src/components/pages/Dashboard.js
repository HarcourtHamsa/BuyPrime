import React, { Component } from 'react'
import DashboardNav from '../layout/DashboardNav'
import atm from "./atm.jpeg"
import { Link } from 'react-router-dom'

class Dashboard extends Component {
    render() {
        return (
            <div className="ml-5 " >
                <DashboardNav />
                <div className="jumbotron jumbotron-fluid bg-dark text-white">
                    <div className="container">
                        <p className="h4"><b>BuyPrime</b></p>
                        <p>welcome Harcourt</p>

                        <div className="text-right">
                            <p>11122764<i className="fa fa-fw fa-user h1"></i></p>
                            <p className="h3 text-bold"><b>N51,433.50</b></p>
                            <p><b>Available balance</b></p>
                        </div>
                    </div>
                </div>

                <div className="container text-center">

                    <div className="row mt-5">
                        {/* <!-- Free Tier --> */}
                        <div className="col-lg-4">
                            <div className="card mb-5 mb-lg-0 shadow text-white yellow-gradient">
                                <div className="card-header" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8q3MGHJDU4Omt0wsRztaTXbUrUvB03xbuP5C2S_q9pZSSuAW3&s')" }}></div>
                                <div className="card-body">
                                    <h5 className="card-titletext-center">Buy Airtime</h5>


                                </div>
                            </div>
                        </div>
                        {/* <!-- Plus Tier --> */}
                        <div className="col-lg-4 ">
                            <div className="card mb-5 mb-lg-0 text-white shadow blue-gradient">
                                <div className="card-header" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8q3MGHJDU4Omt0wsRztaTXbUrUvB03xbuP5C2S_q9pZSSuAW3&s')" }}></div>
                                <div className="card-body">
                                    <h5 className="card-title text-center">
                                        <Link to="/dashboard/topup" className="text-white">Top Up</Link>
                                    </h5>


                                </div>
                            </div>
                        </div>
                        {/* <!-- Pro Tier --> */}
                        <div className="col-lg-4 ">
                            <div className="card shadow text-white nelson-gradient " p-3>
                                <div className="card-header" style={{ backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8q3MGHJDU4Omt0wsRztaTXbUrUvB03xbuP5C2S_q9pZSSuAW3&s')" }}></div>
                                <div className="card-body">
                                    <h5 className="card-titletext-center">Buy Data</h5>


                                </div>
                            </div>
                        </div>
                    </div>

                    <button className="btn shadow mt-5 pr-5 pl-5 btn-rounded orange-gradient">
                        Convert Airtime <i className="fa fa-fw fa-phone"></i>
                        <br />To<br />
                        Cash<i className="fa fa-fw fa-money"></i>
                    </button>

                    <div className="row mt-5 mb-5 justify-content-center">
                        {/* <!-- Free Tier --> */}
                        <div className="col-lg-4 ">
                            <div className="card mb-5 mb-lg-0 shadow-lg">
                                <div className="card-body text-left">
                                    <img src={atm} alt="atm" width="50px" height="50px" className="" />
                                    <p className="mb-5 text-left"><b>5 5 5 9  * * * *  * * *  * * * *</b></p>
                                    <a className="btn btn-rounded bg-secondary pl-5 pr-5" href="/dashboard/wallets">Fund wallet</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p className="h4 mb-4"><b>No Transaction History</b><i className="fa fa-fw fa-history"></i></p>


                </div>

            </div>
        )
    }
}

export default Dashboard