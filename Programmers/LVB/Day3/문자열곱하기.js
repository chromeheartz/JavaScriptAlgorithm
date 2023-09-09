/* _____________ LVB 문자열 곱하기 _____________ */

/*
  ** 문제 설명 **

  문자열 my_string과 정수 k가 주어질 때, 
  my_string을 k번 반복한 문자열을 return 하는 solution 함수를 작성해 주세요.

  ** 제한 사항 **

  - 1 ≤ my_string의 길이 ≤ 100
  - my_string은 영소문자로만 이루어져 있습니다.
  - 1 ≤ k ≤ 100

  ** 입출력 예 **

  - 입출력 예 #1
    예제 1번의 my_string은 "string"이고 이를 3번 반복한 문자열은 
    "stringstringstring"이므로 이를 return 합니다.

  - 입출력 예 #2
    예제 2번의 my_string은 "love"이고 이를 10번 반복한 문자열은 
    "lovelovelovelovelovelovelovelovelovelove"이므로 이를 return 합니다.
*/

function solution(my_string, k) {
  let result = "";
  for (let i = 0; i < k; i++) {
      result += my_string
  }
  return result
}