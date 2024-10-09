import React from 'react'
import { Link, useLocation } from 'react-router-dom'

import { Header, HighlightSpan, MainTitle, NavItem, NavList, NavMenu } from './styles'

import { Route } from '~/constants'

const NavHeader: React.FC = () => {
  const { pathname } = useLocation()

  return (
    <Header>
      <MainTitle>
        <Link to={Route.Connect}>
          <HighlightSpan $red={true}>Marvel </HighlightSpan>
          information portal
        </Link>
      </MainTitle>
      <NavMenu>
        <NavList>
          <NavItem>
            <Link to={Route.Connect}>
              <HighlightSpan $red={pathname === Route.Connect}>Characters</HighlightSpan>
            </Link>
          </NavItem>
          /
          <NavItem>
            <Link to={Route.Comics}>
              <HighlightSpan $red={pathname === Route.Comics}>Comics</HighlightSpan>
            </Link>
          </NavItem>
        </NavList>
      </NavMenu>
    </Header>
  )
}

export default React.memo(NavHeader)
