import React, {  useState } from "react";
import "./mainCard.css";
import { Link, useNavigate } from "react-router-dom";
const MainCard = (props) => {
  const navigate=useNavigate();
  const [inputData, setInputData] = useState("");
  const validate = (e) => {
      setInputData(e.target.value)  
  };
  const cancel = () => {
    setInputData("");    
  };
  const clear = () => {
    let val = inputData.split("");
    val.length = val.length - 1;
    val = val.join("");
    setInputData(val);    
  };
  const submit=async ()=>{
if(props.placeholder=="Enter Amount To Withdraw"){
  var tA=localStorage.getItem('amount');
  if(parseInt(tA)<parseInt(inputData)){
    navigate('/transactionfailed')
  }
  else{
    let  remainingbal=parseInt(tA)-parseInt(inputData);
    localStorage.setItem("amount",remainingbal);
    navigate('/transaction');
  }
}
      {props.placeholder=="Enter Your Card Number"?
      localStorage.setItem("key",inputData)
      :""
      }
      setInputData(null)
  }
  return (
    <>
      <div className="atm">
        <div className="atmBody">
          <div style={{ position: "relative" }}>
            <input
              type="number"
              value={inputData}
              placeholder= {props.placeholder}
            onChange={(e) => validate(e)}
            />
             { props.btn3==="CONTINUE" && inputData.length>0&&inputData.length!==16 ?
             <p className="error">Please Enter a Valid Card 16 digit</p> : ""}
          </div>
          <div className="btnCont">
            <button
              className={` clear `}
              onClick={clear}
              disabled={inputData.length > 0 ? false : true}
            >
            {props.btn1}
            </button>
            {            
              <button className={props.btn2 == "CANCEL"?"cancel":"submit"} onClick={props.btn2 == "CANCEL"? cancel :submit}  
              disabled={inputData.length > 0 ? false : true}
              >
                {props.btn2}
              </button>            
}
  {
      props.btn3!=="BACK"?
      <Link to={localStorage.getItem("key")===inputData?"/enterPin":"/detailCard"} 
      value={inputData}>
            <button className={props.btn3=="CONTINUE"?"submit":"cancel"} onClick={submit} 
            disabled={inputData.length ===16||props.btn2 != "CANCEL"&&inputData.length >0 ? false : true}
            >{props.btn3}
            </button>
            </Link>: <Link to='/user' 
      value={inputData}>
            <button className={props.btn3=="CONTINUE"?"submit":"cancel"}  
            disabled={inputData.length ===16||props.btn2 != "CANCEL"&&inputData.length >0 ? false : true}
            >{props.btn3}
            </button>
            </Link>
          }  
          </div>
        </div>
      </div>
    </>
  );
};
export default MainCard;
