class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  find(value) {
    let currNode = this.head;
    while (currNode.value !== value) {
      currNode = currNode.next;
    }
    return currNode;
  }

  append(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  insert(node, newValue) {
    const newNode = new Node(newValue);
    newNode.next = node.next;
    node.next = newNode;
  }

  remove(value) {
    let prevNode = this.head;
    while (prevNode.next.value !== value) {
      prevNode = prevNode.next;
    }

    if (prevNode.next !== null) {
      prevNode.next = prevNode.next.next;
    }
  }

  display() {
    let currNode = this.head;
    let displayString = "[";
    while (currNode !== null) {
      displayString += `${currNode.value}, `;
      currNode = currNode.next;
    }
    displayString = displayString
      .substr(0, displayString.length - 2);
    displayString += "]";
    console.log(displayString)
  }

}

const linkedList = new SinglyLinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(5);
linkedList.display();
console.log(linkedList.find(3));
linkedList.remove(3);
linkedList.display();
linkedList.insert(linkedList.find(2), 10);
linkedList.display();

/*
  Singly Linked List Code Review

  * Node, SinglyLinkedList class들로 구성된다
  Node의 생성자는 값과 포인터로 구성되어있다. 생성되는 시점의 포인터는 아무것도 가르키지 않는다
  SinglyLinkedList의 생성자는 head, tail 포인터로 이루어져있고,
  노드를 엮어주는 역할만 할뿐 그 자체는 노드를 가지지 않는다

  * find 찾기 로직 *
  currNode라는 변수를 생성해 head를 담고
  값을 찾기 전까지 순회시킴. 값을 찾지 못하면 다음 요소로 넘긴다
  값을 찾으면 loop는 종료되고 해당 노드를 반환

  * append 추가 로직 *
  끝부분에 추가하는 append 로직
  받은 값을 그대로 사용하여 노드를 생성해주고
  head가 비어있다면 연결리스트에 아무런 값이 없다는 뜻이기 때문에
  head,tail 포인터에 생성된 노드를 가리키게 만든다
  비어있지 않다면 값이 존재한다는 뜻이기 때문에 tail의 포인터가
  새로생성된 노드를 가르키게 만든다. 
  그 후 tail포인터를 새로생성된 노드를 가르키게 한다.

  *** 약간의 키포인트 ***
  tail은 항상 마지막을 가리켜야하는데 tail.next가 마지막이 되버리면 잘못된 로직이
  되버리기 때문에 그 다음 라인에 this.tail = newNode를 통해 갱신해주는것이다

  * insert 추가 로직 *
  중간부분에 추가하는 insert 로직
  parameter로 받은 노드 다음에 끼워넣을것이다
  입력받은 값으로 노드를 생성하고 생성된 노드의 다음을
  입력받은 노드의 다음을 가르키게 만든다. 
  입력받은 노드의 다음을 새로생성된 노드를 가르키게 만들면
  새로 생성된 노드가 중간에 끼게 된다

  * remove 삭제 로직 *
  여기서는 값을 찾은 후 삭제하도록 로직을 작성했다
  O(n) 선형시간이 소요된다. 만약 상수시간으로 삭제하고 싶다면
  '삭제할노드의 이전노드를 입력값으로 넣어주면 된다'

  삭제할 노드의 이전노드를 찾기 위해 prevNode 변수 생성
  찾기 로직과 마찬가지로 loop로 찾아내고, 찾았다면 
  이전노드의 다음을 다음의 다음을 가르키도록 수정하면
  중간노드가 아무랑도 연결되지않기 때문에 자동적으로 삭제된다
  * 추후 가비지 컬렉션으로 메모리에서 삭제된다


*/