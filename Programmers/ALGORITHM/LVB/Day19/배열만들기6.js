/* _____________ LVB 배열 만들기 6 _____________ */

/*
  ** 문제 설명 **

  0과 1로만 이루어진 정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk을 만드려고 합니다.
  i의 초기값을 0으로 설정하고 i가 arr의 길이보다 작으면 다음을 반복합니다.
    ㄴ 만약 stk이 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
    ㄴ stk에 원소가 있고, stk의 마지막 원소가 arr[i]와 같으면 stk의 마지막 원소를 stk에서 제거하고 i에 1을 더합니다.
    ㄴ stk에 원소가 있는데 stk의 마지막 원소가 arr[i]와 다르면 stk의 맨 마지막에 arr[i]를 추가하고 i에 1을 더합니다.
  위 작업을 마친 후 만들어진 stk을 return 하는 solution 함수를 완성해 주세요.
  단, 만약 빈 배열을 return 해야한다면 [-1]을 return 합니다.

  ** 제한 사항 **

  - 1 ≤ arr의 길이 ≤ 1,000,000
  - arr의 원소는 0 또는 1 입니다.

  ** 입출력 예 **
  
  - 입출력 예 #1
    각 작업을 마친 후에 배열의 변화를 나타내면 다음 표와 같습니다.
    idx	arr[idx]	stk
    0	0	[]
    1	1	[0]
    2	1	[0, 1]
    3	1	[0]
    4	0	[0, 1]
    5	-	[0, 1, 0]
    따라서 [0, 1, 0]을 return 합니다.

  - 입출력 예 #2
    각 작업을 마친 후에 배열의 변화를 나타내면 다음 표와 같습니다.
    idx	arr[idx]	stk
    0	0	[]
    1	1	[0]
    2	0	[0, 1]
    3	1	[0, 1, 0]
    4	0	[0, 1, 0, 1]
    5	-	[0, 1, 0, 1, 0]
    따라서 [0, 1, 0, 1, 0]을 return 합니다.

  - 입출력 예 #3
    각 작업을 마친 후에 배열의 변화를 나타내면 다음 표와 같습니다.
    idx	arr[idx]	stk
    0	0	[]
    1	1	[0]
    2	1	[0, 1]
    3	0	[0]
    4	-	[]
    마지막에 빈 배열이 되었으므로 [-1]을 return 합니다.
*/

function solution(arr) {
  let stk = [];

  let i = 0;
  while (i < arr.length) {
    if (stk.length === 0) {
      stk.push(arr[i]);
      i++;
    } else if (stk[stk.length - 1] === arr[i]) {
      stk.pop();
      i++;
    } else {
      stk.push(arr[i]);
      i++;
    }
  }

  if (stk.length === 0) {
    return [-1];
  } else {
    return stk;
  }
}
