import React from 'react'
import RR from '../assets/reprorights.png'
import ecommerce from '../assets/ecommerce.jpg'

function Projects() {
    return(
    <div id="worksCarousel" class="carousel slide" data-ride="carousel">
      <div class="carousel-inner" role="listbox">
        <div class="carousel-item active">
          <img class="img-fluid d-block w-100" src={RR} alt="First slide"></img>
        </div>
        <div class="carousel-item">
          <img class="img-fluid d-block w-100" src={ecommerce} alt="Second slide"></img>
        </div>
        <div class="carousel-item">
        <img class="img-fluid d-block w-100" src={ecommerce} alt="Third slide"></img>
        </div>
      </div>
      <a class="carousel-control-prev" href="#worksCarousel" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      </a>
      <a class="carousel-control-next" href="#worksCarousel" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
      </a>
    </div>
    )
}

export default Projects