import React, { Component } from 'react'
import DashboardNav from '../layout/DashboardNav'

class Bills extends Component {
    render() {
        return (
            <div>
                <DashboardNav />
                <div className="container">
                    {/* <!-- Default form contact --> */}
                    <form class="text-center border border-light p-5" action="#!">

                        <p class="h4 mb-4"><i className="fa fa-fw fa-money"></i><b>Bills Payment</b></p>

                        {/* <!-- Amount --> */}
                        <input type="text" id="defaultContactFormAmount" class="form-control mb-4" placeholder="Amount" />
                        {/* 
                        <!-- Bill Services --> */}
                        <select class="browser-default custom-select mb-4">
                            <option value="2" selected>PHCN</option>
                            <option value="3">DSTV</option>
                            <option value="4">GoTv</option>
                            <option value="5">NEPA</option>
                        </select>

                        {/* <!-- Send button --> */}
                        <button class="btn btn-info pl-5 pr-5" type="submit">PAY BILL</button>

                    </form>
                    {/* <!-- Default form contact --> */}
                </div>
            </div>
        )
    }
}

export default Bills