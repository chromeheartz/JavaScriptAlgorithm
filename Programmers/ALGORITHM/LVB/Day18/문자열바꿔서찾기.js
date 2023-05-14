/* _____________ LVB 문자열 바꿔서 찾기 _____________ */

/*
  ** 문제 설명 **

  문자 "A"와 "B"로 이루어진 문자열 myString과 pat가 주어집니다. 
  myString의 "A"를 "B"로, "B"를 "A"로 바꾼 문자열의 연속하는 부분 문자열 중 
  pat이 있으면 1을 아니면 0을 return 하는 solution 함수를 완성하세요.

  ** 제한 사항 **

  - 1 ≤ myString ≤ 100
  - 1 ≤ pat ≤ 10
    ㄴ myString과 pat는 문자 "A"와 "B"로만 이루어진 문자열입니다.

  ** 입출력 예 **
  
  - 입출력 예 #1
    "ABBAA"에서 "A"와 "B"를 서로 바꾸면 "BAABB"입니다. 여기에는 부분문자열 "AABB"가 있기 때문에 1을 return 합니다.

  - 입출력 예 #2
    "ABAB"에서 "A"와 "B"를 서로 바꾸면 "BABA"입니다. 여기에는 부분문자열 "BABA"가 없기 때문에 0을 return 합니다.
*/

function solution(myString, pat) {
  let arr = myString.split("")
  for(let i = 0; i < arr.length; i++) {
      if(arr[i] == 'A') {
          arr[i] = 'B'
      } else {
          arr[i] = 'A'
      }
  }
  return arr.join("").includes(pat) ? 1 : 0
}