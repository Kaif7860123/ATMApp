import React, { useState } from "react";
import "../mainCard.css";
import { Link } from "react-router-dom";
const EnterPin = () => {
  const [inputData, setInputData] = useState("");
  const validate = (e) => {
    setInputData(e.target.value);
  };
   const cancel=()=>{
    setInputData("")
   }
  const clear = () => {
    let val = inputData.split("");
    val.length = val.length - 1;
    val = val.join("");
    setInputData(val);    
  };
  // const submit=()=>{
  //     localStorage.setItem("key",inputData)
  // }
  const input=localStorage.getItem("key")
  let lastFour =input.slice(-4)
   
  return (
    <>
 
      <div className="atm">
        <div className="atmBody">
           <div className="cardNum"><p> XXXX XXXX XXXX {lastFour}</p></div>
          <div style={{ position: "relative" }}>
            <input
              type="password"
              value={inputData}
              placeholder= "Enter Confirm Pin"
              onChange={(e) => validate(e)}
            />
            {inputData.length>0&&inputData.length!==4 ? <p className="error">Please Enter  4  digit pin</p> : ""}
          </div>
          <div className="btnCont">
            <button
              className={` clear `}
              onClick={clear}
              disabled={inputData.length > 0 ? false : true}
            >
              CLEAR
            </button>
             
           <Link to="/">  <button className="cancel" onClick={cancel} 
            disabled={inputData.length > 0 ? false : true}
            >
                BACK
            </button> 
            </Link>
             
      <Link to={localStorage.getItem("pin")===inputData?"/user":"/error"}
       value={inputData}>
            <button className="submit"   
            disabled={inputData.length === 4 ? false : true}
            > CONFIRM
            </button>
            </Link>
            <div>

            </div>
           <Link to="/reset"><div className="resetDiv"> <p className="reset">
            Reset Pin</p> </div> </Link>

          </div>
        </div>
      </div>
    </>
  );
};

export default EnterPin;








// import React from 'react'
// import MainCard from '../MainCard'

// function EnterPin() {
//   return (
//     <>
//       <MainCard btn1="CLEAR" btn2="BACK" btn3="CONFIRM"
//        placeholder="Enter Confirm Pin"/>
//     </>
//   )
// }

// export default EnterPin
