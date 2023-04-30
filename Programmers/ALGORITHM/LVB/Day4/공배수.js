/* _____________ LVB 공배수 _____________ */

/*
  ** 문제 설명 **

  정수 number와 n, m이 주어집니다. 
  number가 n의 배수이면서 m의 배수이면 1을 아니라면 0을 
  return하도록 solution 함수를 완성해주세요.

  ** 제한 사항 **

  - 10 ≤ number ≤ 100
  - 2 ≤ n, m < 10

  ** 입출력 예 **

  - 입출력 예 #1
    60은 2의 배수이면서 3의 배수이기 때문에 1을 return합니다.

  - 입출력 예 #2
    55는 5의 배수이지만 10의 배수가 아니기 때문에 0을 return합니다.
*/

function solution(number, n, m) {
  if (number % n === 0 && number % m === 0) {
     return 1;
   } else {
     return 0;
   }
 }