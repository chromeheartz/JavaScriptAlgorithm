// **** JavaScript에서의 사용법 ****

// * Array로 구현 *
const stackArray = [];

// Push 
stackArray.push(1);
stackArray.push(2);
stackArray.push(3);
console.log(stackArray); // [1, 2, 3]

// Pop
stackArray.pop();
console.log(stackArray); // [1, 2]

// Get Top
console.log(stackArray[stackArray.length -1]); // 2

// * Linked List로 구현 *
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size += 1;
  }

  pop() {
    const value = this.top.value;
    this.top = this.top.next;
    this.size -= 1;
    return value;
  }

  size() {
    return this.size;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop()); // 3
stack.push(4);
console.log(stack.pop()); // 4
console.log(stack.pop()); // 2
