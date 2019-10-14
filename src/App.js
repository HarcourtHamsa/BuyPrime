import React from 'react'
import "./index.css"
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/layout/Header"
import NotFound from './components/pages/NotFound'
import Home from "./components/pages/Home"
import Footer from './components/layout/Footer'
import Login from './components/pages/Login'
import Pricing from './components/pages/Pricing'
import Register from './components/pages/Register'


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/pricing" component={Pricing} />
          <Route exact path="/register" component={Register} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App 

