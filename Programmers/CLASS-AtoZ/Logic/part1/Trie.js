
/* ------ JavaScript에서의 사용법 ------ */

// 트리구조인만큼 그래프처럼 노드가 필요. 인접리스트 형태로 구현
class Node {
  constructor(value = "") {
    this.value = value;
    this.children = new Map();
  }
}

class Trie {
  // 트라이를 생성하면 루트로 빈 노드를 생성
  constructor() {
    this.root = new Node();
  }

  insert(string) {
    // 문자열을 추가하면 탐색을 위해서 루트부터 시작
    let currentNode = this.root;

    // 문자열을 앞에서부터 하나씩 자르면서 순회
    for (const char of string) {
      // 만약 현재 노드에서 자른 문자열을 간선으로 가지고 있지 않으면 새롭게 노드를 추가
      if(!currentNode.children.has(char)) {
        currentNode.children.set(
          char,
          new Node(currentNode.value + char) 
        );
      }
      // 다음 정점으로 이동
      // 이 루프를 반복하면 문자열을 전부 요소로 추가할 수 있음.
      currentNode = currentNode.children.get(char);
    }
  }

  // 문자열이 존재하는지 체크하는 함수
  has(string) {
    let currentNode = this.root;

    for (const char of string) {
      if (!currentNode.children.has(char)) {
        return false;
      }
      currentNode = currentNode.children.get(char);
    }

    return true;
  }

}

const trie = new Trie();
trie.insert("cat");
trie.insert("can");
console.log(trie.has("cat")) // true
console.log(trie.has("can")) // true
console.log(trie.has("cap")) // false