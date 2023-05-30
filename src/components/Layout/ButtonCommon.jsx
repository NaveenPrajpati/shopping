import React from 'react'

function ButtonCommon({color,text,onClick}) {
  return (
    <button onClick={onClick} className={`p-2  ${color} text-white font-semibold rounded-lg`}>{text}</button>
  )
}

export default ButtonCommon