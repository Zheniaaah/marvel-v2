import React from 'react'

import { ComicsList } from '~/components/widget'

const Page: React.FC = () => {
  return (
    <>
      <ComicsList />
    </>
  )
}

export default React.memo(Page)
