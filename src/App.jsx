 import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Detail from './component/ATMCard/CardDetail/Detail'
import GeneratePin from './component/ATMCard/GeneratePin/GeneratePin'
import EnterPin from './component/ATMCard/EnteredPin/EnterPin'
import FrontCard from './component/ATMCard/FrontCard'
import Reset from './component/ATMCard/ResetPin/Reset'
import User from './UserDetail/User'
import Error from './ErrorPin/Error'
import Withdraw from './component/ATMCard/withdraw/withdraw'
import Transaction from './component/ATMCard/Transaction/Transaction'
import TransactionFailed from './component/ATMCard/Transaction/TransactionFailed'
import Success from './component/ATMCard/CommonCompo/Success'
import UpdatePin from './component/ATMCard/updatePin/UpdatePin'
import NewPin from './component/ATMCard/NewATMPIN/NewPin'
import NewPinDone from './component/ATMCard/NewATMPIN/NewPinDone'
import CommonPinCompo from './component/ATMCard/CommonCompo/CommonPinCompo'
 
 function App() {
   return (
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<FrontCard/>}></Route>
        <Route path='/detailCard' element={<Detail/>}></Route>
        <Route path='/success' element={<Success/>}></Route>
        <Route path='/enterPin' element={<EnterPin/>}></Route>
        <Route path='/reset' element={<Reset/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/error' element={<Error/>}></Route>
        <Route path='/withdraw' element={<Withdraw/>}></Route>
        <Route path='/transaction' element={<Transaction/>}></Route>
        <Route path='/transactionfailed' element={<TransactionFailed/>}></Route>
        <Route path='/updatePin' element={<UpdatePin/>}></Route>
        <Route path='/newPin' element={<NewPin/>}></Route>
        <Route path='/newPinDone' element={<NewPinDone/>}></Route>
      </Routes>
      </BrowserRouter>
      
   )
 }
 
 export default App
 