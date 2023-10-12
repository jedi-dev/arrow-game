import React, { FC, useCallback, useEffect } from "react"
import { MAP_ARROW_CODES } from "../../constants"
import { useAppDispatch } from "../../../../app/hooks"
import { setEnteredValue } from "../../store/slices"
import { useKeyPressedElement } from "./hooks"

export interface IKeyPressedProps {
  isTimerActive: boolean
}

const KeyPressed: FC<IKeyPressedProps> = (props) => {
  const { isTimerActive } = props
  const keyPressedElement = useKeyPressedElement()
  const dispatch = useAppDispatch()

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (Object.hasOwn(MAP_ARROW_CODES, e.key) && isTimerActive) {
        dispatch(setEnteredValue(e.key))
      }
    },
    [isTimerActive, dispatch],
  )

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)

    return () => {
      window.addEventListener("keydown", handleKeyDown)
    }
  })
  return (
    <div>
      <h3>KeyPressed</h3>
      <span>{keyPressedElement}</span>
    </div>
  )
}

export default KeyPressed
