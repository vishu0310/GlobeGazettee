import React from 'react'
import loading from './ZZ5H.gif'

const Spinner = ()=> {
  
    return (
      <div className='text-center ' >
        <img src={loading} alt="loading" style={{height:'40px', width:'40px'}}/>
      </div>
    )  
  
}

export default Spinner
