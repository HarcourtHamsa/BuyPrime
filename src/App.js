import React from 'react'
import "./index.css"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import { UserIsAuthenticated, UserIsNotAuthenticated } from "./helpers/auth"
import NotFound from './components/pages/NotFound'
import Home from "./components/pages/Home"
import Login from './components/pages/Login'
import Pricing from './components/pages/Pricing'
import Register from './components/pages/Register'
import { Provider } from "react-redux"
import store from "./store"
import { rrfProps } from "./store"
import { ReactReduxFirebaseProvider, } from 'react-redux-firebase'
import Dashboard from './components/pages/Dashboard'
import UserProfile from './components/pages/UserProfile'
import Wallet from './components/pages/Wallet'
import Topup from './components/pages/Topup'
import Bills from './components/pages/Bills'
import A2c from './components/pages/A2c'
import History from './components/pages/History'



function App() {
  return (
    <div>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Router>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={UserIsNotAuthenticated(Login)} />
              <Route exact path="/pricing" component={Pricing} />
              <Route exact path="/register" component={UserIsNotAuthenticated(Register)} />
              <Route exact path="/dashboard" component={UserIsAuthenticated(Dashboard)} />
              <Route exact path="/dashboard/wallet" component={UserIsAuthenticated(Wallet)} />
              <Route exact path="/dashboard/profile" component={UserIsAuthenticated(UserProfile)} />
              <Route exact path="/dashboard/topup" component={UserIsAuthenticated(Topup)} />
              <Route exact path="/dashboard/bills" component={UserIsAuthenticated(Bills)} />
              <Route exact path="/dashboard/a2c" component={UserIsAuthenticated(A2c)} />
              <Route exact path="/dashboard/history" component={UserIsAuthenticated(History)} />
              <Route component={NotFound} />
            </Switch>
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    </div>
  )
}

export default App

