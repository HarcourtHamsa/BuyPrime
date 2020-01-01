import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DashboardNav from '../layout/DashboardNav'

class UserProfile extends Component {
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
                                <div className="form">
                                    <div className="col col-sm-6 mb-4">
                                        <input
                                            type="text"
                                            placeholder="First Name"
                                            className="form-control" />
                                    </div>
                                    <div className="col col-sm-6 mb-4">
                                        <input
                                            type="text"
                                            placeholder="Last Name"
                                            className="form-control" />
                                    </div>
                                    <div className="col col-sm-6 mb-4">
                                        <input
                                            type="text"
                                            placeholder="Account no"
                                            className="form-control" />
                                    </div>
                                    <div className="col col-sm-6 mb-4">
                                        <input
                                            type="text"
                                            placeholder="Phone no"
                                            className="form-control" />
                                    </div>
                                </div>
                                <p className="text-primary small font-weight-bold ">Select bank</p>
                                <select class="browser-default custom-select mb-4">
                                    <option value="2" selected>Access Bank</option>
                                    <option value="3">UBA</option>
                                    <option value="4">First Bank</option>
                                    <option value="5">Zenith Bank</option>
                                </select>
                                <textarea
                                    rows="5"
                                    
                                    placeholder="About(optional)" />

                                <button class="btn btn-primary font-weight-bold btn-block mt-3" type="submit">Update</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserProfile