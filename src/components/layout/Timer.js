import React, { Component } from 'react'

class Timer extends Component {
    render() {
        return (
            <div>
                <h1>{this.props.digits}</h1>
                <p>{this.props.title}</p>
            </div>
        )
    }
}

export default Timer