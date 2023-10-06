import { FC } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { setCurrentStep } from "./store/slices"

const Playground: FC = () => {
  const dispatch = useAppDispatch()
  const state = useAppSelector((state) => state.playground)

  return (
    <div>
      {state.currentStep}
      <button onClick={() => dispatch(setCurrentStep())}>Change</button>
    </div>
  )
}

export default Playground
