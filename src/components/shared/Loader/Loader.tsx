import React from 'react'

import { LoaderContainer, LoaderItem } from './styles'

interface IProps {
  size: number
}

const Loader: React.FC<IProps> = ({ size }) => {
  return (
    <LoaderContainer size={size}>
      <LoaderItem />
    </LoaderContainer>
  )
}

export default React.memo(Loader)
