import React from 'react'
import { Outlet } from 'react-router-dom'

import { Container, Wrapper } from './styles'

const MainLayout: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <Outlet />
      </Container>
    </Wrapper>
  )
}

export default React.memo(MainLayout)
