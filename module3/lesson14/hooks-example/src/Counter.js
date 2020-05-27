import React from 'react'

export default function Counter(props) {
  // const [secondCounter, setSecondCounter] = useState(0)

  return (
    <>
        <div>
          {props.counter}
          <button onClick={() => props.setCounter(props.counter + 1)}>add one</button>
        </div>
        {/* <div>
        {secondCounter}
        <button onClick={() => setSecondCounter(secondCounter + 1)}>add one</button>
      </div> */}
    </>
  )
}
