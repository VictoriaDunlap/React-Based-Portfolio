import React from 'react'

// const style = {
//     footerStyle: {
//         width: '25%'
//     }
// }

function Footer() {
    return(
        // <div>
        //     <h1 class="mx-5 mt-5 mb-3 row justify-content-center" style={style}>Lets Keep in Touch</h1>
        // <footer  class="container row pt-4">
         
        // <i class="bi bi-envelope">victoriacdunlap@gmail.com</i>
        // <a target="_blank" rel="noreferrer noopener" class="nav-link" href="https://github.com/VictoriaDunlap">
        // <i class="bi bi-github"> GitHub</i>
        // </a>
        // <a target="_blank" rel="noreferrer noopener" class="nav-link" href="https://www.linkedin.com/in/victoria-dunlap/">
        // <i class="bi bi-linkedin"> LinkedIn</i>
        // </a>
        // </footer>

        // </div>

        // style="background-color: #f1f1f1;"
        // style="background-color: rgba(0, 0, 0, 0.2);"

        <footer class="text-center text-white">
  {/* <!-- Grid container --> */}
  <div class="container pt-4">
    {/* <!-- Section: Social media --> */}
    <section class="mb-4">
      {/* <!-- Facebook --> */}
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-facebook-f"></i>
        </a>
        <a target="_blank" rel="noreferrer noopener"  class="btn btn-link btn-floating btn-lg text-dark m-1" href="https://github.com/VictoriaDunlap">
        <i class="bi bi-github"> GitHub</i>
        </a>
        <a
        class="btn btn-primary btn-floating m-1"
        target="_blank" rel="noreferrer noopener" 
        href="https://github.com/VictoriaDunlap"
        role="button"
        >
            <i class="bi bi-github"> GitHub</i>
        </a>
      {/* <!-- Twitter --> */}
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-twitter"></i
      ></a>

      {/* <!-- Google --> */}
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-google"></i
      ></a>

      {/* <!-- Instagram --> */}
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-instagram"></i
      ></a>

      {/* <!-- Linkedin --> */}
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-linkedin"></i
      ></a>
      {/* <!-- Github --> */}
      <a
        class="btn btn-link btn-floating btn-lg text-dark m-1"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><i class="fab fa-github"></i
      ></a>
    </section>
    {/* <!-- Section: Social media --> */}
  </div>
  {/* <!-- Grid container --> */}

  {/* <!-- Copyright --> */}
  <div class="text-center text-dark p-3">
    © 2020 Copyright:
    <a class="text-dark" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  {/* <!-- Copyright --> */}
</footer>
  )
}

export default Footer