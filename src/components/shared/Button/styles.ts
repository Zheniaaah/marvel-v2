import styled from 'styled-components'

import { ButtonStyle, Color } from '~/constants'

interface IButtonContainerProps {
  $color: ButtonStyle
  $width?: number
}

export const ButtonContainer = styled.button<IButtonContainerProps>`
  cursor: pointer;
  min-width: 100px;
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: ${Color.White};
  transition: transform 0.3s;
  width: ${({ $width }) => ($width ? `${$width}px` : '100px')};
  height: 40px;
  position: relative;
  clip-path: polygon(
    10px 0,
    100% 0,
    100% calc(100% - 10px),
    calc(100% - 10px) 100%,
    0 100%,
    0 10px
  );
  background-color: ${({ $color }) =>
    $color === ButtonStyle.Red ? Color.CrimsonRed : Color.DarkGray};

  &:hover {
    transform: translateY(-5px);
  }
`
