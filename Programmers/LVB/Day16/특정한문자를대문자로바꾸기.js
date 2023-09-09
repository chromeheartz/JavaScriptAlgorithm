/* _____________ LVB 특정한 문자를 대문자로 바꾸기 _____________ */

/*
  ** 문제 설명 **

  영소문자로 이루어진 문자열 my_string과 영소문자 1글자로 이루어진 
  문자열 alp가 매개변수로 주어질 때, my_string에서 alp에 해당하는 모든 글자를 
  대문자로 바꾼 문자열을 return 하는 solution 함수를 작성해 주세요.

  ** 제한 사항 **

  - 1 ≤ my_string의 길이 ≤ 1,000

  ** 입출력 예 **
  
  - 입출력 예 #1
    예제 1번의 my_string은 "programmers"이고 alp가 "p"이므로 my_string에 
    모든 p를 대문자인 P로 바꾼 문자열 "Programmers"를 return 합니다.

  - 입출력 예 #2
    예제 2번의 alp는 "x"이고 my_string에 x는 없습니다. 따라서 "lowercase"를 return 합니다.
*/

function solution(my_string, alp) {
  let stringArr = my_string.split("")
  for(let i = 0; i < stringArr.length; i++) {
      if(stringArr[i] == alp) {
          stringArr[i] = alp.toUpperCase();
      }
  }
  return stringArr.join("");
}