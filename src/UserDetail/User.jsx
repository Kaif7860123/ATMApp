import React, { useState } from 'react'
import { FaUserCircle } from "react-icons/fa";
import './user.css'
import card from '../assets/card.png'
import { Link, useNavigate } from 'react-router-dom';
function User() {
  const navigate=useNavigate()
  const[isH,setIsH]=useState(false)
    const phone=localStorage.getItem("phone")
    const bankCard=localStorage.getItem("bankCard")
    const bankName=localStorage.getItem("bankName")
    const bankType=localStorage.getItem("bankType")
    const cardType=localStorage.getItem("cardType")
    const expire=localStorage.getItem("expiration")
    const name=localStorage.getItem("name")
    const pin=localStorage.getItem("pin")
    const inputData=localStorage.getItem("key")
    const amount=localStorage.getItem("amount")
  const[balance,setBlance]=useState(amount)
    const logOut=()=>{
     localStorage.removeItem("key")

    }
    const goToUpdatePin=()=>{
navigate("/updatePin")
    }
    const checkBalance=()=>{
  setIsH(!isH)
    }
    
  return (
    <>
      <div className='atmCont'>
        <div className='atmBodys'>
      <div className='profile'>
      <FaUserCircle size={100} color='white'/>
      <div>
  <h2>{name}</h2>
   <p>{phone}</p>
   <p style={{color:"red"}}>{bankName}</p>
   <i>{cardType}</i>
      </div>
      </div>
      <div className='userBtn'> 
         <Link to="/"><div><button style={{backgroundColor:"red"}} onClick={logOut}>
          LOGOUT</button></div> </Link>
         <Link to="/withdraw"><div><button style={{backgroundColor:"green"}}
          >WITHDRAW</button> </div></Link>
      </div>
      </div>
     {isH && (<div className='balance'><p>
      Account Balance:{amount}</p></div>)}

      <div className= "check"><button className={`${!isH?"checkBalance":"close"}`}
       onClick={checkBalance}>{!isH?"Check Balance":"close"}</button></div>

      <div className='cardBody'>
      <img src= {card}/>
         <h1>{bankName}</h1>

        <div className='card'>
            <i>{bankCard}</i>
        </div>
        <div className='cardNumber'><p>{inputData}</p></div>
        <div className='validity'><span>Valid <br/> Thru</span>
        <p>{expire}</p>
        </div>
        <div className='update'><p className='updatePara' onClick={goToUpdatePin}>Update Pin</p></div>
      </div>
      </div>
    </>
  )
}

export default User
