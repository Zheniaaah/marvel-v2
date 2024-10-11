import { IThumbnail } from './thumbnail.types'

export interface IFullComic {
  id: number | null
  title: string
  description: string
  prices: {
    price: number
  }[]
  thumbnail: IThumbnail
}

export interface IComic {
  resourceURI: string
  name: string
}
