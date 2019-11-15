import React, { Component } from 'react'
import DashboardNav from '../layout/DashboardNav'

class Dashboard extends Component {
    render() {
        return (
            <div className="ml-5 mt-5" >
                <DashboardNav />
                <div className="container">
                    <p className="alert alert-success">Welcome back Harcourt!s</p>
                    <div className="row text-right">
                        {/* <!-- Free Tier --> */}
                        <div className="col">
                            <div className="card mb-5 mb-lg-0 shadow">
                                <div className="card-body bg-primary text-white">
                                    <p className="h4">
                                        <i className="fa fa-fw fa-money h1"></i>
                                        Balance</p>
                                    <p className="h1"><b>N 2,000.00</b></p>
                                </div>
                                <div className="card-footer text-muted">
                                    Sometext
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-5 mb-lg-0 shadow">
                                <div className="card-body bg-success text-white">
                                    <p className="h4">
                                        <i className="fa fa-fw fa-bank h1"></i>
                                        Balance</p>
                                    <p className="h1"><b>N 2,000.00</b></p>

                                </div>
                                <div className="card-footer text-muted">
                                    Sometext
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-5 mb-lg-0 shadow">
                                <div className="card-body bg-warning text-white">
                                    <p className="h4">
                                        <i className="fa fa-fw fa-calendar h1"></i>
                                        Balance</p>
                                    <p className="h1"><b>N 2,000.00</b></p>


                                </div>
                                <div className="card-footer text-muted">
                                    Sometext
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card mb-5 mb-lg-0 shadow">
                                <div className="card-body bg-dark text-white">

                                    <p className="h4">
                                        <i className="fa fa-fw fa-lock h1"></i>
                                        Transactions</p>
                                    <p className="h1"><b>0</b></p>

                                </div>
                                <div className="card-footer text-muted">
                                    Sometext
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="card p-3 mt-5 shadow">
                        <div className="card-body">
                            <p className="h4"><b>Transaction History</b></p>
                            <table class="table table-striped mt-5">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">First</th>
                                        <th scope="col">Last</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th scope="row">1</th>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td>@mdo</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">2</th>
                                        <td>Jacob</td>
                                        <td>Thornton</td>
                                        <td>@fat</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">3</th>
                                        <td>Larry</td>
                                        <td>the Bird</td>
                                        <td>@twitter</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard