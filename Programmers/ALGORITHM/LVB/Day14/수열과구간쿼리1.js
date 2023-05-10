/* _____________ LVB 수열과 구간쿼리 1 _____________ */

/*
  ** 문제 설명 **

  정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. 
  queries의 원소는 각각 하나의 query를 나타내며, [s, e] 꼴입니다.
  각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 arr[i]에 1을 더합니다.
  위 규칙에 따라 queries를 처리한 이후의 arr를 return 하는 solution 함수를 완성해 주세요.

  ** 제한 사항 **

  - 1 ≤ arr의 길이 ≤ 1,000
    ㄴ 0 ≤ arr의 원소 ≤ 1,000,000
  - 1 ≤ queries의 길이 ≤ 1,000
    ㄴ 0 ≤ s ≤ e < arr의 길이

  ** 입출력 예 **
  
  - 입출력 예 #1
    각 쿼리에 따라 arr가 다음과 같이 변합니다.
    i	queries[i]	arr
    -	-	[0, 1, 2, 3, 4]
    0	[0,1]	[1, 2, 2, 3, 4]
    1	[1,2]	[1, 3, 3, 3, 4]
    2	[2,3]	[1, 3, 4, 4, 4]
    따라서 [1, 3, 4, 4, 4]를 return 합니다.
*/

function solution(arr, queries) {
  const result = [...arr]; 
  for (let i = 0; i < queries.length; i++) {
    const [s, e] = queries[i];
    for (let j = s; j <= e; j++) {
      result[j] += 1;
    }
  }
  return result;
}
