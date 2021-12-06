const numbers = [45, 87, 23, 12, 3, 4, 23, 45, 67, 89];

function bubble_sort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
  return array;
}
const sorted_numbers = bubble_sort(numbers);
console.log(sorted_numbers);
