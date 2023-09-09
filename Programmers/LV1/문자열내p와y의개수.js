/* _____________ LV1 문자열 내 p와 y의 개수 _____________ */

/*
  ** 문제 설명 **

  대문자와 소문자가 섞여있는 문자열 s가 주어집니다. 
  s에 'p'의 개수와 'y'의 개수를 비교해 같으면 True, 다르면 False를 return 하는 solution를 완성하세요. 
  'p', 'y' 모두 하나도 없는 경우는 항상 True를 리턴합니다. 
  단, 개수를 비교할 때 대문자와 소문자는 구별하지 않습니다.
  예를 들어 s가 "pPoooyY"면 true를 return하고 "Pyy"라면 false를 return합니다.

  ** 제한 사항 **

  - 문자열 s의 길이 : 50 이하의 자연수
  - 문자열 s는 알파벳으로만 이루어져 있습니다.

  ** 입출력 예 **

  - 입출력 예 #1
    'p'의 개수 2개, 'y'의 개수 2개로 같으므로 true를 return 합니다.

  - 입출력 예 #2
    'p'의 개수 1개, 'y'의 개수 2개로 다르므로 false를 return 합니다.

  ** 다른 사람의 풀이 **

  1. match 메소드 이용
  function solution(s) {
    return s.match(/p/ig).length == s.match(/y/ig).length
  }

  2. split 메소드 이용
  function solution(s) {
    return s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length;
  }
*/

function solution(s) {
  const lowerCaseString = s.toLowerCase();
  
  let pCount = 0;
  let yCount = 0;
  
  for (let i = 0; i < lowerCaseString.length; i++) {
    if (lowerCaseString[i] === 'p') {
      pCount++;
    } else if (lowerCaseString[i] === 'y') {
      yCount++;
    }
  }
  
  return pCount === yCount;
}