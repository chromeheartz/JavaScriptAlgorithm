/* Ch12-1. 이진 탐색 */

/*
  * 선형 탐색 *
  정리안된 책장에서 원하는 책을 찾는 방법. 
  어느 방향이던 순차적으로 찾는것 '선형 탐색'

  순서대로 하나씩 찾는 탐색 알고리즘
  O(n) 시간복잡도가 걸린다. 이름그대로 '선형 시간'이 걸린다.

  * * * * 이진 탐색 * * * * 
  정렬 되어 있는 요소들을 반씩 제외하며 찾는 알고리즘
  O(log n) 만큼 시간 복잡도가 걸린다.

  * * 이진 탐색의 특징 * * 
  - 반드시 정렬되어 있어야 사용할 수 있다. (따라서 정렬후 탐색하면 선형 탐색보다 느릴 수 있다.)
  - 배열 혹은 이진트리를 이용하여 구현할 수 있다.
  - O(log n)시간복잡도인 만큼 상당히 빠르다.

  * * 배열을 이용한 구현 방법 * * 
  찾을값 45
  array = [10, 36, 45, 58, 6, 81, 93] 

  1. 
    mid = (left + right) / 2

    시작지점 Left = 10
    끝지점 Right = 93
    중간지점 Mid = 58

  2. 
    right = mid - 1
    mid = (left + right) / 2

    Mid와 찾을값인 45를 비교해서 58보다 45가 작기 때문에
    Right의 값을 Mid한칸왼쪽(45)에 위치한 후 다시 Mid값을 구한다. 
    현재 {
      Left: 10,
      Mid: 36,
      Right: 45
    }

  3.
    left = mid + 1
    mid = (left + right) / 2

    36이 45보다 작기 때문에 Left가 45의 '오른쪽'으로 이동한다.
    마침 Left, Right가 동일하기 때문에 Mid도 동일한 값으로 다시 부여된 후,
    45와 Mid값이 같기 때문에 탐색이 종료된다.

  * 배열을 이용한 방법은 중간에 요소를 추가하거나 삭제하는 경우에
    선형 시간이 걸린다는 장점을 여전히 들고 있다.
    해소하기 위해 이진탐색 트리를 이용할 수 있다.

  * * * 이진 탐색 트리를 이용한 구현 방법  * * * 

  * * 이진 탐색 트리 * * 

  이진 탐색을 위한 이진 트리로 왼쪽 서브 트리는 루트보다 작은 값이 모여있고
  오른쪽 서브 트리는 루트보다 큰 값이 모여있다.

  * * 이진 탐색 트리 요소 추가 * *
  1. 5를 추가한다 (root가 5가 된다)
  2. 4를 추가한다 (root인 5보다 작기 떄문에 왼쪽 정점에 위치)
  3. 7을 추가한다 (root인 5보다 크기 때문에 오른쪽 정점에 위치)
  4. 8을 추가한다 (root인 5보다 크고 그 다음 오른쪽정점으로 이동해서 서브트리인 7보다 크기 때문에 7의 오른쪽에 위치)
  5. 5를 추가 (root와 동일한 값은 왼쪽, 오른쪽 어디든 상관없지만 왼쪽으로 넣고 4보다 크기 4의 오른쪽노드에 추가)
  6. 6을 추가 (root보다 크고 7보다 작으니 7의 왼쪽 노드에 추가)
  7. 2를 추가 (root보다 작고 4보다 작으니 4의 왼쪽 노드에 추가)
  
       5
     /   \
    4     7
  /  \   /  \
  2  5  6   8

  * * 이진 탐색 트리 요소 삭제 * * 

  * 단말 정점을 삭제하는 경우 (리프 노드) * 
  별다른 처리 없이 부모 정점과의 연결을 끊으면 된다.

  * 하나의 서브트리를 가지는 경우 * 
  제거되는 정점의 부모 간선을 자식 정점을 가르키게 바꾸면된다.
       5
     /   \
    4     7
  /  \     \
  2  5      8

  이런 구조에서 7을 제거한다면 5가 8을 가르키게 하면 된다.

  * 두 개의 서브 트리를 가지는 경우 * 

  왼쪽 서브 트리의 가장 큰 값 혹은 오른쪽 서브트리의 가장 작은 값과 교체하면 된다.
  이 경우 교체된 정점의 좌우 자식이 없다면 제거되는 정점ㅁ의 링크로 대체된다.

       5
     /   \
    4     7
  /  \     \
  2  5      8
   \
    3

  둘 중 하나를 선택하면 되는데 왼쪽 서브 트리의 가장 큰 값 혹은 오른쪽 서브트리의 가장 작은 값과 교체하면 된다.
  4를 삭제할때 3혹은 5에 해당하는 정점과 교체하면 된다.

  * * 이진 탐색 트리의 문제점 * *

  - 최악의 경우 한쪽으로 편향된 트리가 될 수 있다.
  (5, 4, 3, 2, 1 순서대로 추가하게 된다면 계속 왼쪽으로만 추가되는 노드 트리가 될 수 있다.)
  - 그런 경우 순차 탐색과 동일한 시간복잡도를 가진다.
  - 이를 해결하기 위해 다음과 같은 자료구조를 이용할 수 있다.
    ㄴ AVL 트리
    ㄴ 레드-블랙 트리
*/

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