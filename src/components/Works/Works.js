import React from 'react'
import "./works.css"
import womensrightsmarch from '../../assets/womensrightsmarch.jpg'
import ecommerce from '../../assets/ecommerce.jpg'
import cms from '../../assets/cms.jpg'
import teamGen from '../../assets/teamGen.jpg'
import readMe from '../../assets/readMeGen.jpg'
import noteTaker from '../../assets/noteTaker.jpg'


const style = {
    width: "18rem;"
}

function Works() {
    return (

        <div id="Works" class="container ">
            <h1 class="mx-5 mt-5 mb-3 row justify-content-center" style={style}>Recent Works</h1>
            <div class='row d-flex justify-content-around'>
                <div class="card col-lg-3" style={style}>
                    <img src={womensrightsmarch} class="p-2 card-img-top" alt="womens rights march with signs holding up"></img>
                    <div class="card-body">
                        <h5 class="card-title">Reproductive Rights Center</h5>
                        <p class="card-text">A web app to keep you up-to-date with the current abortion laws going into effect across the nation.</p>
                        <a id="resume-button" target="_blank" rel="noreferrer noopener" href="https://github.com/VictoriaDunlap/Reproductive-Rights-Info-Hub" class="btn btn-primary">Go Here</a>
                    </div>
                </div>

                <div class="card col-lg-3" style={style}>
                    <img src={ecommerce} class="p-2 card-img-top" alt="laptop with graph on screen"></img>
                    <div class="card-body">
                        <h5 class="card-title">Backend Ecommerce Site</h5>
                        <p class="card-text">This app is intended to show how the backend of an ecommerce site would work.</p>
                        <a id="resume-button" target="_blank" rel="noreferrer noopener" href="https://github.com/VictoriaDunlap/ecommerce-site" class="btn btn-primary">Go Here</a>
                    </div>
                </div>

                <div class="card col-lg-3" style={style}>
                    <img src={cms} class="p-2 card-img-top" alt="code on part of a laptop screen"></img>
                    <div class="card-body">
                        <h5 class="card-title">Employee Tracker CMS</h5>
                        <p class="card-text">This application's intended use is for an organization to be able to keep and maintain an employee database including departments, roles, salaries, and managers.</p>
                        <a id="resume-button" target="_blank" rel="noreferrer noopener" href="https://github.com/VictoriaDunlap/Employee-Tracker-CMS" class="btn btn-primary">Go Here</a>
                    </div>
                </div>
            </div>

            {/* <h1 class="mx-5 mt-5 mb-3 row justify-content-center" style={style}>Recent Works</h1> */}
            <div class="mt-5">
            <div class='row d-flex justify-content-around'>
                <div class="card col-lg-3" style={style}>
                    <img src={teamGen} class="p-2 card-img-top" alt="team meeting at a table in an office"></img>
                    <div class="card-body">
                        <h5 class="card-title">Team Profile Generator</h5>
                        <p class="card-text">This command line application allows the user to create an HTML page to keep track and show off their team on the associated website that is generated.</p>
                        <a id="resume-button" target="_blank" rel="noreferrer noopener" href="https://github.com/VictoriaDunlap/Team-Profile-Generator" class="btn btn-primary">Go Here</a>
                    </div>
                </div>

                <div class="card col-lg-3" style={style}>
                    <img src={readMe} class="p-2 card-img-top" alt="two computer monitors with code open on one"></img>
                    <div class="card-body">
                        <h5 class="card-title">Read Me Generator</h5>
                        <p class="card-text">This product is intended to help make quick and easy ReadMe.md files for any future projects. This includes sections for licensing, contribution, and testing as well.</p>
                        <a id="resume-button" target="_blank" rel="noreferrer noopener" href="https://github.com/VictoriaDunlap/ReadMe-Generator-Using-Node/tree/main" class="btn btn-primary">Go Here</a>
                    </div>
                </div>

                <div class="card col-lg-3" style={style}>
                    <img src={noteTaker} class="p-2 card-img-top" alt="a person taking notes nexts to a laptop"></img>
                    <div class="card-body">
                        <h5 class="card-title">Note Taker App</h5>
                        <p class="card-text">This app allows the user to create and delete notes from the user's database.</p>
                        <a id="resume-button" target="_blank" rel="noreferrer noopener" href="https://github.com/VictoriaDunlap/Notes-Taker" class="btn btn-primary">Go Here</a>
                    </div>
                </div>
            </div>
            </div>

        </div>


    )
}

export default Works 