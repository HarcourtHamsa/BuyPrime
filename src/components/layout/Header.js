import React from 'react'
import { Link } from "react-router-dom"

function Header() {
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("navbar").style.top = "0";
        } else {
            document.getElementById("navbar").style.top = "-100px";
        }
    }
    return (
        <div>
            <nav className="navbar navbar-expand-md navbar-light bg-light p-3 fixed-top" id="navbar" style={navStyle}>
                <Link to="/" className="navbar-brand">Buy<span style={logoStyle}>Prime</span></Link>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ml-auto">
                        <Link to="/" className="nav-item nav-link active">Home</Link>
                        <Link to="/pricing" className="nav-item nav-link">Pricing</Link>
                        <Link to="/faq" className="nav-item nav-link">FAQ's</Link>
                        <Link to="/login" className="nav-item nav-link">Login</Link>
                        <Link to="/register" className="nav-item nav-link btn btn-warning pl-5 pr-5 rounded-0" style={{ color: 'white' }}>Create free account</Link>

                    </div>
                </div>
            </nav>
        </div>
    )
}

// inline styling
const logoStyle = {
    color: 'orangeRed',
    fontWeight: 'bolder'
}

// inline styling
const navStyle = {
    top: '-100px', /* Hide the navbar 50 px outside of the top view */
    width: '100%', /* Full width */
    transition: 'top 0.1s' ,
    
}

export default Header