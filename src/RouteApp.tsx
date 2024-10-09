import React, { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { MainLayout } from '~/components/layout'
import { Route as RoutePath } from '~/constants'

const Characters = lazy(() => import('~/components/page/Characters/Page'))

const RouteApp: React.FC = () => {
  const location = useLocation()

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes key={location.pathname + location.search} location={location}>
        <Route element={<MainLayout />}>
          <Route path={RoutePath.Connect} element={<Characters />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default React.memo(RouteApp)
