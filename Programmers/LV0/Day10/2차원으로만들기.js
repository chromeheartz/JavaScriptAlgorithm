/* _____________ LV0 2차원으로 만들기 _____________ */

/*
  ** 문제 설명 **

  정수 배열 num_list와 정수 n이 매개변수로 주어집니다. 
  num_list를 다음 설명과 같이 2차원 배열로 바꿔 
  return하도록 solution 함수를 완성해주세요.

  num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 
  길이가 8이고 n이 2이므로 num_list를 2 * 4 배열로 다음과 같이 변경합니다. 
  2차원으로 바꿀 때에는 num_list의 원소들을 앞에서부터 n개씩 나눠 2차원 배열로 변경합니다.

  ** 제한 사항 **

  - num_list의 길이는 n의 배 수개입니다.
  - 0 ≤ num_list의 길이 ≤ 150
  - 2 ≤ n < num_list의 길이

  ** 입출력 예 **

  - 입출력 예 #1
    num_list가 [1, 2, 3, 4, 5, 6, 7, 8] 로 길이가 8이고 n이 2이므로 2 * 4 배열로 변경한 [[1, 2], [3, 4], [5, 6], [7, 8]] 을 return합니다.

  - 입출력 예 #2
    num_list가 [100, 95, 2, 4, 5, 6, 18, 33, 948] 로 길이가 9이고 n이 3이므로 3 * 3 배열로 변경한 [[100, 95, 2], [4, 5, 6], [18, 33, 948]] 을 return합니다.
*/

function solution(num_list, n) {
    let result = [];
    
    for(let i = 0; i < num_list.length / n; i++){
        result = [...result, num_list.slice(i * n, i * n + n)];
    }
    
    return result;
}