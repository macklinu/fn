export const times = <T>(n: number, fn: (n: number) => T): T[] => {
  const result: T[] = []

  for (let i = 0; i < n; i++) {
    result.push(fn(i))
  }

  return result
}
