import React, { FC } from "react"

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: FC<IWelcomeTextProps> = ({ isTimerActive }) => {
  if (isTimerActive) {
    return <span>Loading...</span>
  }
  return (
    <div>
      <span>
        Press "Play" to start the game and wait for the first arrow to appear
      </span>
    </div>
  )
}

export default WelcomeText
