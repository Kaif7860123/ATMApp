import React from 'react'
import GeneratePin from '../GeneratePin/GeneratePin'
import error from '../../../assets/error.png'
function TransactionFailed() {
  return (
    <>
      <GeneratePin img={error} para="Your Transaction has been failed ! insufficient fund"/>
    </>
  )
}

export default TransactionFailed
