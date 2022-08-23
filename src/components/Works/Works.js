import React from 'react'
import "./works.css"
import womensrightsmarch from '../../assets/womensrightsmarch.jpg'
import ecommerce from '../../assets/ecommerce.jpg'
import cms from '../../assets/cms.jpg'


const style = {
    width: "18rem;"
}

function Works() {
    return(
            
        <div id="Works" class="container ">
             <h1 class="mx-5 mt-5 mb-3 row justify-content-center" style={style}>Recent Works</h1>
            <div class='row d-flex justify-content-around'>
            <div class="card col-lg-3" style={style}>
                    <img src={womensrightsmarch} class="p-2 card-img-top" alt="placeholder"></img>
                <div class="card-body">
                    <h5 class="card-title">Reproductive Rights Center</h5>
                    <p class="card-text">A web app to keep you up-to-date with the current abortion laws going into effect across the nation.</p>
                    <a target="_blank" rel="noreferrer noopener" href="https://github.com/VictoriaDunlap/Reproductive-Rights-Info-Hub" class="btn btn-primary">Go Here</a>
                </div>
            </div>

            <div class="card col-lg-3" style={style}>
                    <img src={ecommerce} class="p-2 card-img-top" alt="placeholder"></img>
                <div class="card-body">
                    <h5 class="card-title">Backend Ecommerce Site</h5>
                    <p class="card-text">This app is intended to show how the backend of an ecommerce site would work.</p>
                    <a target="_blank" rel="noreferrer noopener" href="https://github.com/VictoriaDunlap/ecommerce-site" class="btn btn-primary">Go Here</a>
                </div>
            </div>

            <div class="card col-lg-3" style={style}>
                    <img src={cms} class="p-2 card-img-top" alt="placeholder"></img>
                <div class="card-body">
                    <h5 class="card-title">Employee Tracker CMS</h5>
                    <p class="card-text">This application's intended use is for an organization to be able to keep and maintain an employee database including departments, roles, salaries, and managers.</p>
                    <a target="_blank" rel="noreferrer noopener" href="https://github.com/VictoriaDunlap/Employee-Tracker-CMS" class="btn btn-primary">Go Here</a>
                </div>
            </div>
            </div>

        </div>
    )
}

export default Works 