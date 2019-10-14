import React from 'react'

function Footer() {
    return (
        <div className="text-muted bg-dark p-3">
            <div className="row mt-5 ">
                <div className="col-sm">
                    <h1>Buy<span style={logoStyle}>Prime</span></h1>
                    <p>Phone: 09066686754</p>
                    <p>Email: joshuamivobua@gmail.com</p>
                    <a className="btn btn-warning mt-1" href="/">Contact us</a>
                </div>
                <div className="col-sm">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">SUBSCRIBE TO OUR NEWSLETTER AND BE THE FIRST TO GET NOTIFIED
                            ON ANY DISCOUNTS AND PROMOS</label>
                            <input type="email" className="form-control" id="email" placeholder="Email Address"/>
                        </div>
                        <button type="submit" className="btn btn-success">Subscribe</button>
                    </form>
                    <div>
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
