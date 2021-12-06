//Last in first out = LIFO => stack
class Stack {
  constructor() {
    this.stack = [];
  }
  add(element) {
    this.stack.push(element);
  }
  remove() {
    if (this.stack.length > 0) {
      return this.stack.pop();
    }
  }
}
const plates = new Stack();
plates.add("Abul");
plates.add("Babul");
plates.add("Sabul");
plates.add("Dabul");
plates.add("Ebul");
console.log(plates.stack);
