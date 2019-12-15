import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DashboardNav from '../layout/DashboardNav'

class Bitcoin extends Component {
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
                                            <div class="text-xs font-weight-bold text-uppercase mb-1">Coming soon</div>
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

export default Bitcoin