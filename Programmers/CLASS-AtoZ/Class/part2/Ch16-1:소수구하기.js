/* Ch16-1. 소수 구하기 */

/*
  소수 구하기

  소수는 1 또는 자기 자신만을 약수로 가지는 수를 의미한다.

  소수를 * 구하는 가장 효율적인 방법 * 은 무엇일까
  일반적으로 3가지로 나뉜다

  ** 가장 직관적인 방법

    ㄴ 2부터 N-1까지 루프를 돌며 나눠보기  (시간복잡도 O(n) 소요) 가장 느림.
      예를 들어 10이라면 2부터 9까지 10 % n 을 한다
      다른 방법들에 비해 느린편에 속한다
  
  단순하게 2부터 입력받은 n-1까지 루프를 돌리고
  나머지 연산을 통해 약수인지 확인.
  약수라면 그 즉시 false를 반환하고 루프가 끝날때까지 없었다면 true를 반환

  function is_prime(num) {
    for (let i = 2 ; i < num; i += 1) {
      if (num % i == 0) {
        return false;
      }
    }

    return true;
  }

  ** 효율성 개선하기

    ㄴ 그 어떤 소수도 N의 제곱근보다 큰 수로 나눠지지 않는다는 점을 이용
      예를 들어 17이라면 2부터 4까지의 값만 확인해보면 된다 (시간복잡도 O(sqrt(n)))

  루프 조건만 바꾸어주는것만으로도 성능이 크게 개선되고
  숫자 1개만 소수인지 확인하기 위해서는 이 방법이 제일 효과적이다

  function is_prime_second(num) {
    for (let i = 2; i * i <= num; i += 1) {
      if (num % i == 0) {
        return false;
      }
    }

    return true;
  }


  ** 에라토스테네스의 채

    ㄴ 고대 그리스 수학자 에라토스테네스가 발견한 소수를 찾는 방법 (O(n log log n))
      1부터 n까지의 숫자중 소수가 무엇인지를 판별할때 가장 효과적

  예를들어 2에서 54까지중 찾아본다고 가정해보자

  1. 앞에서부터 숫자 확인 2의배수들을 체크한다.
  2. 그 다음 숫자인 3의 배수들을 체크한다.
  3. 4는 2의 배수이니 체크가 안된 5의 배수를 체크
  4. 이러한 로직으로 7을 체크하면 49가 체크되고 더이상 체크될것이없다
  5. 앞서 말한 알고리즘에서 n의 제곱근보다 큰 수로 나뉘지않으니 8부터는 확인할 필요가없다

  * 체크 안된 것들이 전부 소수가 된다.
*/

// 가장 직관적인 방법
// O(n)
function is_prime_first(num) {
  for (let i = 2 ; i < num; i += 1) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

// 효율성 개선 방법
// O(루프 n)
function is_prime_second(num) {
  for (let i = 2; i * i <= num; i += 1) {
    if (num % i == 0) {
      return false;
    }
  }

  return true;
}

// 에라토스테네스의 채
// O(n log log n)
function get_primes(num) {
  const prime = [false, false, ...Array(num - 1).fill(true)];

  for (let i = 2; i * i <= num; i += 1) {
    if (prime[i]) {
      for (let j = i * 2; j <= num; j += i) {
        prime[j] = false;
      }
    }
  }

  return prime.filter(Boolean);
}