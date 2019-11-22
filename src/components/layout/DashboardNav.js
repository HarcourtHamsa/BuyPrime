import React from 'react'

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { Link, Redirect } from "react-router-dom"
import PropTypes from 'prop-types'

import { compose } from 'redux'
import { connect } from "react-redux"
import { firebaseConnect } from 'react-redux-firebase'

class DashboardNav extends React.Component {
    state = {
        isLoggedIn: true
    }

    // event handler for logout functionality
    onClickLogout = e => {
        e.preventDefault();

        const { firebase } = this.props;

        firebase.logout();

        this.setState({ isLoggedIn: false })
    }
    //life cycle method
    render() {
        const { isLoggedIn } = this.state;

        if (!isLoggedIn) {
            return <Redirect to="/" />
        }

        return (
            <div>
                <SideNav
                    onSelect={(selected) => {
                        // Add your code here
                    }}>
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem eventKey="home">
                            <NavIcon>
                                <Link to="/dashboard" className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                <Link to="/dashboard"> Home </Link>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="user">
                            <NavIcon>
                                <Link to="/dashboard/profile" className="fa fa-fw fa-address-book" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                <Link to="/dashboard/profile"> Profile </Link>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="user">
                            <NavIcon>
                                <Link to="/dashboard/history" className="fa fa-fw fa-history" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                <Link to="/dashboard/history"> Transaction History </Link>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="user">
                            <NavIcon>
                                <Link to="/dashboard/wallets" className="fa fa-fw fa-bank" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                <Link to="/dashboard/wallets"> Wallet </Link>
                            </NavText>
                        </NavItem><NavItem eventKey="user">
                            <NavIcon>
                                <Link to="/dashboard/bills" className="fa fa-fw fa-money" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                <Link to="/dashboard/bills">Bills Payment</Link>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="user">
                            <NavIcon>
                                <Link to="/dashboard/a2c" className="fa fa-fw fa-refresh" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                <Link to="/dashboard/a2c">Airtime to cash</Link>
                            </NavText>
                        </NavItem>
                        <NavItem eventKey="user">
                            <NavIcon>
                                <Link to="/dashboard/topup" className="fa fa-fw fa-angle-double-up" style={{ fontSize: '1.75em' }} />
                            </NavIcon>
                            <NavText>
                                <Link to="/dashboard/topup">Top Up </Link>
                            </NavText>
                        </NavItem>

                        <NavItem eventKey="user">
                            <NavIcon>
                                <Link to="/ " className="fa fa-fw fa-arrow-circle-left" style={{ fontSize: '1.75em' }}
                                    onClick={this.onClickLogout} />
                            </NavIcon>
                            <NavText>
                                <Link to="/" onClick={this.onClickLogout}> Logout </Link>
                            </NavText>
                        </NavItem>
                    </SideNav.Nav>
                </SideNav>
            </div>
        )
    }
}

DashboardNav.propTypes = {
    firebase: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

// needs immediate attention
export default compose(
    firebaseConnect(),
    connect((state, props) => ({
        auth: state.firebase.auth
    }))
)(DashboardNav)
