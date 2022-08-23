import React from 'react'

const style = {
    footerStyle: {
        width: '25%'
    }
}

function Footer() {
    return(
        <div>
         <h1 class="mx-5 mt-5 mb-3 row justify-content-center" style={style}>Lets Keep in Touch</h1>
        <i class="bi bi-envelope">victoriacdunlap@gmail</i>
        <a target="_blank" rel="noreferrer noopener" class="nav-link" href="https://github.com/VictoriaDunlap">
        <i class="bi bi-github"> GitHub</i>
        </a>
        <a target="_blank" rel="noreferrer noopener" class="nav-link" href="https://www.linkedin.com/in/victoria-dunlap/">
        <i class="bi bi-linkedin"> LinkedIn</i>
        </a>
        </div>
  )
}

export default Footer