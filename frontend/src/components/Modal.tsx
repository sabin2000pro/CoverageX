import React from 'react'
import styled from "styled-components"

interface IModalProps {
    children: any
}

const ModalContainer = styled.div`
    
`

const ModalContent = styled.div`
    
`


const Modal: React.FC<IModalProps> = ({children}: IModalProps) => {
  return (

    <>
      {children}
    </>

  )
}

export default Modal