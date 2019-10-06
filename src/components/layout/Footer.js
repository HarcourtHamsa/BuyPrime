import React from 'react'

function Footer() {
    return (
        <div className="text-muted bg-dark p-3">
            <div className="row mt-5 ">
                <div className="col-sm">
                    <h1>Buy<span style={logoStyle}>Prime</span></h1>
                    <p>Paystack is a technology company solving payments problems for ambitious businesses.
                        Our mission is to help businesses in Africa become profitable, envied, and loved.
                    </p>
                    <span><a href="/">Home</a></span><br/>
                    <span><a href="/">About</a></span><br/>
                    <span><a href="/">Pricing</a></span><br/>
                    <span><a href="/">Register</a></span><br/>
                </div>
                <div className="col-sm">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">SUBSCRIBE TO OUR NEWSLETTER</label>
                            <input type="email" className="form-control" id="email" placeholder="Email Address"/>
                        </div>
                        <button type="submit" className="btn btn-success">Subscribe</button>
                    </form>
                    <div className=" ">
                                <i className="fas fa-facebook" />
                                <i className="fas fa-twitter" />
                                <i className="fas fa-instagram" />
                                <i className="fas fa-github" />
                    </div>
                </div>
            </div>
            <p className="mt-5">Copyright&copy; of BuyPrime 2019</p>
        </div>
    )
}

// inline styling
const logoStyle = {
    color: 'orangeRed',
    fontWeight: 'bolder'
}

export default Footer
