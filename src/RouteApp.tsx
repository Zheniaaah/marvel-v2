import React, { Suspense } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

import { MainLayout } from '~/components/layout'
import { Route as RoutePath } from '~/constants'

const RouteApp: React.FC = () => {
  const location = useLocation()

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes key={location.pathname + location.search} location={location}>
        <Route path={RoutePath.Connect} element={<MainLayout />}></Route>
      </Routes>
    </Suspense>
  )
}

export default React.memo(RouteApp)
