export default function get(path, defaultValue) {
  return obj => {
    if (obj === undefined || path === undefined) return undefined
    let value = path
      .split('.')
      .reduce((a, b) => (a && a[b] ? a[b] : undefined), obj)
    return typeof value === 'undefined' ? defaultValue : value
  }
}
