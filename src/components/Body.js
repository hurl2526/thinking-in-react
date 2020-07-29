import React from 'react'

const Body = (props)=>{
  return(
    <div className ="bodyContainer"style={{width: '70%', height:"90vh", backgroundColor:'red'}}>
      <h3>My Body</h3>
      <div>
      <img className="img" src='/images/miles.jpeg' alt='...'/>
      <p>a bunch of words in a paragraph about this image or whatever</p>
      </div>
      <div className="square">{props.children}</div>
    </div>
  )
}


export default Body