import { IComic } from './comic.types'

export interface ICharacterExtended extends IRandomCharacter {
  comics: {
    items: IComic[]
  }
}

export interface IRandomCharacter extends ICharacter {
  urls: {
    type: string
    url: string
  }[]
}

export interface ICharacter {
  id: number | null
  name: string
  thumbnail: {
    path: string
    extension: string
  }
}
