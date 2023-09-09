/* _____________ LVB 5명씩 _____________ */

/*
  ** 문제 설명 **

  최대 5명씩 탑승가능한 놀이기구를 타기 위해 줄을 서있는 사람들의 이름이 담긴 문자열 
  리스트 names가 주어질 때, 앞에서 부터 5명씩 묶은 그룹의 가장 앞에 서있는 사람들의 이름을 
  담은 리스트를 return하도록 solution 함수를 완성해주세요. 
  마지막 그룹이 5명이 되지 않더라도 가장 앞에 있는 사람의 이름을 포함합니다.

  ** 제한 사항 **

  - 5 ≤ names의 길이 ≤ 30
  - 1 ≤ names의 원소의 길이 ≤ 10
  - names의 원소는 영어 알파벳 소문자로만 이루어져 있습니다.

  ** 입출력 예 **
  
  - 입출력 예 #1
    앞에서부터 5명씩 두 그룹으로 묶을 수 있습니다. 
    ["nami", "ahri", "jayce", "garen", "ivern"], ["vex", "jinx"] 
    이 두 그룹에서 가장 앞에 서있는 사람들의 이름을 담은 리스트인 ["nami", "vex"]를 return합니다.
*/

function solution(names) {
  const result = [];
  let i = 0;
  while (i < names.length) {
    result.push(names.slice(i, i + 5));
    i += 5;
  }
  return result.map(group => group[0]);
}

// const solution = names => names.filter((_, i) => !(i % 5))