import React from 'react'

function Footer() {
    return (
        <div className="text-muted p-3" style={{backgroundColor: "black"}}>
            <div className="row mt-5 ">
                <div className="col-sm">
                    <h1>Buy<span style={logoStyle}>Prime</span></h1>
                    <p>Phone: 09066686754</p>
                    <p>Email: joshuamivobua@gmail.com</p>
                </div>
                <div className="col-sm">
                    <form>
                        <div className="form-group">
                            <label htmlFor="email">SUBSCRIBE TO OUR NEWSLETTER</label>
                            <input type="email" className="form-control" id="email" placeholder="Email Address" />
                        </div>
                        <button type="submit" className="btn btn-success pl-5 pr-5">Subscribe</button>
                    </form>
                    <div>
                        <i className="fa fa-facebook" />
                        <i className="fa fa-twitter" />
                        <i className="fa fa-instagram" />
                        <i className="fa fa-github" />
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
