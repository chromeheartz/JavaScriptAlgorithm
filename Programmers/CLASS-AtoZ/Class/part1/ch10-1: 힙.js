/* Ch10-1. 힙 */

/*
  * 우선순위 큐 * 
  FIFO인 큐(일반적인 큐) 와 달리 우선순위가 높은 요소가 먼저 나가는 큐
  우선순위 큐는 자료구조가 아닌 * 개념 * 이다.
  따라서 구현방법은 다양하게 있다.

  * * * * 힙 * * * * 
  이진트리 형태를 가지며 우선순위가 높은 요소가 먼저 나가기 ㅟ해
  요소가 삽입, 삭제 될 때 바로 정렬되는 특징이 있다.
  우선순위 큐를 구현하는 방법중 하나

  * 우선순위 큐 != 힙 * 이 둘은 실제로 다르다.
  만약 매번 배열을 우선순위에 따라 정렬한다면, 그것 또한 우선순위 큐가 될 수 있다.

  * * 힙의 특징 * * 
  - 우선순위가 높은 요소가 먼저 나가는 특징을 가진다. (루트가 먼저 나가는 특징)
  - 루트가 가장 큰 값이 되는 최대 힙(Max Heap)과 루트가 가장 작은 값이 되는 최소 힙(Min Heap)이 있다.
    (오름차순, 내림차순 정도의 차이)
  - 자바스크립트에선 직접 구현해서 사용해야한다.

  * 힙은 추가, 삭제 로직이 핵심 로직이다.

  * * Heap 요소 추가 알고리즘 * * 
  - 요소가 추가될 때는 트리의 가장 마지막에 정점에 위치한다.
  - 추가 후 부모 정점보다 우선순위가 높다면 부모 정점과 순서를 바꾼다.
  - 이 과정을 반복하면(순서를 바꿀 수 없을 때까지 반복하면) 결국 가장 우선순위가
    높은 정점이 루트각 된다.
  - 요소는 항상 이진트리의 마지막에 추가가 되기 때문에 힙은 항상 완전 이진트리가 된다.
    따라서 이진트리의 높이는 log N이기에 힙의 요소 추가 알고리즘은 최악의 경우에도 O(Log N) 시간복잡도를 가진다.

  * * Heap 요소 제거 알고리즘 * *
  - 요소 제거는 루트 정점만 가능하다.
  - 루트 정점이 제거된 후 가장 마지막 정점이 루트에 위치한다.
  - 루트 정점의 두 자식 정점 중 더 우선순위가 높은 정점과 바꾼다
  - 두 자식 정점이 우선순위가 더 낮을 때까지 반복한다(자연스럽게 우선순위가 더 높은 정점이 루트 정점이 될 수 있음)
  - 완전 이진트리의 높이는 log N이기에 힙의 요소 제거 알고리즘은 O(log N) 시간복잡도를 가진다.
*/

let heapArr = [];

// 추가 알고리즘. 
heapArr = [45] // step1: 최대 힙에 45를 추가
heapArr = [45, 36] // step2: 가장 마지막 위치인 45정점의 왼쪽에 추가
heapArr = [45, 36, 54] // step3: 가장 마지막위치인 45정점의 오른쪽에 추가
heapArr = [54, 36, 45] // step4: 최대 힙에서 45보다 54가 우선순위가 높으니 바꾼다
heapArr = [54, 36, 45, 27] // step5: 마지막위치인 36의 왼쪽 정점에 27 추가
heapArr = [54, 36, 45, 27, 63] // step6: 36의 오른쪽 정점에 63 추가
heapArr = [54, 63, 45, 27, 36] // step7: 63이 36보다 우선순위가 높으니 변경
heapArr = [63, 54, 45, 27, 36] // step8: 54보다 63이 우선순위가 높으니 바꾼다. Root까지 이동했기 때문에 탐색 종료

// 제거 알고리즘
heapArr = [63, 54, 45, 27, 36] // step1: 루트정점 63을 제거한다
heapArr = [36, 54, 45, 27] // step2: 가작 마지막 정점 36을 루트에 위치한다
heapArr = [36, 54, 45, 27] // step3: 규칙에 따라 자식 정점인 54, 45를 비교한다. 우선순위가 더 높은 54와 바꾼다
heapArr = [54, 36, 45, 27] // step4: 자식정점 27과 비교한다. (오른쪽 자식은 없기에 27하고만 비교)
// 자식 정점의 우선순위가 더 낮기에 바꾸지 않고 끝낸다.

/* ------ JavaScript에서의 사용법 ------ */


class MaxHeap {
  constructor() {
    // 내부적으로 관리할 배열. 0번인덱스는 편의를 위해 null
    this.heap = [null];
  }

  // 힙 요소 추가(최대 힙)
  push(value) {
    // 규칙에 따라 힙의 가장 마지막에 요소를 추가. 
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = Math.floor(currentIndex / 2);

    // 부모와 비교하며 우선순위를 바꾸는 로직을 반복
    // 부모가 더 우선순위가 낮거나 루프가 아닐대까지 loop하며 부모, 자식을 바꾸기
    while (parentIndex !== 0 && this.heap[parentIndex] < value) {
      const temp = this.heap[parentIndex];
      this.heap[parentIndex] = value;
      this.heap[currentIndex] = temp;

      currentIndex = parentIndex;
      parentIndex = Math.floor(currentIndex / 2);
    }
  }

  // 힙 요소 제거
  pop() {
    // 루트요소를 반환하기 위해 임시로 상수에 저장
    // 루트 정점은 가장 마지막 정점으로 대체
    const returnValue = this.heap[1];
    this.heap[1] = this.heap.pop();

    // 루트에서부터 아래로 내려가기 위한 변수 세팅
    let currentIndex = 1;
    let leftIndex = 2;
    let rightIndex = 3;

    // 반복은 하위 정점들이 현재정점보다 우선순위가 낮을 경우 종료
    while (
      this.heap[currentIndex] < this.heap[leftIndex] ||
      this.heap[currentIndex] < this.heap[rightIndex]
    ) {
      // 왼쪽 정점보다 오른쪽 정점이 우선순위가 높은 경우 오른쪽 정점과 바꾼다
      if (this.heap[leftIndex] < this.heap[rightIndex]) {
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[rightIndex];
        this.heap[rightIndex] = temp;
        currentIndex = rightIndex;
      } else {
        // 아니라면 왼쪽정점과 바꾼다.
        const temp = this.heap[currentIndex];
        this.heap[currentIndex] = this.heap[leftIndex];
        this.heap[leftIndex] = temp;
        currentIndex = leftIndex;
      }
      // 바꾼정점에서 왼쪽 정점의 위치와 오른쪽 정점의 위치를 다시 구한다.
      leftIndex = currentIndex * 2;
      rightIndex = currentIndex * 2 + 1;

      // 이렇게 루프가 종료 될때까지 반복하면 Heap 구조를 유지할 수 있다.
    }

    return returnValue;
  }
}

// 힙 추가
const heap = new MaxHeap();
heap.push(45);
heap.push(36);
heap.push(54);
heap.push(27);
heap.push(63);
console.log(heap.heap); // => [null, 63, 54, 45, 27, 36]

// /heap state: [null, 63, 54, 45, 27, 36]

// 힙 제거
const array = [];
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
array.push(heap.pop());
console.log(array);
