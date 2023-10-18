import React, { FC } from "react"
import { TypographyText } from "../../../../../UI"
import styles from "./ResultMessage.module.css"

export interface IResultMessageProps {
  isSuccessEndGame: boolean
}

const ResultMessage: FC<IResultMessageProps> = (props) => {
  const { isSuccessEndGame } = props
  return (
    <div className={styles.wrapper}>
      {isSuccessEndGame ? (
        <TypographyText className={styles.text}>You win!</TypographyText>
      ) : (
        <TypographyText className={styles.text}>You lose!</TypographyText>
      )}
    </div>
  )
}

export default ResultMessage
