export const replaceParams = (route: string, params: Record<string, string | number>): string =>
  route.replace(/:([a-zA-Z]+)/g, (_, key) => (params[key] ? String(params[key]) : ''))
