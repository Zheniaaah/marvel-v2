import React from 'react'
import { Outlet } from 'react-router-dom'

import { Container, Wrapper } from './styles'

import { NavHeader } from '~/components/widget'

const MainLayout: React.FC = () => {
  return (
    <Wrapper>
      <Container>
        <NavHeader />
        <Outlet />
      </Container>
    </Wrapper>
  )
}

export default React.memo(MainLayout)
