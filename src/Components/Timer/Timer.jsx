import React, { useState, useRef } from 'react'

import './styles.css'

const Timer = () => {
  const [seconds, setSeconds] = useState(0)

  let intervalRef = useRef()

  const handleStart = () => {
    intervalRef.current = setInterval(() => {
      setSeconds(decreace => decreace - 1)
    }, 1000)
  }
  return (
    <>
      <div className="timer-container">
        <div className="seconds-input">Interval Timer</div>
        <div className="clock-face">
          <span className="timer-minutes">00</span>
          <span className="timer-colon">:</span>
          <span className="timer-seconds">{PadWithZero(seconds, 2)}</span>
          <button onClick={handleStart}>Start</button>
        </div>
      </div>
    </>
  )
}

export default Timer
