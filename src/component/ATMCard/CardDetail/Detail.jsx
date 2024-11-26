import React, { useState }  from "react";
import "./detail.css";
import { Link } from "react-router-dom";
function Detail( ) {
  const[detailData,setDetailData]=useState({
    CardType:"",
    BankCard:"",
   Expiration:"",
   Name:"",
   Phone:"",
   BankName:"",
      BankType:"",
     Pin:"",
   Amount:"",
  })

  

  const handleChange=(e)=>{
    const {name,value}=e.target
    setDetailData({
      ...detailData,
      [name]:value
    })
  }
  console.log(detailData);
  const handleSubmit=()=>{
    if(detailData.CardType===""||detailData.BankType===""||detailData.Amount===""
      ||detailData.BankCard===""||detailData.BankName===""||detailData.Expiration===""||
      detailData.Name===""||detailData.Phone===""||detailData.Pin===""

    ){
      alert("please fill all the information")
    }
    
  }
  const input=localStorage.getItem("key")
  let lastFour =input.slice(-4)
   
    localStorage.setItem("phone",detailData.Phone)
    localStorage.setItem("amount",detailData.Amount)
    localStorage.setItem("bankCard",detailData.BankCard)
    localStorage.setItem("bankName",detailData.BankName)
    localStorage.setItem("bankType",detailData.BankType)
    localStorage.setItem("cardType",detailData.CardType)
    localStorage.setItem("expiration",detailData.Expiration)
    localStorage.setItem("name",detailData.Name)
    localStorage.setItem("pin",detailData.Pin)
   const removeKey=()=>{
    localStorage.removeItem("key")
   } 

  return (
    <>
      <div className="detailCont">
        <div className="cardDetail">
          <div className="inputDiv">
            <div>
              <p>
                Card Type<span>*</span>
              </p>
              <input type="text" placeholder="VISA,RUPAY etc..."
               name="CardType" value={detailData.CardType}  onChange={handleChange}/>
            </div>
            <div>
              <p>
                Bank Card <span>*</span>
              </p>
              <input type="text" placeholder="HDFC,SBI etc..."
              name="BankCard" onChange={handleChange} />
            </div>
          </div>

          <div className="inputDiv">
            <div>
              <p>
                Card Number<span>*</span>
              </p>
              <input type="text" value={`XXXX XXXX XXXX ${lastFour}`}   />
            </div>
            <div>
              <p>
                Expiration <span>*</span>
              </p>
              <input type="text" placeholder="mm/yyyy" name="Expiration" onChange={handleChange}/>
            </div>
          </div>


          <div className="inputDiv">
            <div>
              <p>
                Name<span>*</span>
              </p>
              <input type="text" placeholder="eg - Mohd kaif" name="Name" onChange={handleChange}/>
            </div>
            <div>
              <p>
                Phone <span>*</span>
              </p>
              <input type="text" placeholder=" XXXXXXXX62" name="Phone" onChange={handleChange}/>
            </div>
          </div>
        </div>
        <div className="cardDetail" style={{backgroundColor:"gray"}}>
          <div className="black"></div>
          <div className="inputDiv">
            <div className="inputBox">
              <p>
               Bank Name<span>*</span>
              </p>
              <input type="text" placeholder="Bank of India etc.." name="BankName" onChange={handleChange}/>
            </div>
            <div className="pinDiv">
              <p>
                PIN<span>*</span>
              </p>
              <input type="password" placeholder="xxxx" name="Pin" onChange={handleChange}/>
            </div>
            </div>


            <div className="inputDiv">
            <div className="inputBox">
              <p>
               Bank Type<span>*</span>
              </p>
              <input type="text" placeholder="Saving,Current" name="BankType"onChange={handleChange} />
            </div>
            <div className="pinDiv">
              <p>
                AMOUNT<span>*</span>
              </p>
              <input type="text" placeholder="xxxx" name="Amount"onChange={handleChange}/>
            </div>
            </div>
           
        </div>
        <div className="btn">
          
          <Link to={`${detailData.CardType===""||detailData.BankType===""||detailData.Amount===""
      ||detailData.BankCard===""||detailData.BankName===""||detailData.Expiration===""||
      detailData.Name===""||detailData.Phone===""||detailData.Pin===""?"/detailCard":"/success"}`}>
           <button  className="save" onClick={handleSubmit}>save</button></Link>
            <Link to="/"><button className="close" onClick={removeKey}>close</button></Link>
           </div> 
      </div>
    </>
  );
}

export default Detail;
