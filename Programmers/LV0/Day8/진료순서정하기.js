/* _____________ LV0 진료순서 정하기 _____________ */

/*
  ** 문제 설명 **

  외과의사 머쓱이는 응급실에 온 환자의 응급도를 기준으로 진료 순서를 정하려고 합니다. 
  정수 배열 emergency가 매개변수로 주어질 때 
  응급도가 높은 순서대로 진료 순서를 정한 배열을 
  return하도록 solution 함수를 완성해주세요.

  ** 제한 사항 **

  중복된 원소는 없습니다.
  1 ≤ emergency의 길이 ≤ 10
  1 ≤ emergency의 원소 ≤ 100

  ** 입출력 예 **

  - 입출력 예 #1
    emergency가 [3, 76, 24]이므로 응급도의 크기 순서대로 번호를 매긴 [3, 1, 2]를 return합니다.
  - 입출력 예 #2
    emergency가 [1, 2, 3, 4, 5, 6, 7]이므로 응급도의 크기 순서대로 번호를 매긴 [7, 6, 5, 4, 3, 2, 1]를 return합니다.
*/

function solution(emergency) {
  let sorted = emergency.slice().sort((a,b)=>b-a);
  return emergency.map(v=>sorted.indexOf(v)+1);
}