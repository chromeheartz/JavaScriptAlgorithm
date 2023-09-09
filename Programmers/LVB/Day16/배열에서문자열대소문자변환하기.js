/* _____________ LVB 배열에서 문자열 대소문자 변환하기 _____________ */

/*
  ** 문제 설명 **

  문자열 배열 strArr가 주어집니다. 
  모든 원소가 알파벳으로만 이루어져 있을 때, 
  배열에서 홀수번째 인덱스의 문자열은 모든 문자를 대문자로, 
  짝수번째 인덱스의 문자열은 모든 문자를 소문자로 바꿔서 반환하는 solution 함수를 완성해 주세요.

  ** 제한 사항 **

  - 1 ≤ strArr ≤ 20
    ㄴ 1 ≤ strArr의 원소의 길이 ≤ 20
    ㄴ strArr의 모든 원소는 알파벳 소문자로 이루어져 있습니다.

  ** 입출력 예 **
  
  - 입출력 예 #1
    strArr[0]과 strArr[2]는 짝수번째 인덱스의 문자열이므로 모두 소문자로 바꿔서 "aaa"와 "ccc"가 됩니다.
    strArr[1]과 strArr[3]는 홀수번째 인덱스의 문자열인데 원래 대문자이므로 그대로 둡니다.
    따라서 ["aaa","BBB","ccc","DDD"]를 return 합니다.

  - 입출력 예 #2
    strArr[0]은 짝수번째 인덱스의 문자열이므로 소문자로 바꿔서 "abc"가 됩니다.
    strArr[1]은 홀수번째 인덱스의 문자열이므로 대문자로 바꿔서 "ABC"가 됩니다.
    따라서 ["abc","ABC"]를 return 합니다.
*/

function solution(strArr) {
  let result = [];
  strArr.map((v, i) => {
      if (i % 2 == 0) {
          result.push(v.toLowerCase());
      } else {
          result.push(v.toUpperCase());
      }
  })
  return result;
}