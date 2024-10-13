import { type ActionCreatorWithPayload } from '@reduxjs/toolkit'
import React, { useEffect, useState } from 'react'

import { useAppDispatch } from '~/store'

interface IProps<D> {
  data: D[]
  builder: (data: D, index: number) => React.ReactNode
  scrollPosition: number
  setScrollPosition: ActionCreatorWithPayload<number>
  deps?: any[]
}

export function usePreloadData<D>({
  data,
  builder,
  scrollPosition,
  setScrollPosition,
  deps = [],
}: IProps<D>): [boolean, React.ReactNode[]] {
  const [mapped, setMapped] = useState<React.ReactNode[]>([])
  const [isInitialized, setIsInitialized] = useState<boolean>(false)
  const dispatch = useAppDispatch()

  useEffect(() => {
    const buildMap: React.ReactNode[] = data.map((d: D, i: number) => {
      return builder(d, i)
    })
    setIsInitialized(true)
    setMapped(buildMap)
  }, [data, ...deps])

  useEffect(() => {
    if (!isInitialized) return
    window.scrollTo({ top: scrollPosition, behavior: 'instant' })
  }, [isInitialized])

  useEffect(() => {
    let isMounted = true
    const handleScroll = () => {
      setTimeout(() => {
        if (isMounted) {
          dispatch(setScrollPosition(window.scrollY))
        }
      }, 100)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      isMounted = false
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return [!isInitialized, mapped]
}
