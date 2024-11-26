import React, { useState } from 'react'
import '../ResetPin/reset.css';
import { useNavigate } from 'react-router-dom';
function CommonPinCompo(props) {
    const[newPin,setNewPin]=useState()
    const[newCPin,setNewCPin]=useState()
    const[check,setCheck]=useState(false)
    const navigate=useNavigate()
    console.log(newPin);
    const newConfirmPin=(e)=>{
        setNewCPin(e.target.value) 
        setCheck(true)
    }
    const goToDonePin=()=>{
         localStorage.setItem("pin",newCPin)
      if(newPin===newCPin){
        navigate("/newPinDone")
      }
    }
    const goToCardPage=()=>{
      navigate("/")
    }
  return (
    <>
      <div className='contenar'>
        <div className='resetCont' style={{position:"relative"}}>
            <p className='para'>{props.para}</p>
            <p>{}</p>
            <input type='number' onChange={(e)=>setNewPin(e.target.value)} value={newPin}/> 
            <p>{props.p1}</p>
            <input type='password' value={newCPin} onChange={newConfirmPin} />
           {newPin!==newCPin &&check ?
            <p style={{color:"red",
                 position:"absolute", top:"75%"}}>
                 {props.p2}</p> :""}
            <div className='btn1'>
            <button className='next' onClick={goToDonePin} disabled={newPin==newCPin?false:true}>Next</button>  
            <button className='close' onClick={goToCardPage}>Close</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default CommonPinCompo



























