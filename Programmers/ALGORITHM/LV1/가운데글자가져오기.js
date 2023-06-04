/* _____________ LV1 가운데 글자 가져오기 _____________ */

/*
  ** 문제 설명 **

  단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요. 
  단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

  ** 제한 사항 **

  - s는 길이가 1 이상, 100이하인 스트링입니다.

  ** 입출력 예 **

  s :	return
  "abcde" :	"c"
  "qwer" : "we"

  ** 다른 사람의 풀이 **

  1. substr 메소드 / Math.ceil 메소드 사용
  function solution(s) {
    return s.substr(Math.ceil(s.length / 2) - 1, s.length % 2 === 0 ? 2 : 1);
  }
*/

function solution(s) {
  if(s.length % 2 == 0) {
      return s[(s.length / 2) - 1] + s[s.length / 2]
  } else {
      return s[Math.floor(s.length / 2)]
  }
}