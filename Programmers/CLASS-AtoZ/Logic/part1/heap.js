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
