/* _____________ LVB 배열 만들기 4 _____________ */

/*
  ** 문제 설명 **

  정수 배열 arr가 주어집니다. arr를 이용해 새로운 배열 stk를 만드려고 합니다.
  변수 i를 만들어 초기값을 0으로 설정한 후 i가 arr의 길이보다 작으면 다음 작업을 반복합니다.
    - 만약 stk가 빈 배열이라면 arr[i]를 stk에 추가하고 i에 1을 더합니다.
    - stk에 원소가 있고, stk의 마지막 원소가 arr[i]보다 작으면 arr[i]를 stk의 뒤에 추가하고 i에 1을 더합니다.
    - stk에 원소가 있는데 stk의 마지막 원소가 arr[i]보다 크거나 같으면 stk의 마지막 원소를 stk에서 제거합니다.
  위 작업을 마친 후 만들어진 stk를 return 하는 solution 함수를 완성해 주세요.

  ** 제한 사항 **

  - 1 ≤ arr의 길이 ≤ 100,000
    - 1 ≤ arr의 원소 ≤ 100,000

  ** 입출력 예 **

  - 입출력 예 #1
    각 작업을 마친 후에 배열의 변화를 나타내면 다음 표와 같습니다.
    i	arr[i]	stk
    0	1	[]
    1	4	[1]
    2	2	[1, 4]
    2	2	[1]
    3	5	[1, 2]
    4	3	[1, 2, 5]
    4	3	[1, 2]
    -	-	[1, 2, 3]
    따라서 [1, 2, 3]을 return 합니다.
*/

function solution(arr) {
  const stk = [];
  let i = 0;
  while (i < arr.length) {
      if (stk.length === 0 || stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
        i += 1;
      } else if (stk[stk.length - 1] >= arr[i]) {
        stk.pop();
      }
  }
  return stk;
}