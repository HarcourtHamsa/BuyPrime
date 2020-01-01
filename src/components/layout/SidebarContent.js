import React from 'react'
import { Link, Redirect } from 'react-router-dom'
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { compose } from "redux"
import { firebaseConnect } from "react-redux-firebase"


class SidebarContent extends React.Component {
    state = {
        isLoggedOut: false
    }

    onClickLogout = (e) => {
        e.preventDefault()

        this.setState({ isLoggedOut: !(this.state.isLoggedOut) })

        const { firebase } = this.props
        firebase.logout()
    }

    render() {
        const { isLoggedOut } = this.state

        if (isLoggedOut) {
            return <Redirect to="/" />
        }

        return (
            <div class="d-flex bg-light" id="wrapper">

                {/* <!-- Sidebar --> */}
                <div class=" p-3" id="sidebar-wrapper">
                    <div class="sidebar-heading mt-1 font-weight-bold h3 text-primary">BuyPrime</div>

                    <ul className="font-weight-bold text-white">
                        <li className="p-3">
                            <Link to="/dashboard">Dashboard</Link></li>
                        <li className="p-3">
                            <Link to="/dashboard/profile">Profile</Link></li>
                        <li className="p-3">
                            <Link to="/dashboard/topup">Airtime & Data</Link></li>
                        <li className="p-3">
                            <Link to="/dashboard/bills">Pay Bills</Link></li>
                        <li className="p-3">
                            <Link to="/dashboard/wallet">Fund Wallet</Link></li>
                        <li className="p-3">
                            <Link to="/dashboard/bitcoin">Bitcoin</Link></li>
                        <li className="p-3">
                            <Link to="/dashboard/giftcards">Gift cards</Link></li>
                        <li className="p-3">
                            <Link to="/dashboard/history">Transactions</Link></li>
                        <li className="p-3">
                            <Link to="/" onClick={this.onClickLogout}>Log out</Link></li>

                        <p className="fixed-bottom">Copyright&copy; of BuyPrime</p>
                    </ul>



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