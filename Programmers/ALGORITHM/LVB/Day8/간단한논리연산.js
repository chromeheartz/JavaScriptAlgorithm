/* _____________ LVB 간단한 논리  연산 _____________ */

/*
  ** 문제 설명 **

  boolean 변수 x1, x2, x3, x4가 매개변수로 주어질 때, 
  다음의 식의 true/false를 return 하는 solution 함수를 작성해 주세요.
  (x1 ∨ x2) ∧ (x3 ∨ x4)

  ** 입출력 예 **

  - 입출력 예 #1
    예제 1번의 x1, x2, x3, x4로 식을 계산하면 다음과 같습니다.
    (x1 ∨ x2) ∧ (x3 ∨ x4) ≡ (F ∨ T) ∧ (T ∨ T) ≡ T ∧ T ≡ T
    따라서 true를 return 합니다.

  - 입출력 예 #2
    예제 2번의 x1, x2, x3, x4로 식을 계산하면 다음과 같습니다.
    (x1 ∨ x2) ∧ (x3 ∨ x4) ≡ (T ∨ F) ∧ (F ∨ F) ≡ T ∧ F ≡ F
    따라서 false를 return 합니다.
*/

function solution(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4)
}