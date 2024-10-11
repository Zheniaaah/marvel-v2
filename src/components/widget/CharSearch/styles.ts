import hexToRgba from 'hex-to-rgba'
import styled from 'styled-components'

import { Color } from '~/constants'

export const ErrorMessage = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${Color.CrimsonRed};
  margin-top: 25px;
`

export const SuccessMessage = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  color: ${Color.ForestGreen};
`

export const SuccessContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  margin-top: 25px;
`

export const SearchInput = styled.input`
  width: 250px;
  height: 40px;
  font-size: 14px;
  border: none;
  border-radius: 7px;
  background: ${Color.White};
  box-shadow: 0 4px 4px ${hexToRgba(Color.Black, 0.25)};
  padding: 0 10px;
`

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 15px;
`

export const FormLabel = styled.label`
  font-weight: 600;
`

export const SearchForm = styled.form``

export const Container = styled.div`
  border-radius: 7px;
  background-color: ${Color.White};
  box-shadow: 0 0 20px ${hexToRgba(Color.Black, 0.25)};
  padding: 25px;
`
