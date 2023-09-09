/* _____________ LVB 홀수 vs 짝수 _____________ */

/*
  ** 문제 설명 **

  정수 리스트 num_list가 주어집니다. 가장 첫 번째 원소를 1번 원소라고 할 때, 
  홀수 번째 원소들의 합과 짝수 번째 원소들의 합 중 큰 값을 return 하도록 solution 함수를 완성해주세요. 
  두 값이 같을 경우 그 값을 return합니다.

  ** 제한 사항 **

  - 5 ≤ num_list의 길이 ≤ 50
  - -9 ≤ num_list의 원소 ≤ 9

  ** 입출력 예 **
  
  - 입출력 예 #1
    홀수 번째 원소들의 합은 4 + 6 + 7 = 17, 짝수 번째 원소들의 합은 2 + 1 + 6 = 9 이므로 17을 return합니다.

  - 입출력 예 #2
    홀수 번째 원소들의 합은 -1 + 5 + 3 = 7, 짝수 번째 원소들의 합은 2 + 6 = 8 이므로 8을 return합니다.
*/

function solution(num_list) {
  let oddM = 0, evenM = 0;
  for(let num = 0; num < num_list.length; num++) {
      if(num % 2 === 0) {
          oddM += num_list[num]
      } else {
          evenM += num_list[num]
      }
  }
  return oddM > evenM ? oddM : evenM
}