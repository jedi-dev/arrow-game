import React, { FC } from "react"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: FC<IResultMessageProps> = (props) => {
  const { isSuccessEndGame } = props
  return isSuccessEndGame ? <span>You win!</span> : <span>You lose!</span>
}

export default ResultMessage
