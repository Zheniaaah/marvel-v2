import styled, { css } from 'styled-components'

import { ButtonStyle, Color } from '~/constants'

interface IColorProps {
  $color: ButtonStyle
}

interface IButtonContainerProps extends IColorProps {
  $width?: number
}

const innerPseudoElem = css<IColorProps>`
  content: '';
  position: absolute;
  display: block;
  border-width: 0 0 10px 10px;
  border-style: solid;
  border-color: ${({ $color }) => ($color === ButtonStyle.Red ? Color.CrimsonRed : Color.DarkGray)}
    #0000;
  transition: none;
`

const buttonContainerPseudoElem = css<IColorProps>`
  content: '';
  display: block;
  height: 10px;
  transition: none;
  background-color: ${({ $color }) =>
    $color === ButtonStyle.Red ? Color.CrimsonRed : Color.DarkGray};
`

export const Inner = styled.div<IColorProps>`
  position: relative;
  background-color: ${({ $color }) =>
    $color === ButtonStyle.Red ? Color.CrimsonRed : Color.DarkGray};
  line-height: 18px;
  transition: none;
  padding: 0 18px;

  &::before {
    ${innerPseudoElem};
    top: -10px;
    left: 0;
  }

  &::after {
    ${innerPseudoElem};
    bottom: -10px;
    right: 0;
    rotate: 180deg;
  }
`

export const ButtonContainer = styled.button<IButtonContainerProps>`
  cursor: pointer;
  min-width: 101px;
  width: ${({ $width }) => ($width ? `${$width}px` : 'auto')};
  font-size: 14px;
  text-align: center;
  text-transform: uppercase;
  color: ${Color.White};
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px);
  }

  &::before {
    ${buttonContainerPseudoElem};
    margin-left: 9px;
  }

  &::after {
    ${buttonContainerPseudoElem};
    margin-right: 9px;
  }
`
