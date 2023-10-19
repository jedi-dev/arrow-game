import React, { FC } from "react"
import { TypographyText } from "../../../../../UI"
import stylesCommon from "../../RandomKeys.module.css"
import styles from "./WelcomeText.module.css"
import loader from "./img/loader.svg"

export interface IWelcomeTextProps {
  isTimerActive: boolean
}

const WelcomeText: FC<IWelcomeTextProps> = ({ isTimerActive }) => {
  if (isTimerActive) {
    return (
      <div className={stylesCommon.wrapper}>
        <span className={stylesCommon.icon}>
          <img className={styles.loader} src={loader} alt="Loading" />
        </span>
      </div>
    )
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
