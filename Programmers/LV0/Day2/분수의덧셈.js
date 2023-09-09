/* _____________ LV0 분수의 덧셈 _____________ */

/*
  ** 문제 설명 **

  첫 번째 분수의 분자와 분모를 뜻하는 numer1, denom1, 
  두 번째 분수의 분자와 분모를 뜻하는 numer2, denom2가 매개변수로 주어집니다. 
  두 분수를 더한 값을 기약 분수로 나타냈을 때 분자와 분모를 순서대로 담은 배열을 
  return 하도록 solution 함수를 완성해보세요.

  ** 제한 사항 **

  0 ≤ num1 ≤ 10,000
  0 ≤ num2 ≤ 10,000

  ** 입출력 예 **

  - 입출력 예 #1
    1 / 2 + 3 / 4 = 5 / 4입니다. 따라서 [5, 4]를 return 합니다.
  - 입출력 예 #2
    9 / 2 + 1 / 3 = 29 / 6입니다. 따라서 [29, 6]을 return 합니다.
*/

function solution(numer1, denom1, numer2, denom2) {
  let condition = numer1 > 0 && numer1 < 1000 && denom1 > 0 && denom1 < 1000 && numer2 > 0 && numer2 < 1000 && denom2 > 0 && denom2 < 1000
  if (condition) {
      let sum1 = numer1 * denom2 + numer2 * denom1
      let sum2 = denom1 * denom2
      
      let max = 1
      
      for(let i = 1 ; i <= sum2 ; i ++) {
          if(sum2%i === 0 && sum1%i === 0) {
              max = i
          }
      }
      return [sum1/max, sum2/max]
  }
}