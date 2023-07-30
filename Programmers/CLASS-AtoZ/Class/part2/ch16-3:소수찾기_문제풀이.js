/* Ch16-3. 소수 찾기_문제 풀이 */

/*
  * 문제 설명 *

  1부터 입력받은 숫자 n 사이에 있는 소수의 개수를 반환하는 함수, 
  solution을 만들어 보세요.

  소수는 1과 자기 자신으로만 나누어지는 수를 의미합니다.
  (1은 소수가 아닙니다.)

  * 제한사항 *

  - n은 2이상 1000000이하의 자연수입니다.

  * 문제 풀이 *

  1부터 n까지 소수를 모두 찾아야 할 경우 가장 효율적인 알고리즘은
  '에라토스테네스의 체' 라는 알고리즘이 있다. 이것을 이용하면된다.
*/

// 에라토스테네스의 체
// O(n log log n)
function get_primes(num) {
  const prime = [false, false, ...Array(num - 1).fill(true)]; // 0과 1은 소수가 아니기에 미리 false로 체크

  for (let i = 2; i * i <= num; i += 1) {
      if (prime[i]) {
          for (let j = i * 2; j <= num; j += i) {
              prime[j] = false;
          }
      }
  }

  return prime.filter(Boolean); // true만 필터링하고 싶을 경우 
}

function solution(n) {
  return get_primes(n).length;
}