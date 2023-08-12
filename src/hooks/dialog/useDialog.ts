import { useState } from 'react'

type UseDialog = {
  isOpen: boolean
  openDialog: () => void
  closeDialog: () => void
}

export const useDialog = (initialState = false): UseDialog => {
  const [isOpen, setIsOpen] = useState(initialState)
  const openDialog = () => setIsOpen(true)
  const closeDialog = () => setIsOpen(false)

  return { isOpen, openDialog, closeDialog }
}
