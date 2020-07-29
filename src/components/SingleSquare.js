import React from 'react'

const SingleSquare= (props)=>{
  return(
    <div style={{height:'100px', width:'100px',}} className={props.color}>
      <h6 style={{textAlign:"center"}}>{props.name}</h6>
    </div>
  )
}

export default SingleSquare