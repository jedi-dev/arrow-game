import React, { FC } from "react"
import { MAP_ARROW_CODES } from "../../../../constants"
import { IMapArrowCodes } from "../../../../types"
import { IPlaygroundStepsState } from "../../../../store/types"
import stylesCommon from "../../RandomKeys.module.css"
import styles from "./RandomArrows.module.css"
import { useAppSelector } from "../../../../../../app/hooks"
import cn from "classnames"

const RandomArrows: FC = () => {
  const state = useAppSelector((state) => state.playground)
  const getStyleRandomKeys = (el: IPlaygroundStepsState): string => {
    return cn(
      el.success && styles.iconSuccess,
      !el.success && el.success !== null && styles.iconFail,
      stylesCommon.icon,
    )
  }
  return (
    <div className={stylesCommon.wrapper}>
      {state.steps.map((el) => (
        <span key={el.step} className={getStyleRandomKeys(el)}>
          {MAP_ARROW_CODES[el.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </div>
  )
}

export default RandomArrows
