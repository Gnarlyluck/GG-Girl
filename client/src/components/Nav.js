import React from 'react'
import { Link } from 'react-router-dom'
// { authenticated, currentUser, className}
const Nav = ({ authenticated, currentUser, className}) => {
  return( authenticated && currentUser ? (
    <header className={className}>
      <div className="icon">Welcome Back {currentUser.name}</div>
      <nav>
        <div class="nav-wrapper black">
        
          <Link  exact to='/' className="brand-logo">Home</Link >
            <ul className="right hide-on-med-and-down">
            <li><Link to="/profile" className="nav-active btn pink darken-4" > Profile</Link></li>
              <li><Link to="/AllGossip" className="nav-active btn pink darken-4">Gossip <i className="material-icons right">whatshot</i></Link ></li>
              <li><Link to="/upload" className="nav-active btn pink darken-4">Create Post</Link ></li>
              <li><Link to="/" onClick={() => localStorage.clear()} className="nav-active">Sign Out</Link></li>
            </ul>
        </div>
      </nav>
    </header>
  ) : (
    <header className={className}>
      <div className="icon"></div>
        <nav>
          <div className="nav-wrapper">
            <Link exact to='/' className="brand-logo">Home</Link>
              <ul className="right hide-on-med-and-down">
                <li> <Link className="nav-active btn" to="/AllGossip">Gossip</Link></li>
                <li> <Link className="nav-active btn" to="/SignUp">Sign Up<i className="material-icons right">cloud</i></Link> </li>
                <li><Link className="nav-active btn" to="/SignIn">Sign In</Link></li>
              </ul>
        </div>
      </nav>
    </header>
    )
  )}

export default Nav