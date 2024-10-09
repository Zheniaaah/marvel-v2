import styled from 'styled-components'

import { Color } from '~/constants'

export const Container = styled.div`
  position: relative;
  width: 1100px;
  padding: 50px 0;
  margin: 0 auto;
`

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100lvh;
  background-color: ${Color.AntiFlashWhite};
`
