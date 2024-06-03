import React from 'react'
import { Link } from "react-router-dom";

const Navbar = (props) => {


  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark  ">
        <div className="container-fluid">
          <Link className="navbar-brand" href="#">GlobeGazette</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link " aria-current="page" href="/">Home</a>
              </li>
              
              <li className="nav-item"><a className="nav-link" aria-current="page" href="/business">Business</a></li>
              <li className="nav-item"><a className="nav-link" aria-current="page" href="/entertainment">Entertainment</a></li>
              <li className="nav-item"><a className="nav-link" aria-current="page" href="/general">General</a></li>
              <li className="nav-item"><a className="nav-link" aria-current="page" href="/health">Health</a></li>
              <li className="nav-item"><a className="nav-link" aria-current="page" href="/science">Science</a></li>
              <li className="nav-item"><a className="nav-link" aria-current="page" href="/sports">Sports</a></li>
              <li className="nav-item"><a className="nav-link" aria-current="page" href="/technology">Technology</a></li>

              <li className="nav-item">
                <a className="nav-link" href="/developer">Meet the Developer</a>
              </li>
            </ul>

          </div>
        </div>
      </nav>
    </div>
  )

}

export default Navbar
