import React, { lazy, Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { ComicsLayout, MainLayout } from '~/components/layout'
import { Route as RoutePath } from '~/constants'

const Characters = lazy(() => import('~/components/page/Characters/Page'))
const Character = lazy(() => import('~/components/page/Character/Page'))
const Comic = lazy(() => import('~/components/page/Comic/Page'))

const RouteApp: React.FC = () => {
  const location = useLocation()

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes key={location.pathname + location.search} location={location}>
        <Route element={<MainLayout />}>
          <Route path={RoutePath.Connect} element={<Characters />} />
          <Route element={<ComicsLayout />}>
            <Route path={RoutePath.Character} element={<Character />} />
            <Route path={RoutePath.Comic} element={<Comic />} />
          </Route>
        </Route>
      </Routes>
    </Suspense>
  )
}

export default React.memo(RouteApp)
