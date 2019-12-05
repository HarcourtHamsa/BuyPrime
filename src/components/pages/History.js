import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DashboardNav from '../layout/DashboardNav'

class History extends Component {
    render() {
        return (
            <React.Fragment>
                <DashboardNav />
                <div className="container">
                    <p className="text-primary small font-weight-bold mt-5">
                        <Link to="/dashboard">Back to dashboard</Link></p>

                    <div class="row">
                        {/* <!-- Content Column --> */}
                        <div class="col-lg-8 mb-4">
                            <div class="card shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary mb-1">Recent Transactions</div>
                                            <img src="https://image.freepik.com/free-vector/cardboard-icon-mockup-carton-box-3d-isometric_100053-2414.jpg" width="100px" height="100px" alt="" />

                                            <div class="h5 mt-5 font-weight-bold text-gray-800">No Transactions</div>
                                            <small>Your transactions will appear hear. <a href="/">Start Transactions</a></small>
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
            </React.Fragment>
        )
    }
}

export default History