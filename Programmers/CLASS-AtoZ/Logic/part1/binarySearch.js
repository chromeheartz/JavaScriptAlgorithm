
/* ------ JavaScript에서의 사용법 ------ */

/* --- Array --- */
const array = [1, 1, 5, 124, 400, 599, 1004, 2876, 8712]

function binarySearch(array, findValue) {
  // left, right를 만들고 그 사이를 mid
  let left = 0;
  let right = array.length - 1;
  let mid = Math.floor((left + right) / 2);
  
  // mid과 찾는것과 일치할때까지 loop
  // left, right과 동일할경우 loop를 빠져나옴
  // loop를 빠져나오면 요소를 찾지 못했기때문에 -1을 반환
  while (left <= right) {
    if (array[mid] === findValue) {
      return mid;
    }

    if (array[mid] < findValue) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }

    mid = Math.floor((left + right) / 2);
  }

  return -1;
}

console.log(binarySearch(array, 2876)) // 7
console.log(binarySearch(array, 1)) // 1
console.log(binarySearch(array, 500)) // -1

/* --- Binary Search Tree --- */
// 기존 이진트리에 탐색함수 추가
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  // 추가 로직
  // 먼저 노드를 생성. root가 비어있을 경우 루트가 되고 종료.
  insert(value) {
    const newNode = new Node(value);
    if(this.root === null) {
      this.root = newNode;
      return;
    }

    // 현재 노드가 null이 아닐때까지 loop
    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value < value) {
        // loop안쪽을 보면 오른쪽 노드의 값보다 추가될 노드의 값이 더 큰경우
        // 오른쪽 노드에 삽입. 만약 null이 아닌경우 그대로 이동만한다.
        if (currentNode.right === null) {
          currentNode.right = newNode;
          break;
        }
        currentNode = currentNode.right;
      } else {
        // 만약 왼쪽 노드의 값보다 추가될 노드의 값이 더 큰경우
        // 왼쪽 노드에 삽입. 만약 null이 아닌경우 그대로 이동만 한다.
        if (currentNode.left === null) {
          currentNode.left = newNode;
          break;
        }
        currentNode = currentNode.left;
      }
    }
  }

  has(value) {
    let currentNode = this.root;
    while (currentNode !== null) {
      if (currentNode.value === value) {
        return true;
      }

      if (currentNode.value < value) {
        currentNode = currentNode.right;
      } else {
        currentNode = currentNode.left;
      }
    }

    return false;
  }
}

const tree = new BinarySearchTree();
tree.insert(5);
tree.insert(4);
tree.insert(7);
tree.insert(8);
tree.insert(5);
tree.insert(6);
tree.insert(2);
console.log(tree.has(8)) // true
console.log(tree.has(1)) // false