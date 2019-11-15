import React, { Component } from 'react'
import DashboardNav from '../layout/DashboardNav'

class Topup extends Component {
    render() {
        return (
            <div>
                <DashboardNav />
                <div className="container">
                    {/* <!-- Default form contact --> */}
                    <form class="text-center border border-light p-5" action="#!">

                        <p class="h4 mb-4"><i className="fa fa-fw fa-angle-double-up"></i><b>Top Up</b></p>

                        {/* <!-- Amount --> */}
                        <input type="number" id="defaultContactFormAmount" class="form-control mb-4" placeholder="Amount" />

                        {/* <!-- Phone --> */}
                        <input type="text" id="defaultContactFormPhone" class="form-control mb-4" placeholder="Phone" />
                        {/* 
                        <!-- Network Providers --> */}
                        <select class="browser-default custom-select mb-4">
                            <option value="2" selected>Glo</option>
                            <option value="3">Airtel</option>
                            <option value="4">9 mobile</option>
                            <option value="5">MTN</option>
                        </select>

                        {/* <!-- Send button --> */}
                        <button class="btn btn-outline-warning rounded-0 pl-5 pr-5" type="submit">TOP UP</button>

                    </form>
                    {/* <!-- Default form contact --> */}
                </div>
            </div>
        )
    }
}

export default Topup