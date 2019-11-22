import React, { Component } from 'react'
import DashboardNav from '../layout/DashboardNav'

class A2c extends Component {
    render() {
        return (
            <React.Fragment>
                <DashboardNav />
                <div className="ml-5 container mt-5">
                    <p className="h4 text-center mb-5"><i className="fa fa-fw fa-refresh"></i><b>Convert airtime to cash</b></p>

                    <form class="text-center border border-light p-5" action="#!">
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
                        <button class="btn btn-outline-warning rounded-0 pl-5 pr-5" type="submit">CONVERT</button>
                    </form>
                    {/* <!-- Default form contact --> */}
                </div>
            </React.Fragment>
        )
    }
}

export default A2c