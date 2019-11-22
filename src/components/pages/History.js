import React, { Component } from 'react'
import DashboardNav from '../layout/DashboardNav'

class History extends Component {
    render() {
        return (
            <React.Fragment>
                <DashboardNav />
                <div className="ml-5 container">
                    <p className="h4 text-center"><b>Transaction History</b></p>
                </div>
            </React.Fragment>
        )
    }
}

export default History