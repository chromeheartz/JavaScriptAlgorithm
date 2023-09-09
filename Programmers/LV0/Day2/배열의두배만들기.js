/* _____________ LV0 배열 두배 만들기 _____________ */

/*
  ** 문제 설명 **

  정수 배열 numbers가 매개변수로 주어집니다. 
  numbers의 각 원소에 두배한 원소를 가진 배열을 return하도록 solution 함수를 완성해주세요.

  ** 제한 사항 **

  -10,000 ≤ numbers의 원소 ≤ 10,000
  1 ≤ numbers의 길이 ≤ 1,000

  ** 입출력 예 **
  
  - 입출력 예 #1
    [1, 2, 3, 4, 5]의 각 원소에 두배를 한 배열 [2, 4, 6, 8, 10]을 return합니다.
  - 입출력 예 #2
    [1, 2, 100, -99, 1, 2, 3]의 각 원소에 두배를 한 배열 [2, 4, 200, -198, 2, 4, 6]을 return합니다.
*/

function solution(numbers) {
  let result = []
  if(1 <= numbers.length && numbers.length <= 1000) {
      numbers.map((v, i) => {
          if (-10000 <= v && v <= 10000){
              result.push(v * 2)
          }
      })
  }
  return result
}