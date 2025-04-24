import { Routes, Route, Link } from "react-router-dom";

function Nav() {
    return (
      <footer id="navbar">
          <Link to="/">Home</Link>
          <Link to="/newplayer">New Player Form</Link>
      </footer>
    );
  }
  
  export default Nav;