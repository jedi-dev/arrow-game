import React, { FC } from "react"
import cn from "classnames"
import styles from "./TypographyHeader.module.css"
import {
  Typography as MaterialTypography,
  TypographyProps as MaterialTypographyProps,
} from "@mui/material"

export interface ITypographyHeaderProps extends MaterialTypographyProps {
  //
}

const TypographyHeader: FC<ITypographyHeaderProps> = (props) => {
  const { children, className = "" } = props
  return (
    <MaterialTypography
      variant="h3"
      {...props}
      className={cn(styles.text, className)}
    >
      {children}
    </MaterialTypography>
  )
}

export default TypographyHeader
