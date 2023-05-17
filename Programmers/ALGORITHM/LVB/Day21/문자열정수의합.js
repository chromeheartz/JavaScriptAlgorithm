/* _____________ LVB 문자열 정수의 합 _____________ */

/*
  ** 문제 설명 **

  한 자리 정수로 이루어진 문자열 num_str이 주어질 때, 각 자리수의 합을 return하도록 solution 함수를 완성해주세요.

  ** 제한 사항 **

  - 3 ≤ num_str ≤ 100

  ** 입출력 예 **
  
  - 입출력 예 #1
    문자열 안의 모든 숫자를 더하면 45가 됩니다.

  - 입출력 예 #2
    문자열 안의 모든 숫자를 더하면 1이 됩니다.
*/

const solution = num_str => num_str.split("").reduce((prev, curr) => Number(prev) + Number(curr))