/* Ch09. 트리 */

/*
  트리
  몇가지 제약이 있는 방향그래프.
  방향그래프의 일종으로 정점을 가리키는 간선이
  '하나'밖에 없는 구조를 가지고있다

  용어 설명
  - Root : 가장 상위에 존재하는 정점
  - Node : 각 정점
  - Leaf Node : 자식이 없는 노드
  - Level : Root로부터 몇번째 깊이인가를 표현
  - Degree : 한 정점에서 뻣어나가는 간선 수 (차수)

  예제
  이런 트리는 조직도 등에 가장 많이 사용될 수 있다.
  software에서 떠올릴 수 있는것은
  directory(폴더) 구조이다

  ** 트리의 특징 **
  - root 정점을 제외한 모든 정점은 반드시 하나의 부모 정점을 가진다.
  - 정점이 N개인 트리는 반드시 N-1개의 간선을 가진다
  - root 에서 특정 정점으로 가는 경로는 유일하다.

  * 이진트리 *
  이진트리는 각 정점이 최대 2개의 자식을 가지는 트리를 의미한다

  - 이진 트리

  - 완전 이진 트리
  마지막 레벨을 제외하고 모든 정점이 채워져잇는 트리

  - 포화 이진 트리
  완전 이진 트리이면서
  만약 마지막 레벨도 채워져있다면 포화 이진 트리가 된다

  - 편향 트리
  한 방향으로만 정점이 이어져있는 트리

  ** 이진 트리의 특징 **
  - 정점이 N개인 이진 트리는 최악의 경우 높이가 N이 될 수 있다.
  - 정점이 N개인 포화 또는 완전 이진트리의 높이는 log N 이다.
    (레벨이 증가됨에 따라 2배씩 정점이 생기기 때문)
  - 높이가 h인 포화 이진 트리는 2(제곱 h) - 1 개의 정점을 가진다.
    (이진법을 생각하면 편하다)
  - 일반적인 이진 트리를 사용하는 경우는 많지 않다. 다음 자료구조에 응용된다
    - 이진 탐색 트리
    - 힙
    - AVL 트리
    - 레드 블랙 트리

  ** 트리의 구현 방법 **
  그래프와 마찬가지로 인접 행렬, 인접 리스트 두가지 방식으로 트리를 표현할 수 있다.

  ** 이진 트리의 구현 방법 **
  배열 혹은 요소에 링크가 2개 존재하는 연결 리스트로 구현할 수 있다.

  * 배열로 구현 arr
  인덱스에 
  * 2를 하면 왼쪽 정점
  *2 + 1을 하면 오른쪽 정점
  인덱스를 2로 나누고 소수점을 버리게 되면 부모 정점

  * 연결리스트로 구현 Linked List
  기존 연결리스트의 Node에 
  next 대신 left, right를 넣고
  left, right에 값을 연결시켜주면 된다.

*/

// JavaScript에서 사용법

// 이진 트리 (Array)

/*
  0번 인덱스는 편의를 위해 비워둔다
  Left = Index * 2
  Right = Index * 2 + 1
  Parent = floor(Index /2)
*/
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