const numbers = [45, 12, 4, 9, -5, 24];

function selection_sort(array) {
  for (let i = 0; i < array.length; i++) {
    let min = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[min]) {
        min = j;
      }
    }
    if (min !== i) {
      [array[i], array[min]] = [array[min], array[i]];
    }
  }
  return array;
}
const sorted = selection_sort(numbers);
console.log(sorted);
