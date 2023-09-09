/* _____________ LVB 카운트 업 _____________ */

/*
  ** 문제 설명 **

  정수 start와 end가 주어질 때, start부터 end까지의 숫자를 차례로 담은 리스트를 
  return하도록 solution 함수를 완성해주세요.

  ** 제한 사항 **

  - 0 ≤ start ≤ end ≤ 50

  ** 입출력 예 **

  - 입출력 예 #1
    3부터 10까지의 숫자들을 담은 리스트 [3, 4, 5, 6, 7, 8, 9, 10]를 return합니다.
*/

function solution(start, end) {
  let result = [];
  for (let i = start; i <= end; i++){
      result.push(i)
  }
  return result;
}