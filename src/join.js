export default function join(separator = ',') {
  return (array = []) => array.join(separator)
}
