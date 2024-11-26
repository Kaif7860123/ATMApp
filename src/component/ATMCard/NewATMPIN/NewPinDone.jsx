import React from 'react'
import GeneratePin from '../GeneratePin/GeneratePin'
import success from '../../../assets/success.png'
function NewPinDone() {
  return (
    <>
      <GeneratePin para={"New PIN has been created :)"} img={success}/>
    </>
  )
}

export default NewPinDone
