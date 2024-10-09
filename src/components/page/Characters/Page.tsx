import React from 'react'

import { Wrapper } from './styles'

import { RandomChar } from '~/components/widget'

const Page: React.FC = () => {
  return (
    <Wrapper>
      <RandomChar />
    </Wrapper>
  )
}

export default React.memo(Page)
