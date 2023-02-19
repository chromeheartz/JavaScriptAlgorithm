/* Ch07-1. 해시 테이블 */

/*
  * 해시 테이블 *
  키와 값을 받아 키를 해싱(Hashing)하여 나온 index에 값을 저장하는 선형 자료구조
  삽입은 O(1)이며 키를 알고 있다면 삭제, 탐색도 O(1)로 수행한다.

  사물함으로 비유하면 이해하기 편함.
  각 칸에는 이름과 번호가 있기 때문에 찾기가 쉽다

  해시테이블은 한정된 배열 공간에 key를 index로 변환하여 값들을 넣게 된다.
  그럼 index는 어떻게 구할까?

  - 버켓 : 각 테이블에 해당하는 인덱스
  테이블의 각 요소는 키와 값을 가지고 있어야한다

  * Hash의 어원
  고기와 감자를 잘게 다져 요리한것.
  ㄴ 해시 테이블도 입력받은 키를 잘게 잘라 숫자로 만든다는 점이 비슷하다

  * 해시 함수 *
  입력받은 값을 특정 범위 내 숫자로 변경하는 함수
  해시함수는 특정한 구현방법이 있지는 않아 우리 마음대로 구현해도 된다
  단순하게 구현한다면 입력받은 문자열을 각 문자열의 아스키코드를 더한것으로 구현해도 된다

  * 해시 테이블의 문제점 * 
  해시 함수의 결과가 동일하여 겹치는 경우 이를 '해시 충돌' 이라고 부른다.

  * 해시 충돌을 해결하기 위한 방법 Hash Collision *

  - 선형 탐사법
  충돌이 발생하면 옆으로 한 칸 이동한다.
  단순하지만 특정영역에 데이터가 몰릴 단점이 있으며,
  이동한 버켓에서 충돌이 발생한다면 충돌이 발생하지 않을때까지 이동한다

  - 제곱 탐사법
  충돌이 발생하면 충돌이 발생한 횟수의 제곱만큼 옆으로 이동한다.
  충돌이 발생할수록 범위가 커지기 때문에 데이터가 몰리는것이
  선형 탐삽법보다는 덜하자

  - 이중 해싱
  충돌이 발생하면 다른 해시 함수를 이용한다
  기존 해시함수가아닌 2번째 해시함수를 이용하여 새로운 인덱스를
  만들어 낸다.

  - 분리 연결법
  버킷의 값을 연결 리스트로 사용하여 충돌이 발생하면 리스트에 값을 추가한다.
  충돌이 발생하면 다른 인덱스로 이동하지 않고
  대신 해시테이블의 요소를 연결리스트로 만들어 충돌이 발생한 버켓에 추가한다
  * 최악의 경우 하나의 버켓이 무한히 늘어날 수 있다

  ** 어디에 사용하는가? **
  학생 정보를 어떻게 관리할 것인가?
  ㄴ 연결리스트를 사용하면 학생 정보가 알고 싶을 때 O(n) 선형시간 만큼 시간복잡도가 걸린다
  배열은 인덱스를 모를경우 O(n) 만큼 탐색하는데 시간이 걸리게 된다
  반면 해시테이블을 사용하면 O(1)에 찾을 수 있다
  * 빠르게 값을 찾아야하는 경우 해시 테이블을 사용하는 것이 좋다.

  *** JavaScript에서의 사용법 ***

  javascript에서는 해시테이블 사용이 간단하다
  - 우리가 사용하는 배열은 실제로는 객체 타입이라 해시테이블처럼 사용할 수 있지만
  올바른 사용법은 아니기 때문에 추천하지 않는다
  - 객체를 이용할 수 있다. 제일 간단
  - Map 객체를 사용. set함수로 값을 넣고 get함수로 값을 찾을 수 있다
  기존 객체와는 다르게 키값으로 obj나 arr같은 복잡한 타입도 사용가능
  obj의 경우에는 키에 들어오는 값이 정수가 아닌경우 전부 문자열로 바꾸기 때문에
  다양한 타입을 넣고싶다면 Map을 넣기
  - Set 객체를 사용.
  키와 값이 동일하게 들어가는 방식을 채택. 일종의 집합 연산이라고 볼 수 있다
  따라서 중복된 내용을 전부 제거될때 사용가능
*/

// *** javascript ***

// array
const tableArr = [];
tableArr["key"] = 100;
tableArr["key2"] = "Hello";
console.log(tableArr["key"]); // 100
tableArr["key"] = 349;
console.log(tableArr["key"]); // 349
delete tableArr["key"];
console.log(tableArr["key"]) // undefined

// object
const tableObj = {};
tableObj["key"] = 100;
tableObj["key2"] = "Hello";
console.log(tableObj["key"]); // 100
tableObj["key"] = 349;
console.log(tableObj["key"]); // 349
delete tableObj["key"];
console.log(tableObj["key"]); // undefined

// Map
const tableMap = new Map();
tableMap.set("key", 100);
tableMap.set("key2", "Hello");
console.log(tableMap["key"]); // undefined
console.log(tableMap.get("key")); // 100
const objectMap = { a: 1 };
tableMap.set(objectMap, "A1"); // Map은 Object도 Key로 쓸 수 있다.
console.log(tableMap.get(objectMap)); // A1
tableMap.delete(objectMap);
console.log(tableMap.get(objectMap)); // undefined
console.log(tableMap.keys()); // { 'key', 'key2' }
console.log(tableMap.values()); // { 100, 'Hello' }
tableMap.clear();
console.log(tableMap.values()); // { }

// Set
const tableSet = new Set();
tableSet.add("key"); // Key와 Value가 동일하게 들어간다.
tableSet.add("key2");
console.log(tableSet.has("key")); // true
console.log(tableSet.has("key3")); // false
tableSet.delete("key2"); 
console.log(tableSet.has("key2")); // false
tableSet.add("key3");
console.log(tableSet.size); // 2
tableSet.clear();
console.log(tableSet.size); // 0