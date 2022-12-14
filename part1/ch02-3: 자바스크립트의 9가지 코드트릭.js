/* Ch02-3. 자바스크립트의 9가지 코드 트릭 */

/* ******************
  1. 구조 분해 할당을 이용한 변수 swap
  ES6의 구조 분해 할당 문법을 사용하여 두 변수를 swap할 수 있다.
****************** */

let a = 5, b = 10;
[a, b] = [b, a];
console.log(a,b) // 10 5

/* ******************
 2. 배열 생성으로 루프 제거하기
 보통 단순히 범위 루프를 돌고 싶다면 예제와 같이 코드를 작성하지만,
 '범위루프'를 '함수형 프로그래밍 방식'으로 사용하고 싶다면 배열을 생성해서
 사용할 수 있다. 
****************** */

// 예제
let sum = 0;
for (let i = 5; i < 10; i += 1) {
  sum += i;
}

// 함수형프로그래밍방식
const sumFunc = Array
  .from(new Array(5), (_, k) => k +5)
  .reduce((acc, cur) => acc + cur, 0);

/* ******************
  3. 배열 내 같은 요소 제거하기
  'Set'을 이용할 수 있다.
****************** */

const names = ['Lee', 'Kim', 'Park', 'Lee', 'Kim'];
const uniqueNamesWithArrayFrom = Array.from(new Set(names));
const uniqueNamesWithSpread = [...new Set(names)];

/* ******************
  4. Spread 연산자를 이용한 객체 병합
  두 객체를 별도 변수에 합쳐줄 수 있다.
********************* */ 

const person = {
  name: 'Kim Tae-Yoon',
  familyName: 'Kim',
  givenName: 'Tae-Yoon'
};

const company = {
  name: 'chrz. Inc.',
  address: 'Seoul'
};

const kimtaeyoon = { ...person, ...company };
console.log(kimtaeyoon);
// {name: 'chrz. Inc.', familyName: 'Kim', givenName: 'Tae-Yoon', address: 'Seoul'}
// 같은 키는 마지막에 대입된 값으로 정해진다


/* ******************
  5. &&와 || 활용
  &&와 ||는 조건문 외에서도 활용될 수 있다
********************* */ 

// ||
// 기본값을 넣어주고 싶을 때 사용할 수 있다
// participantName이 0, undefined, 빈 문자열, null일 경우 'Guest'로 할당
const name = participantName || 'Guest';

// &&
// flag가 true일 경우에만 실행
flag && func();

// 객체 병합에도 이용 가능
const makeCompany = (showAddress) => {
  return {
    name: 'Bibi. Inc.',
    ...showAddress && { address: 'Seoul' }
  }
}
console.log(makeCompany(false)) // { name: 'Bibi. Inc.' }
console.log(makeCompany(true)) // { name: 'Bibi. Inc.', address: 'Seoul' }

/* ******************
  6. 구조 분해 할당 사용하기
  객체에서 필요한 것만 꺼내 쓰는 것이 좋다.
****************** */

const chrz = {
  name: 'bibi',
  familyName: 'barnes',
  givenName: 'bucky',
  crew: 'Chrz. Inc.',
  address: 'Seoul'
}

const { familyName, crew } = chrz;

// 객체 생성시 키 생략하기
// 객체를 생성할 때 프로퍼티 키를 변수 이름으로 생략할 수 있다.
const propsOne = 'bibiboy'
const propsTwo = 'hello world'
const props = {
  propsOne,
  propsTwo
}
console.log(props) // {propsOne: 'bibiboy', propsTwo: 'hello world'}


/* ******************
  7. 비구조화 할당 사용하기
  함수에 객체를 넘길 경우 필요한 것만 꺼내 쓸 수 있다.
****************** */

const makeCrew = ({ name, address, serviceName }) => {
  return {
    name,
    address,
    serviceName
  }
}
const chrome = makeCrew({ name: 'chrome heartz', address: 'Korea', serviceName: 'breaking '})

/* ******************
  8. 동적 속성 이름
  ES6에 추가된 기능으로 객체의 키를 동적으로 생성 할 수 있다
****************** */

const nameKey = 'name';
const emailKey = 'email';
const newPerson = {
  [nameKey]: 'bucky',
  [emailKey]: 'barnesquiat'
}
console.log(newPerson); // {name: 'bucky', email: 'barnesquiat'}


/* ******************
  9. !! 연산자를 사용하여 Boolean 값으로 바꾸기
  !! 연산자를 이용하여 '0, null, 빈 문자열, undefined, NaN'을 'false'로  그 외에는 'true'로 변경할 수 있다.
****************** */

function check(variable) {
  if (!!variable) {
    console.log(variable);
  } else {
    console.log('잘못된 값');
  }
}
check(null); // 잘못된 값
check(3.14); // 3.14
check(undefined); // 잘못된 값
check(0); // 잘못된 값
check('Good'); // Good
check(''); // 잘못된 값
check(NaN); // 잘못된 값
check(5); // 5
