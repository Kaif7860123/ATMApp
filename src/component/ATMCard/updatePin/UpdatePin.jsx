import React, { useState }  from 'react'
import  "../ResetPin/reset.css"
import { useNavigate } from 'react-router-dom';
function UpdatePin() {
  const[data,setData]=useState("")
  const[check,setcheck]=useState(false)
     const navigate=useNavigate()
    const goToDonePin=()=>{
      const pin=localStorage.getItem("pin")
       if(data===pin){
        navigate("/newPin")
       }
       else{
        setcheck(true)
       }
    
    }
    const goToCardPage=()=>{
      navigate("/user")
    }
    const handleData=(e)=>{
      setData(e.target.value)
    }
    
  return (
    <>
      <div className='contenar'>
        <div className='resetCont' style={{position:"relative"}}>
            <p className='para'>Change Your  ATM PIN</p>
            
            <p> Old ATM PIN</p>
            <input type='password' onChange={handleData} />
           {(data!== localStorage.getItem("pin")&&data.length>0)&&(data.length!=4)||(data.length===4&&check) ?
            <p style={{color:"red",
                 position:"absolute", top:"68%"}}>
                 Please Enter Correct Old ATM PIN</p> :""}
            <div className='btn1'>
            <button className='next' onClick={goToDonePin} >Next</button>  
            <button className='close' onClick={goToCardPage}>Close</button>
            </div>
        </div>
      </div>
    </>
  )
}

export default UpdatePin
