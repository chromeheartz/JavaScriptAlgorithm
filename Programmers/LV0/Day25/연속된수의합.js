/* _____________ LV0 연속된 수의 합 _____________ */

/*
  ** 문제 설명 **

  연속된 세 개의 정수를 더해 12가 되는 경우는 3, 4, 5입니다. 
  두 정수 num과 total이 주어집니다. 
  연속된 수 num개를 더한 값이 total이 될 때, 
  정수 배열을 오름차순으로 담아 return하도록 solution함수를 완성해보세요.

  ** 제한 사항 **

  - 1 ≤ num ≤ 100
  - 0 ≤ total ≤ 1000
  - num개의 연속된 수를 더하여 total이 될 수 없는 테스트 케이스는 없습니다.

  ** 입출력 예 **

  - 입출력 예 #1
    num = 3, total = 12인 경우 [3, 4, 5]를 return합니다.

  - 입출력 예 #2
    num = 5, total = 15인 경우 [1, 2, 3, 4, 5]를 return합니다.

  - 입출력 예 #3
    4개의 연속된 수를 더해 14가 되는 경우는 2, 3, 4, 5입니다.
*/

function solution(num, total) {
  let startNum = 0
  let twoPointer = new Array(num).fill(0).map((a,i) => i).reduce((a,b) => a+b, 0)
  
  while(twoPointer !== total) {
      if(twoPointer < total) {
          startNum++
      } else {
          startNum--
      }
      twoPointer = new Array(num).fill(0).map((a,i) => i+startNum).reduce((a,b) => a+b, 0)
  }
  return new Array(num).fill(0).map((a,i) => i+startNum)
}