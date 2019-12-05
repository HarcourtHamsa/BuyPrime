import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DashboardNav from '../layout/DashboardNav'

class Bills extends Component {
    render() {
        return (
            <div>
                <DashboardNav />
                <div className="container">
                    <p className="text-primary small font-weight-bold mt-5">
                        <Link to="/dashboard">Back to dashboard</Link></p>

                    <div class="row">
                        <div class="col-lg-8 mb-4">
                            <form class=" border border-light p-5 shadow" action="#!">
                                <p className="text-primary small font-weight-bold ">Select wallet</p>
                                {/* <!-- Amount --> */}
                                <input type="text" id="defaultContactFormAmount" class="form-control" placeholder="Naira wallet" disabled />

                                <p className="text-primary small font-weight-bold ">Select network carrier</p>
                                {/* <!-- Bill Services --> */}
                                <select class="browser-default custom-select mb-4">
                                    <option value="2" selected>GOtv</option>
                                    <option value="3">DSTV</option>
                                    <option value="4">Startimes</option>
                                </select>

                                <p className="text-primary small font-weight-bold ">Input Smart card number</p>
                                <input type="text" id="defaultContactFormAmount" class="form-control" placeholder="Enter phone number" />

                                <p className="text-primary small font-weight-bold ">Enter Bill amount</p>
                                <input type="text" id="defaultContactFormAmount" class="form-control" placeholder="example: DSTV compact" />

                                {/* <!-- Send button --> */}
                                <button class="btn btn-primary font-weight-bold btn-block mt-3" type="submit">Continue</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Bills