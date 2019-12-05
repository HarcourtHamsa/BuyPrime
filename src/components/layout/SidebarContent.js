import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { compose } from "redux"
import { firebaseConnect } from "react-redux-firebase"


class SidebarContent extends React.Component {
    state = {}

    onClickLogout = (e) => {
        e.preventDefault()

        const { firebase } = this.props
        firebase.logout()
    }

    render() {
        return (
            <div class="d-flex" id="wrapper">

                {/* <!-- Sidebar --> */}
                <div class="border-right p-3" id="sidebar-wrapper">
                    <div class="sidebar-heading mt-3 font-weight-bold h3 text-primary">Logo</div>
                    <div class="list-group list-group-flush text-primary">
                        <Link to="/dashboard" class="mb-3 pl-5 pr-5 list-group-item list-group-item-action ">
                        <i className="fa fa-dashboard h4 text-left" /> Dashboard</Link>

                        <Link to="/dashboard/history" class="mb-3 pl-5 pr-5 list-group-item list-group-item-action">
                        <i className="fa fa-calendar h4" /> Transactions</Link>

                        <Link to="/dashboard/wallet" class="mb-3 pl-5 pr-5 list-group-item list-group-item-action">
                        <i className="fa fa-wallet h4" /> Wallet</Link>

                        <Link to="/dashboard/topup" class="mb-3 pl-5 pr-5 list-group-item list-group-item-action">
                        <i className="fa fa-signal h4" /> Data & Airtime</Link>

                        <Link to="/dashboard/bills" class="mb-3 pl-5 pr-5 list-group-item list-group-item-action">
                        <i className="fa fa-money h4" /> Bills Payment</Link>

                        <Link to="/dashboard/profile" class="mb-3 pl-5 pr-5 list-group-item list-group-item-action">
                        <i className="fa fa-user h4" /> Profile</Link>

                        <Link to="/" class="pl-5 pr-5 list-group-item list-group-item-action" onClick={this.onClickLogout}>
                        <i className="fa fa-power-off h4" /> Logout</Link>
                    </div>
                </div>
            </div>
        )
    }
}

SidebarContent.propTypes = {
    firebase: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

export default compose(
    firebaseConnect(),
    connect((state, props) => ({
        auth: state.firebase.auth
    }))
)(SidebarContent)