/* _____________ LV1 없는 숫자 더하기 _____________ */

/*
  ** 문제 설명 **

  0부터 9까지의 숫자 중 일부가 들어있는 정수 배열 numbers가 매개변수로 주어집니다. 
  numbers에서 찾을 수 없는 0부터 9까지의 숫자를 모두 찾아 더한 수를 return 하도록 
  solution 함수를 완성해주세요.

  ** 제한 사항 **

  - 1 ≤ numbers의 길이 ≤ 9
    ㄴ 0 ≤ numbers의 모든 원소 ≤ 9
    ㄴ numbers의 모든 원소는 서로 다릅니다.


  ** 입출력 예 **

  - 입출력 예 #1
    5, 9가 numbers에 없으므로, 5 + 9 = 14를 return 해야 합니다.

  - 입출력 예 #2
    1, 2, 3이 numbers에 없으므로, 1 + 2 + 3 = 6을 return 해야 합니다.
*/

const solution = numbers => 45 - numbers.reduce((prev, curr) => prev + curr)