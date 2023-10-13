import React, { Dispatch, FC, SetStateAction } from "react"
import { useAppDispatch } from "../../../../app/hooks"
import { resetStore } from "../../store/slices"
import ResultMessage from "./components/ResultMessage"

export interface IModalProps {
  setIsShowModal: Dispatch<SetStateAction<boolean>>
  isSuccessEndGame: boolean
}

const Modal: FC<IModalProps> = (props) => {
  const { setIsShowModal, isSuccessEndGame } = props
  const dispatch = useAppDispatch()
  const handleClose = () => {
    setIsShowModal(false)
    dispatch(resetStore())
  }
  return (
    <div>
      <h3>Modal</h3>
      <ResultMessage isSuccessEndGame={isSuccessEndGame} />
      <button onClick={handleClose}>Start New Game</button>
    </div>
  )
}

export default Modal
