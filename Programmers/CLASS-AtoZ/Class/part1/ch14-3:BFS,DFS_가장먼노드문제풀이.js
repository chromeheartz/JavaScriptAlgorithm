/* Ch14-3. BFS,DFS_가장 먼 노드 문제 풀이 */

/*
  * 문제 설명 *

  n개의 노드가 있는 그래프가 있습니다. 
  각 노드는 1부터 n까지 번호가 적혀있습니다. 
  1번 노드에서 가장 멀리 떨어진 노드의 갯수를 구하려고 합니다. 
  가장 멀리 떨어진 노드란 최단경로로 이동했을 때 간선의 개수가 가장 많은 노드들을 의미합니다.

  노드의 개수 n, 간선에 대한 정보가 담긴 2차원 배열 vertex가 매개변수로 주어질 때, 
  1번 노드로부터 가장 멀리 떨어진 노드가 몇 개인지를 return 하도록 solution 함수를 작성해주세요.

  * 제한사항 *

  - 노드의 개수 n은 2 이상 20,000 이하입니다.
  - 간선은 양방향이며 총 1개 이상 50,000개 이하의 간선이 있습니다.
  - vertex 배열 각 행 [a, b]는 a번 노드와 b번 노드 사이에 간선이 있다는 의미입니다.

  * 문제 풀이 *

  핵심 키워드는 "노드", "간선", "최단경로" 
  최단경로가 제일 큰 경우의 집합을 구하는 문제

  1. 먼저 그래프를 만들어주어야한다. 인접리스트로 구현
  편의상 간선들이 1부터 n까지 되어있기 때문에 0부터 시작이 아닌 1부터 시작
  인접리스트이니 초기값으로 빈배열

  const graph = Array.from(Array(n + 1), () => []);

  2. 간선들을 loop를 돌면서 꼬아보도록 함

  원점에서 도착지를 인접리스트에 추가
  graph[src].push(dest);

  문제에서 양방향으로 되어있기 때문에 
  양방향으로 둘다 갈 수 있도록 구현
  graph[dest].push(src);

  for (const [src, dest] of edge) {
    graph[src].push(dest);
    graph[dest].push(src);
  }

  3. 각 정점의 거리를 기록할 수 있도록 배열을 하나 만든다
  0으로 초기화. 1번의 경우에는 1이라고 해놓음
  const distance = Array(n + 1).fill(0)
  distance[1] = 1;

  4. BFS 로직 만들기(너비우선탐색)
  가까이 있는것부터 탐색해나가는 탐색방법
  BFS는 queue를 이용할 수 있다
  일단 처음에는 배열을 이용해서 풀어봄
  shift는 O(n) 이지만 요소가 적을 경우에는 자바스크립트 엔진에서 최적화를 해준다.

  원점을 shift를 통해서 구한다.
  const src = queue.shift();

  출발지로부터 목적지의 요소를 뽑아줌
  for (const dest of graph[src]) {...}

  이미 가지 않은 경로에는 0으로 초기화 되어있음.
  한번도 가지 않은 경로는 추가 해준다
  if (distance[dest] === 0) {
    queue.push(dest)
  }

  도착지는 출발지의 + 1 경로가 된다
  distance[dest] = distance[src] + 1

  const queue = [1];
  while (queue.length > 0) {
    const src = queue.shift();
    for (const dest of graph[src]) {
      if (distance[dest] === 0) {
        queue.push(dest)
        distance[dest] = distance[src] + 1
      }
    }
  }
  
  4. 현재까지 한 후에 distance를 콘솔로 찍어보면
  [
    0, 1, 2, 2,  
    3, 3, 3, 
  ]

  이 나오는데 3, 3, 3을 뽑아내야하니 최대값을 뽑을것이다
  거리들 중에서 제일 큰 값을 뽑아낸다


  const max = Math.max(...distance);

  5. 그 후 필터링으로 최대값과 같은 녀석들이 몇개나 있는지
  return distance.filter(item => item === max).length;

  6. 이제 Queue를 이용하도록 바꾼다
  queue를 내부적으로 선언해주고 front, rear를 각각 초기화 해줌

  class Queue {
    constructor() {
      this.queue = [];
      this.front = 0;
      this.rear = 0;
    }
  }

  7. enqueue함수 구현
  value를 받아서 queue에다가 하나씩 추가
  enqueue(value) {
    this.queue[this.rear++] = value;
  }

  8. dequeue 
  front에 있는 값을 빼내고 front에 있는 값을 하나 증가
  그 후 기존에 있던 queue(배열에 있는값) 을 지워준다.

  dequeue() {
    const value = this.queue[this.front];
    delete this.queue[this.front];
    this.front += 1;
    return value;
  }

  9. isEmpty
  queue가 비었는지 확인하는 함수
  rear, front가 같으면 아무것도 없다고 판단이 된다.

  isEmpty() {
    return this.rear === this.front
  }

  10. 그 후 
  const queue = [1];을
  const queue = new Queue();로 바꾸어주고

  while문의 조건도 queue가 비었는지를 확인
  while(!queue.isEmpty())

  shift는 dequeue로 바꿈
  const src = queue.dequeue()

  push도 마찬가지로 enqueue로
  queue.enqueue(dest);

  **** 
  요소가 어느정도 넘어가면 shift가 최적화가 안되지만 그 전까지는 최적화가 되면서 빠르다는것을 확인할 수 있다.
  shift, 직접구현 queue는 이런식으로 사용할 수 있다
  * 제한사항이 작을 경우에는 shift를 사용해도 괜찮은데
  제한사항이 큰 경우(n이 큰 경우)에는 직접 구현하는 것이 좋다.
*/

class Queue {
  constructor() {
      this.queue = [];
      this.front = 0;
      this.rear = 0;
  }
  
  enqueue(value) {
      this.queue[this.rear++] = value;
  }
  
  dequeue() {
      const value = this.queue[this.front];
      delete this.queue[this.front];
      this.front += 1;
      return value;
  }
  
  isEmpty() {
      return this.rear === this.front
  }
}

function solution(n, edge) {
  const graph = Array.from(Array(n + 1), () => []);
  
  for (const [src, dest] of edge) {
      graph[src].push(dest);
      graph[dest].push(src);
  }
  
  const distance = Array(n + 1).fill(0);
  distance[1] = 1;
  
  // BFS
  const queue = new Queue();
  queue.enqueue(1);
  
  while (!queue.isEmpty()) {
      const src = queue.dequeue();
      for (const dest of graph[src]) {
          if (distance[dest] === 0) {
              queue.enqueue(dest);
              distance[dest] = distance[src] + 1;
          }
      }
  }
  
  const max = Math.max(...distance);
  return distance.filter(item => item === max).length;
}