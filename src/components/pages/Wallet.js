import React, { Component } from 'react'
import DashboardNav from '../layout/DashboardNav'

class Wallet extends Component {
    render() {
        return (
            <div className="container text-center mt-5">
                <DashboardNav />
                <p class="h4 mb-4"><b><i className="fa fa-fw fa-money"></i>Wallet</b></p>
                <small>wallet id: 22233ddfd444</small>
                <hr />
                <div className="card">
                    <div className="card-body">
                        <p className="h4 mb-4"><b>Balance</b></p>
                        <small>N 2,000.00</small>
                    </div>
                </div>
                <form class="text-center border border-light p-5" action="#!">

                    <p class="h4 mb-4"><i className="fa fa-fw fa-bank"></i><b>Fund Wallet</b></p>

                    {/* <!-- Amount --> */}
                    <input type="number" id="defaultContactFormAmount" class="form-control mb-4" placeholder="Amount" />

                    {/* <!-- Phone --> */}
                    <input type="text" id="defaultContactFormPhone" class="form-control mb-4" placeholder="Wallet id" />


                    {/* <!-- Send button --> */}
                    <button class="btn btn-outline-warning rounded-0 pl-5 pr-5" type="submit">FUND WALLET</button>

                </form>
                {/* <!-- Default form contact --> */}
                <p className="h4 mb-4"><b>Transaction History</b></p>
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
        )
    }
}

export default Wallet