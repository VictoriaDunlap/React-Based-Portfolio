import React from 'react'
// import AboutMe from '../About/AboutMe'

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a id="nav-button" class="nav-link active" href=" ">Home
                  {/* <span class="visually-hidden">(current)</span> */}
                </a>
              </li>
              <li class="nav-item">
                <a id="nav-button" class="nav-link" href="#About">About</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li> */}
              <li class="nav-item">
                <a id="nav-button" class="nav-link" href="https://docs.google.com/document/d/e/2PACX-1vS_nKj-_pmjFeGoD5o_AeV6QBLcUdcn_X23uadyAMjkjxrejPOqBANGMwMdowaFLMAcjHBYY_g2eq1w/pub">Resume</a>
              </li>
              <li class="nav-item">
              <a id="nav-button" class="nav-link" href="#Works">Work</a>
              </li>
              <li class="nav-item">
              <a id="nav-button" class="nav-link" href="#Contact">Contact</a>
              </li>
            </ul>
            <ul class="navbar-nav ms-md-auto">
              <li class="nav-item">
                <a id="nav-button" target="_blank" rel="noreferrer noopener" class="nav-link" href="https://github.com/VictoriaDunlap">
                <i class="bi bi-github"> GitHub</i>
                </a>
              </li>
              <li class="nav-item">
              <a id="nav-button" target="_blank" rel="noreferrer noopener" class="nav-link" href="https://www.linkedin.com/in/victoria-dunlap/">
              <i class="bi bi-linkedin"> LinkedIn</i>
              </a>
              </li>
                
              
            </ul>
            {/* <form class="d-flex">
              <input class="form-control me-sm-2" type="text" placeholder="Search"></input>
              <button class="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
            </form> */}
          </div>
        </div>
      </nav>
    )
}

export default NavBar