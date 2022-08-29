import React from 'react'

const Footer = () => {
let fooStyle={
    backgroundColor:"blue",
    position:'fixed',
    bottom:'0px',
    width:"100%"
}

  return (
    <>
      <div style={fooStyle}>
         This is footer section
      </div>
    </>
  )
}

export default Footer