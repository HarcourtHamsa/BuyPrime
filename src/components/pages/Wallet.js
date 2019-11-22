import React, { Component } from 'react'
import DashboardNav from '../layout/DashboardNav'

class Wallet extends Component {
    render() {
        return (
            <div className="container text-center mt-5">
                <DashboardNav />
                <form class="text-center border border-light p-5" action="#!">

                    <p class="h4 mb-4"><i className="fa fa-fw fa-bank"></i><b>Fund Wallet</b></p>

                    {/* <!-- Amount --> */}
                    <input type="number" id="defaultContactFormAmount" class="form-control mb-4" placeholder="Amount" />

                    {/* <!-- Phone --> */}
                    <input type="text" id="defaultContactFormPhone" class="form-control mb-4" placeholder="Wallet id" />


                    {/* <!-- Send button --> */}
                    <button class="btn btn-outline-warning rounded-0 pl-5 pr-5" type="submit">FUND WALLET</button>

                </form>

            </div>
        )
    }
}

export default Wallet