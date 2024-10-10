export const getIdFromUrl = (url: string): number => Number(url.match(/\/(\d+)(\/|$)/)![1])
