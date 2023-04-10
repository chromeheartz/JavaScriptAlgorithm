/* _____________ LV0 구슬을 나누는 경우의 수 _____________ */

/*
  ** 문제 설명 **

  머쓱이는 구슬을 친구들에게 나누어주려고 합니다.
  구슬은 모두 다르게 생겼습니다. 
  머쓱이가 갖고 있는 구슬의 개수 balls와 친구들에게 나누어 줄 
  구슬 개수 share이 매개변수로 주어질 때, 
  balls개의 구슬 중 share개의 구슬을 고르는 가능한 모든 경우의 수를 
  return 하는 solution 함수를 완성해주세요.

  ** 제한 사항 **

  - 1 ≤ balls ≤ 30
  - 1 ≤ share ≤ 30
  - 구슬을 고르는 순서는 고려하지 않습니다.
  - share ≤ balls

  ** 입출력 예 **

  - 입출력 예 #1
    서로 다른 구슬 3개 중 2개를 고르는 경우의 수는 3입니다.

  - 입출력 예 #2
    서로 다른 구슬 5개 중 3개를 고르는 경우의 수는 10입니다.  
*/

function solution(balls, share) {
  function factorial(num) {
  let returnFactorial = BigInt(1)
  
  for(let i = num; i >= 2; i-- ) {
      returnFactorial*=BigInt(i)
  }
      
  return returnFactorial
  }
  
  return factorial(balls) / (factorial(balls - share) * factorial(share))
}

