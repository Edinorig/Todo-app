import React from 'react'

function Counter({counter, counterName}) {
    console.log(counter);
    
  return (
    <div>{counterName} tasks : {counter} </div>
  )
}

export default Counter