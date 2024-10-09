import hexToRgba from 'hex-to-rgba'
import styled, { css, keyframes } from 'styled-components'

import { Color } from '~/constants'

export interface ILoaderProps {
  size: number
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

  ${LoaderItem} {
    ${({ size }) =>
      size &&
      css`
        width: ${size}px;
        height: ${size}px;
        border-radius: 50%;
        border-top: ${size * 0.15}px solid ${Color.CrimsonRed};
        border-right: ${size * 0.15}px solid ${hexToRgba(Color.CrimsonRed, 0.4)};
        border-bottom: ${size * 0.15}px solid ${hexToRgba(Color.CrimsonRed, 0.4)};
        border-left: ${size * 0.15}px solid ${hexToRgba(Color.CrimsonRed, 0.4)};
        animation: ${SpinnerAnimation} 1.2s linear infinite;
      `}
  }
`
