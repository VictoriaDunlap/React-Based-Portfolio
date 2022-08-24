import React from 'react'

// const style = {
//     footerStyle: {
//         width: '25%'
//     }
// }

function Footer() {
    return(

        <footer class="text-center text-white">
       
          <div class="container pt-4">
            
            <section class="mb-4">
         
                <a class="btn btn-primary btn-floating m-1" target="_blank" rel="noreferrer noopener" href="https://github.com/VictoriaDunlap" role="button">
                    <i class="bi bi-github"> GitHub</i>
                </a>

                <a class="btn btn-primary btn-floating m-1" target="_blank" rel="noreferrer noopener" href="https://www.linkedin.com/in/victoria-dunlap/" role="button">
                    <i class="bi bi-linkedin"> LinkedIn</i>
                </a>

                <a class="btn btn-primary btn-floating m-1" target="_blank" rel="noreferrer noopener" href="https://twitter.com/DunlapCharli" role="button">
                    <i class="bi bi-twitter"> Twitter</i>
                </a>

            </section>
       
          </div>
         
        </footer>
  )
}

export default Footer