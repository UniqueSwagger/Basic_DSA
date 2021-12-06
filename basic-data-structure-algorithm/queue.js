//First in first out = FIFO => queue
class Queue {
  constructor() {
    this.queue = [];
  }
  enqueue(element) {
    this.queue.push(element);
  }
  dequeue() {
    if (this.queue.length > 0) {
      return this.queue.shift();
    }
  }
}

const premiks = new Queue();
premiks.enqueue("Ashik");
premiks.enqueue("Dewana");
premiks.enqueue("Prem");
premiks.enqueue("Sagor");
premiks.enqueue("Raj");
premiks.dequeue();
premiks.dequeue();
console.log(premiks.queue);
