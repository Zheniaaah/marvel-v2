import hexToRgba from 'hex-to-rgba'
import styled, { css, keyframes } from 'styled-components'

import { Color, LoaderStyle } from '~/constants'

export interface ILoaderProps {
  size: number
  $color: LoaderStyle
}

const SpinnerAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

export const LoaderItem = styled.div``

export const LoaderContainer = styled.div<ILoaderProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  margin: 0 auto;

  ${LoaderItem} {
    ${({ size, $color }) =>
      size &&
      css`
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        border-top: ${size * 0.15}px solid
          ${$color === LoaderStyle.Red ? Color.CrimsonRed : Color.White};
        border-right: ${size * 0.15}px solid
          ${hexToRgba($color === LoaderStyle.Red ? Color.CrimsonRed : Color.White, 0.4)};
        border-bottom: ${size * 0.15}px solid
          ${hexToRgba($color === LoaderStyle.Red ? Color.CrimsonRed : Color.White, 0.4)};
        border-left: ${size * 0.15}px solid
          ${hexToRgba($color === LoaderStyle.Red ? Color.CrimsonRed : Color.White, 0.4)};
        animation: ${SpinnerAnimation} 1.2s linear infinite;
      `}
  }
`
