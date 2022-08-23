import React from 'react'

const style = {
    footerStyle: {
        width: '25%'
    }
}

function Footer() {
    return(
        <div class="progress">
        <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={style}></div>
      </div>
  )
}

export default Footer