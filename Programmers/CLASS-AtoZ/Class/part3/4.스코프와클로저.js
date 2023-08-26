/* 4. 스코프와 클로저 */

/*
  *** 스코프 ***

  유효 범위라고도 부르며 변수가 어느 범위까지 참조되는 지를 뜻한다
  어디서든 접근 가능한 '전역 스코프'가 있고
  해당 컨텍스트 내에서만 접근 가능한 '지역 스코프' 로 나뉜다.

  * var를 사용하면 호이스팅 되어 변수 선언이 상단으로 올라가버리기 때문에
  그래서 블록 내부에 새롭게 선언을 하더라도 블록 외부 변수 값도 바뀌게 된다.
  * var는 '함수 수준' 의 스코프이고 const, let 은 '블록 수준' 의 스코프이기 떄문이다.
  
  *** 클로저 ***

  함수가 선언된 환경의 스코프를 기억하여 함수가 스코프 밖에서 실행될 때에도 
  기억한 스코프에 접근할 수 있게 만드는 문법
  예시 코드에서 world(), bibi() 실행시점에 greeting이 살아있는것은
  반환된 함수가 greeting 변수를 계속 참조하고있어 메모리에서 사라지지 않기 때문이다.
  * 더이상 외부에서 접근이 불가능한 영역을 클로저로 접근할 수 있는 것

  * 은닉화 *
  
  클로저를 이용하여 내부 변수와 함수를 숨길 수 있다.
  예시 코드를 보게되면 counter함수를 보면 변수와 내부 함수는 외부에서 접근이 불가능하다.
  따라서 반환된 함수들로만 값을 조작할 수 있게된다.

  *** 클로저를 잘 알아야하는 이유는 유용하게 사용한다기보다
  알기 힘든 '버그를 잘 수정하기 위해서' 다.

  클로저 예시코드를 보게되면 출력 결과는 1, 2, 3, 4, 5가 아닌
  5 5 5 5 5 가 된다. 
  setTimeout의 대기시간이 끝나 '콜백 함수' 가 실행되는 시점에는
  이미 루프가 종료되어 i가 5가 되기 때문이다.

  - 해결방법 1

  IIFE를 이용. 즉시실행함수
  루프마다 클로저를 만듬

  function counting() {
    let i = 0;
    for (i = 0; i < 5; i += 1) {
      (function (number) {
        setTimeout(function () {
          console.log(number);
        }, number * 100);
      })(i);
    }
  }

  counting();

  - 해결방법 2

  let을 이용. 블록 수준 스코프이기 때문에 매 루프마다 클로저가 생성된다.
  
  function counting() {
    let i = 0;
    for (let i = 0; i < 5; i += 1) {
      setTimeout(function () {
        console.log(i);
      }, i * 100);
    }
  }

  counting();

*/

// 스코프
const a = 5; // Global Scope
{
  const b = 3; // Local Scope
  console.log(a, b); // 5, 3
}
console.log(a, b); // Error

// 클로저
function makeGreeting(name) {
  const greeting = "Hello, "; // 지역 스코프라서 함수가 종료되면 메모리에서 사라진다

  return function() {
    console.log(greeting + name);
  }
}

const world = makeGreeting("World");
const bibi = makeGreeting("BIBI-BOY");

// greeting이 실행 시점에 살아있다.
world(); 
bibi();

// 은닉화
function Counter() {
  let privateCounter = 0;
  function changeBy(val) {
    privateCounter += val;
  }
  return {
    increment: function() {
      changeBy(1);
    },
    decrement: function() {
      changeBy(-1);
    },
    value: function() {
      return privateCounter;
    }
  }
}

const counter = Counter();

console.log(counter.value()); // 0
counter.increment();
counter.increment();
console.log(counter.value()); // 2
counter.decrement();
console.log(counter.value()); // 1

// 클로저 예
function counting() {
  let i = 0;
  for (i = 0; i < 5; i += 1) {
    setTimeout(function () {
      console.log(i);
    }, i * 100);
  }
}

counting();