import { useState } from 'react'

export type ResultDialogProps = {
  title: string
  content: string
}

type UseDialog = {
  isOpen: boolean
  openDialog: (props?: ResultDialogProps) => void
  closeDialog: () => void
  dialogProps: ResultDialogProps
}

export const useResultDialog = (
  initialProps: ResultDialogProps = { title: '', content: '' }
): UseDialog => {
  const [isOpen, setIsOpen] = useState(false)
  const [dialogProps, setDialogProps] = useState(initialProps)

  const openDialog = (props?: ResultDialogProps) => {
    if (props) setDialogProps(props)
    setIsOpen(true)
  }
  const closeDialog = () => setIsOpen(false)

  return { isOpen, openDialog, closeDialog, dialogProps }
}
