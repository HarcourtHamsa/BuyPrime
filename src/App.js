import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Header from "./components/layout/Header"
import NotFound from './components/pages/NotFound'
import Home from "./components/pages/Home"
import About from './components/pages/About'
import "./index.css"
import Footer from './components/layout/Footer'
import Login from './components/pages/Login'


function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/login" component={Login} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  )
}

export default App 

