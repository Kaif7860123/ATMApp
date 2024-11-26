 import React from 'react'
import GeneratePin from '../GeneratePin/GeneratePin'
import success from '../../../assets/success.png'
 function Success() {
   return (
     <>
       <GeneratePin para="Your Pin has been generated :)" img={success}  />
     </>
   )
 }
 
 export default Success
 