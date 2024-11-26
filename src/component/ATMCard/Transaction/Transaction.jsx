import React from 'react'
import GeneratePin from '../GeneratePin/GeneratePin'
import success from '../../../assets/success.png'
function Transaction() {
  return (
    <>
      <GeneratePin para="Thank You for Transaction :)" img={success}/>
    </>
  )
}

export default Transaction
