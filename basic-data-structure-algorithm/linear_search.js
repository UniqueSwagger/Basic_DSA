const numbers = [23, 12, 3, 54, 5, 6, 7, 67, 7, 8, 9, 0, 69];
function linear_search(array, target) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    if (element === target) {
      return i;
    }
  }
  return -1;
}
const index = linear_search(numbers, 3);
console.log(index);
