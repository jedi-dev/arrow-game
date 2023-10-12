import React, { FC } from "react"

export interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: FC<IControlsProps> = (props) => {
  const { isTimerActive, setIsTimerActive } = props

  return (
    <div>
      <button onClick={() => setIsTimerActive(true)} disabled={isTimerActive}>
        Play
      </button>
      <button onClick={() => setIsTimerActive(false)} disabled={!isTimerActive}>
        Pause
      </button>
    </div>
  )
}

export default Controls