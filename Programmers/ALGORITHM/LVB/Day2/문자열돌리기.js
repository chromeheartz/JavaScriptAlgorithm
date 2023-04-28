/* _____________ LVB 문자열 돌리기 _____________ */

/*
  ** 문제 설명 **

  문자열 str이 주어집니다.
  문자열을 시계방향으로 90도 돌려서 아래 입출력 예와 같이 출력하는 코드를 작성해 보세요.

  ** 제한 사항 **

  - 1 ≤ str의 길이 ≤ 10

  ** 입출력 예 **

  - 입력 #1
    abcde

  - 출력 #1
    a
    b
    c
    d
    e
*/

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let input = [];

rl.on('line', function (line) {
    input = [line];
}).on('close',function(){
    str = input[0];
    for(let i = 0; i < str.length; i++) {
        console.log(str[i])
    }
});