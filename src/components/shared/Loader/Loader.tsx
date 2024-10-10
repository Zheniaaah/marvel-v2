import React from 'react'

import { LoaderContainer, LoaderItem } from './styles'

import { LoaderStyle } from '~/constants'

interface IProps {
  size: number
  color?: LoaderStyle
}

const Loader: React.FC<IProps> = ({ size, color = LoaderStyle.Red }) => {
  return (
    <LoaderContainer size={size} $color={color}>
      <LoaderItem />
    </LoaderContainer>
  )
}

export default React.memo(Loader)
