import React, { useState } from 'react'
import './reset.css';
import { useNavigate } from 'react-router-dom';
function Reset() {
  const [check,setCheck]=useState(false);
    const [num,setNum]=useState("")
    const navigate=useNavigate()
    console.log(num);   
    const enterPin=()=>{
      navigate("/enterPin")
    }
      const updatePin=()=>{
        if(num===localStorage.getItem("phone")){
          navigate("/newPin");        
        } 
        else{
          setCheck(true);
        }     
      }
      
  return (
    <>
      <div className='contenar'>
        <div className='resetCont' style={{position:"relative"}}>
            <p className='para'>Reset Your ATM Pin</p>
            <p>Mobile Number</p>
            <input type='number' onChange={(e)=>setNum(e.target.value)} value={num}/>
            {(num.length===10&&check)||num>0 &&num!==localStorage.getItem("phone")&&num.length!==10?
            <p style={{color:"red",
                 position:"absolute", top:"65%"}}>
                 Please Enter Correct Phone Number</p>:""}
            <div className='btn1'>
            <button className='next' onClick={updatePin}>Next</button>  
            <button className='close' onClick={enterPin}>Close</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default Reset
