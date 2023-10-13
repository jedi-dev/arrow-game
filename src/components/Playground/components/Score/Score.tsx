import React, { FC } from "react"
import { useAppSelector } from "../../../../app/hooks"

const Score: FC = () => {
  const state = useAppSelector((state) => state.playground)
  return (
    <>
      <h3>Score</h3>
      <span>Errors: {state.totalUnsuccessful}</span>
      <br />
      <span>Successful: {state.totalSuccessful}</span>
    </>
  )
}

export default Score
