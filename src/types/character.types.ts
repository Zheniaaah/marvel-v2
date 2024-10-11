import { IComic } from './comic.types'
import { IThumbnail } from './thumbnail.types'

export interface ICharacterExtended extends IRandomCharacter {
  comics: {
    items: IComic[]
  }
}

export interface IRandomCharacter extends ICharacter {
  description: string
  urls: {
    type: string
    url: string
  }[]
}

export interface ICharacter {
  id: number | null
  name: string
  thumbnail: IThumbnail
}
