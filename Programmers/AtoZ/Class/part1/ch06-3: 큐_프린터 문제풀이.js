/* Ch06-3. 큐 프린터 문제풀이 */

/*
  * 문제 설명 *

  문제 설명에서 얻어낼수 있는 팁
  - 가장 앞에있는 문서를 대기목록에서 꺼낸다
  - 대기목록에 가장 마지막에 넣는다
  이 두가지로 가장 앞에있는것이 먼저 나오고, 마지막에 요소를 넣는 Queue를 떠올릴 수 있어야 한다  

  인쇄가 몇번째로 되는지 알고싶다는 구문이 문제의 핵심이 된다

  * 문제 풀이 *
  priorities 우선순위
  location 내가 요청한 문서가 몇번째로 있는지를 나타내는 값
  이 2가지가 매개변수로 들어감

  1. 큐를 이용해야 하기 때문에 연결리스트를 이용한 큐를 구현한다
  Node 클래스를 만들어 값을 넣어주고, next포인터를 선언해준다

  2. 큐를 만들어 생성자에서는 head, tail을 null로 잡아주고 초기값인 size = 0(잡아주어도되지만 여기서는안잡음)

  3. 값을 추가하기위한 enqueue 
  값을 받아 새로운 노드를 생성해주고
  만약 head가 null일경우 head와 tail에 생성한 노드를 추가해준다
  비어있지 않게 된다면 tail의 next에 새로운 노드를 넣어주고
  새로 추가한 노드가 꼬리가 될 수 있도록 설정해준다

  4. 값을 빼기위한 dequeue
  head의 value를 별도 상수에 담아두고
  head를 현재 head의 next로 담아두면
  기존 head가 제거될것이다
  마지막으로 앞서 담아둔 value(head의 값을 반환)

  5. 현재 head를 알아내는 peek
  head의 value를 return하면 된다

  6. solution 함수 구현
  먼저 queue를 선언하고, queue안에 입력받은 값들을 넣어준다
  loop를 통해서 입력받은값의 길이만큼 돌려주고
  queue에는 각각의 우선순위와 인덱스를 넣어줄것이다
  queue.enqueue([priorities[i], i]);

  우선순위만으로 되는것이 아니고 각각의 요소가 몇번 인덱스에 해당하는지 알아야한다
  그래야 나중에 문서가 몇번째에 위치했었는지 알 수 있게 된다

  queue에 값을 다 넣어주고나면 규칙에 따라 중요도가 높은문서가
  한개라도 존재하면 대기목록 가장 마지막에 넣어야 하기 때문에 
  로직을 수행할 수 있도록 한다

  7. 정렬 로직으로 가장 우선순위가 높은 문서를 찾는다
  중요도가 1-9까지 표현되며 숫자가 클수록 중요하기 때문에
  내림차순으로 정렬한다

  8. 함수가 return되는 값이
  인쇄를 요청한 문서가 몇번째로 인쇄되었는지 이기때문에
  count변수를 만들어준다

  9. queue가 비어있을때까지 계속 loop
  currentValue는 queue.peek(현재 queue의 front에 해당하는 값)
  current[0] 0번째 우선순위가 < priorities[count] 수행한우선순위보다 작은 경우
  queue에서 dequeue를 하고 맨 뒤에 enqueue로 넣을 수 있도록 작성

  else 
  만약 우선순위가 더 큰 경우에는 그대로 dequeue를 해주어야하는데
  문서가 하나 빠졌으니 카운트를 하나 증가해주어야한다

  만약 이번에 뽑은 문서가 우리가 찾던 문서라면 (찾던 인덱스에 해당하는 문서)
  그대로 count를 return하면 된다

  10. while이 전부 돌때까지 문서를 찾지 못하면
  return count를 해주어도 되지만 그런 경우는 없기 때문에
  실행이 안된다고 볼 수 잇다

  * while에 queue.size > 0 이라는 조건이 지금은
  무한루프를 돌려도 상관이없기 때문에 그냥 true로 해주어도 가능하다

*/

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  enqueue(newValue) {
    const newNode = new Node(newValue);
    if (this.head === null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  peek() {
    return this.head.value;
  }
}


function solution(priorities, location) {
  const queue = new Queue();
  for (let i = 0; i < priorities.length; i += 1) {
    queue.enqueue([priorities[i], i]);
  }

  priorities.sort((a,b) => b - a);

  let count = 0;
  while (true) {
    const currentValue = queue.peek();
    if (currentValue[0] < priorities[count]){
      queue.enqueue(queue.dequeue());
    } else {
      const value = queue.dequeue();
      count += 1;
      if (location === value[1]) {
        return count;
      }
    }
  }
  // return count
}