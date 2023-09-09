/* _____________ LV0 최대값 만들기 _____________ */

/*
  ** 문제 설명 **

  정수 배열 numbers가 매개변수로 주어집니다. 
  numbers의 원소 중 두 개를 곱해 만들 수 있는 최댓값을 
  return하도록 solution 함수를 완성해주세요.

  ** 제한 사항 **

  - 0 ≤ numbers의 원소 ≤ 10,000
  - 2 ≤ numbers의 길이 ≤ 100

  ** 입출력 예 **

  - 입출력 예 #1
    두 수의 곱중 최댓값은 4 * 5 = 20 입니다.

  - 입출력 예 #1
    두 수의 곱중 최댓값은 31 * 24 = 744 입니다.
*/

function solution(numbers) {
  const sortArray = numbers.sort((a, b) => a - b);
  return sortArray[sortArray.length - 1] * sortArray[sortArray.length - 2]
}