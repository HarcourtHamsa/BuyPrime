import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DashboardNav from "../layout/DashboardNav"

class Wallet extends Component {
    render() {
        return (
            <div>
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
                                            <div class="text-xs font-weight-bold text-primary mb-1">Naira Wallet</div>
                                            <p class=" text-gray-800">Avilable Balance</p>

                                            <div class="h3 font-weight-bold text-primary mt-1">$ 40,000</div>

                                            <div className="text-right">
                                                <a href="/" className="btn btn-primary font-weight-bold  mt-5">View more</a>
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
                </div>
            </div>
        )
    }
}

export default Wallet