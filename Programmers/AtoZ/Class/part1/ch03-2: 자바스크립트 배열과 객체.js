/* Ch03-2. 자바스크립트 배열과 객체 */

/*
  *** 배열 ***
  연관된 데이터를 연속적인 형태로 저장하는 복합 타입
  배열에 포함된 원소는 순서대로 index(번호)가 붙는다
  (출석부에 비유 가능)

  * 편의성 함수들 * 
  - from함수
  from함수는 첫번째 parameter로 초기화할 배열을 받고 두번째 parameter로 로직 작성가능
  로직의 매개변수 첫번째 인자는 배열의 값 두번째 인자는 배열의 인덱스를 나타낸다

  - join 함수
  배열의 요소를 하나의 문자열로 합쳐야한다면
  특정한 조건으로 합쳐주고싶다면 parameter로 넘겨주면된다

  - reverse 함수
  배열의 요소들을 거꾸로 돌리려면 reverse를 사용하면된다.
  주의할점은 reverse를 사용하면 원본배열에도 영향이 간다. 

  - concat 함수
  두개의 배열을 합쳐주고 싶다면 concat을 사용하면된다

  * 배열요소 추가 삭제 *

  - push 
  하나 이상의 요소들을 추가할때 사용

  - pop
  끝에 있는 요소를 삭제 
  return값은 삭제한 요소를 반환

  - shift, unshift
  둘다 맨앞을 컨트롤 하는것이다
  shift는 맨앞의 요소를 제거하는것이고
  unshift는 맨앞의 요소를 추가하는 것이다

  - slice
  배열의 중간의 값을 잘라서 값을 알고싶다면 slice를 사용
  첫번째 parameter가 시작하는 요소
  두번째 parameter가 끝 요소. 끝요소의 직전까지 자르기 떄문에 주의요망. 
  5라고쓰면 index 4번까지 잘라진다는 뜻

  * 원본배열은 변화하지 않는다

  - splice
  중간에 있는 값을 삭제할 수 있다
  첫번째 parameter가 시작하는 요소
  두번째 parameter는 시작하는 요소부터 몇개를 자를것인지

  * 배열 순회 * 
  for문으로 순회.

  최신 Javascript에서는 for of를 사용가능하다

  - for of
  각 배열의 요소가 나오게 된다

  ***** 배열은 사실 객체와 타입이 동일하다. 
  따라서 객체처럼 사용할 수 있다. typeof로 배열을 찍어보게되면 object가 나온다
  객체처럼 arr['key'] = 'value'로 값을 등록할수있는데
  key가 추가되었음에도 불구하고 length가 바뀌지않는다

  이것은 JavaScript에서 array가 특수한 객체여서 그렇게 되는데
  배열의 길이는 내부적으로 관리되기 때문에 객체처럼 사용하더라도 달라지지 않는다

  *** 객체 ***
  객체는 여러 값을 키-값 형태로 결합시킨 복합 타입
  (사물함에 비유가능. 각칸의 이름을 찾아가면 값을 찾을수있듯이)

  * 객체의 값 추가, 삭제 *

  추가하는 방법
  - 대괄호를 감싼값에 key값을 넣어주고 value를 대입
  - .을 이용하여 추가

  삭제하는 방법
  - delete 키워드를 사용해서 key값을 넣어준다

  * in operator *
  in operator를 이용하여 실제로 key가 있는지 확인할 수 있다

  * 키 값 집합 알아내는 방법 *
  Object.keys(obj)로 배열의 형태로 key를 가져올 수 있다.
  Object.values(obj)로 배열의 형태로 값들만 가져올 수 있다.

  * for in *
  객체를 순회하는 방법으로 for in 이라는 문법이 있다
  이전에 배열에서 for of를 사용했던것처럼 쉽게 객체를 순회할 수 있다
  객체의 키값을 순회함

*/

// ********* 배열 **********

// - new Array라는 키워드로 빈배열 생성
const arr1 = new Array();

