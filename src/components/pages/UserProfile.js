import React, { Component } from 'react'
import DashboardNav from '../layout/DashboardNav'

export default class UserProfile extends Component {
    render() {
        return (
            <div className="">
                <DashboardNav />
                <div className="container">
                    {/* <!-- Default form contact --> */}
                    <form class="text-center border border-light p-5" action="#!">

                        <p class="h4 mb-4"><i className="fa fa-fw fa-user"></i><b>User Profile</b></p>

                        {/* <!-- Name --> */}
                        <input type="text" id="defaultContactFormName" class="form-control mb-4" placeholder="Name" />

                        {/* <!-- Email --> */}
                        <input type="email" id="defaultContactFormEmail" class="form-control mb-4" placeholder="E-mail" />

                         {/* <!-- Email --> */}
                         <input type="text" id="defaultContactFormPhone" class="form-control mb-4" placeholder="Phone no" />

                        {/* <!-- Subject --> */}
                        <select class="browser-default custom-select mb-4">
                            <option value="1" selected>Access (Diamond) Bank</option>
                            <option value="2">UBA</option>
                            <option value="3">Zenith Bank</option>
                            <option value="4">Wema Bank</option>
                            <option value="5">First Bank</option>
                            <option value="6">GTB</option>
                        </select>

                        {/* <!-- Email --> */}
                        <input type="number" id="defaultContactFormAccountNo" class="form-control mb-4" placeholder="Account No." />

                        {/* <!-- Message --> */}
                        <div class="form-group">
                            <textarea class="form-control rounded-0" id="exampleFormControlTextarea2" rows="3" placeholder="About yourself"></textarea>
                        </div>

                        {/* <!-- Send button --> */}
                        <button class="btn btn-outline-warning rounded-0 pl-5 pr-5" type="submit">UPDATE PROFILE</button>

                    </form>
                    {/* <!-- Default form contact --> */}
                </div>

            </div>
        )
    }
}
