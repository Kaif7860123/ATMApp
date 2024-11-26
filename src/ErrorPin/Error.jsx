import React from 'react'
import GeneratePin from '../component/ATMCard/GeneratePin/GeneratePin'
import error from '../assets/error.png'
function Error() {
  return (
    <>
       <GeneratePin para={`remaining 2 times`} img={error}/>
    </>
  )
}

export default Error
