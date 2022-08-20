import React from 'react'

function NavBar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Victoria Dunlap</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarColor01">
            <ul class="navbar-nav me-auto">
              <li class="nav-item">
                <a class="nav-link active" href="#">Home
                  {/* <span class="visually-hidden">(current)</span> */}
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">About</a>
              </li>
              {/* <li class="nav-item">
                <a class="nav-link" href="#">Pricing</a>
              </li> */}
              <li class="nav-item">
                <a class="nav-link" href="#">Resume</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Projects</a>
                <div class="dropdown-menu">
                  <a class="dropdown-item" href="#">Repro Rights</a>
                  <a class="dropdown-item" href="#">ANother one</a>
                  <a class="dropdown-item" href="#">Something else here</a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" href="#">Separated link</a>
                </div>
              </li>
            </ul>
            <ul class="navbar-nav ms-md-auto">
              <li class="nav-item">
                <a target="_blank" rel="noopener" class="nav-link" href="https://github.com/VictoriaDunlap">
                <i class="bi bi-github"> GitHub</i>
                </a>
              </li>
              <li class="nav-item">
              <a target="_blank" rel="noopener" class="nav-link" href="https://www.linkedin.com/in/victoria-dunlap/">
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