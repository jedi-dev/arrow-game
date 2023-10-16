import React, { FC } from "react"
import { Button } from "../../../UI"
import styles from "./Controls.module.css"
import { Pause, PlayArrow } from "@mui/icons-material"

export interface IControlsProps {
  isTimerActive: boolean
  setIsTimerActive: React.Dispatch<React.SetStateAction<boolean>>
}

const Controls: FC<IControlsProps> = (props) => {
  const { isTimerActive, setIsTimerActive } = props

  return (
    <div>
      <Button
        onClick={() => setIsTimerActive(true)}
        disabled={isTimerActive}
        endIcon={<PlayArrow />}
        className={styles.button}
      >
        Play
      </Button>
      <Button
        onClick={() => setIsTimerActive(false)}
        disabled={!isTimerActive}
        endIcon={<Pause />}
        className={styles.button}
      >
        Pause
      </Button>
    </div>
  )
}

export default Controls
