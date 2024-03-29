/* _____________ LVB 특별한 이차원 배열 1 _____________ */

/*
  ** 문제 설명 **

  정수 n이 매개변수로 주어질 때, 다음과 같은 n × n 크기의 이차원 배열 arr를 
  return 하는 solution 함수를 작성해 주세요.

  ㄴ arr[i][j] (0 ≤ i, j < n)의 값은 i = j라면 1, 아니라면 0입니다.

  ** 제한 사항 **

  - 1 ≤ n ≤ 100

  ** 입출력 예 **

  - 입출력 예 #1

    예제 1번의 n의 값은 3으로 다음과 같이 2차원 배열을 채울 수 있습니다.

    i \ j	0	1	2
    0	1	0	0
    1	0	1	0
    2	0	0	1
    따라서 [[1, 0, 0], [0, 1, 0], [0, 0, 1]]을 return 합니다.

  - 입출력 예 #2

    예제 2번의 n의 값은 6으로 다음과 같이 2차원 배열을 채울 수 있습니다.

    i \ j	0	1	2	3	4	5
    0	1	0	0	0	0	0
    1	0	1	0	0	0	0
    2	0	0	1	0	0	0
    3	0	0	0	1	0	0
    4	0	0	0	0	1	0
    5	0	0	0	0	0	1
    따라서 [[1, 0, 0, 0, 0, 0], [0, 1, 0, 0, 0, 0], [0, 0, 1, 0, 0, 0], [0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 1, 0], [0, 0, 0, 0, 0, 1]]을 return 합니다.

  - 입출력 예 #3

    예제 1번의 n의 값은 1이고 다음과 같이 2차원 배열을 채울 수 있습니다.

    i \ j	0
    0	1
    따라서 [[1]]을 return 합니다.
*/

function solution(n) {
  const arr = [];

  for (let i = 0; i < n; i++) {
    const row = [];

    for (let j = 0; j < n; j++) {
      if (i === j) {
        row.push(1);
      } else {
        row.push(0);
      }
    }

    arr.push(row);
  }

  return arr;
}