import React from 'react'

const Timer = () => {
  return (
    <>
      <div className="timer-container">
        <div className="seconds-input">Interval Timer</div>
        <div className="clock-face">
          <span className="timer-minutes">00</span>
          <span className="timer-colon">:</span>
          <span className="timer-seconds">00</span>
        </div>
      </div>
    </>
  )
}

export default Timer
