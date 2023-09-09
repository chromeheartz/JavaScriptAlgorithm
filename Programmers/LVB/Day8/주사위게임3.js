/* _____________ LVB 주사위 게임 3 _____________ */

/*
  ** 문제 설명 **

  1부터 6까지 숫자가 적힌 주사위가 네 개 있습니다. 네 주사위를 굴렸을 때 나온 숫자에 따라 다음과 같은 점수를 얻습니다.
  - 네 주사위에서 나온 숫자가 모두 p로 같다면 1111 × p점을 얻습니다.
  - 세 주사위에서 나온 숫자가 p로 같고 나머지 다른 주사위에서 나온 숫자가 q(p ≠ q)라면 (10 × p + q)2 점을 얻습니다.
  - 주사위가 두 개씩 같은 값이 나오고, 나온 숫자를 각각 p, q(p ≠ q)라고 한다면 (p + q) × |p - q|점을 얻습니다.
  - 어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r(q ≠ r)이라면 q × r점을 얻습니다.
  - 네 주사위에 적힌 숫자가 모두 다르다면 나온 숫자 중 가장 작은 숫자 만큼의 점수를 얻습니다.
  네 주사위를 굴렸을 때 나온 숫자가 정수 매개변수 a, b, c, d로 주어질 때, 얻는 점수를 return 하는 solution 함수를 작성해 주세요.

  ** 제한 사항 **

  - a, b, c, d는 1 이상 6 이하의 정수입니다.

  ** 입출력 예 **

  a	b	c	d	result
  2	2	2	2	2222
  4	1	4	4	1681
  6	3	3	6	27
  2	5	2	6	30
  6	4	2	5	2
*/

function solution(a, b, c, d) {
  let answer = 0;
  const nums = [a, b, c, d];

  let multi = 1;

  nums.sort((a, b) => a - b); //오름차순 정렬
  const dice = new Array(6).fill(0);
  for (let i = 0; i < 4; i++) {
    dice[nums[i] - 1]++;
  }

  for (let i = 0; i < 6; i++) {
    if (dice[i] === 4) {
      answer = 1111 * (i + 1);
      break;
    } else if (dice[i] === 3) {
      for (let j = 0; j < 6; j++) {
        if (dice[j] === 1) {
          answer = (10 * (i + 1) + (j + 1)) ** 2;
          break;
        }
      }
    } else if (dice[i] === 2) {
      for (let j = 0; j < 6; j++) {
        if (dice[j] === 2) {
          if (i === j) {
            continue;
          } else {
            answer = (i + 1 + j + 1) * ((i + 1) - (j + 1));
            break;
          }
        } else if (dice[j] === 1) {
          multi *= j + 1;
        }
      }
      if (multi !== 1) {
        answer = multi;
      }
    }
    if (nums[0] !== nums[1] && nums[1] !== nums[2] && nums[2] !== nums[3]) {
      answer = nums[0];
    }
  }

  return answer;
}