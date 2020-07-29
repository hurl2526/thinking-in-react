import React from 'react'

const Footer = (props)=>{
  return(
    <footer style={{
      backgroundColor: 'grey',
      height:'5vh',
      textAlign:'center'
    }}>
      <div className="foot">
        <div className="footleft">
          <p>@copyright 2020</p>
        </div>
        <div className="footright">
          <h3>MY FOOTER</h3>
        </div>
      </div>
    </footer>
  )
}

export default Footer