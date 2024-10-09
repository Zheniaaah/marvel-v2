import { IThumbnail } from '~/types'

export const concatThumbnailUrl = ({ path, extension }: IThumbnail): string =>
  `${path}.${extension}`
