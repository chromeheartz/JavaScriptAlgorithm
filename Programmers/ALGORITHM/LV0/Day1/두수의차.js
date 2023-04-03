/* _____________ LV0 두 수의 차 _____________ */

/*
  ** 문제 설명 **

  정수 num1과 num2가 주어질 때,
  num1에서 num2를 뺀 값을 return하도록 soltuion 함수를 완성해주세요.

  ** 제한 사항 **

  -50,000 ≤ num1 ≤ 50,000
  -50,000 ≤ num2 ≤ 50,000

  ** 입출력 예 **
  - 입출력 예 #1
    num1이 2이고 num2가 3이므로 2 - 3 = -1을 return합니다.
  - 입출력 예 #2
    num1이 100이고 num2가 2이므로 100 - 2 = 98을 return합니다.
*/

function solution(num1, num2) {    
  if(-50000<=num1 && num1<=50000){
      if(-50000<=num2 && num2<=50000){
          const result = num1 - num2;
          return result;
      }
  }
}