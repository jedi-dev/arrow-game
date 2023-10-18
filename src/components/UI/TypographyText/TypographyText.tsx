import React, { FC } from "react"
import cn from "classnames"
import styles from "./TypographyText.module.css"
import {
  Typography as MaterialTypography,
  TypographyProps as MaterialTypographyProps,
} from "@mui/material"

export interface ITypographyTextProps extends MaterialTypographyProps {
  //
}

const TypographyText: FC<ITypographyTextProps> = (props) => {
  const { children, className = "" } = props
  return (
    <MaterialTypography {...props} className={cn(styles.text, className)}>
      {children}
    </MaterialTypography>
  )
}

export default TypographyText
