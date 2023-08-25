/* 3. 흐름 제어 */

/*

  * 흐름 제어는 크게 2가지로 나뉜다 *

  ** Control Flow **

  Control Flow는 흐름을 제어하는 방법중 하나로
  '조건', '반복' 을 통해 '상태를 제어' 하는것을 의미한다.

  Goto 
  if / Then / Else
  Switch / Case
  For / While

  ** Data Flow **

  함수형 프로그래밍 방식으로 구현이 가능하다.

  Stateless
  Recursion
  Pipe

  * 조건문

  조건이 맞을 때만 실행되는 문장(Statements) 문법

  - if

  if 로 사용이 가능하다. 괄호 안 조건식이 참인 경우 실행되는 문법
  else if, else도 같이 사용가능.
  false 뿐만 아니라 다음 값들도 거짓이 될 수 있으니 주의(falsy)
  false, undefined, null, 0, NaN, ""(empty string)

  - switch
  
  괄호 안 값에 따라 분기되는 문법
  case, default와 함께 쓰인다

  * 반복문

  반복적인 작업을 지시하는 문법.

  - for

  가장 기초적인 반복문으로 초기문, 조건문, 증감문으로 이루어져 있다.
  조건문의 결과가 거짓이 되면 반복이 종료된다.

  - while

  괄호안 조건이 거짓이 될 때까지 반복된다.

  - do-while

  while문과 다르게 먼저 진입 후 로직을 실행한 다음 조건을 검사한다.
*/


// Control Flow
let a = [1, 2, 3, 4, 5]
for (let i = 0; i < 5; i += 1) {
  if (a[i] % 2 === 0) {
    console.log(a[i]);
  }
}

// Data Flow
[1, 2, 3, 4, 5]
  .filter((item) => item % 2 === 0)
  .forEach((item) => console.log(item));

// if

const c = 10;
const d = 20;

if (c < d) {
  // 참이기 때문에 실행
} else {
  // 무시
}

// switch

const grade = "B";
switch(grade) {
  case "A":
    console.log("A Grade");
    break; // break 키워드를 사용하지 않으면 다음으로 넘어간다.
  case "B":
    console.log("B Grade");
    break;
  case "C":
    console.log("C Grade");
    break;
  case "D":
    console.log("D Grade");
    break;
  default:
    console.log("Unknown");
}

// for(초기문;조건문;증감문)
for (let i = 0; i < 10; i += 1) {
  console.log(i);
}


// while
let x = 0;
while (x < 10) {
  x += 1;
  console.log(x);
}

// do-while
let y = 0;
do {
  console.log("Fire");
} while (y > 10)