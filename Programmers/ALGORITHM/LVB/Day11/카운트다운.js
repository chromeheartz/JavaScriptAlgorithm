/* _____________ LV0 카운트 다운 _____________ */

/*
  ** 문제 설명 **

  정수 start와 end가 주어질 때, 
  start에서 end까지 1씩 감소하는 수들을 차례로 담은 리스트를 
  return하도록 solution 함수를 완성해주세요.

  ** 제한 사항 **

  - 0 ≤ end ≤ start ≤ 50

  ** 입출력 예 **
  
  - 입출력 예 #1
    10부터 3까지 1씩 감소하는 수를 담은 리스트는 [10, 9, 8, 7, 6, 5, 4, 3]입니다.
*/

function solution(start, end) {
  let result = [];
  for(start; start >= end; start--) {
      result.push(start)
  }
  return result;
}