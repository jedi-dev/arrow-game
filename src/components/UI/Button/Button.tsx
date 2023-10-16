import React, { FC } from "react"
import cn from "classnames"
import { Button as MaterialBtn, ButtonProps } from "@mui/material"
import styles from "./Button.module.css"

export interface IButtonProps extends ButtonProps {}

const Button: FC<IButtonProps> = (props) => {
  const { children, className = "" } = props
  return (
    <MaterialBtn
      variant="contained"
      size="small"
      {...props}
      className={cn(styles.button, className)}
    >
      {children}
    </MaterialBtn>
  )
}

export default Button
