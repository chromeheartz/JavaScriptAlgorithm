/* Ch17-2. 재귀 함수를 이용한 트리 순회 */

/*
  * 재귀 함수를 이용한 트리 순회 알고리즘 *

  트리 순회는 트리 자료구조에서 각 노드를 한 번씩 탐색하는 알고리즘을 말한다.
  이 트리 순회는 여러 방법이 있지만 재귀를 이용할 수 있는 순회는 '전위 순회(Preorder), 중위 순회(Inorder), 후위 순회(Postorder)'
  가 있다. 모든 순회는 루트 노드부터 시작하며 어떤 노드가 먼저 방문하는지에 따라 달라진다.
  이번에는 이진 트리를 이용하여 볼것

  ** 전위 순회 **

  전위 순회는 
  (1) - 먼저 노드를 방문한 후
  (2) - 왼쪽 서브 트리를 전위 순회한 다음에
  (3) - 오른쪽 서브 트리를 전위 순회하는 방식을 의미한다.

       1
      / \
     /   \
    2     \
   / \     3
  4   5    / \
          6   \
               7
              / \
             8   9

  위 트리에서 전위 순회는 다음과 같이 동작합니다.

  1. 우선 1을 방문
  2. 1의 왼쪽 서브 트리로 이동
  3. 2를 방문
  4. 2의 왼쪽 서브 트리로 이동
  5. 4를 방문
  6. 왼쪽, 오른쪽 서브 트리가 없기에 다시 올라간다
  7. 2의 오른쪽 서브 트리로 이동
  8. 5를 방문
  9. 왼쪽, 오른쪽 서브 트리가 없기에 다시 올라간다
  10. 왼쪽, 오른쪽 서브 트리를 모두 방문했기에 다시 올라간다
  11. 1의 오른쪽 서브 트리로 이동
  12. 3을 방문
  13. 3의 왼쪽 서브 트리로 이동
  14. 6을 방문
  15. 왼쪽, 오른쪽 서브 트리가 없기에 다시 올라간다
  16. 3의 오른쪽 서브 트리로 이동
  17. 7을 방문
  18. 7의 왼쪽 서브 트리로 이동
  19. 8을 방문
  20. 왼쪽, 오른쪽 서브 트리가 없기에 다시 올라간다
  21. 7의 오른쪽 서브 트리로 이동
  22. 9를 방문
  23. 모든 트리를 순회했기에 종료

  최종적으로 1, 2, 4, 5, 3, 6, 7, 8, 9 노드 순으로 방문을 하게된다. 
  이를 의사 코드로 나타내자면

  preorder(tree) {
    방문(tree.root);
    preorder(tree.left);
    preorder(tree.right);
  }

  으로 표현이 가능하다.

  ** 중위 순회 **

  중위 순회는 
  (1) - 왼쪽 서브트리를 중위 순회한 후
  (2) - 노드를 방문한 다음ㅁ에
  (3) - 오른쪽 서브 트리를 중위 순회하는 방식을 의미

       1
      / \
     /   \
    2     \
   / \     3
  4   5    / \
          6   \
               7
              / \
             8   9

  위 트리에서 중위 순회는 다음과 같이 동작합니다.

  1.  1의 왼쪽 서브 트리로 이동
  2.  2의 왼쪽 서브 트리로 이동
  3.  더 이상 왼쪽 서브 트리가 없어 4를 방문
  4.  4의 오른쪽 서브 트리가 없기에 올라간다
  5.  2를 방문
  6.  2의 오른쪽 서브 트리로 이동
  7.  더 이상 왼쪽 서브 트리가 없어 5를 방문
  8.  5의 오른쪽 서브 트리가 없기에 올라간다
  9.  2에서 왼쪽, 오른쪽 서브 트리를 모두 방문했기에 다시 올라간다
  10. 1을 방문
  11. 1의 오른쪽 서브 트리로 이동
  12. 3의 왼쪽 서브 트리로 이동
  13. 더 이상 왼쪽 서브 트리가 없어 6을 방문
  14. 6의 오른쪽 서브 트리가 없기에 올라간다
  15. 3을 방문
  16. 3의 오른쪽 서브 트리로 이동
  17. 7의 왼쪽 서브 트리로 이동
  18. 더 이상 왼쪽 서브 트리가 없어 8을 방문
  19. 8의 오른쪽 서브 트리가 없기에 올라간다
  20. 7을 방문
  21. 7의 오른쪽 서브 트리로 이동
  22. 더 이상 왼쪽 서브 트리가 없어 9를 방문
  23. 모든 트리를 순회했기에 종료

  최종적으로 4, 2, 5, 1, 6, 3, 8, 7, 9 노드 순으로 방문을 하게된다.
  이를 의사 코드로 나타내자면

  inorder(tree) {
    inorder(tree.left);
    방문(tree.root);
    inorder(tree.right);
  }

  으로 표현 할 수 있다.

  ** 후위 순회 **

  후위 순회는
  (1) - 왼쪽 서브트리를 후위 순회한 후
  (2) - 오른쪽 서브 트리를 후위 순회한 다음에
  (3) - 노드를 방문하는 방식을 의미한다.

       1
      / \
     /   \
    2     \
   / \     3
  4   5    / \
          6   \
               7
              / \
             8   9

  위 트리에서 후위 순회는 다음과 같이 동작합니다.

  1.  1의 왼쪽 서브 트리로 이동
  2.  2의 왼쪽 서브 트리로 이동
  3.  더 이상 왼쪽, 오른쪽 서브 트리가 없어 4를 방문
  4.  올라간다
  5.  2의 오른쪽 서브 트리로 이동
  6.  더 이상 왼쪽, 오른쪽 서브 트리가 없어 5를 방문
  7.  모든 서브 트리를 방문하였기에 2를 방문
  8.  올라간다
  9.  1의 오른쪽 서브 트리로 이동
  10. 3의 왼쪽 서브 트리로 이동
  11. 더 이상 왼쪽, 오른쪽 서브 트리가 없어 6을 방문
  12. 올라간다
  13. 3의 오른쪽 서브 트리로 이동
  14. 7의 왼쪽 서브 트리로 이동
  15. 더 이상 왼쪽, 오른쪽 서브 트리가 없어 8을 방문
  16. 올라간다
  17. 7의 오른쪽 서브 트리로 이동
  18. 더 이상 왼쪽, 오른쪽 서브 트리가 없어 9를 방문
  19. 올라간다
  20. 더 이상 왼쪽, 오른쪽 서브 트리가 없어 7을 방문
  21. 올라간다
  22. 더 이상 왼쪽, 오른쪽 서브 트리가 없어 3을 방문
  23. 올라간다
  24. 더 이상 왼쪽, 오른쪽 서브 트리가 없어 1을 방문

  최종적으로 4, 5, 2, 6, 8, 9, 7, 3, 1 노드 순으로 방문을 하게된다.
  이를 의사 코드로 나타내자면

  postorder(tree) {
    postorder(tree.left);
    postorder(tree.right);
    방문(tree.root);
  }
  으로 표현 할 수 있다.
*/

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(node) {
    this.root = node;
  }

  preorder(currentNode) { // 전위 순회
    console.log(currentNode.value);
    if (currentNode.left) this.preorder(currentNode.left);
    if (currentNode.right) this.preorder(currentNode.right);
  }

  inorder(currentNode) { // 중위 순회
    if (currentNode.left) this.inorder(currentNode.left);
    console.log(currentNode.value);
    if (currentNode.right) this.inorder(currentNode.right);
  }

  postorder(currentNode) { // 후위 순회
    if (currentNode.left) this.postorder(currentNode.left);
    if (currentNode.right) this.postorder(currentNode.right);
    console.log(currentNode.value);
  }
}

const tree = new Tree(new Node(9));
tree.root.left = new Node(3);
tree.root.right = new Node(8);
tree.root.left.left = new Node(2);
tree.root.left.right = new Node(5);
tree.root.right.right = new Node(7);
tree.root.left.right.right = new Node(4);

tree.preorder(tree.root);
tree.inorder(tree.root);
tree.postorder(tree.root);