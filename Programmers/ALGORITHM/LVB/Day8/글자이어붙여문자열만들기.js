/* _____________ LVB 글자 이어 붙여 문자열 만들기 _____________ */

/*
  ** 문제 설명 **

  문자열 my_string과 정수 배열 index_list가 매개변수로 주어집니다. 
  my_string의 index_list의 원소들에 해당하는 인덱스의 글자들을 
  순서대로 이어 붙인 문자열을 return 하는 solution 함수를 작성해 주세요.

  ** 제한 사항 **

  - 1 ≤ my_string의 길이 ≤ 1,000
  - my_string의 원소는 영소문자로 이루어져 있습니다.
  - 1 ≤ index_list의 길이 ≤ 1,000
  - 0 ≤ index_list의 원소 < my_string의 길이

  ** 입출력 예 **

  - 입출력 예 #1
    예제 1번의 my_string에서 
    인덱스 3, 5, 6, 11, 12, 14, 16, 17에 해당하는 글자는 
    각각 g, o, r, m, r, a, p, e이므로 
    my_string에서 index_list에 들어있는 원소에 해당하는 인덱스의 
    글자들은 각각 순서대로 p, r, o, g, r, a, m, m, e, r, s입니다. 따라서 "programmers"를 return 합니다.

  - 입출력 예 #2
    예제 2번의 my_string에서 
    인덱스 0, 1, 2, 3에 해당하는 글자는 각각 z, p, i, a이므로 
    my_string에서 index_list에 들어있는 원소에 해당하는 인덱스의 글자들은 각각 순서대로 p, i, z, z, a입니다. 
    따라서 "pizza"를 return 합니다.
*/

function solution(my_string, index_list) {
  let resultStr = '';
  index_list.map(v => {
      resultStr += my_string[v]
  })
  return resultStr
}