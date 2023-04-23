/* _____________ LV0 평행 _____________ */

/*
  ** 문제 설명 **

  점 네 개의 좌표를 담은 이차원 배열  dots가 다음과 같이 매개변수로 주어집니다.
  - [[x1, y1], [x2, y2], [x3, y3], [x4, y4]]
  주어진 네 개의 점을 두 개씩 이었을 때, 
  두 직선이 평행이 되는 경우가 있으면 1을 없으면 0을 
  return 하도록 solution 함수를 완성해보세요.

  ** 제한 사항 **

  - dots의 길이 = 4
  - dots의 원소는 [x, y] 형태이며 x, y는 정수입니다.
  - 0 ≤ x, y ≤ 100
  - 서로 다른 두개 이상의 점이 겹치는 경우는 없습니다.
  - 두 직선이 겹치는 경우(일치하는 경우)에도 1을 return 해주세요.
  - 임의의 두 점을 이은 직선이 x축 또는 y축과 평행한 경우는 주어지지 않습니다.

  ** 입출력 예 **

  - 입출력 예 #1
    점 [1, 4], [3, 8]을 잇고 [9, 2], [11, 6]를 이으면 두 선분은 평행합니다.

  - 입출력 예 #2
    점을 어떻게 연결해도 평행하지 않습니다.
*/

function solution(dots) {
  var answer = 0;

  function calculation(a, b, c, d) {
    let abDiff, cdDiff;

    abDiff = (b[1] - a[1]) / (b[0] - a[0]);
    cdDiff = (d[1] - c[1]) / (d[0] - c[0]);

    if (abDiff === cdDiff) {
      answer += 1;
    }
  }

  calculation(dots[0], dots[1], dots[2], dots[3]);
  calculation(dots[0], dots[2], dots[1], dots[3]);
  calculation(dots[0], dots[3], dots[1], dots[2]);

  return answer > 0 ? 1 : 0;
}