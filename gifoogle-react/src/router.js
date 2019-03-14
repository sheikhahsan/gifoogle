import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./containers/Home";
import Trending from "./containers/Trending";
import Random from "./containers/Random";

const Navbar = () => {
  return (
    <nav className="nav">
      <Link className="navbar-brand" to="/">
        Gifoogle
      </Link>
      <Link className="nav-link" to="/">
        Home
      </Link>
      <Link className="nav-link" to="/trending">
        Trending
      </Link>
      <Link className="nav-link" to="/random">
        Random
      </Link>
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
