import React from 'react'

const Button = ({func,value}) => {
  return (
    value=="="?<button onClick={()=>func(value)} style={{gridColumn:"span 3"}}>{value}</button>:value=="x"?<button onClick={()=>func("*")}>{value}</button>:<button onClick={()=>func(value)}>{value}</button>
  )
}

export default Button