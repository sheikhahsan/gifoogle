import React from "react";
import { BrowserRouter as Router, Route, NavLink } from "react-router-dom";
import Home from "./containers/Home";
import Trending from "./containers/Trending";
import Random from "./containers/Random";

const Navbar = () => {
  return (
    <nav className="nav">
      <NavLink className="navbar-brand" to="/">
        Gifoogle
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/" exact>
        Home
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/trending">
        Trending
      </NavLink>
      <NavLink className="nav-link" activeClassName="active" to="/random">
        Random
      </NavLink>
    </nav>
  );
};

function AppRouter() {
  return (
    <Router>
      <div>
        <Navbar />
        <Route path="/" exact component={Home} />
        <Route path="/trending" component={Trending} />
        <Route path="/random" component={Random} />
      </div>
    </Router>
  );
}

export default AppRouter;
