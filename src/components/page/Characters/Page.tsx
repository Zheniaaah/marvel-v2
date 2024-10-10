import React from 'react'

import { Wrapper } from './styles'

import { CharList, RandomChar } from '~/components/widget'

const Page: React.FC = () => {
  return (
    <Wrapper>
      <RandomChar />
      <CharList />
    </Wrapper>
  )
}

export default React.memo(Page)
