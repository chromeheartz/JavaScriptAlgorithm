/* _____________ LV0 특정 문자 제거하기 _____________ */

/*
  ** 문제 설명 **

  문자열 my_string과 문자 letter이 매개변수로 주어집니다.
  my_string에서 letter를 제거한 문자열을 return하도록 solution 함수를 완성해주세요.

  ** 제한 사항 **

  1 ≤ my_string의 길이 ≤ 100
  letter은 길이가 1인 영문자입니다.
  my_string과 letter은 알파벳 대소문자로 이루어져 있습니다.
  대문자와 소문자를 구분합니다.


  ** 입출력 예 **

  - 입출력 예 #1
    "abcdef" 에서 "f"를 제거한 "abcde"를 return합니다.
  - 입출력 예 #2
    "BCBdbe" 에서 "B"를 모두 제거한 "Cdbe"를 return합니다.
*/

function solution(my_string, letter) {
  const result = my_string.replace(new RegExp(letter, "g"), "")
  return result
}