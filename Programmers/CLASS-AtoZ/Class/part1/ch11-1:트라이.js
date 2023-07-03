/* Ch11-1. 트라이 */

/*
  * * * * 트라이 * * * * 
  문자열을 저장하고 효율적으로 탐색하기 위한 트리 형태의 자료구조(비선형 자료구조)

  구글이나 네이버같은 검색서비스에서 자동완성을 할 때 적합하다.
  트리구조로 이루어져있고 간선은 이전 정점으로부터 새롭게 추가되는 문자 정보를 가지고있다.
  그리고 정점은 이전정점으로부터 더해진 문자 정보를 가지고 있다.

  * * 트라이의 특징 * * 
  - 검색어 자동완성, 사전 찾기 등에 응용될 수 있다.
  - 문자열을 탐색할 때 단순하게 비교하는 것보다 효율적으로 찾을 수 있다.
  - L이 문자열의 길이일 때 탐색, 삽입은 O(L)만큼 걸린다.
  - 대신 각 정점이 자식에 대한 링크를 전부 가지고 있기에 저장공간을 더 많이 사용한다.

  * * 트라이 구조 * * 
  - 루트는 비어 있다
  - 각 간선(링크)은 추가될 문자를 키로 가진다
  - 각 정점은 이전 정점의 값 + 간선의 키를 값으로 가진다.
  - 해시 테이블과 연결 리스트를 이용하여 구현할 수 있다.

  * Trie 생성하기 *
  - 처음엔 빈 루트 정점만이 존재
  - cat을 추가한다고 가정
  - 맨 앞 문자열 'c'를 잘라 루트정점의 자식으로 추가
  - 맨 앞 문자열 'a'를 잘라 c정점의 자식으로 추가한다 (간선의키 a)
  - 마지막 문자열 't'를 잘라 ca정점의 자식으로 추가한다

  그 후 can 추가하기
  - 루트정점 부터 시작
  - 맨 앞 문자열 'c'를 자른 후 확인. 이미 정점이 있기에 이동만 한다.
  - 맨 앞 문자열 'a'를 자른 후 확인. 이미 정점이 있기에 이동만 한다.
  - 맨 앞 문자열 'n'를 자른 후 확인. n 간선은 없기에 정점을 추가

*/

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