import React from 'react'

const style = {
    width: "200px;",
    // display: 'inline'
}

function Testimonials() {
    return (
        <div class="container">
             <h1 class="mx-5 mt-5 mb-3 row justify-content-center" style={style}>Testimonials</h1>
            <figure class="text-end">
                <blockquote class="blockquote">
                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
                </blockquote>

                <figcaption class="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
                </figcaption>
            </figure>
        </div>
    )
}

export default Testimonials