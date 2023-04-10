/* _____________ LV0 가위 바위 보 _____________ */

/*
  ** 문제 설명 **

  가위는 2 바위는 0 보는 5로 표현합니다.
  가위 바위 보를 내는 순서대로 나타낸 문자열 rsp가 매개변수로 주어질 때,
  rsp에 저장된 가위 바위 보를 모두 이기는 경우를 순서대로 나타낸 문자열을 
  return하도록 solution 함수를 완성해보세요.

  ** 제한 사항 **

  - 0 < rsp의 길이 ≤ 100
  - rsp와 길이가 같은 문자열을 return 합니다.
  - rsp는 숫자 0, 2, 5로 이루어져 있습니다.

  ** 입출력 예 **

  - 입출력 예 #1
    "2"는 가위이므로 바위를 나타내는 "0"을 return 합니다.

  - 입출력 예 #2
    "205"는 순서대로 가위, 바위, 보이고 이를 모두 이기려면 바위, 보, 가위를 순서대로 내야하므로 “052”를 return합니다.
*/

function solution(rsp) {
  const arr = rsp.split("")
  const result = []
  arr.map(v =>{
    switch(v){
        case "2":
            result.push("0")
            break;
        case "0":
            result.push("5")        
            break;
        case "5":
            result.push("2");
            break;
        default:
          return false
    }
  })
  return result.join("");
}


