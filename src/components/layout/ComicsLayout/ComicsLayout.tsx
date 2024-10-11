import React from 'react'
import { Outlet } from 'react-router-dom'

import { AppBanner, AvengersImg, AvengersLogoImg, BannerText } from './styles'

import avengersLogoImg from '@/images/avengers-logo.png'
import avengersImg from '@/images/avengers.png'

const ComicsLayout: React.FC = () => {
  return (
    <>
      <AppBanner>
        <AvengersImg src={avengersImg} alt="avengers" />
        <BannerText>
          New comics every week!
          <br />
          Stay tuned!
        </BannerText>
        <AvengersLogoImg src={avengersLogoImg} alt="avengers-logo" />
      </AppBanner>
      <Outlet />
    </>
  )
}

export default React.memo(ComicsLayout)
