import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import error from "./error.png"
import DashboardNav from '../layout/DashboardNav'
import card from "./card.png"

class Dashboard extends Component {
    render() {
        return (
            <div>
                <DashboardNav />
                <div className="jumbotron">
                    <div className="container">
                        <p className=" small mt-5 font-weight-bold">WELCOME BACK</p>
                        <p className="h3 font-weight-bold">Harcourt Hamsa</p>

                        <div className="text-right">
                            <Link to="/dashboard/topup" className="btn btn-outline-warning btn-rounded mt-3">Data & Airtime Subscribtion</Link>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div class="row">

                        {/* <!-- Balance --> */}
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-success shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">Available Balance</div>
                                            <div class="h5 mb-0 font-weight-bold text-muted">N40,000</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fa fa-bank fa-2x text-success"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Earnings (Monthly) Card Example --> */}
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-primary shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">Pending Transactions</div>
                                            <div class="h5 mb-0 font-weight-bold text-muted">Nan</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fa fa-repeat fa-2x text-primary"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <!-- Earnings (Monthly) Card Example --> */}
                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-danger shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-danger text-uppercase mb-1">Declined Transactions</div>
                                            <div class="h5 mb-0 font-weight-bold text-muted">Nan</div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fa fa-times fa-2x text-danger"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-3 col-md-6 mb-4">
                            <div class="card border-left-warning shadow h-100 py-2">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-warning  mb-1">Important Notice</div>
                                            <div class="mb-0  small text-gray-800">
                                                BuyPrime has service rates which applies on every transaction made
                                                <a href="/"> still confused about our rates?</a>
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row">
                        {/* <!-- Content Column --> */}
                        <div class="col-lg-8 mb-4 ">

                            {/* <!-- Project Card Example --> */}
                            <div class="card shadow mb-4 bg-light">

                                <div class="card-body">
                                    <h6 class="m-0 font-weight-bold text-muted">Services</h6>
                                    <div className="row">

                                        <div class="col col-md-4 mb-4">
                                            <div class="card  shadow h-100 py-2">
                                                <div className="card-header" style={{ backgroundImage: `url("data:image/jpeg;base64,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")` }}></div>
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col mr-2">
                                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                                <Link to="/dashboard/topup">Data & Airtime Subscribtion</Link></div>

                                                        </div>
                                                        <div class="col-auto">
                                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        


                                        <div class="col col-md-4 mb-4">
                                            <div class="card  shadow h-100 py-2">
                                                <div className="card-header" style={{ backgroundImage: `url(${card})` }}></div>
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col mr-2">
                                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                                <Link to="/dashboard/wallet">Fund Wallet</Link></div>

                                                        </div>
                                                        <div class="col-auto">
                                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col col-md-4 mb-4">
                                            <div class="card  shadow h-100 py-2">
                                                <div className="card-header" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Z1ueFItLrF9VkCZ3GgMIuZClkoZkyLoscC10xILga7DgLIjb&s")` }}></div>
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col mr-2">
                                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                                <Link to="/dashboard/topup">Airtime2Cash</Link></div>

                                                        </div>
                                                        <div class="col-auto">
                                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div class="col col-md-4 mb-4">
                                            <div class="card  shadow h-100 py-2">
                                                <div className="card-header" style={{ backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATwAAACgCAMAAACmCCC4AAAArlBMVEX///////0LdrP9///NHyjPHicMdq//3QAAcK0LdrbKISjq+//JGB+1AhKUw9+Ass8Aaqb2//8Acalnn77OlJjHCxTN5/TY7vYUcqPA3e0feqrw2d5QlLwAAAAzfqrV1NWoytr85uZKia6wsLC11OPmmxvy8PG8MTv+zCDsysz3vRPAHBTFOwzdgRFPTk/VYxnLcHV/fX6v3fPNXGHirawUERIyMDEiICFpaGm5iYw06aGfAAAZFklEQVR4nO1dCUPaStfOMJIbSMiq2RpjRMRarVp7u3z//499Z5mZTBAVsb21vnlEhSxAHs4+ZwbHGTFixIgRI0aMGDFixIgRI0aMGDFixIgRI0aMGDFixIg/DCkkge6r/wBB4E3SwXtqk9D3h4eqR0LSKepUc8B/eUF/AjaBGoYwcwz8Dk5h3mibdZyF900cS5clV0PQMSh7fLQcnCn1UVIILb7mLMWrfNcEKvl5uFXKBOETCoVc/eetuL9XbPiVbAU0cQO5fZcgsdGC4hBnQFa+6sIoyppm2bRtXbtumnqp53kpoazrum0bRBZFYbeqCqLSGE2puXzn5BkkRBky1pZejwncJhNX/Wp4nuu5qTqECK2ZyFWVF35imYLeC70/oBMA2qouypZ1qeiYTGYzpMjVfDF3PXsz2k/spT3PMQLEcgk0dqscpfGdECcG/3Q8kRR5F4GopYo0ps1FDCRNyxsxhGqrtBbEbQO4bQlo23aZAYlV7itf8scufX9omig+I13CO6BNiU+8uTGooEWQIm/IWFoiXyhRYXhfVXmea69hGTrH9jHoXfK8Wq1W3QoIXA9d9d8C7fnwPnoEYg+Jy1pSO6OcvabOZqSWYMviuKzJlN2jSyBbJi1XauJrVn8dJrKT1QGOkAm9/N9JHl+PfgzikYdZ48UeEKQlTPHmWsIWl8ssJMtlyZb+KKRy0MMo2jxUB+E/9Rhyj7+SPCMtFBH7VbQsSd4mvUtwFVDoUEeBtntijZ5A9CGvNpyGpK3k6Si5fw9/a8RixAYUyb+PwDe42iewgmqhA95AS5soBA01yYISWRQh2aur8zQZG5xyJP4bL/H3gQUO2ACZK8uUyTK6OpupwAMErm6ie+aNomU+m72N0TlhEjBj7nqd3gzpdPYmdbHgrwO9bQhJwjaODXHGmbL8eXHdhJVvrnGjaOJwnDE0fU+oop3fip7s33mVvwq9d+CrBY3xVw1EciRrrkuqyloLG1wQuTZCTSWSN0wYS5w0dEjL7j8pS3YB5q8SOqVpnPODuSrCZTzZkLmZdqsgcrn/VwjFfwGh/Sv72CSPalBXK+h12TuAW/XKrGOR+4tE4/dCOCoIgz9AHXtXdzPX8mK3CYtk08b/j0PVMchggdSlkyFxSujSZYTa+s6rHi9GH0EUUa2z1qHcgbquIAJmB2F7mP95EBXAoB+2kIC5JHhWcAfetY4q3xqwcN51pfwlUPGVTKqm9CwH0UtdHRWJw+GHIx35ZsXuv31XnKxL8hd+lHq9d9WBycQtiTphD+r8QVAiI4YbDAQlhdY+nWFvHmhF7ztb7wdVHh6MoPikWqaD2ERLnRehf3V08PtnIYSws5YHKYvQ8ergBK509BtNse1lKSBzZT3kwBjikzB9EJrgQy/L+7Lli67z92CbwbC3IS9DudSWeoMlM76562UJzt3tsg++GNyKzJtZ3LHKQnjSVonoX33XK/yt2PI2+uRwm13ZKlsvv5aHz8IfiMxbb9JbOWIP8lmvjHysKsnN2ugfxPrwj+GUxbV/L0SKXNXpIDbBgRx34i3zhBnTBaI/RpmBOF0cHQXBkUawgSP6PRrs7w+0th5ZD452wuKSuLJtHg5YhyW6CkvuyPqlkW9EVb6VKoc8XUyD+XR+oBEEVxs4mE71zinsvFa4ugoCtXk+n18w5rBtbg5/GkeXjlDk8VgLelFwFd5MJWHay84gtOsSHsBn1ySEeAsOQ35YADdTuH4k7ur69vbz+afzTzaugN0D3o07P/7D+HR+fnt9xZxeXJ6efjgFXF5M5/MpPCMcz7cp/TUs8/G0Fckzw1OqMJKE8WQgcy6WU0Bl5dtwrxs4RfLw+pCaj5oZG9fA3XQ+Da4/f1JbzGEfz6+v8PQLR4vOV5DGOZGH8gd/e7GF7UjeXG8kyaP3QEU7CjhBZ/s0lgwfyF+aFfJNkgeSdxCQPn7uifsIUvXZAKQLLjYw+z/dXl/fnutDcTeSp8K0r4GiC+WZ72jlRs5wE9mIIJgCeWaslEb2wFeks0EJgCrGYO4o7Xh7EGjz4FpuPxnmUBvVBZNCk9pdabb+Ob8CSQSu+8fzQJGHkqcsHukn0DRnEVTblNShZs8PFHkIJA7Oz2vbTyjxizlCeRNGbgiJ5IH56cXu/DogU0WSQ5KCuhZYXCENwWDLVJMnnK+WO2WvO1RbYg5c8/zAIo96WYUolt5ko3Cn5O6NDr+AtwWubo0R+3w1tZ1lAMyhCTMHfLrScnVkZPVz0JP372Ywd7ewyIPPA57w4u7u7gICGkvy0GP4meduVj0hIfP1IP/bU1wMVebXH3se0EgZK4Vai1ccGKX9DNZvykbw1ij6lbZ5CvYdcbiwPgx0IQsg7fRiOh2QB7cuxXExq4KCA2ONz7WCV8sdcv/L6UdvazQQwpLpnG39tLd6BweG3Y/XtBM072B6ZSi/NZIn16cqaOFhCMwgvmpRnpPeLv7FbfDMPXl0ZNFSU52d07ppnTuP80a+etCirRuz+aWlrlrRnWHlyL4zrCINX+LRaJyaUEFtg0+WXDFjB8NA97oXMrUfbVYvjhfqXQjnbqFwcSq59CI+XNAnQZ8KuJo7CEsO0RJaNg9uSdSX78y/9F4+Ki+g59FDhGFHDbIkzGoAjkIh6Rf32Gf7JDrT4f3kkDjbEYGSd3DVy1Wgqbs+h2il/zXOYaFsFwYb/dYLbp6DK4VQhYkPvqrQD+zgQpMH8noBGS1vGDgMmZcPOhFdL0rEo7YOnHPp4UCQ1djpqU68ZRatfKkSPmp5yqNlmcaePtw6hzZMvNnMS+NMDmYi6KGUTdnX3KLNs5Qy4GwDXMg/W3GOyVrANu8R8lgw4ahDCjBQf+4CI9CQ0ILBO9ggz5FJ5m0WP2de65MKPqY3ec3Hgq6XJdwAyARWETyvbDPkj1I6kFFsq3LJByG5aZkqAHcYl2M4DqdlG5L3iMnQZTmQvMCSPI5u4c/1R8JD8jiZw78D8oRNHjmZAzRu/O5PL9jJzHGbXH+lOMgmDySjHIR41H8Sh9vLjRpwDvdIpU2eYxdnnt9j3x46GhqdXK4SKoWDH0+prjVxyyZcVUPcNx7urOFDyLbN5thGHof2SJ4ddJBywcVReWDxQP7Y5h2QJAW2zSMJUeQdcK5MGsq9WZeLgPic38Exh8Gc6Le8rW3xDHve0n9qUFHH1CB3qZYY7Hv0uwaYomE3LAGi+ITxzKWutBlEjXLYCiUcPyNmUdSzhy+ydVxYFSecD2B/bG8bUDJPYfLB/KHyXhNzJJ0Db2uTRykYRtYXa/zccdfhUYD6frGWZPDmyKVNnt8+MHhuvOLC8mMOA9TWpcoBqptjkl8h/ND1VPdUmUF6kjSezvbKQlkwbdUEySWSB+SmWvKc/qhtNk+PNyB582tL9A44DWDVfEjeuTJfcyvO+3S1Qd6cSgPsWUkpnfVX9LUXHyAdvOCywXRux3lVPCzhgaSUjS8H0+cesKckz3W9LLEslBDJfZuqxNgLEyepS1cZvHIlnaEl0+TVGBllxQP4W/y99NUOTM+seBcUN+iT+ofkQaCnKktWpHJ0oVIsLXk6o0UTR+MU8gOYPXwE5o8rLgObJ6OYRKgnDwxZqFT20fCYHcYEJS8R1tABVqNLI8G5TDDtU/1odehzZ73Q3Z4iIfLIZbi1BtxrcZJQnfkDs0eJpN/AnkJQhgEaeGvltgsuiaD0GfLOB7ktErPYzG3588RQRdcF4GkWl0RqguHJ0SE5XhN9W+QlrTdMzCAvK/PHSNtOniVLLE2MNJJORz2R9OF4abNKHDVnj9gg8ni3m8YKHjltNLxxKG2HT22WWeqVGIGS5GEtz66qYI14Pg+Cq16dF1ZVZYr7bDanFyb3vFv01Xks1F+cssMS4g51+995Xxq11LYoJ5ONSIXcxW7kuQPyeICoSvVzQYKXZLHqhqRwDunT8/QMeTOMYppQAz0wTxGCD9FqA0cZ6dKJh6UeB2we+0eLPqoSI4w4Qgxj1/Ourm4tLiHZRQHD8QgQ5H8P/+/Qvl3qDxgyNvC6Vo3eIq8akDdDHfPCZysB2yWPhtKFr/e5dYFxntXg5yJ9Ug/29+S54G2NH8FkkcegvGXSBywcznuYcgsiT+UUIH3nFn82PmFGG1xbZPZKHlCBiqISaoKghmlzUwZfua7Ti74ib5OHn6U90ggKM4urZwd5tkoexWDgcZf62dICA5iwLj3diwvC5zXYv0wJMJM3Y/L0s4ikKiHyo3cTR32PMjb4LiECz7m3HktSqhAPYcrV7S1IHI5cfPwIv/j3HAgKkKCDOdLbx82fQL/nlKwB9YvDy9PncIll5rkaxziwS1KhirS0bOBPsTN5kyF5HH9o8twU1A6yPOxW4+cm15CmEEFzPs7kTQbkwdOEHtUT4eg6l2pCrqSIdJZ2kpobkDwsQmE1eUrGLIDEK8A7R8GCzBYa/mCqgo+jQA2fXaFx014ZM93F4uiISgJHiy2gfarE+lBto5S9hCV77fNtxtttHhdbevLAZrEGFJSjmR7TtMRSoSKPImiKF82z+I2nxo7B/KpJW0DZqpyxwZOU2yrnSmMLR5zZBhRNsDFUYokBRkD/AUeqgHDA1FLNmfKGOWdhUy5Cz6fzqQJFdqZmY5OH7xfyi5nVCYWfOER5z7Gnclsmb9Dy4ohCS+Ws9dm5Otjc3MYeWVQKTdK2wqqBCVXcPrdFpSw4cIfoOY0SNkeQRtYeujLJ/uYUMydWWrsSNZ2qPIKVmgfCSHlRQumA+YMhRaKX1FjBRC00FDKdW4cSebrPJ4qVRvV62zzrbA15oG6JmdinnChYUabIa6gyw/23SRG1qUclV/zjtTnsMaFK7UU6TyGvA0I24/dUVtxAieIID/QbwDjPHh58MexzOTTe8dkCIo8lJvI2yUtfRp4cqC2GsSkFGpCodFKYyWc4FSaibo4J120wHlIFHU7ztF+lGakR931A3rakATwpo3KWhv38ZRrDQDO+D/TgtuYDZTM4YNV+DqS2KvPpHoxeeLuTNyPJ01U2DpK7koKPifoQhK4GYD9HjqnujOetpRWPnZDozWaW2vJH4KmmGVBc6hoEq5n55pOiDMNYpn0wqDojn7s+nSIPr6nyVIpv8BLyJlRVMekWXmSt5sGn4CmFoxf+UG0JBdeg8OS468kjCda0sAjnlPlQV/QKh/dabwZpmfFO4G1fi7nOuLgac7DziZdSNQpghmEN/JAGQRi6G3nIA1WAzfoWfljzigyzGDv6hCrKKmWEQyNPvxZKHqstmkFM5RQtqhLZeRwEuOhxIS1z05V0jHOS4sNr8bVvCUCDd3G564lrqTtDk3YwYotiURcvkjyzMfFXEGOoqbhNvq11s2p1TI42j8jjKahpk2jpZIIgqksVe6C4YeqWUTJolNVjUHsBFeXOGD2MAyHX2LUztG/YldgK2tOHXrLMd4zzwD5OGl0V7sJsmep2l1lzv8KyMZWO+Q8gjFoqssyo+IBOJPKonQibsaJK16QV7luiGd9dVJMxGWSNQtcQ9wDFBXfWMO/ibr3zU5m8Df7dx7bBQ3ECa6TG0R/lPq9ZYODS6rqsy5JWnjG5CpdF0JiWdFPw1OT6mRejYALyNlUtbZPUVfWo/kblFvwB14uVHnv4natbe0oemZK7I04b4O/i0HGcZxN6C6y2winqYf82DsYkjjDztLeTV8axF++LNqt86lQAv9CU6ongb7r9KWnrKuGh6P3YenAF8HsXqH6y6eJfIff5IARmjJa3JQ9Xc3726JwBiFi7cF/cV/ZcSYj+7nc5q/PlryePU47g4pIHmF/MHjZxl4OC3sxzvZXQI+lbYQ+tvgx6UEmNXEvV8K/7Dx57VqkjwD1echuEIo+4+6oatF9+QYLCfNvZqkSTepYfJU/sIQZCrWhhJkQ4bHiF6bGXW2YA9Cua8SEvvcBH3ouD5GGOcgWuQu47pwlOy10z6s3kuWkuxFMdPqoX5mWuTg+LMQ+OfgKHCXIkTaU0K68YcOMIc76Ham2Fkjywd4tDFePvpUfwk0R2NzINfGGzxeP+VtXXdoQWOR1MCxUv83+jijLr+gX0BufTSzpWhPB6KPIgMnZU5ULsETSSnczbAXeAshCb3U32SysiXvpaTKNjWqoGfMimG75/bR3Nw1836U1JXoDc6XW+9rGoQiXzs5me+oMqnGKN86lFiKSzE3nS76LIx2afaEUphL/Kuyj3u6zzwWXDm84rQQflSROuIu4q8Lt8FYV+HkY4aQv+hYWUVZeHnSzCqPP3zyzs93+HkXEfoewh1aqGEQ1GMrA5YiV2o+fp5/azbNWtZbfsuiWmV7Iqsy5qswgeOsUSOImyhA6q/GwZdVkGhs+p4roty6Zt07JwVnW7LNtCZnHbZnnbNiUVqV71zijIvbt7rfPmXjq4jnQyIG/SFsbe7A0gr61AWf1lJyEiKmBD1eYSHiYybJA8IcMMqEV5S7IwgYNwcZsqzgowJfd+FK/8ZZv7IaS3WRwWRVTeJ2F8/9p4jwzSh6fH9XeDRC+HFaCNNMN/rY3BTyVso0KiiAGPOAqbYyG9WUm5amAzvASQl0WoMkkGWlyUoOMgeaGTLFvfCeNVXkK+U4C0ZWCH/WXdZEvY++qIjyeqP1iD6cVPw+O+VelZmltjV9NrDQt5sDxqKxSxIXmOs2qSogVZ7DIZRegNkDxZoOQheRLJE0yehBSy8bO0cPymjsAC5s5rV8SUKqF4HXmca0sq1Q7NXpp2r1UOuvlh5i/vcTZqAa62Amlj8pYSyQObR2orEx+8rfBrtGc2eX6LahuHoLZwZlbe+37x2oW55I7u7tnn4fgJ49SqHGQarsdjL/sDh32yrmtXSdeCh8DOE1m1QNRyJYG8JMmasKkzsIEN+NAEQxVfq61IWlZbpyvLMgZ5zeICGzHjsibj+dQLn305gb8nN2ebO77crB1nrfplTr482N8/w80JHfjMBXL45TB71iIgeKtzJlYdu4cvd7qow5l/RRfmZGPWFUQsuLjIGj4Zv+vyPBdOUsEdWeW4rgYqpL8CkazggGIFXMK5K2A8x15TiRWJKnm6fCRvjom84y+be2AHbaXc8uz452NPAPvO1sc3O18nRqxV63GjsVpx1qsrtYQEh7P7pX9S2Bm/EMpVCt7p6H5Hrr7rc0yviN3tqP89Z6iYvPXZCdyck7O1c3Z2RmJ0cuYAZUrgzpjcNezEYx0++AxPlXASkHf2rOwpUCUgX3ozZo/h1Ss1J0DuF4I7wkQV+9uYwZk7vAlB5AmQsRMQLnjw8/j78XckgiTv2zHeFVKRB7uOb06OfwCZZ2fH37/RuSR5P+gzeB481UQIXJ9hYg3jztwwEXp5z1+VHP129Gr742Z982P97YfzhTax2ip5YvKY3/XNMe68+XHCW4E85/hmR8GTqn1G+GE9m6ll3nhUO6K2kl9ZD/rdsGzez28n376cfPsBAoXKqm0eQmiafjo/j4Gzkx/fnZtv37/jVvkym6e/wwNyAJoQwCPOLo2BF9LZsh7JG8bN8dnJyRppAoKAtW/fTk7OlNqeoeSRCQTaTgDAEXMKh998O+MDmby18tvPQwi18mARpbrTllaj8dqVLn7+Jex9PwbcIHkncGcNOvsdlNdRknf8DX5PULoQJzdo8xzn2/ExepMfKLVoD8+cH7Dl5/Hj4YyBLuJTmSip9AQAl6fz0bIqf9FKzycEBx0n/ne0EyXPC/cd3CjWdJQgb7txIGxcoxten+zicNWcZFZNIf2wjF21wiWqcLqseDECx55X8mbl0Crj0j2xOTTGWdWw3Mt3hZ6M9gokeZZ61ppSXhkVHFr2c5ffxOI0O2L3d/oLtAvc7v0yJs+hOr3StvN1Id0c9PoXeo9AkfbvG1o/XzcCge4mUov3a2s57xk0PgOJpJI+HtnwyqZK1LctvMUlL94OBA1u+CugT6+ONJvFKa6ix4OGo+w9BpOMSb/KsBmWghZcSK/MKt/MGB6xDUaueJnupVmii5S385M//P7eNvRgJvPod00de6p1DBeZDgteCUh/L80vG8t/j5B+HjYsftiZOElpGQHVL/vqmtN7h3ASv8KZFB53ZIPxW0aFb30tnrR4HPEAkr4DiDIPXJ3BTeusK3QrmhwG0CMMlAUEJEUVNqWnlhZNyzZD82f15zijF96E0EsD0wI9eZi1OCUb5c8D80fyZ7U5/+E3+8bAMmW+NlVKEsA6TT3+fjj+RhbVcDT63Q1I3aTMI1g8FQ8sYFN7IIIYvoD/qGj5c2f0vs9BtQMm2AfWqi9a9eolf98DL7WiJ0roVUNGMgdQXxTk51WYLUucCAAS2EQrX31jxnBFnlGbN2BaY8GL4LfctmWZxnHdRB1/X6HsF6IZ6wjbIVSxG7+Sugrx25XrMi6zaJXT92SO4d+jUI3q6hsdHVqQq8hXyOFyucQv+KWvsf3Tb/MNol9Ui/veyUtwzIJyCIJI343eVev1KH1D9HMD+thO6nnxol+ILJHr9XoUvg2Y2SUMvUZAP3tC6smJe04TGTFixIgRI0aMGDFixIgRI0aMGDFixIgRI0aMGDFixIgRI0aMGDFixIjX4f8Bqf4fIrjxrRQAAAAASUVORK5CYII=")` }}></div>
                                                <div class="card-body">
                                                    <div class="row no-gutters align-items-center">
                                                        <div class="col mr-2">
                                                            <div class="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                                <Link to="/dashboard/bills">Bills Payment</Link></div>

                                                        </div>
                                                        <div class="col-auto">
                                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <div class="card  shadow py-2 mb-4">
                                <div class="card-body">
                                    <div class="row no-gutters align-items-center">
                                        <div class="col mr-2">
                                            <div class="text-xs font-weight-bold text-muted mb-1">Recent Transactions</div>
                                            <img src="https://image.freepik.com/free-vector/cardboard-icon-mockup-carton-box-3d-isometric_100053-2414.jpg" width="100px" height="100px" alt="" />
                                            <div class="h5 mt-5 font-weight-bold text-muted">No Transactions</div>
                                            <small className="text-muted">Your transactions will appear hear.<a href="/">Start Transactions</a></small>
                                        </div>
                                        <div class="col-auto">
                                            <i class="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard