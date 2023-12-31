import React, { FC } from "react"
import { useFormStatus } from "react-dom"

import { Button } from "@nextui-org/react"

interface IComponentProps {
  children: React.ReactNode
}
const FormButton: FC<IComponentProps> = ({ children }) => {
  const { pending } = useFormStatus()
  return (
    <Button type="submit" color="primary" isLoading={pending}>
      {children}
    </Button>
  )
}

export default FormButton
