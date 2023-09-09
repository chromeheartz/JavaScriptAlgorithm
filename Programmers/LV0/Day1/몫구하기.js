/* _____________ LV0 몫 구하기 _____________ */

/*
  ** 문제 설명 **

  정수 num1, num2가 매개변수로 주어질 때,
  num1을 num2로 나눈 몫을 return 하도록 solution 함수를 완성해주세요.

  ** 제한 사항 **

  0 ≤ num1 ≤ 100
  0 ≤ num2 ≤ 100

  ** 입출력 예 **
  - 입출력 예 #1
    num1이 10, num2가 5이므로 10을 5로 나눈 몫 2를 return 합니다.
  - 입출력 예 #2
    num1이 7, num2가 2이므로 7을 2로 나눈 몫 3을 return 합니다.
*/

function solution(num1, num2) {    
  if(0<=num1 && num1<=100){
      if(0<=num2 && num2<=100){
          const result = parseInt(num1 / num2);
          return result;
      }
  }
}
