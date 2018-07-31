export default function map(iteratee) {
  return (collection = []) => {
    let predicate =
      typeof iteratee === 'string'
        ? i => i[iteratee]
        : typeof iteratee === 'function'
          ? iteratee
          : i => i
    return collection.map(predicate)
  }
}
