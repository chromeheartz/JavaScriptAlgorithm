/* Ch06-1. 큐 */

/*
  큐
  First In First Out 개념을 가진 선형 자료구조
  먼저 들어간것이 먼저 나오고 나중에 들어간것이 나중에 나옴

  Linear Queue(선형 큐)와 Circular Queue(환형 큐)가 존재한다

  큐의 맨 앞을 Front, 맨 뒤를 Rear라고 부르며
  큐에 요소를 넣는것을 EnQUeue, 빼는 것을 DeQueue 라고 부른다.

  * **** Linear Queue 선형 큐 **** *

  - Array로 표현하기
  값을 순차적으로 담을 수 잇다. 0번인덱스가 Front,
  n번 인덱스가 Rear.

  4개의 요소가 있는 배열이라고 가정하고 본다면
  DeQueue를 2번하면 0번, 1번 인덱스가 빠질것이다. 배열이기때문에 자리는 고정
  EnQueue를 2번 한다면 4,5번 인덱스가 생기는데 만약 배열의 
  크기가 정해져잇다면 꽉찬다면 더이상 Queue의 값을 추가할 수 없다
  JavaScript라면 배열의 크기가 자동으로 증감하기 때문에 문제가 되지 않을수 있다
  배열에서 공간을 더 쓰기 위해 앞당기는 작업을 하려면 선형시간이 소요된다 O(n)

  - Linked List로 표현하기

  연결리스트로 표현하면 
  head는 front가 되고 tail은 rear가 된다.
  연결리스트를 사용하면 인덱스에 대한 고민은 하지 않아도 된다.

  **** JavaScript에서의 사용법 ****

  **** Logic/part1/arrayQueue.js ****
  Array로 표현하기
  - 3개의 클래스변수. 요소를 넣을 배열변수, 각각 front, rear를 나타내는 인덱스 변수
  - enqueue : rear영역에 값을 넣고 rear의 index를 하나 추가
  - dequeue : front인덱스에 해당하는 값을 반환하고 증가시키면된다
  바로 반환하면 함수가 종료되기 때문에 임시로 변수에 값을 넣어두고 삭제한 다음에
  인덱스값을 증가하고 반환
  - peek : queue에 가장 앞에 있는 값을 반환하게 한다
  - size : 큐의크기는 rear의 front를 빼는것으로 쉽게 할 수 있다

  **** Logic/part1/linkedListQueue.js ****
  Linked List로 표현하기
  - Node 클래스,  Queue의 생성자는 일반적인 연결리스트 구현과 크게 다르지 않다
  - enqueue는 연결리스트의 append와 흡사하다
  - dequeue는 스택을 연결리스트로 구현했을때 pop과 동일하다
  - peek은 head의 값을 그대로 반환하면 된다.

  *** Tip
  연결리스트보다는 배열이 구현하기 쉽기 때문에 코테를 하게 된다면 배열로 큐를 구현하면 된다.
  * shift 함수는 쓰지 말것
  Queue구현을 검색해서 나오는 경우에 shift를 써서 해도 된다는 말이 있는데
  JavaScript배열에서 shift는 선형시간이 걸리기 때문에
  *Queue에서 기대하는 로직이 수행되지 않는다*
  제대로 Queue를 만들고 싶다면 이전 코드를 참고

  * **** Circular Queue 환형 큐 **** *
  Front와 Rear가 이어져있는 Queue
  Circular Queue는 Linked List로 구현했을때 이점이 없다.

  환형 연결리스트처럼 처음과 끝이 이어져있다. 
  한정된 공간을 효율적으로 이용할때 사용하는 자료구조이기때문에
  연결리스트로 구현해도 상관은 없지만 이점이 없게된다.

  * JavaScript에서의 사용법
  **** Logic/part1/arrayCircularQueue.js ****

  배열로 구현하면 배열로 구현한 Queue와 거의 동일하지만
  maxSize를 받아 Queue의 크기를 제한하고
  front, rear가 크기를 벗어날 경우 다시 0번 index부터 시작하도록함.

  - enquque: rear가 증가되고나서 최대크기로 나머지 연산을 해준다.
  이러면 크기를 벗어날 경우 다시 0부터 시작

  - isFull : 환형큐가 꽉찼는지 확인하는 함수를 만들어
  무작정 enqueue가 되는것을 막을수가 있다.
*/


// shift 
const queue = [1, 2, 3];
queue.push(4);
const value = queue.shift(); // O(n) !!
console.log(value); // 1