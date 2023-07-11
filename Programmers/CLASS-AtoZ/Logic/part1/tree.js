
// JavaScript에서 사용법

const treeArray = [
  undefined,
  // 1
  9,
  // 1*2, 1*2+1
  3, 8,
  // 2*2, 2*2+1, 3*2, 3*2+1
  2, 5, undefined, 7,
  // 4*2, 4*2+1, 5*2, 5*2+1
  undefined, undefined, undefined, 4
]

// 이진 트리 (Linked List)
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class TreeLinkedList {
  constructor(node) {
    this.root = node;
  }

  display() {
    // Level Order
    const queue = new Queue();
    queue.enqueue(this.root);
    while (queue.size) {
      const currentNode = queue.dequeue();
      console.log(currentNode.value);
      if (currentNode.left) queue.enqueue(currentNode.left);
      if (currentNode.right) queue.enqueue(currentNode.right);
    }
  }
}

const treeLinkedList = new TreeLinkedList(new Node(9));
treeLinkedList.root.left = new Node(3);
treeLinkedList.root.right = new Node(8);
treeLinkedList.root.left.left = new Node(2);
treeLinkedList.root.left.right = new Node(5);
treeLinkedList.right.right = new Node(7);
treeLinkedList.left.right.right = new Node(4);