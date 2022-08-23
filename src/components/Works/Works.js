import React from 'react'
import "./works.css"
import reprorights from '../../assets/reprorights.png'
import ecommerce from '../../assets/ecommerce.jpg'
import placeHolder from '../../assets/treeaura.jpg'


const style = {
    width: "18rem;"
}

function Works() {
    return(
        <div id="Works" class="container ">

            <div class='row d-flex justify-content-around'>
            <div class="card col-lg-3" style={style}>
                    <img src={reprorights} class="card-img-top" alt="placeholder"></img>
                <div class="card-body">
                    <h5 class="card-title">Reproductive Rights Center</h5>
                    <p class="card-text">A web app to keep you up-to-date with the current abortion laws going into effect across the nation.</p>
                    <a href="https://github.com/VictoriaDunlap/Reproductive-Rights-Info-Hub" class="btn btn-primary">Go Here</a>
                </div>
            </div>

            <div class="card col-lg-3" style={style}>
                    <img src={ecommerce} class="card-img-top" alt="placeholder"></img>
                <div class="card-body">
                    <h5 class="card-title">Backend Ecommerce Site</h5>
                    <p class="card-text">This app is intended to show how the backend of an ecommerce site would work.</p>
                    <a href="https://github.com/VictoriaDunlap/ecommerce-site" class="btn btn-primary">Go Here</a>
                </div>
            </div>

            <div class="card col-lg-3" style={style}>
                    <img src={placeHolder} class="card-img-top" alt="placeholder"></img>
                <div class="card-body">
                    <h5 class="card-title">Card title</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Works 