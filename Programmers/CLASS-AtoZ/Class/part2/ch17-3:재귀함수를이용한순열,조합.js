/* Ch17-3. 재귀 함수를 이용한 순열, 조합 */

/*
  * 순열 조합 *

  순열과 조합은 코딩 테스트에서 은근히 자주 사용되는 기능이다.
  아쉽게도 자바스크립트에선 자체적으로 제공해주는 built-in 함수가 없기에 직접 구현해야 한다

  순열과 조합은 재귀 함수를 이용하면 쉽게 만들 수 있다.
  물론 성능이나 콜 스택 위험으로 인해 스택으로 구현하는 것이 좋지만
  순열과 조합 자체가 시간복잡도가 굉장히 크기 때문에 코딩테스트에서 n이 크게 나오는 경우는
  많지 않다. 따라서 재귀로 외우는것이 직관적이고 편하다.

  * 순열
  - 순열의 시간복잡도는 O(n!) 이다.

  * 조합
  - 조합의 시간복잡도는 O(2ⁿ) 이다.

*/

//// ** 순열
function permutations(arr, n) {
  // 1개만 뽑는다면 그대로 순열을 반환한다. 탈출 조건으로도 사용된다.
  if (n === 1) return arr.map((v) => [v]);
  let result = [];

  // 요소를 순환한다
  arr.forEach((fixed, idx, arr) => {
    // 현재 index를 제외한 요소를 추출한다.
    // index번째는 선택된 요소
    const rest = arr.filter((_, index) => index !== idx);
    // 선택된 요소를 제외하고 재귀 호출한다.
    const perms = permutations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 순열을 합쳐준다.
    const combine = perms.map((v) => [fixed, ...v]);
    // 결과 값을 추가한다.
    result.push(...combine);
  });

  // 결과 반환
  return result;
}

//// ** 조합
function combinations(arr, n) {
  // 1개만 뽑는다면 그대로 조합을 반환한다. 탈출 조건으로도 사용된다.
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  // 요소를 순환한다
  arr.forEach((fixed, idx, arr) => {
    // 현재 index 이후 요소를 추출한다.
    // index번째는 선택된 요소
    const rest = arr.slice(idx + 1);
    // 선택된 요소 이전 요소들을 제외하고 재귀 호출한다.
    const combis = combinations(rest, n - 1);
    // 선택된 요소와 재귀 호출을 통해 구한 조합을 합쳐준다.
    const combine = combis.map((v) => [fixed, ...v]);
    // 결과 값을 추가한다.
    result.push(...combine);
  });

  // 결과 반화
  return result;
}

//// ** 두 개 뽑아서 더하기 문제 풀이
/*
  단순히 숫자 2개를 뽑은 조합을 구하면 되는 문제이다.
  단, 중복을 제거하고 오름차순으로 정렬하는 것을 잊으면 안된다.
  조합함수를 이용하면 쉽게 풀 수 있다.

  **** 내가 풀었던 답
  function solution(numbers) {
    let resultArr = [];
    
    for (let i = 0; i < numbers.length; i++) {
        for(let j = i + 1; j < numbers.length; j++) {
            resultArr.push(numbers[i] + numbers[j])
        }
    }
    const result = new Set(resultArr.sort((x, y) => x - y))
    return [...result]
  }
*/

function combinations(arr, n) {
  if (n === 1) return arr.map((v) => [v]);
  const result = [];

  arr.forEach((fixed, idx, arr) => {
    const rest = arr.slice(idx + 1);
    const combis = combinations(rest, n - 1);
    const combine = combis.map((v) => [fixed, ...v]);
    result.push(...combine);
  });
  return result;
}

function solution(numbers) {
  // 1. 조합을 구한다. n 개중 2개
  // 2. 조합의 합을 구한다.
  // 3. 중복을 제거한다.
  // 4. 오름차순 정렬한다.
  return [...new Set(combinations(numbers, 2).map(combi => combi[0] + combi[1]))].sort((a, b) => a - b);
}
