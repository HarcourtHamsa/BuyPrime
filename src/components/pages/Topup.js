import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import DashboardNav from '../layout/DashboardNav'


class Topup extends Component {
    render() {
        return (
            <div>
                <DashboardNav />
                <div className="container">
                    <p className="text-primary small font-weight-bold mt-5">
                        <Link to="/dashboard">Back to dashboard</Link></p>

                    <div class="row">

                        {/* <!-- Content Column --> */}
                        <div class="col-lg-8 mb-4 ">
                            <div class="card mt-3 tab-card shadow">
                                <div class=" tab-card-header">
                                    <ul class="nav nav-tabs card-header-tabs bg-light" id="myTab" role="tablist">
                                        <li class="nav-item">
                                            <a class="nav-link" id="one-tab" data-toggle="tab" href="#one" role="tab" aria-controls="One" aria-selected="false">Airtime purchase</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="two-tab" data-toggle="tab" href="#two" role="tab" aria-controls="Two" aria-selected="false">Data refill</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" id="three-tab" data-toggle="tab" href="#three" role="tab" aria-controls="Three" aria-selected="false">Airtime2cash</a>
                                        </li>
                                    </ul>
                                </div>

                                <div class="tab-content" id="myTabContent">
                                    <div class="tab-pane fade show active p-3" id="one" role="tabpanel" aria-labelledby="one-tab">
                                        <form class=" border border-light p-5" action="#!">
                                            <p className="text-primary small font-weight-bold ">Select wallet</p>
                                            {/* <!-- Amount --> */}
                                            <input type="text" id="defaultContactFormAmount" class="form-control" placeholder="Naira wallet" disabled />

                                            <p className="text-primary small font-weight-bold ">Select network carrier</p>
                                            {/* <!-- Bill Services --> */}
                                            <select class="browser-default custom-select mb-4">
                                                <option value="2" selected>MTN</option>
                                                <option value="3">Glo</option>
                                                <option value="4">9mobile</option>
                                                <option value="5">Airtel</option>
                                            </select>

                                            <p className="text-primary small font-weight-bold ">Input phone number</p>
                                            <input type="text" id="defaultContactFormAmount" class="form-control" placeholder="Enter phone number" />

                                            <p className="text-primary small font-weight-bold ">Enter airtime amount</p>
                                            <input type="text" id="defaultContactFormAmount" class="form-control" placeholder="Enter phone number" />

                                            {/* <!-- Send button --> */}
                                            <button class="btn btn-primary font-weight-bold btn-block mt-3" type="submit">Continue</button>
                                        </form>
                                    </div>

                                    <div class="tab-pane fade show active p-3" id="two" role="tabpanel" aria-labelledby="two-tab">
                                        <form class=" border border-light p-5" action="#!">
                                            <p className="text-primary small font-weight-bold ">Select wallet</p>
                                            {/* <!-- Amount --> */}
                                            <input type="text" id="defaultContactFormAmount" class="form-control" placeholder="Naira wallet" disabled />

                                            <p className="text-primary small font-weight-bold ">Select network carrier</p>
                                            {/* <!-- Bill Services --> */}
                                            <select class="browser-default custom-select mb-4">
                                                <option value="2" selected>MTN</option>
                                                <option value="3">Glo</option>
                                                <option value="4">9mobile</option>
                                                <option value="5">Airtel</option>
                                            </select>

                                            <p className="text-primary small font-weight-bold ">Input phone number</p>
                                            <input type="text" id="defaultContactFormAmount" class="form-control" placeholder="Enter phone number" />

                                            <p className="text-primary small font-weight-bold ">Enter airtime amount</p>
                                            <input type="text" id="defaultContactFormAmount" class="form-control" placeholder="Enter phone number" />

                                            {/* <!-- Send button --> */}
                                            <button class="btn btn-primary font-weight-bold btn-block mt-3" type="submit">Continue</button>
                                        </form>
                                    </div>

                                    <div class="tab-pane fade show active p-3" id="three" role="tabpanel" aria-labelledby="three-tab">
                                        <form class=" border border-light p-5" action="#!">
                                            <p className="text-primary small font-weight-bold ">Select wallet</p>
                                            {/* <!-- Amount --> */}
                                            <input type="text" id="defaultContactFormAmount" class="form-control" placeholder="Naira wallet" disabled />

                                            <p className="text-primary small font-weight-bold ">Select network carrier</p>
                                            {/* <!-- Bill Services --> */}
                                            <select class="browser-default custom-select mb-4">
                                                <option value="2" selected>MTN</option>
                                                <option value="3">Glo</option>
                                                <option value="4">9mobile</option>
                                                <option value="5">Airtel</option>
                                            </select>

                                            <p className="text-primary small font-weight-bold ">Input phone number</p>
                                            <input type="text" id="defaultContactFormAmount" class="form-control" placeholder="Enter phone number" />

                                            <p className="text-primary small font-weight-bold ">Enter airtime amount</p>
                                            <input type="text" id="defaultContactFormAmount" class="form-control" placeholder="Enter phone number" />

                                            {/* <!-- Send button --> */}
                                            <button class="btn btn-primary font-weight-bold btn-block mt-3" type="submit">Continue</button>
                                        </form>
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

export default Topup