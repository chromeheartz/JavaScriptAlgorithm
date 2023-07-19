/* Ch14-1. BFS, DFS  */

/*
  * BFS, DFS *
  (Breadth-First Search, Depth-First Search)
  너비 우선 탐색, 깊이 우선 탐색

  * BFS 너비 우선 탐색 *
  그래프 탐색 알고리즘으로 같은 깊이에 해당한는 정점부터 탐색하는 알고리즘

  * BFS의 특징
  - Queue를 이용하여 구현할 수 있다.
  - 시작 지점에서 가까운 정점부터 탐색한다.
  - V가 정점의 수, E가 간선의 수 일때 BFS의 시간 복잡도는 O(V + E)다.

  * BFS 예시
  1. Queue A => 시작지점으로 가정
  2. Queue B C D => A를 DeQueue하고 A로부터 이동할 수 있는 간선들을 체크하여 해당 정점들을 모두 Queue에 넣음
  3. Queue C D F => B정점을 DeQueue하고 B로부터 이동할 수 있는 간선들을 Q에 넣는데 C는 이미 방문한 곳이기 때문에 추가하지 않는다
  4. Queue D F => C정점을 DeQueue하고 C정점에서는 F로 갈 수 있지만 이미 Queue에 추가가 되어있기 때문에 아무것도 추가하지 앟고 종료.
  5. Queue F E => D정점을 DeQueue하고 D와 연결된 E 정점을 Queue에 추가
  6. Queue E G => F정점을 DeQueue하고 F와 연결된 G 정점을 추가
  7, Queue G => E정점은 더이상 갈 수 있는 간선이 없기 때문에 DeQueue만 하고 종료
  8. Queue => 마찬가지로 G도 갈 수 없기 때문에 종료

  ** BFS는 시작지점에서 인접한 요소부터 탐색하며 진행된다

  * DFS 깊이 우선 탐색 *
  그래프 탐색 알고리즘으로 최대한 깊은 정점부터 탐색하는 알고리즘

  * DFS의 특징
  - Stack을 이용하여 구현할 수 있다
  - 시작 정점에서 깊은 것 부터 찾는다
  - V가 정점의 수, E가 간선의 수 일때 DFS의 시간복잡도는 O(V + E)다.

  * DFS 예시
  1. Stack A => 시작지점 A를 Stack에 넣음
  2. Stack A B => Stack의 탑인 A를 참고하여 이동할 수 있는 정점인 B 를 추가
  3. Stack A B F => Stack의 탑인 B를 참고하여 이동할 수 있는 정점인 F 를 추가
  4. Stack A B F C => Stack의 탑인 F를 참고하여 이동할 수 있는 정점인 C 를 추가
  5. Stack A B F G => C에서는 갈 수 있는 정점이 없기 때문에 pop하고 다시 F에서 갈 수 있는 정점인 G를 추가
  6. Stack A => G에서는 더이상 갈 수 있는 곳이 없기 때문에 pop, 나머지 F, B도 갈 수 있는 곳이 없기 때문에 pop
  7. Stack A D => 다시 A부터 시작되어 D를 Stack에 추가
  8. Stack A D E => 이어서 E를 추가
  9. Stack => E에서 갈 수 있는 곳이 없기 때문에 모든 정점을 Stack에서 pop하게 된다.
*/

