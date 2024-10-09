import styled from 'styled-components'

import { Color } from '~/constants'

interface IHighlightSpanProps {
  $red: boolean
}

export const HighlightSpan = styled.span<IHighlightSpanProps>`
  color: ${({ $red }) => ($red ? Color.CrimsonRed : 'inherit')};
`

export const NavItem = styled.li`
  margin: 0 8px;
`

export const NavList = styled.ul`
  display: flex;
  justify-content: space-between;
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
`

export const NavMenu = styled.nav``

export const MainTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  line-height: 37px;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 50px;
`
