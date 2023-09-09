/* _____________ LVB 배열의 원소 삭제하기 _____________ */

/*
  ** 문제 설명 **

  정수 배열 arr과 delete_list가 있습니다. arr의 원소 중 
  delete_list의 원소를 모두 삭제하고 남은 원소들은 기존의 arr에 있던 순서를 유지한 배열을 return 하는 solution 함수를 작성해 주세요.

  ** 제한 사항 **

  - 1 ≤ arr의 길이 ≤ 100
  - 1 ≤ arr의 원소 ≤ 1,000
  - arr의 원소는 모두 서로 다릅니다.
  - 1 ≤ delete_list의 길이 ≤ 100
  - 1 ≤ delete_list의 원소 ≤ 1,000
  - delete_list의 원소는 모두 서로 다릅니다.

  ** 입출력 예 **
  
  - 입출력 예 #1
    예제 1번의 arr의 원소 중 1000과 94가 delete_list에 있으므로 이 두 원소를 삭제한 [293, 395, 678]을 return 합니다.

  - 입출력 예 #2
    예제 2번의 arr의 원소 중 delete_list에 있는 원소는 없습니다. 따라서 arr 그대로인 [110, 66, 439, 785, 1]을 return 합니다.
*/

const solution = (arr, delete_list) =>  arr.filter((num) => !delete_list.includes(num));