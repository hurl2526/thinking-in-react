import React from 'react'

const SingleSquare= (props)=>{
  return(
    <div className="ui cards">
      <div className="ui card">
        <div className="content">
          <p>Do you approve request</p>
        </div>
        {props.children}
        <div>Click Yes or No</div>
        <div className="extra content">
          <div className='ui two buttons'>
            <button className='ui green basic button'>Yes</button>
            <button className='ui red basic button'>No</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleSquare