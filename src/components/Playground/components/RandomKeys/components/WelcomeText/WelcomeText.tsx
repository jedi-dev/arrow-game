import React, { FC } from "react"
import { TypographyText } from "../../../../../UI"

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: FC<IWelcomeTextProps> = ({ isTimerActive }) => {
  if (isTimerActive) {
    return <span>Loading...</span>
  }
  return (
    <div>
      <TypographyText>
        Press "Play" to start the game and wait for the first arrow to appear
      </TypographyText>
    </div>
  )
}

export default WelcomeText
