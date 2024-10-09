import React from 'react'

import { ButtonContainer, Inner } from './styles'

import { ButtonStyle } from '~/constants'

interface IProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  view: ButtonStyle
  width?: number
}

const Button: React.FC<IProps> = ({ children, view, width, ...props }) => {
  return (
    <ButtonContainer $color={view} $width={width} {...props}>
      <Inner $color={view}>{children}</Inner>
    </ButtonContainer>
  )
}

export default React.memo(Button)
