import React from 'react'

const Sidebar = (props)=>{
  return(
    <div style={{width: '30%', height:"90vh", backgroundColor:'yellow'}}>
      <h3>My Sidebar</h3>
      <ul style={{listStyle:"none"}}>
        <li>{props.food1}</li>
        <li>{props.food2}</li>
        <li>{props.food3}</li>
        <li>{props.food4}</li>

      </ul>
      </div>
  )
}

export default Sidebar