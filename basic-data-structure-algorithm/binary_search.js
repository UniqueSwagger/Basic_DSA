const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function binary_search(array, target) {
  let startIndex = 0;
  let endIndex = array.length - 1;
  while (startIndex <= endIndex) {
    const midIndex = Math.floor((startIndex + endIndex) / 2);
    const element = array[midIndex];
    if (element < target) {
      startIndex = midIndex + 1;
    } else if (element > target) {
      endIndex = midIndex - 1;
    } else {
      return midIndex;
    }
  }
  return -1;
}
const index = binary_search(numbers, 3);
console.log(index);