// - 대괄호로 쉽게 생성
const arr2 = [];

// - 초기화값 넣기
const arr3 = [1, 2, 3, 4, 5];

// - 빈배열 길이만큼 만들어주기. 배열의 길이만큼만 parameter로
const arr4 = new Array(5);

// fill로 많은 수를 초기화
const arr5 = new Array(10).fill(5);

// from 함수 사용
const arr6 = Array.from(Array(5), function(v, k) {
  return k + 1;
})
console.log(arr6); // [1, 2, 3, 4, 5]

// join 함수 사용
console.log(arr3.join(", ")); // 1, 2, 3

// length 를 직접 수정하면 기존에 있던 값이 삭제 / 빈값으로 자리가 잡힘. 사용하지 않을것을 권장
console.log(arr3.length); // 5
arr3.length = 2;
console.log(arr3); // [1, 2]
arr3.length = 10;
console.log(arr3); // [ 1, 2, <8 empty items> ]


// concat 으로 두 배열 합치기
const arr7 = [1, 2, 3, 4]
const arr8 = [5, 6, 7]
console(arr7.concat(arr8)) // [ 1, 2, 3, 4, 5, 6, 7]

// push
const pushArr = [1, 2, 3]
pushArr.push(4);
pushArr.push(5, 6, 7)
console.log(pushArr) // [ 1, 2, 3, 4, 5, 6, 7]

// pop
const popArr = [1, 2, 5, 10]
popArr.pop();
popArr.pop();
console.log(popArr); // [1, 2]

// shift, unshift
const shiftArr = [1, 2, 3, 4, 5, 6, 7]
shiftArr.shift();
shiftArr.shift();
console.log(shiftArr) // [3, 4, 5, 6, 7]
shiftArr.unshift(10);
console.log(shiftArr) // [10, 3, 4, 5, 6, 7]

// slice
const sliceArr = [1, 5, 10, 20, 30, 40, 50]
console.log(sliceArr.slice(2, 4)) // [10, 20]

// splice
const spliceArr = [10, 20, 30, 40, 50]
spliceArr.splice(2,2)
console.log(spliceArr) // [10, 20, 50]

// - 배열 순회
const loopArr = [10, 20, 30, 40, 50, 60]

// for
for (let i = 0; i < 6; i += 1){
  console.log(loopArr[i]) // [10, 20, 30, 40, 50, 60]
}

// for of
for (const item of loopArr) {
  console.log(item) // [10, 20, 30, 40, 50, 60]
}



// ********* 객체 **********

// - new Object 키워드로 빈객체 생성
const obj1 = new Object()

// - 중괄호로 쉽게 생성
const obj2 = {};

// - 초기화값 넣기 key-value형태로 넣기
const obj3 = { name: 'bibi', company: 'seoul-oasis'}

// 객체추가의 첫번째방법. 대괄호안에 key값 넣어주고 value 대입
obj3['email'] = 'barnesquiat@gmail.com'

// 객체추가의 두번째 방법. .연산자를 이용하여 추가
obj3.phone = '010xxxxxxxx';
console.log(obj3);
/*
  {
    name: 'bibi',
    company: 'seoul-oasis',
    email: 'barnesquiat@gmail.com',
    phone: '010xxxxxxxx'
  }
*/

delete obj3.phone;
console.log(phone)

/*
  {
    name: 'bibi',
    company: 'seoul-oasis',
    email: 'barnesquiat@gmail.com'
  }
*/

// in operator
console.log('email' in obj3); // true
console.log('phone' in obj3); // false

// Obejct.keys & values
console.log(Object.keys(obj3)) // [ 'name', 'company', 'email' ]
console.log(Object.values(obj3)) // [ 'bibi', 'seoul-oasis', 'barnesquiat@gmail.com' ]

// for in 
for (const key in obj3) {
  console.log(key, obj3[key])
}
/*
  name bibi
  company seoul-oasis
  email barnesquiat@gmail.com
*/