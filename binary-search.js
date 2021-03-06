function binarySearch(list, item) {
  // Sort the list in ascending order
  list.sort((a, b) => a-b)

  let low = 0
  let high = list.length

  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    let guess = list[mid]

    if (guess === item) {
      return true;
    }

    if (guess < item) {
      low = mid + 1
    }

    if (guess < item) {
      high = mid - 1;
    }
  }

  return false;
}

console.log(binarySearch([4, 1, 6, 12, 7, 19], 7));
console.log(binarySearch([4, 1, 6, 12, 7, 19], 27));