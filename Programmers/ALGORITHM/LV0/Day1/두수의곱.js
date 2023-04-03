/* _____________ LV0 두 수의 곱 _____________ */

/*
  ** 문제 설명 **

  정수 num1, num2가 매개변수 주어집니다.
  num1과 num2를 곱한 값을 return 하도록 solution 함수를 완성해주세요.

  ** 제한 사항 **

  0 ≤ num1 ≤ 100
  0 ≤ num2 ≤ 100

  ** 입출력 예 **
  - 입출력 예 #1
    num1이 3, num2가 4이므로 3 * 4 = 12를 return합니다.
  - 입출력 예 #2
    num1이 27, num2가 19이므로 27 * 19 = 513을 return합니다.
*/

function solution(num1, num2) {    
  if(0<=num1 && num1<=100){
      if(0<=num2 && num2<=100){
          const result = num1 * num2;
          return result;
      }
  }
}
