import React, { FC } from "react"
import { MAP_ARROW_CODES } from "../../../../constants"
import { IMapArrowCodes } from "../../../../types"
import { IPlaygroundStepsState } from "../../../../store/types"
import styles from "./RandomArrows.module.css"
import { useAppSelector } from "../../../../../../app/hooks"

const RandomArrows: FC = () => {
  const state = useAppSelector((state) => state.playground)
  const getStyleRandomKeys = (el: IPlaygroundStepsState): string => {
    if (el.success && el.success !== null) {
      return styles.iconSuccess
    }
    if (!el.success && el.success !== null) {
      return styles.iconFail
    }
    return styles.icon
  }
  return (
    <>
      {state.steps.map((el) => (
        <span key={el.step} className={getStyleRandomKeys(el)}>
          {MAP_ARROW_CODES[el.currentValue as keyof IMapArrowCodes]}
        </span>
      ))}
    </>
  )
}

export default RandomArrows
