import React from 'react'
import './generatePin.css'
import {  useNavigate } from 'react-router-dom'
function GeneratePin({para,img}) {
  const navigate=useNavigate()
  const goToUser=()=>{
      if(para="remaining 2 times"){
        navigate("/enterPin")
      }
      else{
        navigate("/")     

      }
  }
  return (
    <>
    <div className='cont'>
      <div className='pinCont'>
        <img src={img}/>
        <p>{para}</p>
        <div className='btn '>
        <button onClick={goToUser} className="close" style={{margin:"20px -2px"}}>
          close</button> 
        </div>
      </div>
      </div>  
    </>
  )
}

export default GeneratePin
