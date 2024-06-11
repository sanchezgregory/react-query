import React, { useState } from 'react'
import {useCounterStore} from '../utilities/store-zustand'

export const Counter = () => {

  const [value, setValue] = useState(0)
  /*
  const count = useCounterStore(state => state.count)
  const showText = useCounterStore(state => state.showText)
  */
  const increment = useCounterStore(state => state.increment)
  const decrement = useCounterStore(state => state.decrement)
  const incByValue = useCounterStore(state => state.incByValue)
  const changeText = useCounterStore(state => state.changeText)
  

  // para hacerlo todo junto, se puede destructurar asi
  const [count, showText] = useCounterStore(state => [state.count, state.showText])

  const handleClic = () => {
    incByValue(value)
    changeText(value)
  }

  return (
    <>
      {showText && <div>Text by state: {showText}</div>}
      <div>Counter</div>

      <div>{count}</div>
      <div><button onClick={increment}> + </button></div>
      <div><button onClick={decrement}> - </button></div>
      <div><input type="text" onChange={(e)=> (setValue(Number(e.target.value)))}/></div>
      <div><button onClick={handleClic}> By value </button></div>
    </>
  )
}
