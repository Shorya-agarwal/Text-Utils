import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">About</a>
              </li>
              {/* <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/">Action</a></li>
                  <li><a className="dropdown-item" href="/">Another action</a></li>
                  <li><hr className="dropdown-divider"/></li>
                  <li><a className="dropdown-item" href="/">Something else here</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/" tabIndex="-1">Disabled</a>
              </li> */}
            </ul>
            {/* <div className="d-flex">
                <div className="bg-primary rounded mx-2" onClick={()=>{props.togglemode("primary")}} style = {{height: '25px', width: '28px', cursor: "pointer"}}></div>
                <div className="bg-success rounded mx-2" onClick={()=>{props.togglemode("success")}} style = {{height: '25px', width: '28px', cursor: "pointer"}}></div>
                <div className="bg-danger rounded mx-2" onClick={()=>{props.togglemode("danger")}} style = {{height: '25px', width: '28px', cursor: "pointer"}}></div>
                <div className="bg-warning rounded mx-2" onClick={()=>{props.togglemode("warning")}} style = {{height: '25px', width: '28px', cursor: "pointer"}}></div>
            </div> */}
            <div className="form-check form-switch">
              <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
              <label className={`form-check-label mx-3 text-${props.mode==='light' ? 'dark':'light'}`} htmlFor="flexSwitchCheckDefault">Enbale Dark Mode</label>
          </div>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    )
}

Navbar.propTypes = {title: PropTypes.string.isRequired}

// <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React! Shaurya This Side
    //     </a>
    //   </header>
    // </div>