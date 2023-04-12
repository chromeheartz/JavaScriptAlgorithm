/* _____________ LV0 문자열 정렬하기 (1) _____________ */

/*
  ** 문제 설명 **

  문자열 my_string이 매개변수로 주어질 때, 
  my_string 안에 있는 숫자만 골라 오름차순 정렬한 리스트를 
  return 하도록 solution 함수를 작성해보세요.

  ** 제한 사항 **

  - 1 ≤ my_string의 길이 ≤ 100
  - my_string에는 숫자가 한 개 이상 포함되어 있습니다.
  - my_string은 영어 소문자 또는 0부터 9까지의 숫자로 이루어져 있습니다. - - -

  ** 입출력 예 **

  - 입출력 예 #1
    "hi12392"에 있는 숫자 1, 2, 3, 9, 2를 오름차순 정렬한 [1, 2, 2, 3, 9]를 return 합니다.

  - 입출력 예 #2
    "p2o4i8gj2"에 있는 숫자 2, 4, 8, 2를 오름차순 정렬한 [2, 2, 4, 8]을 return 합니다.

  - 입출력 예 #3
    "abcde0"에 있는 숫자 0을 오름차순 정렬한 [0]을 return 합니다.
*/

function solution(my_string) {
  const result = []
  my_string.split("").map(v =>{
      if(!isNaN(Number(v))) {
          result.push(Number(v))
      }
  })
  return result.sort((a, b) => {return a - b});
}